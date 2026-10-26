---
permalink: /models/gpt-6-astra-launch/
title: "GPT-6 Astra 发布解读"
---
# GPT-6 Astra 发布解读 - 跑分、官方案例和争议

> OpenAI 号称全世界最智能的模型，主打像人一样操作电脑

时间过得真快啊，距离 GPT-5 发布竟然已经过去一年多了。

2026 年 9 月 3 日，OpenAI 终于把 GPT-6 Astra 放出来了。

官方把它叫做「全世界最智能、也最对齐的模型」。而 OpenAI 总裁 Greg Brockman 在发布前的媒体闭门会上，最后说了这么一句话。

**现在觉得我们已经进入 AGI 时代，并不算什么不合理的想法，欢迎来到 AGI 时代。**

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260904101301051-06e3745a90)

我本来是想第一时间跑一轮实测的，案例都准备好了。结果打开 ChatGPT 翻了一圈模型列表，没有；去看 API，也没有……

去官方博客看了一下，Astra 刚发布时只开放给一小批安全厂商，普通订阅用户是用不了的，接下来几天才会陆续开给 ChatGPT 的 Plus、Pro、Business 和 Enterprise 用户。

吊大家的胃口嘛这不是？

OpenAI 自己也知道这件事说不过去，于是负责 ChatGPT 的 Tibo 发了一条推特，说会给每一个订阅了付费计划但还没拿到 Astra 权限的用户，按天补偿额度重置，一天没用上就补一次。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt-80ca8491e3)

行行行，原谅你了（正好周五我可以摸鱼了~

这篇文章我会带你看清 GPT-6 Astra 到底强在哪、官方展示了哪些案例，以及网上为什么会有截然不同的声音。如果你更关心它实际写代码的效果，可以直接阅读本板块中的《GPT-6 Astra 编程能力实测 - 4 个项目案例》。

## GPT-6 Astra 强在哪

这次，OpenAI 官方推文并没有吹 GPT-6 的编程能力，而是操作电脑能力。

他们把 GPT-6 Astra 称为「全世界最强的电脑操作模型」，AI 可以像人一样看屏幕、点按钮、填表单、刷应用，无所不能。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/openai-twitter-f9dd160788)

先看看跑分，有个叫 ScreenSpot-Pro 的测试专门考模型能不能看懂屏幕、并且精准点到该点的位置，上一代 GPT-5.6 Sol 是 76.9%，Astra 直接干到了 92.7%。

![ScreenSpot-Pro 跑分](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-screenspotpro-ac1e8238-c003eeb56f)

还有一个更接近真实工作的测试叫 OSWorld，就是把 AI 扔进一台真电脑里让它自己干活。Astra 的完成率是 72.6%，比 Sol 的 65.7% 高了不少。更关键的是完成同样的任务，Sol 平均要 75 分钟，Astra 只要 40 分钟！

![OSWorld 跑分](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-osworld-fda4083d-7e66764195)

我觉得主攻「屏幕理解」是个正确的方向。现实里绝大多数软件根本没有 API，很多公司的内部系统还是二十年前写的，文档都不知道在哪。但所有软件都有界面，那界面本身就是最通用的 API，AI 不用等谁来适配，自己看屏幕操作就完了。

GPT-6 Astra 的编程能力也有大幅提升。Terminal-Bench 4.0 考的是在终端里完成软件开发、系统配置和数据分析这类复杂任务，Astra 拿到 57.9%，Sol 只有 37.3%，Claude Fable 5.1 是 55.8%。

![Terminal-Bench 4.0 跑分](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-terminalbench4-7aade967-122c415d14)

不过这次最让我意外的跑分是 ARC-AGI-3。

这个测试难在不给 AI 说明书、不给规则、甚至都不告诉 AI 目标是什么，模型进去只能自己乱按，慢慢摸清怎么才算赢，再把摸出来的规律用到更难的关卡上。

它考查的不是 AI 的知识，是悟性。

2026 年 3 月这个测试刚发布的时候，最强的 AI 只有 0.51 分，人类平均 48 分，GPT-5.6 Sol 是 7.8 分。

而 Astra 做到了 99.9 分！

![ARC-AGI-3 跑分](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-arc-agi-3-889f6b76-7d9e0ff529)

把这称作 AI 的开悟时刻，不过分吧？

再看看 GPT-6 的数学能力，FrontierMath Tier 4 这套题 Astra 拿到 97.6%，基本上算是打穿了。

![FrontierMath Tier 4 跑分](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-frontiermath-f6540c34-1b13d73595)

### 规格和价格

最后说说大家关心的价格。API 里的模型 ID 是 `gpt-6-astra`，上下文窗口 105 万 token，最大输出 12.8 万 token，输入支持文本和图片。

定价是每百万输入 token 10 美元、输出 50 美元，缓存输入 1 美元，跟 Claude Fable 5.1 一模一样，是自家上一代 GPT-5.6 Sol 的 2.5 倍，涨得还是挺狠的。

这里有个容易踩的坑要提醒你：**单次请求的输入一旦超过 27.2 万 token，整次请求的输入和缓存费率会翻倍、输出费率涨 1.5 倍**，也就是输入 20 美元、输出 75 美元。所以别觉得上下文窗口有 105 万就可以随便塞，塞过 27.2 万这条线，账单是阶梯式往上跳的。

