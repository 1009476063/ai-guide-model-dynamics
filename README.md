---
# VuePress reads frontmatter only at the very top of the file. Without this, the
# repo README becomes a page whose permalink is derived from the directory name
# (/ai-guide-fork/) and the deployed site has no index.html at all - python's
# http.server then answers 200 with a directory listing, which is exactly the
# false green guide-check.mjs now rejects.
home: false
sidebar: false
permalink: /
---

# AI 模型实测指南（模型动态）

大模型编程与多模态能力的实测记录：同一套提示词、同一批项目，横向对比各模型的完成度、耗时与费用。

线上地址：<https://docs.models.1661688.xyz>

## 这个仓库是什么

「模型动态」栏目从 [liyupi/ai-guide](https://github.com/liyupi/ai-guide)（原站点
`ai.codefather.cn`）的一次性迁移副本。此后独立维护：不与上游双向同步，也不再从上游拉取。

迁移只做了一件事——把 `Vibe Coding 零基础教程/15 模型动态` 这 20 篇实测文连同站点壳搬过来。
其余栏目（AI 工具目录、MCP、提示词、教程、资讯等）不在此范围内。

## 许可与署名

- **内容**（全部 Markdown 及其配图）：[CC BY-NC-SA 4.0](LICENSE)，著作权归 **程序员鱼皮**，
  禁止商业使用，衍生作品需采用相同协议。本仓库沿用该协议。完整作者署名按许可要求
  保留在本 README 与 LICENSE 中；站点页脚只展示许可名称。
- **站点代码**（`.vuepress` 主题、组件、构建脚本、根 `package.json`）：
  [MIT](LICENSE-CODE)。

## 迁移改动了什么

| 项 | 原状 | 现状 |
|---|---|---|
| 配图 | 热链 `pic.yupi.icu`（上游腾讯云 COS），743 张 | 自有 R2 桶 `ai-guide-pic`，键名 `guide/<slug>-<hash>`，`immutable` 缓存 |
| 站点身份 | `canonical` / sitemap / feed 全部写死 `ai.codefather.cn` | 由 `GUIDE_BASE_URL` 单一变量决定（`.vuepress/config.ts`） |
| 统计 | Google Analytics `GTM-WVS9HM6W` + 百度统计 + 百度自动推送 | 全部移除（那些账号属于上游） |
| 页脚 | 上游关联站链接 + ICP 备案号 | 内容许可与作者署名 |
| 导航 | 指向上游十个栏目（迁移后全是 404） | 模型动态 + 模型星图两项 |
| 「完善页面」 | 链向 `liyupi/ai-guide` 编辑页 | 关闭（本仓库不再与上游同步） |
| URL | `/:slug` + 中文文件名 = 百分号乱码 | `.vuepress/articles.json` 声明 ASCII permalink |
| 侧边栏 | 按文件 birthtime 生成（新 clone 顺序不可复现） | `articles.json` 声明顺序 |
| 构建 | Node 16 | Node 24 + `--openssl-legacy-provider`（见下） |

**未改动**：文章正文一字未改。个别正文里提到的 `ai.codefather.cn/vibe` 等链接属于作者原文，
按许可保留。

## 内容管线

```bash
npm install
bash scripts/build.sh       # 或直接：NODE_OPTIONS=--openssl-legacy-provider npm run docs:build
```

一次性迁移脚本留在 `scripts/` 下，作为出处审计记录：

| 脚本 | 作用 |
|---|---|
| `migrate-images.mjs` | 收集配图 URL、下载、生成对象键（幂等、可断点续跑） |
| `upload-images-r2.mjs` | 分块上传到 R2，并以公开 URL 实测确认可读 |
| `rewrite-image-urls.mjs` | 把 md 里的上游 URL 换成自有 URL，残留即失败 |
| `verify-images.mjs` | 从产物里读出全部图片 URL，逐个确认 200 且是 image |
| `apply-articles.mjs` | 由 `articles.json` 生成 permalink、侧边栏、`guide-model-map.json` |
| `check-manifest.mjs` | 上传/改写前的一致性闸门 |

## 两个必须知道的坑

**Node 24 构建**：VuePress 1.9 走 webpack 4，其哈希算法是 MD4，OpenSSL 3（Node 17+）
已移除该算法。不加 `NODE_OPTIONS=--openssl-legacy-provider` 会直接以
`error:0308010C:digital envelope routines::unsupported` 失败。实测：不加 exit 1，
加上产出 23 页。

**侧边栏匹配文件路径而非 permalink**：`resolveSidebarItems` 用页面的 `regularPath`
（即中文目录路径）去匹配 sidebar 的 key。按 `/models/` 建 key 永远匹配不上，VuePress
会静默回落到 `"auto"`，渲染当前页的标题而非兄弟文章列表——页面看着正常，其实没有文章
导航。`scripts/apply-articles.mjs` 因此以磁盘路径声明 children；回归断言在
大模型世界仓库的 `scripts/qa/guide-check.mjs`（校验同站文章互链数 ≥ 15）。

## 与模型星图的关系

`guide-model-map.json`（模型 slug → 文章 URL）由 `apply-articles.mjs` 生成，
供 [大模型世界](https://models.1661688.xyz/) 详情页的「查看评测文章」按钮解析：
有对应文章则直达该篇，没有则落回本指南的合集页。映射表里每个模型都按快照
`data/models.json` 核对过，不是从文件名猜的。
