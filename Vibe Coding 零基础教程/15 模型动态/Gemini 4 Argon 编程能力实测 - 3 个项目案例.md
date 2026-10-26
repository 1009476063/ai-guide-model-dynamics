---
permalink: /models/gemini-4-argon/
title: "Gemini 4 Argon 编程能力实测"
---
# Gemini 4 Argon 编程能力实测 - 3 个项目案例

> 谷歌憋了 7 个月的旗舰模型，用 3 个项目看看它到底几斤几两

2026 年 10 月 13 日，Google 终于把 Gemini 4 Argon 模型全面放出来了。

这个模型其实 9 月 30 日就官宣了，但当时只给了一批安全厂商内测，普通用户又干等了两周。

这也是 Google **七个多月来** 第一次发布 Flash 以上级别的新模型。

这大半年里 Anthropic 和 OpenAI 轮番发旗舰，Google 只顾着更新 Flash，网友对它的评价 be like ↓

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/remember-memes-like-these-geminis-come-a-long-wa-ab1ab6ded2)

先看看新模型的价格。11 月 30 日之前是限时五折，每百万 token 输入 2 刀、输出 10 刀，之后恢复到 4 刀和 20 刀。

第三方评测机构 Artificial Analysis 算过一笔账，Argon 跑一个测试任务平均花 1.99 刀，Claude Opus 5.5 要 5.98 刀，但 GPT-6.1 Sol 只要 0.72 刀。

也就是说，Argon 在旗舰模型里算便宜的，但还谈不上性价比之王，等五折结束价格还要翻一倍。

再看能力。官方跑分表里跟 GPT-6 Astra、Claude Fable 5.1、Claude Opus 5.5 比了 19 项，Argon 拿了 14 项第一！

![官方跑分总表](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-82229abb-d74e8e9d49)

不过在编程能力上，Argon 并没有全胜。考察命令行编程能力的 Terminal-bench 4.0 上，Argon 只有 57.4%，比 Opus 5.5 低了整整 9 个点。

有一说一，官方放出来的演示是真的唬人。比如这个巫师国际象棋，你看到的所有画面元素都是 Argon 自己完成的。

![官方演示的巫师国际象棋](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-0c93ac38-3ce3cac922)

还有一个演示更夸张，Argon 把一张办公桌的照片，直接变成了一个能玩的微缩赛车游戏。

![官方演示的桌面赛车](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-1f5d54d2-1e1a359c39)

看完这些，我对它的期待一下子就拉满了。

当然，跑分和官方演示都只是参考，模型好不好用，还得拿真实项目来检验。

进入实测。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-ba1f9253-3a650a94dd)

这次实测 3 个项目，由浅入深分别为：

1. 3D 版动画知识讲解
2. 以撒的结合肉鸽游戏
3. 零依赖桌面微缩赛车

## 1、3D 版动画知识讲解

为了对比，第一个测试我直接复用老题目。让 AI 用 3D 动画讲解 Kimi K3 的「注意力残差」机制，提示词跟之前测 Claude Opus 5 和 Kimi K3 时一字不差。

提示词里我只要求 AI 先联网查资料、用 Context7 查 3D 库的最新文档，场景怎么搭、动画怎么编排全部放开交给 AI。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-prompt-01-case1-3d-attention-14b938-bbf41d2510)

AI 先用 Firecrawl 把注意力残差的原论文抓下来核对公式，又查了 Three.js 的文档，11 分钟左右就交卷了。

来看成品。页面分成四幕，第一幕讲传统残差的毛病，用「64 层大楼的大锅汤」做比喻，越往上的楼层越膨胀，第 1 层的关键信息被稀释到只剩 1.6%。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case1-01-b9ac4522-dd4641d10c)

第二幕切换到注意力残差，第 15 层伸出一根紫色探针回头检索，从第 0 层架起一座金色光桥直达顶层，早期信息的保留率一下子拉到了 96.7%。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case1-02-49426211-44a073e553)

最后一幕把两座塔并排对比，右侧还能切换不同的场景，拖动滑块就能实时看到每一层权重的变化。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case1-03-26687cbf-37f690d825)

