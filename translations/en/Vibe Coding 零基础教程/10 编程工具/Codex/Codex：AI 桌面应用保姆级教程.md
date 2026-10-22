# Codex: Beginner-Friendly AI Desktop App Tutorial

> From installation to advanced usage, this guide walks you through using the Codex desktop APP for AI programming and office automation



Hello, I’m programmer Yupi.

When it comes to AI programming tools, the trend really keeps rotating. At first everyone was hyping Cursor, then Claude Code exploded, and now it’s Codex’s turn.

The Codex desktop APP can not only help you write code, but also directly operate files on your computer, your browser, and even desktop applications. If you use it well, it can practically replace a whole team!

![](https://pic.yupi.icu/1/1779335100294-27db44af-aaf3-4e11-9b15-d0b65c447653.png)

In this article, I’ll take you all the way from installing Codex to project practice, covering basic functions and core features through more than 10 practical examples, so you can truly master Codex.

Whether you want to use it for programming, office productivity, or creative experiments, you’ll be able to get started directly after reading this.

This article is packed with practical content, so I recommend bookmarking it and reading it in a quiet place~

⭐️ Video version of this article: [https://www.bilibili.com/video/BV1eNGR6rETx](https://www.bilibili.com/video/BV1eNGR6rETx)

![](https://pic.yupi.icu/1/01_%25E6%259C%25AC%25E6%2596%2587%25E8%25AE%25B2%25E8%A7%A3%25E8%B7%AF%25E7%25BA%25BF%25E5%2592%258C%25E6%A8%A1%25E5%259D%2597%25E5%A4%A7%25E7%25BA%25B2%25E5%259B%25BE_compressed_v2.png)



## Installation and Getting Started

To use the Codex APP, you only need a ChatGPT account. You can try it for free, but if conditions allow, it’s best to subscribe to ChatGPT Plus ($20/month, roughly 150 RMB). The quota is more generous and enough for daily use.

Once you have an account, just go to the official website and install the Codex APP:

> [https://chatgpt.com/zh-Hans-CN/codex/get-started/](https://chatgpt.com/zh-Hans-CN/codex/get-started/)

![](https://pic.yupi.icu/1/1779336698802-47791125-80cf-46b7-a0ca-c2bc4bb00af5.png)

At the moment it supports macOS and Windows. Linux users can use the Codex CLI command-line version instead.

After downloading and installing, log in with your ChatGPT account. The interface looks like this:

![](https://pic.yupi.icu/1/1779152920233-5a0c20fa-63f1-469a-b1e6-267b825a7bc9.png)

On the left are entries for different panels, including conversation management, plugins, automations, and more. In the center is the chat box, where all of your interactions with AI happen.

It feels quite clean—similar to normal AI chat tools, and much less complicated than a traditional IDE. The barrier to entry is basically zero.

So let’s start using it directly.



## Basic Usage

### Just Start Chatting

After installation, using it is just like any other AI tool: type into the chat box and send to start talking.

It’s suitable for handling simple everyday tasks such as research, summarization, or planning.

For example, I asked it:

```plain
今天有哪些值得关注的 AI 编程热点？
```

![](https://pic.yupi.icu/1/1779336915390-b2e65963-dfb7-491b-b8c2-41bd21c5713c.png)

Codex automatically searches the web for the latest information and summarizes it, so you no longer have to worry about missing the latest developments.

![](https://pic.yupi.icu/1/1779153373327-27da7ef6-33bc-4458-a724-82983e7598af.png)

But that’s just the appetizer. Codex’s real power is that it can operate your local files and computer, so let’s try that next.



### File Operation Practice — Analyze Disk Space

Click the project entry on the left and choose a local folder. You can think of this as defining the AI’s workspace—within that range, AI can read and operate files.

![](https://pic.yupi.icu/1/1779336958427-e777e453-1322-422b-8ba2-410a46f98d88.png)

For example, I chose my Downloads folder, which contains a bunch of giant files I don’t even remember saving.

At the bottom of the chat box, you’ll see permission mode options. There are three choices:

+ Default permissions: AI can read and edit workspace files, but asks for extra permission when needed  
+ Auto review: AI reviews and approves operations by itself  
+ Full access: AI can do whatever it wants without confirmation popups

For beginners, I recommend choosing **Auto review**. It saves time and reduces hassle.

![](https://pic.yupi.icu/1/1779155081273-d9dcf99b-2320-4324-b5ee-e92c60ef8089.png)

After choosing the permission mode, enter a prompt like this:

```plain
帮我分析这个文件夹的空间占用情况
找出所有超过 500MB 的大文件，逐个分析
最后按大小排序列出来，并给出清理建议
```

Then you can watch AI start working. It automatically runs terminal commands to scan the files and analyze each file’s name and size.

![](https://pic.yupi.icu/1/1779154335788-c16d9c06-762e-4df0-a381-ba7a3b5f2ba2.png)

In the end, it gives you a clean report showing which large files take up how much space, plus cleanup suggestions.

![](https://pic.yupi.icu/1/1779154370922-133458f6-ccc7-4636-8c83-6e16ee65beaa.png)

I’m all about being obedient, so I had AI delete the useless preview files for me:

```plain
删除预览文件
```

It successfully helped me free up 6.8 GB. Not bad, right~

![](https://pic.yupi.icu/1/1779155042790-7ff63ce3-6c1a-4233-8d0d-d441c35c1b94.png)

But what if I ask AI to delete a file outside the workspace? What happens then?

Let’s try it. Start a new conversation in the current workspace and tell AI:

```plain
帮我删除「鱼皮新书出版」目录下的所有文件
```

You can drag that directory directly into the chat box and execute the task:

![](https://pic.yupi.icu/1/1779155842265-b3d48a0e-a1e8-4046-8e7f-b7fc1daf9035.png)

If your permission mode is set to **Default**, AI will show a confirmation popup before deleting anything, so it doesn’t mess up your computer accidentally.

![](https://pic.yupi.icu/1/1779337159740-50aeb939-b0c5-4b76-bf6b-53b6414a42c2.png)

But because I chose **Auto review**, AI reviewed the action and approved it itself, saving me the manual click.

![](https://pic.yupi.icu/1/1779155710161-9e06ac9e-a5ab-4f77-a6a6-2999edd8d01d.png)

With that, you can basically treat Codex as your personal file-management assistant. Analyzing space, cleaning junk, batch-renaming files—things that used to require a lot of manual effort can now be done with one sentence.



### Check Usage

After finishing the first task, everyone’s first concern is probably: how many tokens did that use?

Let’s take a look.

Click **Settings** in the lower-left corner, then click **Remaining Quota**, and you’ll see how much quota you have left in the next 5 hours, how much of your weekly allowance remains, and when it refreshes.

Codex quotas are limited over 5-hour and 1-week windows. For Plus users, the quota is fairly generous and completely enough for daily use.

![](https://pic.yupi.icu/1/1779156041540-ef8bd8a6-6845-4cfc-9f75-12a7016acca1.png)

You can also type `/状态` in the chat box. Inputs starting with `/` are called **slash commands**, which are Codex’s built-in quick operations:

![](https://pic.yupi.icu/1/1779337298452-0038dc21-660d-44d1-b703-751c6b45c5b0.png)

After entering it, Codex directly displays your remaining context and usage information in the conversation.

![](https://pic.yupi.icu/1/1779156287183-1ac8ff57-5bd1-4bd9-b9f7-6f409a494b9a.png)

At this point, you’ve already experienced Codex’s most basic abilities: chatting + operating local files. Congratulations—you’re already ahead of 60% of people!

Next, let’s raise the difficulty and use Codex to build a complete website. Along the way, you’ll encounter a lot of Codex’s core features, including planning mode, AI image generation, browser preview, and annotation-based edits.



## AI Agent Programming Practice

Before we start, go into Settings and switch the work mode from “for daily work” to “for programming,” so that AI’s responses become more professional and better suited to development scenarios.

![](https://pic.yupi.icu/1/1779156674435-205820a6-e9ec-4b65-b4cc-17850363f1b1.png)



### Project Introduction

I’m going to use Codex to create a personalized **digital business card** for myself.

I’ll give AI my information and let it generate a polished website.

It can even use AI image-generation to create a personalized illustrated avatar, so I don’t need to hunt for assets myself.

After it’s done, I can send the link to other people and they can view my information directly.



### Step 1: Planning Mode — Discuss Before Building

Create a new project folder (for example `namecard`) and open it in Codex.

Choose the latest GPT-5.5 model, set speed to **standard**, and set intelligence / reasoning level to **high**.

I directly granted **full access** for permissions, since most of the time I’m just blindly clicking “Allow” anyway.

Most importantly, click the `+` icon in the lower-left corner of the chat box and turn on **planning mode**. In planning mode, AI does not start writing code right away. It first helps you plan the solution, asks clarifying questions, and only begins building after the plan is confirmed.

![](https://pic.yupi.icu/1/1779337693857-b6262b5e-24b4-433b-a561-a74109ba1538.png)

Enter the following prompt and launch it:

```plain
帮我生成个人电子名片网站，以下是我的信息：

- 姓名：程序员鱼皮
- 职业：程序员 / AI 编程博主
- 简介：前腾讯全栈开发，现自主创业，带团队开发了编程导航、面试鸭、鱼皮 AI 导航等产品
- 联系方式：GitHub: liyupi，网站: codefather.cn

要求：
1. 帮我生成一张卡通风格的程序员头像插画
2. 提供多种风格主题可切换
3. 响应式布局，手机也能正常显示
4. 界面要有设计感，参考苹果官网的简洁风格
```

AI first thinks by itself, then may ask a few follow-up questions. You can answer them through the popup question panel.

![](https://pic.yupi.icu/1/1779337728296-e6664038-38a6-4080-89e9-41ca32f0142f.png)

Finally, it generates an implementation plan document, including the summary, core requirements, testing plan, and more. The more complex the website you’re building, the more carefully you should read this plan.

![](https://pic.yupi.icu/1/1779337765733-ee4408ce-1556-41b4-954c-50a788f5faef.png)



### Step 2: Watch the Agent Work Autonomously

If there are no issues, confirm the plan and AI starts working on its own.

First, it uses the built-in Image Gen skill to generate the cartoon avatar file:

![](https://pic.yupi.icu/1/1779337789685-d80c622e-968a-40f4-9962-a3d4d36f0058.png)

Then it writes the code, generating multiple files in one go:

![](https://pic.yupi.icu/1/1779337811738-bb233ce2-2dc1-4e2b-87ab-81d31857d205.png)

After writing the code, it also checks it and even opens the browser by itself for testing and verification, including some fault-tolerance handling:

![](https://pic.yupi.icu/1/1779337871145-c3e0b49c-e464-42df-8036-f5e52e659ad8.png)

After just over 7 minutes, AI completed the whole task, with basically no manual operation required from you~

![](https://pic.yupi.icu/1/1779337905619-8707b7d7-a78a-4a4e-b14e-8595abe0e725.png)

You can view all generated files, and click any one to inspect the code inside:

![](https://pic.yupi.icu/1/1779337927155-93a7587e-de6c-438b-91ad-984c6a05ced1.png)

You can also click **Review** to open the side review panel and inspect all files changed during this run:

![](https://pic.yupi.icu/1/1779337995232-cc9f8e59-5162-45d2-828b-e621a654e2ca.png)

Under the hood, Codex uses Git to manage all file changes. You can see exactly what was added and removed in each file, and flexibly keep or discard edits. I’ll explain those advanced code management capabilities later in this article.

![](https://pic.yupi.icu/1/02_Git%25E7%2589%2588%25E6%259C%25AC%25E7%25AE%25A1%25E7%2590%2586%25E9%259D%25A2%25E6%259D%25BF_compressed_v3.png)



### Step 3: Check the Result + Iterate

What we built is a pure frontend static site, so just locate the generated `index.html`, right-click it, and open it in the browser.

![](https://pic.yupi.icu/1/1779338410921-cd7f09aa-34f6-458b-9ba3-762d48f985fb.png)

I think the desktop result looks pretty good—clean layout, and the theme switching is smooth.

![](https://pic.yupi.icu/1/1779338382210-dfd399b1-7adc-460b-a25b-5e51b9a2fcea.png)

And it also automatically adapted to mobile, so the layout still looked correct on a phone.

![](https://pic.yupi.icu/1/1779338442018-9ccf5260-0494-4003-9f0d-da0d4fd78602.png)

Of course, you can also just ask AI to run the site for you. It will execute terminal commands and start a dev server.

![](https://pic.yupi.icu/1/1779338527458-68249fcb-148d-4d9f-baf6-f448a4b2c834.png)

After clicking the address, Codex opens its built-in browser panel on the right so you can preview everything conveniently.

![](https://pic.yupi.icu/1/1779338571682-4cd9c100-7028-4a68-9217-8083771364ba.png)

If there’s a part you’re not satisfied with, click the **Annotate** button in the upper-right corner of the browser and directly select the element you want changed on the page, then write your feedback and send it to AI.

![](https://pic.yupi.icu/1/1779338615977-60635a33-fb1c-463d-9ca5-f98ce5df4d7a.png)

AI automatically locates the corresponding code and edits it precisely, so you don’t need to search through the code yourself. After the modification, refresh the page and you’ll see the updated result:

![](https://pic.yupi.icu/1/1779162069946-2dacf5d0-723a-4007-a1be-0e9ec99a98ee.png)

Convenient? Absolutely. Fast? Well... not really.

After finishing, let’s check the usage one more time. How much quota did this full project cost? Not too bad~

![](https://pic.yupi.icu/1/1779162233592-5c1393bc-9f8c-49d7-ae76-85de4221d87a.png)

So to summarize: to use AI to build a website, all we really need to do is tell AI the requirements, confirm the plan, and then wait for it to write and test everything on its own. There is almost no manual work in the middle.

Congratulations—if you’ve made it here, you’re already ahead of 70% of people!

By now, you can already use Codex to build a website from scratch, preview the result, and modify it as needed. Next, I’ll show you its other core capabilities. Once you learn those, you won’t just be able to build websites—you’ll also be able to make AI operate browsers, scrape data, run timed automations, and even control your whole computer.



## Core Features Explained — Common Features

From here on, I’ll divide Codex’s features into two groups: **common features** and **advanced features**.

The common features are the ones you’ll use often in daily work. The advanced ones have a bit more of a learning curve, but once mastered, they can multiply your efficiency.



### 4.1 Plugin System

In the **Plugins** panel on the left, you can browse Codex’s plugin marketplace.

Codex comes with quite a few curated plugins, such as Computer Use for controlling the computer, Chrome for controlling the browser, Spreadsheets for spreadsheet processing, and Presentations for slide creation. These are core capabilities officially provided by OpenAI. In addition, there are many programming and utility plugins covering website deployment, game development, GitHub integration, and many other scenarios.

![](https://pic.yupi.icu/1/1779338700834-01d6ac0d-a959-4aea-bb73-4c933ed6140d.png)

Let’s install the **Netlify** plugin as an example. Netlify is a free website hosting service. Once the plugin is installed, you can deploy the website you built with a single sentence and let others access it online.

![](https://pic.yupi.icu/1/1779338815978-86c15272-68ef-4c2a-b32d-750c4d571e76.png)

Click to install the Netlify plugin. After you agree, a browser opens automatically and asks you to log in to Netlify using GitHub or another method. Complete the authorization step by step, and Codex will successfully install and connect Netlify.

![](https://pic.yupi.icu/1/1779338790910-af092c39-8f43-4613-bfec-0e82cbd47e23.png)

Then we can use Netlify to deploy the digital business card site we built earlier by invoking it with `@Netlify`.

During execution, AI asks for confirmation and automatically creates a new Netlify project to deploy the site:

![](https://pic.yupi.icu/1/1779164595427-3ece0596-310c-49e6-bf02-9cd4602236fe.png)

Done! In the future, if I want to share my personal info, I can just throw people this link:

![](https://pic.yupi.icu/1/1779164633363-22c8128b-c18d-4462-b5d6-83877f49268a.png)

You can also open the Netlify dashboard and manage the project there:

![](https://pic.yupi.icu/1/1779164654949-9ccf2948-71b2-4e64-8e80-69304b3b5684.png)

In Codex’s right-side sidebar, you can see an overview of the current project, including background tasks, open browsers, and installed plugins:

![](https://pic.yupi.icu/1/1779164494935-e5495841-f725-4a83-b9e4-0001caf8f05e.png)

If you click a background task, you can even inspect the terminal logs and see when the website server received requests and what resources were requested:

![](https://pic.yupi.icu/1/1779164533926-93e7d5d6-ef18-4cf4-9052-adbd8faee41f.png)

Likewise, if you want to process Excel spreadsheets or make PPTs, just use the corresponding plugins. The generated files can even be previewed directly in the sidebar:

![](https://pic.yupi.icu/1/1779167724815-b34911a2-dbcf-4528-bedb-565afea3366e.png)



### 4.2 Browser Use

Earlier, we used the built-in browser to preview pages, annotate them, and make edits. But if you want AI to truly operate the browser—clicking automatically, filling forms, turning pages, and so on—you need **Browser Use**.

#### Using Browser Use

Go to Settings → Browser and make sure Browser Use is enabled. You can also set permission rules and blocked domains there:

![](https://pic.yupi.icu/1/1779168154072-7593cee1-a276-466b-81ff-4b0202ed0d5e.png)

You can invoke the feature in a conversation through `@浏览器`. For example:

```plain
@浏览器 帮我打开鱼皮的面试刷题网站 mianshiya.com，找到 AI 相关的面试题库并截图
```

AI opens the browser, navigates from the homepage to the AI large-model interview question bank, enters the details page, and successfully captures a screenshot. Sometimes the operation is a little unstable, so just try again if needed.

![](https://pic.yupi.icu/1/1779169237030-18755502-058d-4861-bd31-3969f676fe24.png)



#### Using the Chrome Extension

You can also install Codex’s Chrome extension plugin. It controls the Chrome browser you’ve already logged into on your computer. The benefit is that it preserves your login state and can run in the background without occupying your screen. This is ideal for tasks that require logged-in websites, such as analyzing and managing your own backend data in bulk.

![](https://pic.yupi.icu/1/1779338928043-8e41c68a-2804-454b-b2e2-f1c049241cc9.png)

Before using it, you need to install the Codex extension into your Chrome browser. Just follow Codex’s instructions.

![](https://pic.yupi.icu/1/1779338943272-88b5dacd-d327-4186-8fb8-4a0b6dac725e.png)

Once installed, I asked AI to scrape some data from the Mianshiya site, where I was already logged in:

```plain
@Chrome 获取我在面试鸭 mianshiya.com 最新收藏的 5 个题目信息，并汇总成表格
```

You can see that AI not only connected to my local Chrome browser, but also recognized the tabs I already had open. It navigated those tabs to my profile page and fetched the latest five entries:

![](https://pic.yupi.icu/1/1779173500736-4229d5cf-2ddf-4591-883f-f726f9c6bc05.png)

The resulting table is very clear, and the links even come with icons~

![](https://pic.yupi.icu/1/1779173575488-10ba1005-c669-4daf-9819-6e8f84eb9a06.png)



### 4.3 Computer Use

If Browser Use controls the browser, then **Computer Use** lets AI control your whole computer. AI can see what’s on your screen, move the mouse, click buttons, type text, and operate apps like WeChat or Feishu.

Go to Settings → Computer Control and install the Computer Use plugin.

![](https://pic.yupi.icu/1/1779339032660-47d44b31-0d77-44db-a6e3-a46d134293fb.png)

There you can see all connected applications. Even the Chrome extension we mentioned earlier belongs to the Computer Use ecosystem.

![](https://pic.yupi.icu/1/1779339059599-1af0c3f4-cfc8-4645-9121-434cea03d662.png)

Let’s try it. Invoke it using `@电脑`, and ask AI to look at my current desktop wallpaper, then generate a new wallpaper in a similar style:

```plain
@电脑 查看我电脑的桌面壁纸，然后用 AI 生成一个相似风格的新壁纸图片
```

The first time you use it, the system asks for permissions such as screen access and screenshots. You need to grant those, otherwise AI can’t see your screen or help you click anything.

![](https://pic.yupi.icu/1/1779339090756-2cee0eb4-121e-41b7-8651-958f7829b317.png)

And the result was pretty good—it generated a beautiful new wallpaper. I honestly think it looked even better than the original... Tonight I’ll probably sleep well~

![](https://pic.yupi.icu/1/1779239684229-98db0196-5c90-4ff3-a37b-1c9f0aebf850.png)

Here’s another more practical example. Ask AI to open Notes, record a note, and download my favorite song from a music app to attach it to the note:

```plain
@电脑 帮我打开备忘录，记一条笔记：
- 今天跟鱼皮用 Codex 学了很多新东西
- 今天跟鱼皮用 Codex 学了很多新东西
- 今天跟鱼皮用 Codex 学了很多新东西
并从网易云音乐下载我最喜欢的一首歌，添加到笔记中
全程自主完成，不需要找我确认
```

You can see AI opening the music app. A little mouse cursor clicks the download button and successfully downloads the song file.

![](https://pic.yupi.icu/1/1779339162708-796fa18d-eff8-4f2f-a635-9878832f1294.png)

Then AI opens Notes, writes the content, and attaches the music file so it can be played successfully.

![](https://pic.yupi.icu/1/1779339197968-9c7eebdc-6248-4635-9ab7-83f0e458f903.png)

The process had some bumps, but the task was still completed fully autonomously. In the future, I could just let AI create multimedia notes with text, images, and music for me.

That said, Computer Use currently only supports macOS, and it has a lot of downsides. It’s not very efficient, it burns tokens like crazy, and some applications simply don’t work well with Agents.

![](https://pic.yupi.icu/1/1779242213409-38d6bd55-2c15-4ec6-9a6f-12cf94ef5e34.png)

So my suggestion is: if a task can be handled through the terminal or browser, don’t use Computer Use.



### 4.4 Skills

You can think of Skills as skill packs for AI. Once a skill is installed, AI can automatically follow that method when related tasks appear, so you don’t have to write a huge prompt every time. And Skills are loaded on demand, so they don’t waste context when not in use.

![](https://pic.yupi.icu/1/03_Skills%25E6%258A%2580%25E8%2583%25BD%25E5%258C%2585%25E8%25AE%25B2%25E8%A7%A3_compressed_v3.png)

In the left-side Plugins panel, switch to the **Skills** tab to visually install and manage them.

Codex comes with several built-in skills, such as Image Gen, OpenAI Docs, Skill Installer, Skill Creator, and Plugin Creator.

![](https://pic.yupi.icu/1/1779339269256-7dc84656-58db-49a4-9565-0be9bbee4d59.png)

Next, I’ll first show you how to use the built-in image generation skill, then how to install community skills, and finally how to create your own skill.



#### Use the Image Generation Skill

Let’s first look at the built-in **Image Gen** skill.

We already used it earlier to generate a cartoon avatar for the digital business card. Besides avatars, it can also be used for UI assets, posters, banners, stickers, and more.

This time, I wanted to generate a funny image of Yupi livestream-selling fish skin. First I went to [Yupi AI Navigation](https://ai.codefather.cn/) to find an AI image prompt template and copied it.

![](https://pic.yupi.icu/1/1779256863725-8758468e-c5cb-499e-ba9e-86dbb6779594.png)

Then in the Codex chat box, you can quickly invoke a skill using the `$` symbol plus the skill name. I gave AI the prompt template and a Yupi photo:

```markdown
$image-gen 生成这个人在直播带货，卖鱼皮的图片
提示词风格参考：
@从鱼皮AI导航拿到提示词模板
```

![](https://pic.yupi.icu/1/1779341541512-91e6b748-ac6c-485c-bc24-1f5ba3dd7a69.png)

Take a look at the image AI generated. What do you think? Isn’t it awesome?

![](https://pic.yupi.icu/1/1779246213558-a5abaa62-025d-44c9-b1d8-002e697c7394.png)

That said, image generation uses more quota than normal chat, so keep an eye on your remaining allowance.



#### Use Community Skills

The number of built-in skills is limited, but the community has a lot of hidden gems.

For example, a few that I often use are Firecrawl for web search, Context7 for the latest technical documentation, and UI UX Pro Max for beautifying frontend pages.

If you want to discover more high-quality AI programming extensions, read *Recommended High-Quality AI Programming Extensions* in this tutorial’s programming tools section.

Next, let me show you how to install a community skill by doing something fun: let AI create an Apple-style flash animation video.

First, we need to install the animation skill `remotion-best-practices`. We can use the `skill-installer` skill to help install other skills quickly.

One quick safety reminder: when installing community skills, **pay attention to security**. In this case, since the skill is well-known, I simply gave Codex the skill name and let it install it. But if it’s a lesser-known skill, the safer approach is to give Codex the GitHub link and let it inspect it first before installing.

![](https://pic.yupi.icu/1/1779243952957-3c4a8be0-183b-4061-b6b7-20563da1120b.png)

Once installation finishes, you can see the new skill in the skill management panel:

![](https://pic.yupi.icu/1/1779243928649-af4d8522-23e7-423e-a5e9-76aee8e32e75.png)

Then let’s use the skill to make an animation:

```markdown
$remotion-best-practices 帮我制作一个苹果风格的快闪动画
文案：帮我舔着个老脸找观众要点赞的故事
搭配有节奏感的纯音 BGM
最终直接给我提供视频文件，必须自主完成任务
```

AI installs the project and dependencies needed to make the animation, generates the video and audio, renders individual frames, and checks whether the visual output looks right:

![](https://pic.yupi.icu/1/1779244729111-af9516f7-1905-441a-a4a4-c803286dc7ba.png)

In the end, AI produces a directly playable video:

![](https://pic.yupi.icu/1/1779244984051-766cfb16-07be-4325-a8c4-85625565b028.png)

Uh... it seems to have misunderstood the copy I gave it. Total fail, hahaha.

I feel this method is more suitable for product promo videos, knowledge-point flash cards, holiday greetings, and other short videos with a tight rhythm.

And honestly, I didn’t even write the prompt seriously, okay?

You can specify duration, specify copy more precisely, combine it with the image generation skill for assets, add more interactive motion effects, and so on. If you’re interested, go play with it yourself.



#### Create Your Own Skill

Besides using other people’s skills, you can also package your own frequently used workflows into skills so you can reuse them with one click later.

At its core, a skill is a `SKILL.md` description file plus some supporting scripts and reference materials. Inside `SKILL.md`, you need to clearly write what the skill does, when it should be triggered, and what steps it should follow. After AI reads it, it knows how to do the job.

![](https://pic.yupi.icu/1/04_SKILL.md%2525E6%25258A%252580%2525E8%252583%2525BD%2525E6%252596%252587%2525E4%2525BB%2525B6%2525E7%2525BB%252593%2525E6%25259E%252584_compressed_v2.png)

The best way to create a skill is to first successfully complete a workflow once, then use the built-in `$skill-creator` skill. Tell Codex what the skill should do, when it should be triggered, and what details matter. It will automatically generate the full skill files for you.

Let’s try it. Earlier, AI generated a livestream sales image for us and the result was pretty good, so let’s package that into a “livestream sales image generation” skill:

```markdown
$skill-creator 帮我把上述工作封装为「直播带货图片生成技能」
交互式引导用户输入信息，并生成图片
```

After it runs successfully, AI not only creates the skill files, but also thoughtfully tells you how to invoke the new skill:

![](https://pic.yupi.icu/1/1779247223043-2cb6ab77-abdd-4887-9b72-d18d29c8557f.png)

After that, when using this skill, you only need to provide a photo of a person or a product. You no longer have to fill in that long, messy prompt template yourself.

![](https://pic.yupi.icu/1/1779247820484-3bd99c02-379e-4830-9315-26973089c816.png)

Take a look at the result. AI correctly recognizes that I provided a product image and faithfully reproduces the prompt-template style I gave it earlier:

![](https://pic.yupi.icu/1/1779247711750-d32da325-705e-4d40-ac95-f48fc80b170d.png)



### 4.5 MCP for Connecting External Services

MCP (Model Context Protocol) is an open protocol. You can think of it as a universal plug for AI. Once connected, it allows AI to access all kinds of external tools and data sources and retrieve real-time information.

![](https://pic.yupi.icu/1/05_MCP%25E6%25A6%2582%25E5%25BF%25B5%25E7%A4%25BA%25E6%2584%258F_compressed_v1.png)

Go to Settings → MCP Servers, where you can add and manage MCP services.

After clicking “Add Server,” you need to manually fill in the server configuration parameters, which is honestly not very beginner-friendly. I personally hate filling forms!

![](https://pic.yupi.icu/1/1779341902401-d81e9164-6408-4de5-beea-fb10ee8e33cd.png)

Fortunately, in many cases the Skills we discussed earlier can already cover what MCP would do, and Skills are often easier to install and use.

Also, many mainstream extensions provide quick-install commands for MCP, so you don’t need to type all the parameters by hand.

For example, let me show you how to install Context7, a service that can fetch the latest technical documentation in real time. It’s especially convenient when developing websites and checking API docs.

![](https://pic.yupi.icu/1/1779341983443-9e49280a-f971-4851-885f-74a25c4c490b.png)

Codex has an integrated terminal in the upper-right corner. Open it and run:

```bash
npx ctx7 setup
```

Choose to install the MCP server and install it for Codex, and you’re done.

![](https://pic.yupi.icu/1/1779249084658-19b46aa1-3c93-4db2-a6e6-530f78a7477a.png)

After installation, restart Codex. You’ll see it in the MCP server list in settings. Before first use, you also need to authenticate:

![](https://pic.yupi.icu/1/1779249275289-1d9c97b0-f6e8-4bdb-b5ee-595e551631a6.png)

Log in on the Context7 webpage that opens automatically, then approve the authorization.

![](https://pic.yupi.icu/1/1779342015467-a2244093-f071-4055-b412-89af0e451289.png)

Once authorization is complete, you can happily use MCP:

![](https://pic.yupi.icu/1/1779238127086-5db75a13-e967-420d-81f1-5afcf0abbb9b.png)

When building websites later—especially AI-powered websites—you can use Context7 to fetch the latest technical documentation. You can also use it as a learning assistant and let AI explain concepts based on official docs.

For example, I used it to create an OpenClaw learning assistant:

```markdown
$context7-mcp 你是我的 OpenClaw 学习助手
帮我获取最新文档并理解，之后能快速回答我的问题
```

You can see AI fetching the latest official OpenClaw documentation library:

![](https://pic.yupi.icu/1/1779249752304-161a453b-2fa2-4a13-8cf7-09d7dad37f72.png)

Then let’s ask it a question:

```markdown
OpenClaw 无法运行，怎么办？
```

AI quickly gives precise troubleshooting steps based on the official docs. That makes learning and problem-solving both faster and more accurate, and you no longer need to worry about outdated information.

![](https://pic.yupi.icu/1/1779249770355-14771b85-f8a8-4d20-818f-7607b097099c.png)

Congratulations—if you’ve made it this far, you’re already ahead of 80% of people!

At this point, you’ve already mastered Codex’s common features and learned many practical use cases. From file management to website development, from browser control to skill packaging, you can already use Codex to dramatically improve your efficiency.



## Core Features Explained — Advanced Features

Next, let’s talk about some more advanced features that either have a bit of a learning curve or aren’t useful for absolutely everyone. But if you’re willing to tinker a bit more, they can raise your Codex efficiency to another level.



### 4.6 Context and Conversation Management

Near the conversation area, there’s a little circle. If you hover over it, it shows how much context the current conversation has already used.

![](https://pic.yupi.icu/1/1779342193484-1c7412d2-bf9e-4208-8c9c-87a02ac15202.png)

OpenAI officially says GPT-5.5 has a total context window of 400K tokens, but 128K of that is reserved for output. That leaves 272K for input, and after applying a 95% safety factor, the effective context shown inside Codex is about 258K tokens.

Honestly, 258K isn’t that much. If you keep talking with AI for a long time or work in a large codebase, the context fills up easily.

When context is almost full, Codex automatically compresses the chat history for you. You can also proactively type `/压缩` when one phase of work is done, so the model can focus more on the new task.

![](https://pic.yupi.icu/1/1779330184279-ad15deb4-d042-4f56-a540-2c0f3db1e388.png)

Besides individual conversation context, you also need to manage the conversations themselves. Otherwise the list keeps getting longer and harder to navigate.

When there are too many chats, hover over a conversation in the left sidebar and click **Archive** to store away old, rarely used chats and keep the interface cleaner.

![](https://pic.yupi.icu/1/1779330120439-c2fbfda4-c46a-4e97-8217-abda32f8833a.png)

Go to Settings → Archived Conversations to view and manage them.

![](https://pic.yupi.icu/1/1779330061448-51d0acb9-526a-401d-88b8-394f8a7ac6f7.png)

Also, I suggest enabling “prevent system sleep while running” in general settings, so your computer doesn’t suddenly go to sleep during long tasks and cause failures.

![](https://pic.yupi.icu/1/1779342248884-57ce802e-df80-4271-a00c-3741b1cd3c7e.png)



### 4.7 Persistent Memory System

Codex has a memory mechanism that lets AI remember your preferences and project rules, so you don’t need to repeat yourself every time.

The memory system has three levels: global, project-level, and automatic memory. Let’s go through them one by one.



#### 1. Global Custom Instructions

Under Settings → Personalization, you can change Codex’s personality and custom instructions.

Anything you write there is automatically attached to all conversations in all projects. It’s suitable for general preferences such as “reply in Chinese” or “write code comments in English.”

![](https://pic.yupi.icu/1/1779331122839-9ae33979-6151-4330-bb2f-7a46839ebfbb.png)

After saving, the content is written into the global `~/.codex/AGENTS.md` file. That file acts as the behavioral guideline Codex reads every time it starts, and it applies across all projects.

![](https://pic.yupi.icu/1/1779331195778-87290744-b084-4d4d-beb7-4a8073826635.png)



#### 2. Project-Level `AGENTS.md`

Create a file called `AGENTS.md` in the project root directory and write the project-specific rules and conventions there. It only takes effect when working inside that project.

![](https://pic.yupi.icu/1/1779342300470-f44b0648-915a-4df0-8866-e9511862722d.png)

You can write it yourself, or ask Codex to generate one based on the current project—for example, “Help me write an AGENTS.md based on this project.”

You’ll see AI generate a very detailed `AGENTS.md`, including project overview, conventions, and so on.

![](https://pic.yupi.icu/1/1779331059529-5985a98b-734e-4324-8617-6caa03d4b815.png)



#### 3. Automatic Memory

Go to Settings → Personalization and manually turn on **Automatic Memory**.

Once enabled, after a conversation has been idle for a while, AI automatically summarizes useful information in the background and stores it as memory. Later, when similar scenarios appear, it can recall that memory automatically, making AI understand you better and better over time.

![](https://pic.yupi.icu/1/1779331262794-052e52b5-ed9c-4630-953c-a20a90a43629.png)

However, very short conversations usually won’t be memorized, and if your quota is nearly exhausted, automatic memory generation may not run either.



### 4.8 Scheduled Automations

Codex supports scheduled tasks.

Open the **Automation** panel on the left, and you’ll see that Codex already includes some task templates, but most of them are programming-related—things like summarizing code changes or checking code issues. Many people may not need those directly, so let’s create a more practical automation ourselves.

![](https://pic.yupi.icu/1/1779342339487-c3e44a10-f14c-4d56-aa29-6c34d0a732f5.png)

There are two ways to create scheduled tasks.



#### 1. Create One Manually

In the Automation panel, click **New**. For example, I wanted AI to collect daily AI news, so I filled in the task name, prompt, trigger time, model, and reasoning level.

Choose **Local** for the runtime environment, meaning AI executes the task directly on your own computer without requiring an isolated environment.

```markdown
标题：每日热点搜索
提示词：从国内外搜集今日 AI 相关热点，整理成 HTML 结构的报告
```

![](https://pic.yupi.icu/1/1779342400695-dd591098-4926-41ee-8cc4-966ec17e5dd6.png)

After creation, once the scheduled time arrives, Codex automatically opens a conversation and executes the task. Of course, we can also run it manually first to test the effect.

![](https://pic.yupi.icu/1/1779327739060-7dcbe0b5-0671-4a3a-95d9-7110dde594b5.png)

Click the task to view detailed information:

![](https://pic.yupi.icu/1/1779327610752-f322467e-2498-48c2-9ca0-09ee5534720b.png)

If you click a specific run history record, you can even inspect the actual task conversation. I recommend observing its behavior and continuously improving the prompt over time.

![](https://pic.yupi.icu/1/1779327672984-5d151560-bc4b-4143-b9f1-02e7f3b00b78.png)



#### 2. Let AI Create the Task

The other, more natural way is to just talk to Codex and let AI create the task for you.

For example, as a content creator, I take huge numbers of screenshots every day. After a while, my folders are full of incomprehensible filenames, and finding a specific image becomes painful.

![](https://pic.yupi.icu/1/1779328180129-64702cf8-d0c1-48a8-9ce9-8983164919bc.png)

So I asked Codex to help me automate it. First choose the project, then enter a prompt like this:

```plain
帮我创建一个自动化任务
每小时扫描一次「鱼皮的图片库」中最近 3 小时的图片文件
并根据图片内容自动完善图片的中文名称
```

Very quickly, AI creates it for you automatically. Click the task to inspect the resulting configuration. You’ll notice the prompt it writes is more complete than the rough instruction I gave it, and it automatically chooses the model too.

![](https://pic.yupi.icu/1/1779342459042-ee4814b3-80d9-43a8-9e66-349c75755193.png)

Then we can run the task manually to test it. The effect is pretty nice—AI renames files based on the image content so the filenames actually make sense.

![](https://pic.yupi.icu/1/1779328685443-8a79452f-bca6-43a7-aa29-c498d28c9e2c.png)

That way I now have an intelligent image butler, and I’ll never again have to stare helplessly at a pile of nonsensical filenames.

After each run, AI also writes execution records into a Memory file, so you can review the history anytime and don’t have to worry about tasks failing silently.

![](https://pic.yupi.icu/1/1779328889015-16b748c8-6760-442f-8a51-ab9981597413.png)

You can also combine automations with Skills and plugins—for example, automatically generating a weekly PPT report, organizing your study notes daily and syncing them to Notion, or using Firecrawl every week to scrape competitor-site updates and generate an analysis report.



### 4.9 Desktop Pets

Bet you didn’t expect this: AI tools have already become so competitive that they’re now giving users **emotional value** too.

#### 1. Use the Built-In Pets

Go to Settings → Appearance, scroll down to the **Pets** section, and you’ll see a row of built-in pixel-style cyber pets.

![](https://pic.yupi.icu/1/1779264533954-42de0e65-7c40-47a2-9004-33310cbedf6b.png)

Choose one and click awaken, and a floating little companion appears on your desktop.

It’s not just decoration. The pet reflects Codex’s working state in real time. When AI is busy, the pet is busy; when you’re typing, it waits quietly; when the task is done, it waves at you. It’s like a cross-application Dynamic Island telling you whether AI has finished without needing to switch windows.

![](https://pic.yupi.icu/1/1779264980101-6b9b2d73-87d3-4153-bec9-d6ebbeb26a83.png)

#### 2. Use Community Pets

Besides built-in pets, there’s also a community pet library called [PetDex](https://petdex.crafter.run/zh), containing more than 2,000 user-made pets.

Anyone who knows me already knows exactly which one I’m going to choose. Search for Kun, sort by likes, and it’s immediately obvious:

![](https://pic.yupi.icu/1/1779283432473-02e39028-d8c0-458d-89dc-dea5028751f4.png)

After choosing a pet, open its detail page, find the installation command, and copy it:

![](https://pic.yupi.icu/1/1779283378755-65cbdc35-20fd-4d9d-9cb2-e7b673094ab8.png)

Then open Codex’s terminal and run:

```bash
npx petdex@latest install kun-like
```

![](https://pic.yupi.icu/1/1779342522256-fb181039-cffa-4c6f-9894-ca5070861da9.png)

After installation, return to Appearance and select the pet you just installed:

![](https://pic.yupi.icu/1/1779283467893-304ca18b-95fd-48f9-92d6-fe95b3003bc5.png)

Then go back to the Codex homepage and use the `/宠物` command to awaken it. In my head, I can already hear that familiar BGM—can you hear it too?

![](https://pic.yupi.icu/1/1779283323620-2196f811-0172-440c-927e-c184fafa448a.png)



#### 3. Create Your Own Pet

You can also use Codex’s built-in `$hatch-pet` skill to generate your own custom pet, either from a photo or from a text description.

For example, I turned my own head into a pet. AI first analyzes the uploaded image and gives the pet a name:

![](https://pic.yupi.icu/1/1779342577039-41fd80b1-db57-4305-ac74-0c642fbc07cf.png)

Then it splits the work into multiple sub-tasks running in parallel, generating sprite frames for different actions such as idle, running, jumping, and failing, then assembles them into a complete pixel-animation sprite sheet.

![](https://pic.yupi.icu/1/1779342619507-d733d740-a03a-4c79-a3b7-6c2d6701c525.png)

After waiting a very, very long time, AI finally finishes the task, and then you can use the custom pet you created~

![](https://pic.yupi.icu/1/1779326702309-cfceeda9-eb96-4a9b-87d5-eae888a8c1fe.png)

You can also upload your pet to the platform and share it with others. So in the future, when you use Codex, remember to keep me by your side and let me bless your bugs away~

![](https://pic.yupi.icu/1/image-20260521154435085.png)



### 4.10 Code Review and Version Management

Every time AI modifies files, you can inspect what it changed in the **Review** panel on the sidebar.

The panel lists all modified files, and you can expand each one to see exactly what was added and removed.

![](https://pic.yupi.icu/1/1779342665723-38604f09-7083-4b41-b07b-7a1d3f5bd5d3.png)



#### Apply or Revert Changes

If you want to decide which code to keep, you can view the **unstaged** files. There, you can flexibly apply or revert changes.

Most of the time, you don’t need to read the code in detail at all—just click **Stage All**, which means you approve all current changes. If you’re not happy with them, click **Revert All** and restore the state from before this modification.

![](https://pic.yupi.icu/1/1779342718411-5b5a64e8-b427-4419-9248-871f6f52b576.png)

If you don’t like a specific file’s changes, click the **Revert** button next to it to restore that file. If you do like it, click **Stage** to mark it for commit.

You can also keep only part of the changes. Each file’s diff is automatically split into separate code blocks, and each block has its own **Stage** and **Revert** buttons, letting you choose block by block what to keep or discard.

![](https://pic.yupi.icu/1/1779342772594-12e61247-6a35-4fd8-b445-44439c648429.png)

Once you’ve staged the desired code, you can **commit** the staged changes. Committing is like creating a save point for the code and confirming that this is the version you want.

Codex also has built-in abilities for committing, pushing to remote repositories, and creating Pull Requests—all without leaving the APP.

![](https://pic.yupi.icu/1/1779334288424-a3fa5040-f04a-49c1-a850-14563842808c.png)



#### Worktrees

If you’re a professional developer, you can also try **worktree mode**. When creating a new conversation, you can choose the startup mode **New Worktree**:

![](https://pic.yupi.icu/1/1779334724648-9782f94d-4251-4c76-929d-f790a527bc1f.png)

That way, AI works in an isolated branch and doesn’t affect your current code. It’s especially suitable when multiple Agents work on the same project in parallel and you want to reduce conflicts.

![](https://pic.yupi.icu/1/1779342810035-7655b92c-b28c-4f46-b7e9-0ef2be302cd7.png)



#### GitHub Plugin

If your project is hosted on GitHub, I recommend installing the GitHub plugin. It lets you inspect repository information, create Pull Requests, do code review, and more directly inside Codex.

For example, I asked it:

```markdown
@GitHub 帮我查看自己公开的 Star 数最多的前 10 个项目
```

![](https://pic.yupi.icu/1/1779334500107-206d8b6f-0148-4022-b42e-6f2246ee0d13.png)



### 4.11 Remote Control from Your Phone

Codex recently launched a very cool new feature: controlling the Codex APP on your computer from your phone.

The setup is simple. On the desktop Codex app, click **Set Up Codex Mobile**, then click Start Setup, and a QR code appears on the screen.

![](https://pic.yupi.icu/1/image-20260521155520575.png)

Then open the ChatGPT App on your phone (make sure it is updated to the latest version), scan the QR code, confirm the account and workspace inside ChatGPT, and complete any multi-factor authentication that may be required. Then the connection is done.

Once connected, you can use your phone anytime to give tasks to the Codex app on your computer, approve AI action requests, check execution progress, and inspect generated code and results. Your project files, installed plugins and skills, and all configurations still live on that computer—the phone is just a remote control. It gives off a bit of OpenClaw lobster flavor, doesn’t it?

![](https://pic.yupi.icu/1/image-20260521160038646.png)

Besides connecting your phone to your computer, you can also continue unfinished work from another Codex App device. For example, if you start a long task on a desktop machine at the office, you can go home, open Codex on your laptop, and continue viewing the result there.

You can manage connected devices in Codex’s connection settings—for example, disconnect a phone or choose whether to keep the computer awake.

![](https://pic.yupi.icu/1/image-20260521155638870.png)

Congratulations—if you’ve made it here, you’re already ahead of 90% of people!



## My Experience Using Codex

Now that you’ve learned how to use Codex, let me also share my own impression of it.

Codex is especially suitable for beginners or for people who don’t want to tinker with IDEs and the command line. You can just download it and start using it, so the barrier to entry is very low. It’s especially nice for people who are already paying ChatGPT users, since you get an all-purpose AI assistant without spending extra money.

Personally, I highly recommend that everyone try it—especially non-programmers. This may be the AI programming tool best suited for you at the moment.

But for me, Codex still doesn’t fully satisfy all of my day-to-day AI programming needs.

As a programmer and AI programming blogger, I need to read and review code, precisely control line-level changes, and switch among different AI models for comparison. Codex doesn’t do those things well enough yet. It has no built-in code editor, and the code-reading experience is only average.

So in real use, I still pair it with VS Code, or I simply do many tasks directly in Cursor.

![](https://pic.yupi.icu/1/image-20260521162851912.png)

Also, Codex’s version management relies entirely on Git, so the project must be a Git repository. That adds some barrier for beginners.

Model switching is also not flexible enough. The desktop version defaults to OpenAI’s own models only. If you want to use other models, you need to edit config files or use visual tools such as CC Switch.

And for me, the most fatal limitation right now is that in Codex APP’s subscription mode, GPT-5.5 only gives an effective context of 258K. For large-scale project refactoring, that still falls short compared with other AI programming tools and models that support 1M context.

That said, every tool has its own positioning. Codex is more like an **AI assistant APP** that can do a little bit of everything and has the lowest barrier. Cursor is more like an **AI IDE** that balances strong code editing experience. Claude Code is more like the **strongest reasoning AI brain in the terminal**.

The usage logic of these tools is actually quite similar. Once you learn one, picking up the others is much easier. If you want more comparisons and recommendations, read *AI Code Editor* and *My AI Toolbox Recommendations* in this tutorial’s programming tools section.



## Final Words

After reading this article, you should have mastered all the core ways of using Codex from beginner to advanced level—more than enough to handle everyday programming and office tasks.

In fact, Codex still has even more tricks and advanced usage patterns, such as Subagents for parallel acceleration, the clever use of Fork, custom model integration, and lifecycle Hooks. If you’re interested, you can explore those on your own.

If you want to systematically learn AI programming, keep reading the other sections of this tutorial. Choosing the right tool is only the first step—what matters more is using it in real projects.

![](https://pic.yupi.icu/1/1779342867613-51a01402-8f54-4820-be75-656acdaa8377.png)

Keep going—I’m looking forward to seeing the projects you build with Codex!
