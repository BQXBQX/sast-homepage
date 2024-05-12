export default {
  "*/**/*.{js,jsx,ts,tsx,json}": () => [
    "prettier . --write",
    "eslint . --fix",
    "eslint .",
    "pnpm run lint",
    "npx next build",
    "git add .",
  ],
  "*/**/*.{css,scss,md}": () => ["prettier . --write"],
};