内容上倒是没啥毛病。

**但是，前端的问题很明显！**

左右两块信息面板塞得太满，把中间的 3D 场景挤得只剩三分之一，塔顶还被顶部导航栏挡住了一截。

而且仔细一看，图例和滑块上一共有 6 处公式压根没渲染，直接露出了 `alpha_{i \to l}` 这种源码。

页面上满屏都是 Emoji 就更不用多说了……

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case1-05-emoji-cb946aad-30e92fca3a)

手机端的适配也很一般，大家自己感受一下吧：

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case1-04-9d12318b-6384b739d9)

之前 Kimi K3 的版本干净利落，只有一排节点和金色弧线。

![Kimi K3 的 3D 版本](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/1784181948833-d092b7b8-abc2-42c4-9c8c-bfcd38cef4-986d017c26)

Claude Opus 5 的版本同样做了两种残差的并排对比，而且画面布局更合理，更利于阅读。

![Claude Opus 5 的 3D 版本](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/1785145067089-c8c05cfb-e1a3-4f3c-abe8-e3c30aa139-a6039dc1f7)

论信息量，Argon 是三个里最多的。但显然，Opus 5 那一版更适合给人用。

## 2、以撒的结合肉鸽游戏

第二个项目我让 AI 复刻「以撒的结合」游戏。这道题的提示词同样跟测 Opus 5 时一模一样，难点在于角色、怪物、道具全部要用代码画出来，还要有随机地牢、道具系统和 Boss 战。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-prompt-02-case2-roguelike-15f2146a-48bcf6369a)

12 分钟后，AI 交卷了。开始界面有点儿原作的味道，哭唧唧的以撒对面站着第一层的 Boss 萌斯戳（我也不知道 AI 为啥要这么翻译）。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case2-01-02562f6c-7ac2b4b69f)

我翻了一下 AI 的自测脚本，发现 Boss 战和通关这几张截图，都是用调试接口直接传送到对应房间拍的。Boss 那张「激战」截图，是脚本先把 Boss 的血量改成 78、再挪到指定位置摆出来的，通关界面上的击杀数和存活时间也是脚本直接写进去的。

所以我又让 AI 写了一个脚本，只用键盘从第一个房间开始真实体验游戏。

战斗画面还不错，岩石、便便堆、小地图、属性面板一应俱全，四种小怪的走位方式各不相同。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case2-02-19b0f05f-4a3738d63c)

清完房间会刷出道具，比如拿到「蟋蟀头」之后，以撒头上多了一个猫耳头套，攻击力从 3.5 涨到 6.6，眼泪也变成了三连发。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case2-03-5583ef80-d83070c942)

这就是 AI 自测时摆拍的那张 Boss 战，萌斯戳的造型倒是还原得挺到位。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case2-04-ba14c47c-0050f55ce9)

然后就尴尬了，我的脚本进 Boss 房 2.5 秒后截了张图，发现萌斯戳已经被打死了……

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case2-05-boss-8c9c6fdf-c62c590639)

不是哥们，115 滴血的 Boss，被三连发的眼泪两秒多就打没了？这是不是有点太简单了。

AI 自己没发现这个问题也不奇怪，因为它的自测从来没有从第一个房间一路打到 Boss 房。

最后小人儿触碰金箱通关，会弹出一个结算界面：

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/gemini4argon-case2-06-756d4535-8e9c05e19c)

再看看用同一段提示词的 Claude Opus 5 版本，房间里铺满了血迹和岩石，细节更丰富。

![Claude Opus 5 开发的以撒游戏](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/1785146642381-79f6906f-4e68-4427-b72e-0aa3115e82-82753c5040)

之前 Kimi K3 做的版本就简陋多了。

![Kimi K3 开发的以撒游戏](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/1784184823083-d46122a9-8b45-4719-a69d-c8eeda7906-62bccac7d3)

整体来看，Argon 的美术还原度已经接近 Opus 5，比 Kimi K3 好了一大截。但是数值平衡完全没调，Boss 一碰就碎，可玩性大打折扣。

如果你想看 Opus 5 版本完整的开发过程，
