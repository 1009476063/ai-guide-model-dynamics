import models from "./sidebars/models";

/**
 * Sidebar.
 *
 * Upstream generated this file by walking the tree and sorting by file birthtime,
 * which meant a fresh clone ordered the articles by the accident of checkout
 * order. Order now comes from .vuepress/articles.json (see
 * scripts/apply-articles.mjs), so the published guide reads newest-first the same
 * way on every machine and in CI.
 */
/*
 * Keyed "/" on purpose: every article's regularPath starts with the Chinese
 * section directory, so a "/models/"-style key never matches and VuePress
 * quietly falls back to "auto" (the page's own headings) instead of the list of
 * sibling articles. The old `{ ...models, "/": "auto" }` here re-collapsed that
 * key back onto auto, which is why the guide rendered with no article nav at
 * all; scripts/qa/sidebar-probe.mjs now catches that regression.
 */
export default models;
