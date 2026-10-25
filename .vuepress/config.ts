import { defineConfig } from "vuepress/config";
import footer from "./footer";
import navbar from "./navbar";
import sidebar from "./sidebar";

/**
 * 模型动态指南
 *
 * One-shot migration of liyupi/ai-guide's "Vibe Coding 零基础教程 / 15 模型动态"
 * section. From here the guide is maintained independently: nothing is pulled
 * from upstream again and nothing is pushed back (grill Q14=B). Content stays
 * CC BY-NC-SA 4.0 with 程序员鱼皮 credited - see LICENSE and the footer.
 *
 * GUIDE_BASE_URL is the only place the public host is written. The upstream
 * config hardcoded https://ai.codefather.cn in five spots (canonical, sitemap,
 * feed, seo url, …), which is exactly how a fork keeps advertising someone
 * else's site; and the images were hot-linked from pic.yupi.icu, i.e. the
 * upstream owner's bucket. Both are gone: images now live in our own R2 and
 * this domain drives every generated URL.
 */
const author = "程序员鱼皮";
const domain = (process.env.GUIDE_BASE_URL || "https://ai-guide.pages.dev").replace(/\/+$/, "");

export default defineConfig({
  title: "AI 模型实测指南",
  description:
    "大模型编程与多模态能力的实测记录：同一套提示词、同一批项目，横向对比各模型的完成度、耗时与费用。",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "AI 模型,大模型评测,编程能力实测,AI 编程,模型对比" }],
    /*
     * Upstream injected Baidu analytics (hm.baidu.com) here and the build also
     * added Google Analytics (GTM-WVS9HM6W) plus vuepress-plugin-baidu-autopush.
     * All three tracked the upstream owner's properties and are removed with the
     * fork; a reader on this site should not be sending traffic data to another
     * site's analytics account.
     */
  ],

  /*
   * Permalinks are declared per article in .vuepress/articles.json and written by
   * scripts/apply-articles.mjs, so URLs are ASCII (/models/claude-fable-5/)
   * instead of the percent-encoded gibberish this site's Chinese filenames used
   * to produce. That is what lets 模型星图 deep-link to a specific article.
   * This fallback only matters for a page that somehow has no frontmatter.
   */
  permalink: "/:slug",

  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts", ".vuepress/articles.json"],

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },

  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description || $page.description,
        /*
         * Every option here must be a function: the plugin calls each one
         * (options.tags(...), options.image(...)), so a plain array or `false`
         * crashes the build with "options.tags is not a function". image is left
         * unset on purpose - the plugin's default returns undefined for a page
         * with no frontmatter.image, and empty content is skipped, which is what
         * we want since these articles carry no per-page hero image.
         */
        author: () => author,
        tags: () => ["AI 模型", "大模型评测", "AI 编程"],
        type: () => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    ["sitemap", { hostname: domain }],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    ["vuepress-plugin-code-copy", { successText: "代码已复制" }],
    // https://github.com/webmasterish/vuepress-plugin-feed
    ["feed", { canonical_base: domain, count: 200, posts_directories: [] }],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
  ],

  themeConfig: {
    logo: "/logo.png",
    /** single source of the public host, consumed by seo/sitemap/feed above */
    domain,
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",
    /*
     * Upstream pointed `repo` + "完善页面" edit links at liyupi/ai-guide. That
     * invites readers to send pull requests to a repository this guide no longer
     * syncs with, so both are off.
     */
    editLinks: false,
    footer,
  },
});
