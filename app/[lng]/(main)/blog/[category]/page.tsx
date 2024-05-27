import { getAllCategories } from "@/lib/blog";
import React from "react";

export async function generateStaticParams() {
  const dirs = await getAllCategories();

  return dirs.map((dir) => ({
    category: dir,
  }));
}

export default function Category() {
  return <>category</>;
}