另外 Batch 和 Flex 是标准价的 50%，追求低延迟的 Fast 模式是标准价的 2 倍。Astra 也支持推理力度调节，从 `low`、`medium`、`high` 到 `xhigh`、`max` 一共五档，可以按任务难度平衡成本和效果。

不过考虑到大多数用户都是在 Codex（ChatGPT）中使用套餐，再加上官方老是赠送重置额度，实际开销没有那么大。

## 官方展示的实战案例

跑分看着很爽，但我更关心 GPT-6 做出来的东西是什么效果。

官方这次放了不少实际案例，我挑几个有意思的说说。

先看一个最能体现「操作电脑」能力的。官方让 Astra 打开 KiCad 这个电路设计软件，把一张电子原理图变成可以直接拿去生产的电路板布线图，元器件怎么摆、铜线怎么走全都是它自己完成的。

![Astra 在 KiCad 里完成电路板布线](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-c5fe28c2-54150f595a)

这活儿平时是硬件工程师一点一点手工拖出来的，也是整个电子设计流程里最费时间的环节之一。

然后是 3D 建模能力，官方展示了让 Astra 直接建出一整座城市场景，楼体、道路、绿化带、斑马线、路上的车，一个都不少。

![Astra 建出来的 3D 城市场景](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-3d-0455922e-2ad040041b)

不光是建静态模型。官方还演示了先在 Blender 里把一栋房子建出来，再导进 Unreal Engine 5 变成可以自由走动的场景，让设计师和客户在开工之前就能提前逛一遍。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260904110602909-aa14b2b7ad)

再看看游戏开发能力，官方直接在发布页面里嵌了两个能玩的网页项目，鼠标点进去就能上手。

第一个是卡丁车竞速游戏，这是完全用 AI 程序化生成的 Three.js 卡丁车赛车，赛道和场景不是靠网上的素材堆出来的，是靠代码算出来的。

![Tidal Rush 卡丁车游戏的实际画面](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-3d-90c1852a-99b6089853)

我自己上手跑了两圈，速度表、漂移条、小地图、名次和圈数都在，手感也不飘。沙滩的高光、水面的透光、椰子树的剪影、彩旗的排布，这水准我觉得已经超过不少外包团队交的活儿了。

第二个案例更酷炫，是个宇宙飞船船厂。每换一个随机种子就能生成 1000 艘不重复但可复现的飞船，全部由 177 个模块化零件拼出来，每一艘还带尺寸、载货量、推力、装配模块数这些参数。

![飞船船厂里 1000 艘飞船的图鉴](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-voidexplorer-da08aaad-0c34a60c2e)

左边是舰队列表，中间是整页图鉴，右边是选中那艘船的详细规格，还能导出成一张拼版图。

除了官方，一批提前拿到内测权限的人也在 Twitter 上晒了自己的测试，有几个我觉得比官方演示还带劲儿。

Matt Shumer 让 Astra 在 Unreal Engine 里造一个世界，往里面填满由 Astra 驱动的角色，要求他们必须互相合作才能活下去。第二天他在卧室里听见客厅有人说话，以为家里进人了，走出去还有点害怕，结果是那些 AI 角色自己开始互相聊天了。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260904111049540-75cef1dcf5)

一位研究 T 细胞三十五年的免疫学教授，只给了 AI 一句「做一个 5 分钟讲 T 细胞的教学视频」，Astra 自己挑了视频框架、调文生图做画面、还主动建议用 AI 配音，最后一次性把讲什么、怎么讲、配什么画面全组装好了。

教授说：凭他三十五年的经验，他自己也讲不了比这更好。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260904111253107-bc47ea588a)

## 从官方提示词里能学到什么

看完案例你可能会想：官方是拿什么样的提示词做出这些东西的？

这个问题其实有答案。OpenAI 有一个 [开发者展示馆](https://developers.openai.com/showcase)，里面收录了五十多个用 Codex 做出来的项目，而且 **每个案例的详情页都把当时用的提示词原文一字不改地贴出来了，后面还列了每一轮迭代都改了什么**。

![OpenAI 官方开发者展示馆](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-8d2e8964-bd4381f8cd)

虽然这个展示馆不是这次跟 Astra 一起发的，里面的案例大多是用 GPT-5.5 和 5.6 做的，但我觉得值得给大家分享一下，看官方的提示词能收获不少 AI 编程的启发。

随便分享 2 个，第一个启发是 **要逼 AI 自己验收**。

比如玻璃塔堆叠游戏的提示词，最后一句是这么写的：

```
Run build and lint, then play several runs in the browser to verify collisions, scoring, failure, and restart with no console errors.
```

意思是先跑构建和代码检查，然后让 AI 在浏览器里玩几局，把碰撞、计分、失败和重开都验一遍，控制台不许有报错。

![Glass Towers 玻璃塔游戏](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gpt6astra-glasstowers-04ea8b94-a35fde5347)

这就是我一直在讲的 Loop Engineering，让 AI 写完自己验，验证不通过就自己修复。官方把它写成了提示词里的硬要求。想系统学这套方法，