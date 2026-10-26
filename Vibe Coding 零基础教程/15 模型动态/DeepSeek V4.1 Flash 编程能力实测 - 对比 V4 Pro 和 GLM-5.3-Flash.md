---
permalink: /models/deepseek-v4-1-flash/
title: "DeepSeek V4.1 Flash 编程能力实测"
---
# DeepSeek V4.1 Flash 编程能力实测 - 对比 V4 Pro 和 GLM-5.3-Flash

> 便宜好几倍的 Flash 模型，把自家的 Pro 旗舰给干掉了

2026 年 9 月 10 日，DeepSeek 正式发布了 V4.1 Flash 模型。

它是一个 552B 参数的 MoE 模型，采用了全新的模型结构，**原生支持多模态视觉理解**，而且直接开源了。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260910142322329-cbc1f76ddb)

这次更新力度很大。DeepSeek 网页版原来的快速、专家、识图 3 个模式直接合并成了一个入口，用户不需要再手动选模式了，AI 会根据任务复杂度自动调度，检测到图片就自动激活视觉能力。

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260910140727245-9b65f26556)

炸裂的是，DeepSeek 官方称：**V4.1 Flash 在性能、费用、速度、总用时等各项指标上已经全面超越 V4 Pro！**

好家伙，自家的快速模型吊打旗舰模型？

要知道，DeepSeek 的 Flash 模型比 Pro 模型便宜好几倍！效果反而更好？

那之后谁还会用 Pro 模型啊？

![](https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev/guide/image-20260910140651241-20260910150230183-6e125b98dc)

果不其然，官方已经下线了旧的 V4 Flash 和 V4 Flash Vision Exp 模型，而且 **9 月 14 日 12:00 之后 V4 Pro 也要正式下线**，到时候所有发给 `deepseek-v4-pro` 的请求全部自动路由到 V4.1 Flash，并且按 V4.1 Flash 的单价计费，一直持续到未来 V4.1 Pro 上线。

> 后续更新：DeepSeek 后来应用户需求取消了 V4 Pro 的下线计划，9 月 14 日之后继续提供 `deepseek-v4-pro` 的 API 服务，计费方式不变。10 月 17 日 V4.1 Flash 又更新到了 1017 版本，实测