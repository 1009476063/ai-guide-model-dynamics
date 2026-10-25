import { NavItem } from "vuepress/config";

/**
 * Top navigation.
 *
 * Deliberately two entries. Upstream's navbar pointed at ten sections (AI 项目、
 * Deepseek、编程学习、面试题库…) that this slice does not contain, so every one of
 * them would have been a 404 the moment we pruned to 模型动态 only.
 */
export default [
  { text: "模型动态", link: "/models/" },
  { text: "模型星图", link: process.env.SITE_URL_MODEL_WORLD || "https://models.1661688.xyz/" },
] as NavItem[];
