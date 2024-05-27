import fs from "node:fs/promises";
import { join } from "node:path";
import { compile } from "@rspress/mdx-rs";
import { Post } from "@/types/blog";

const DIR_NAME = "blog";

const postsDirectory = join(process.cwd(), `${DIR_NAME}/`);

/**
 *
 * @returns 一级文件夹的名字
 */
export const getAllCategories = async () => {
  const dirs = await fs.readdir(DIR_NAME);
  return dirs;
};

/**
 *
 * @returns mdx?文件名称 和 对应的文件类型（一个map）
 */

export async function getAllPostSlugs() {
  const categories = await getAllCategories();
  const dirContent = await Promise.all(
    categories.map(async (category) => {
      const files = await fs.readdir(`${DIR_NAME}/${category}`);
      return files.map((file) => `${category}/${file}`);
    }),
  );
  //用flat方法将数组展平
  const extMap = generateExtMap(dirContent.flat());

  return {
    dirContent: dirContent.flat().map((value) => value.replace(/.mdx?$/, "")),
    extMap,
  };
}

/**
 *
 * @param dirList
 * @returns 返回一个map
 */
const generateExtMap = (dirList: string[]) => {
  // TODO: 这边可能之后要做一个 cache 的性能优化,暂时还没有特别好的想法(抄max的😊)
  const extMap = new Map<string, string>();
  for (const file of dirList) {
    const ext = file.split(".") as string[];
    extMap.set(ext[0], ext[1]);
  }
  return extMap;
};

/**
 *
 * @param category
 * @returns 返回指定文件夹的内容数组
 */
export async function getPostSlugsByCategory(category: string) {
  const files = await fs.readdir(`${DIR_NAME}/${category}`);
  const dirContent = files.map((file) => `${category}/${file}`);
  const extMap = generateExtMap(dirContent);

  return {
    dirContent: dirContent.map((value) => value.replace(/.mdx?$/, "")),
    extMap,
  };
}
/**
 *
 * @param filename
 * @returns Post
 */
export async function getPostBySlug(filename: string) {
  const fullPath = join(postsDirectory, `${filename}`);
  //   console.log(fullPath);

  const fileContents = await fs.readFile(fullPath, "utf8");

  const result = await compile({
    value: fileContents,
    filepath: fullPath,
    development: process.env.NODE_ENV === "development",
    root: "",
  });

  const frontMatterInfo = JSON.parse(result.frontmatter);

  return {
    links: result.links,
    html: result.html,
    ...frontMatterInfo,
    category: frontMatterInfo.category ?? filename.split("/")[0],
  } as Post;
}

/**
 *
 * @returns
 */
export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getAllPostSlugs();

  const posts = await Promise.all(
    slugs.dirContent.map(async (slug) => {
      const posts = await getPostBySlug(`${slug}.${slugs.extMap.get(slug)}`);
      return posts;
    }),
  );

  const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  //按时间排序
  return sortedPosts;
}

/**
 * 获取指定分类的文章
 * @param category 分类
 * @returns
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const slugs = await getPostSlugsByCategory(category);
  const posts = await Promise.all(
    slugs.dirContent.map(
      async (slug) => await getPostBySlug(`${slug}.${slugs.extMap.get(slug)}`),
    ),
  );
  // sort posts by date in descending order
  const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortedPosts;
}
