// 口语模块数据。P1 题目卡按「一类题目一张卡」追加；P2 三个剧本只改 speaking-data.js，勿手改人设语料原文。
window.__SPEAKING_DATA__ = {
  "sections": [
    {
      "id": "habits",
      "name": "语言习惯与口语要求",
      "summary": "评分怎么打，以及你自己平时怎么开口",
      "cards": [
        {
          "id": "exam-format",
          "title": "考试结构",
          "type": "article",
          "blocks": [
            {
              "heading": "整体",
              "paragraphs": [
                "雅思口语大约 11–14 分钟，全程一对一、全程录音。考官按固定流程问，你按人设自然说，不要把答案背成演讲稿。"
              ]
            },
            {
              "heading": "Part 1",
              "paragraphs": [
                "大约 4–5 分钟，问日常生活：学习/工作、家乡、住处、习惯。每题先给结论，再用 1–2 句理由或细节，总共 2–4 句即可。"
              ]
            },
            {
              "heading": "Part 2",
              "paragraphs": [
                "看题卡准备 1 分钟，连续说 1–2 分钟。按卡片上的要点讲完，停顿可以有，但不要长时间卡死。"
              ]
            },
            {
              "heading": "Part 3",
              "paragraphs": [
                "大约 4–5 分钟，顺着 Part 2 往抽象处问。答案要比 P1 长：观点 + 理由 + 一个很短的例子。"
              ]
            }
          ]
        },
        {
          "id": "band-criteria",
          "title": "四项评分要求",
          "type": "article",
          "blocks": [
            {
              "heading": "Fluency & Coherence 流利与连贯",
              "paragraphs": [
                "少长时间空白。用 actually / because / so / but most of the time 把句子接上。宁可说短句说顺，也不要为了复杂而卡住。"
              ]
            },
            {
              "heading": "Lexical Resource 词汇",
              "paragraphs": [
                "准确、自然比生僻更重要。优先反复使用人设里的提分词伙，例如 quiet place、plan first、special for me。"
              ]
            },
            {
              "heading": "Grammatical Range & Accuracy 语法",
              "paragraphs": [
                "简单句先说对。再加一点现在/过去对比，或 because / as long as / as I grew up 这类从句。补丁 A 就是在练过去和现在的对比。"
              ]
            },
            {
              "heading": "Pronunciation 发音",
              "paragraphs": [
                "清楚比腔调重要。关键词稍加重音：quiet、plan、special、useful。不要每个词都同样用力。"
              ]
            }
          ]
        },
        {
          "id": "personal-habit",
          "title": "个人语言习惯",
          "type": "article",
          "blocks": [
            {
              "heading": "这份记录怎么用",
              "paragraphs": [
                "只记开口方式和句子接法，整理自本地 口语陪练对话.txt（不上传 GitHub）。后面给口语题写答案时，按这个节奏写，让答案能直接说出口，不要写成背诵范文。",
                "可以比临场说得更清楚，但不要改成书面语。不要把语法错误写进答案。"
              ]
            },
            {
              "heading": "怎么开口",
              "paragraphs": [
                "第一句常用 So / Uh actually / Um I think maybe，接着直接回答，不先铺垫很长。"
              ]
            },
            {
              "heading": "句子怎么接",
              "paragraphs": [
                "往下说时主要用 so / because / and / I think maybe，边说边补，不先列 1、2、3 点。思考时会重复半句再接下去，答案里保留这种短接，不要写成完整议论文。"
              ]
            },
            {
              "heading": "答案长度",
              "list": [
                "第一轮先短说：先给结论或事实",
                "被追问再补一个具体点，不要第一轮把故事讲完",
                "不要一开口就讲很长，也不要整段背人设语料"
              ]
            },
            {
              "heading": "口气",
              "paragraphs": [
                "用口语短句，感觉说得直：great / tired / interesting / special / happy。也可以一句里带两种感觉，例如 interesting but really tired。",
                "人设词伙只有能放进 So / because 这种短句时才用。"
              ]
            },
            {
              "heading": "写答案时按这个节奏",
              "list": [
                "第一句：So / Actually / I think maybe + 直接回答",
                "第二句：because / so + 补一句理由或细节",
                "第三句：只补一句感受或结果",
                "追问再展开，第一轮不要说满"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1",
      "name": "P1资料",
      "summary": "人设语料，以及按题类整理的真题和答案",
      "cards": [
        {
          "id": "persona",
          "title": "人设语料",
          "type": "persona",
          "intro": "雅思口语 5 大模块 + 2 个万能补丁。语料按个人语言习惯改过，先定人设，再套进具体题目。",
          "modules": [
            {
              "id": "recharge",
              "index": 1,
              "name": "独处充电",
              "enName": "Quiet time",
              "speech": "So I think maybe I like some quiet place. Because sometimes there are too many people, it's too noisy, and I feel tired. If I can stay alone for a bit, or just go outside and look at the view, I can relax myself and feel better.",
              "zh": "我比较喜欢安静的地方。因为有时候人太多、太吵，我会觉得累。如果能自己待一会儿，或者出去看看风景，我就能放松一点，感觉好一些。",
              "phrases": [
                { "en": "quiet place", "zh": "安静的地方" },
                { "en": "too noisy", "zh": "太吵" },
                { "en": "stay alone", "zh": "自己待一会儿" },
                { "en": "relax myself", "zh": "让自己放松" },
                { "en": "feel better", "zh": "感觉好一些" }
              ]
            },
            {
              "id": "organization",
              "index": 2,
              "name": "秩序与计划",
              "enName": "Plan first",
              "speech": "So I like to plan first. Because if I don't know what to do next, I feel a bit confused. I try to make it clear, then I can just do my best.",
              "zh": "我喜欢先想清楚再做。因为如果不知道下一步干什么，我会有点乱。我先把事情理清楚，然后就可以尽力去做。",
              "phrases": [
                { "en": "plan first", "zh": "先做计划" },
                { "en": "know what to do next", "zh": "知道下一步做什么" },
                { "en": "feel confused", "zh": "觉得乱/不确定" },
                { "en": "make it clear", "zh": "先理清楚" },
                { "en": "do my best", "zh": "尽力做好" }
              ]
            },
            {
              "id": "memories",
              "index": 3,
              "name": "怀旧与情感",
              "enName": "Special memories",
              "speech": "I think some things are special for me. Because they remind me of a time, or they make me feel good, especially when I was in a low mood. So I care about the feeling, not only if it looks expensive.",
              "zh": "有些东西对我来说比较特别。因为它们会让我想起一段时间，或者让我感觉好一点，尤其是心情不好的时候。所以我更在意感觉，不只是看起来贵不贵。",
              "phrases": [
                { "en": "special for me", "zh": "对我来说很特别" },
                { "en": "remind me", "zh": "让我想起" },
                { "en": "great memory", "zh": "很好的回忆" },
                { "en": "low mood", "zh": "心情不好" },
                { "en": "make me feel good", "zh": "让我感觉好一点" }
              ]
            },
            {
              "id": "practicality",
              "index": 4,
              "name": "实用主义",
              "enName": "Useful things",
              "speech": "So I'm a practical person. I care more about if it is useful, not only if it looks nice. If it is simple and I can use it every day, I think it's great. I don't like to follow every new thing.",
              "zh": "我比较实际。我更在意好不好用，不只是好不好看。如果简单、每天都能用，我就觉得很好。我不喜欢什么新就追什么。",
              "phrases": [
                { "en": "useful", "zh": "有用/好用" },
                { "en": "looks nice", "zh": "好看" },
                { "en": "simple", "zh": "简单" },
                { "en": "use it every day", "zh": "每天都能用" },
                { "en": "follow every new thing", "zh": "什么新就追什么" }
              ]
            },
            {
              "id": "knowledge",
              "index": 5,
              "name": "知识与阅读",
              "enName": "Learn new things",
              "speech": "So I like to learn new things. I spend a lot of time to read or just try something, because I think it is interesting. It helps me know more, and I can understand things better.",
              "zh": "我喜欢学新东西。我会花很多时间看书，或者自己去试，因为我觉得有意思。这样我能知道得更多，也能把事情理解得更清楚。",
              "phrases": [
                { "en": "learn new things", "zh": "学新东西" },
                { "en": "it is interesting", "zh": "我觉得有意思" },
                { "en": "try something", "zh": "自己去试" },
                { "en": "know more", "zh": "知道得更多" },
                { "en": "understand better", "zh": "理解得更清楚" }
              ]
            }
          ],
          "patches": [
            {
              "id": "patch-a",
              "name": "补丁 A",
              "scene": "Childhood 相关问题：先承认过去不同，再转折到现在的人设",
              "speech": "Uh actually, at that time I was different. But later I changed a lot. Now...",
              "zh": "其实那时候的我和现在不太一样。但后来我变了很多。现在……",
              "note": "后面直接接 5 个模块之一。"
            },
            {
              "id": "patch-b",
              "name": "补丁 B",
              "scene": "二选一的死局，或你不想把话说死的时候",
              "speech": "Well, it really depends. Sometimes I ..., but most of the time I like to...",
              "zh": "嗯，这真的要看情况。有时候我会……，但大多数时候我更喜欢……",
              "note": "后面接上 5 个模块之一。"
            }
          ]
        }
        // 题目卡模板（一类题目一张卡）：
        // {
        //   id: "hometown",
        //   title: "Hometown",
        //   type: "topic",
        //   intro: "这类题优先套哪个人设模块",
        //   questions: [
        //     { q: "真题", a: "基于人设和题目要求的英文回答", zh: "中文", note: "用到的模块/补丁" }
        //   ]
        // }
      ]
    },
    {
      "id": "p2",
      "name": "P2&P3资料",
      "summary": "三个万能剧本先定剧本再套题，P3 顺着 Part 2 追问",
      "cards": [
        {
          "id": "scripts",
          "title": "剧本卡片",
          "type": "group",
          "summary": "三个故事分工不同，先定剧本再套题",
          "intro": "三个剧本不要讲成同一类「比赛赢了」。一号是短短几天的科技经历和遇见的人，二号是高中篮球和现在还在看的球，三号是和老师去哈萨克斯坦开会的学术之旅（老师、波折、旅行文化、学术目标）。只背 I 人版。考场按题目抽细节，不要把三段一次说完。",
          "cards": [
            {
              "id": "hackathon",
              "title": "剧本一（港深黑客松）",
              "type": "script",
              "hook": "科技 / 短时经历 / 遇见的人 / 城市",
              "intro": "科技与生活万能武器。核心是今年八月的黑客松：深圳做项目，香港 pitching，MVP，签名队服，后来成为女朋友的队友，还有香港科学园。",
              "topics": {
                "status": "持续更新中",
                "cover": [
                  "科技产品、有用的发明、想拥有的科技、App、动手做的东西",
                  "团队工作、成功的事、重要决定、骄傲的经历、有趣的活动",
                  "遇见的人、朋友、教你东西的人、想继续了解的人、和朋友度过的夜晚",
                  "去过的城市、想再去的城市、喜欢的地方、建筑、靠近海/自然的地方",
                  "收到的礼物、有纪念意义的衣服、特别的物品（签名队服）",
                  "动物、喜欢的宠物（边牧）、和别人因共同爱好走近"
                ]
              },
              "logic": "这个剧本负责「新的科技经历 + 一个地方 + 一个重要的人」。不要把它讲成带队几年的故事，那是剧本三。",
              "logicItems": [
                { "when": "当考到「物品」时：", "then": "主办方给的队服，上面有名字，最后大家互相签名。" },
                { "when": "当考到「经历 / 团队 / 成功」时：", "then": "深圳开发、香港 pitching、故事打动评委、拿到 MVP。难的是和不同学校、不同年龄的人协作。" },
                { "when": "当考到「人物」时：", "then": "先是队友，比赛后更了解彼此，都喜欢边牧，后来成为女朋友。她比我大一点，让我更清楚自己是谁。" },
                { "when": "当考到「地点 / 城市」时：", "then": "香港科学园：海景好看，创业氛围和包容的文化让我印象很深。" },
                { "when": "当考到「习惯 / 性格」时：", "then": "我是 I 人，平时喜欢安静和先计划；这次我承担了很多协作，但队友很友善，所以我还能做下来。" }
              ],
              "plot": "今年八月，我们在深圳开发，去香港 pitching。项目是一个机械臂陪伴产品，评委喜欢我们很动人的应用故事，拿了 MVP。团队大概六个人，来自不同学校，年龄差很大，最小的只有 15 岁。对我来说最难的是协作，但大家都很友善。主办方发了带名字的队服，最后互相签名。比赛之后我和一个队友更了解彼此，都喜欢小狗、尤其是边牧，每天互相分享，后来她成为我的女朋友。香港科学园的海景和开放的文化，我到现在都记得。",
              "masterNote": "把下面三段背熟。这是素材库，考场只抽和题目有关的部分。只背 I 人版。Part B 接 P1 人设：quiet place、plan first、special for me、learn new things。",
              "audioNote": "音频待录。先背文字。",
              "parts": [
                {
                  "id": "a",
                  "name": "Part A：剧情铺垫（20秒）",
                  "scene": "时间地点 + 项目 + MVP + 签名队服",
                  "speech": "I'd like to talk about a hackathon I joined this August. We developed in Shenzhen, then we went to Hong Kong to do the pitching. We made a robot-arm product. It is like a companion for women, and we had a touching story as the use case. Finally we got the MVP. The organizer gave us team shirts with our names, and at the end we signed them for each other.",
                  "zh": "我想讲今年八月参加的一次黑客松。我们在深圳开发，然后去香港做 pitching。我们做了一个机械臂产品，有点像女性陪伴产品，还有一个很动人的应用故事。最后拿了 MVP。主办方发了带我们名字的队服，结束时大家互相签了名。"
                },
                {
                  "id": "b",
                  "name": "Part B：深度解释与升华（1分30秒）",
                  "scene": "I 人协作 + 女朋友与边牧 + 香港科学园",
                  "speech": "Speaking of why this is special for me, well, it goes into my personality. So I think maybe I am more like a quiet person. I like to plan first. If there are too many people, I feel tired. But in this hackathon I did a lot of teamwork. We had about six people, from different universities, and the youngest boy was only 15. So we were very different, and the hard part for me was to cooperate. But my teammates were really kind, so I didn't feel too stressed. I tried to make the tasks clear, then we just did our best. At first we didn't even think about winning. We just wanted to try something interesting. After the competition, I got to know one teammate better. We both like dogs, especially Border Collies, and we shared photos every day. Later she became my girlfriend. She is a bit older than me, and she taught me I need to know who I am. Also, Hong Kong Science Park left a strong impression. The sea view is beautiful, and the culture feels open. I think maybe I learned that even if I like quiet time, I can still work with people, as long as the team is friendly.",
                  "zh": "说到为什么这段经历对我特别，其实和我的性格有关。我比较喜欢安静，也喜欢先想清楚再做。人太多我会累。但这次黑客松里我做了很多协作。我们大概六个人，来自不同学校，最小的只有 15 岁，所以差别很大，对我来说最难的就是配合。但队友都很友善，我没有太有压力。我先把任务理清楚，然后大家尽力做。一开始我们甚至没想着要赢，只是觉得这件事有意思。比赛之后，我和一个队友更了解彼此。我们都喜欢狗，尤其是边牧，每天互相分享照片，后来她成为我的女朋友。她比我大一点，让我更明白要知道自己是谁。香港科学园也让我印象很深，海景很好看，文化很开放。我大概学到：即使我喜欢独处，只要团队友善，我还是可以和人一起做事。"
                },
                {
                  "id": "c",
                  "name": "Part C：结尾（10秒）",
                  "scene": "收束到特殊，不把话说满",
                  "speech": "So that's why this experience is special for me. It's not only a competition. It gave me a prize, a person, and a place I want to remember.",
                  "zh": "所以这段经历对我很特别。它不只是一场比赛。它给了我一个奖、一个人和一个我想记住的地方。"
                }
              ]
            },
            {
              "id": "basketball",
              "title": "剧本二（朋友送的篮球）",
              "type": "script",
              "hook": "人物 / 运动 / 旧物 / 高中改变",
              "intro": "人物与热爱万能武器。核心不是又一场比赛赢了，而是高中不自信时篮球让我交到朋友，威少给我力量，球会变旧，友情还在。",
              "topics": {
                "status": "持续更新中",
                "cover": [
                  "运动员、名人、敬佩的人、影响过你的人、有能量的人（威少）",
                  "体育运动、喜欢的运动、线上体育赛事、有趣的视频、和朋友一起做的事",
                  "朋友、送你东西的人、帮助你走出低落的人、团队里的同学",
                  "物品：篮球、旧物、朋友送的礼物、对你有特殊意义的东西",
                  "地点：球场、体育馆、让你感觉好一点的地方",
                  "高中改变、低落的时期、遗憾的比赛、以前热爱现在更常看球"
                ]
              },
              "logic": "这个剧本负责「一个你佩服的人 + 一项运动 + 一件会变旧的东西」。不要讲成黑客松或机器人比赛。",
              "logicItems": [
                { "when": "当考到「人物 / 运动员 / 名人」时：", "then": "威少。他非常 power，给当时不自信的我很大激励。" },
                { "when": "当考到「物品 / 礼物 / 旧物」时：", "then": "朋友送的篮球。它们慢慢变旧，有点像友情。" },
                { "when": "当考到「经历 / 运动 / 朋友」时：", "then": "高中体育课打球，认识很多朋友，改变了我；班赛被绝杀，很遗憾。" },
                { "when": "当考到「地点」时：", "then": "球场或体育馆。它让我想起自己身体里也有力量。" },
                { "when": "当考到「过去和现在」时：", "then": "用补丁 A：那时候不自信，后来因为篮球变了；现在更忙，更多是看球赛。" }
              ],
              "plot": "高中时我很不自信，成绩也不好，心情很低。体育课打篮球，和同学配合，认识了很多朋友，也改变了我自己。我喜欢威少，他非常 power，给当时的我很大激励。班赛我们被绝杀，到现在都觉得遗憾。我有很多朋友送的篮球，它们慢慢变旧，有点像友情。高中非常热爱；现在太忙了，更多是看球赛，周末偶尔还会和朋友或女朋友打。",
              "masterNote": "Part B 用补丁 A：Uh actually, at that time I was different. 再接到 special for me、make me feel good、do my best。不要把威少讲成社牛人设。",
              "audioNote": "音频待录。先背文字。",
              "parts": [
                {
                  "id": "a",
                  "name": "Part A：剧情铺垫（20秒）",
                  "scene": "高中不自信 + 篮球交友 + 威少 + 班赛绝杀",
                  "speech": "I'd like to talk about basketball. In high school I was not confident, and I was in a low mood because my scores were not good. But in PE class I played basketball with my classmates, and I made many friends. It changed me. I like Russell Westbrook. He is very powerful, and that gave me a lot of energy. I still remember a class match. We lost at the last second, and I felt so sad.",
                  "zh": "我想讲篮球。高中时我很不自信，成绩不好，心情也很低。但体育课和同学打球，认识了很多朋友，这件事改变了我。我喜欢拉塞尔·威斯布鲁克，他非常有力量，给了我很多能量。我还记得一场班赛，我们最后一秒被绝杀，当时很难过。"
                },
                {
                  "id": "b",
                  "name": "Part B：深度解释与升华（1分30秒）",
                  "scene": "补丁 A + 球场 + 旧篮球 + 现在看球",
                  "speech": "Speaking of why basketball is special for me... Uh actually, at that time I was different. I didn't believe in myself. Basketball was simple for me. I didn't need to talk a lot. I just played, I cooperated with others, and I slowly felt better. The basketball field still reminds me of the power inside myself. Westbrook is special because he always plays hard. When I watch him, I want to do my best, even if the result is not perfect. I have a few basketballs from friends. They are getting old now, like the friendship. That is a great memory. Now I am busier, so I don't play as much. Most of the time I just watch games. But sometimes on the weekend I still play with friends, or with my girlfriend. It is interesting, and it makes me feel good.",
                  "zh": "说到篮球为什么对我特别……其实那时候的我和现在不太一样。我不太相信自己。篮球对我来说很简单，不需要讲很多话，就是打球、和别人配合，然后慢慢感觉好一点。球场到现在还会让我想起自己身体里也有力量。威少对我特别，是因为他一直很拼。看他打球时，我会想尽力做好，哪怕结果不完美。我有几个朋友送的篮球，它们现在慢慢变旧了，有点像友情。那是很好的回忆。现在我更忙，打得没有以前多，大多数时候是看球。但周末有时还是会和朋友或女朋友打。我觉得有意思，也会让我感觉好一点。"
                },
                {
                  "id": "c",
                  "name": "Part C：结尾（10秒）",
                  "scene": "运动接到人和记忆",
                  "speech": "So basketball is not only a sport for me. It reminds me of how I changed, and of the people who were with me.",
                  "zh": "所以篮球对我来说不只是一项运动。它让我想起自己是怎么改变的，也想起当时在身边的人。"
                }
              ]
            },
            {
              "id": "kazakhstan",
              "title": "剧本三（哈萨克斯坦学术会议）",
              "type": "script",
              "hook": "老师 / 国际会议 / 旅行文化 / 学术成长",
              "intro": "老师与学术万能武器。核心是今年六月和老师去哈萨克斯坦参加机器人方向国际会议：老师德国多年研究后回国教书、亲手改论文、航班延误被化解、阿拉木图雪山与马肉宴会。它接「老师 / 决定 / 波折 / 旅行 / 文化 / 目标」，不要讲成黑客松那样的团队比赛。",
              "topics": {
                "status": "持续更新中",
                "cover": [
                  "尊敬的年长的人、教你新技能的人、有条理的人、机智解决问题的人、做困难事情并成功的人（老师）",
                  "重要决定、对结果开心的重要决定、改变重要想法（犹豫后接下去开会的机会）",
                  "计划被打乱、近期改变的计划、早起经历（航班延误与化解）",
                  "成功的事、骄傲的经历、学新东西（第一次以论文作者身份参加国际会议）",
                  "去过的城市、推荐旅行的地方、想再去的地方、靠近自然的地方、建筑（阿斯塔纳、阿拉木图雪山）",
                  "特别场合的食物、饮食文化（马肉、宴会）",
                  "印象深刻的聚会、有趣的活动、想继续了解的人（会议交流、老师请客喝咖啡）",
                  "长久目标/抱负（走向国际学术、出国深造）"
                ]
              },
              "logic": "这个剧本负责「一个长辈式的老师 + 一次国外学术之旅 + 一次现场波折」，还自带旅行、文化、食物素材。分界规则：国外、学术、和长辈、文化体验给这个剧本；国内、比赛、年轻人团队、热闹给剧本一。",
              "logicItems": [
                { "when": "当考到「人物 / 老师 / 年长者」时：", "then": "老师在德国做了很多年研究，回校教书；对学生很好，请聚会喝咖啡，亲手一个词一个词改我论文。" },
                { "when": "当考到「决定 / 想法」时：", "then": "老师觉得我优秀，我作为论文作者去开会；去之前犹豫紧张，最后收获了自信。" },
                { "when": "当考到「问题 / 波折」时：", "then": "航班延误；老师及时联系航空公司、和当地主办方沟通，后续安排没受影响。学到 make it clear + do my best。" },
                { "when": "当考到「地点 / 旅行」时：", "then": "阿斯塔纳和阿拉木图两座城；阿拉木图附近有雪山，风景很好。" },
                { "when": "当考到「食物 / 文化」时：", "then": "饮食很不一样，吃很多肉、甚至马肉；我们的宴会非常好吃。" },
                { "when": "当考到「性格 / 习惯」时：", "then": "我和老师一样喜欢先 plan first；他强调休息的重要。" },
                { "when": "当考到「目标 / 学习」时：", "then": "老师激励我走向国际学术；想继续学新东西、发论文、出国看看。" }
              ],
              "plot": "今年六月，我作为一篇机器人方向论文的作者，跟着老师去哈萨克斯坦参加国际学术会议，走了阿斯塔纳和阿拉木图两座城。老师在德国做了很多年研究，回校教书，对学生很好：请聚会、喝咖啡、亲手一个词一个词改我的论文，还说尽力做但要休息。他和我一样喜欢先做好计划。航班延误了，老师及时联系航空公司、和主办方沟通，后面的安排都没受影响。会上我一开始很紧张，但当地文化开放、人们友善，我慢慢有了自信，敢和学者交流。阿拉木图附近有雪山，风景很好；那边吃很多肉、甚至马肉，我们的宴会非常好吃。这趟下来，老师大大激励了我走向国际学术的想法。",
              "masterNote": "背熟三段。素材库用法：人物 / 决定 / 波折抽对应层，地点食物只在旅行文化题用。Part B 接 P1 人设：plan first、learn new things、do my best、make me feel good。老师用「在德国研究多年、我尊敬的人」。波折部分强调 make it clear + do my best。",
              "audioNote": "音频待录。先背文字。",
              "parts": [
                {
                  "id": "a",
                  "name": "Part A：剧情铺垫（20秒）",
                  "scene": "今年六月 + 哈萨克斯坦 + 机器人会议 + 论文作者",
                  "speech": "I'd like to talk about a trip to Kazakhstan this June. My teacher took me to an international conference about robots. I was one of the authors of a paper, so I went there to listen to the talks and to learn. We visited two cities, Astana and Almaty.",
                  "zh": "我想讲今年六月去哈萨克斯坦的一次旅行。老师带我去参加一个机器人方向的国际学术会议。我是一篇论文的作者之一，所以去听汇报、学东西。我们去了阿斯塔纳和阿拉木图两个城市。"
                },
                {
                  "id": "b",
                  "name": "Part B：深度解释与升华（1分30秒）",
                  "scene": "老师（德国经历 + 改论文 + 有计划） + 航班延误化解 + 会上的自信 + 雪山和食物",
                  "speech": "Speaking of why this trip is special for me... it is mostly about my teacher. He did research in Germany for many years, and then he came back to teach at my school. He is very kind to students. He invites us to gatherings, and he often buys us coffee. He corrected my paper by hand, word by word. He always says, do your best, but rest is important too. So I think maybe we are similar: we both like to plan first. On this trip, our flight was delayed. But he called the airline and talked to the organizers, so everything after was still fine. I learned from him: when something goes wrong, make it clear, then just do your best. At the conference, at first I was nervous. You know, my English, and it was my first time. But the culture there felt open, and people were friendly. So I slowly felt better, and I got the confidence to talk with scholars. Kazakhstan is beautiful. There are snow mountains near Almaty. The food is very different. They eat a lot of meat, even horse meat. Our banquet was really delicious.",
                  "zh": "说到这趟为什么对我特别……主要是老师。他在德国做了很多年研究，然后回到我们学校教书。他对学生很好，会请大家聚会，常请我们喝咖啡。他亲手改我的论文，一个词一个词地改。他总说，尽力做，但休息也很重要。所以我觉得我们挺像的：都喜欢先做好计划。这次我们的航班延误了，但他及时联系航空公司，和主办方沟通，后面的安排都没受影响。我从他那里学到：出问题的时候，先把事情理清楚，然后尽力去做。会上我一开始很紧张，我的英语，而且也是第一次。但那里的文化很开放，人们很友善。我慢慢感觉好了一点，有了和学者交流的自信。哈萨克斯坦很美，阿拉木图附近有雪山。吃的也很不一样，他们吃很多肉，甚至有马肉。我们的宴会非常好吃。"
                },
                {
                  "id": "c",
                  "name": "Part C：结尾（10秒）",
                  "scene": "从会议收到人、经历和梦想",
                  "speech": "So this trip is not only a conference for me. It gave me a paper, a person to learn from, and a bigger dream for my future.",
                  "zh": "所以这次旅行对我来说不只是一个会议。它给了我一篇论文、一个值得学习的人，和一个关于未来的更大的梦想。"
                }
              ]
            }
          ]
        },
        {
          "id": "p2-people",
          "title": "人物类",
          "type": "placeholder",
          "text": "人物类题卡还没按题整理。先用剧本卡片：威少、女朋友、哈萨克斯坦的老师。"
        },
        {
          "id": "p2-places",
          "title": "地点类",
          "type": "placeholder",
          "text": "地点类题卡还没按题整理。先用剧本卡片：香港科学园、球场、阿拉木图雪山。"
        },
        {
          "id": "p2-objects",
          "title": "物品类",
          "type": "placeholder",
          "text": "物品类题卡还没按题整理。先用剧本卡片：签名队服、朋友送的篮球、那篇论文。"
        },
        {
          "id": "p2-events",
          "title": "事件类",
          "type": "placeholder",
          "text": "事件类题卡还没按题整理。先用剧本卡片：黑客松、班赛绝杀、航班延误化解。"
        },
        {
          "id": "p3-reasons",
          "title": "P3 原因类",
          "type": "placeholder",
          "text": "Why / What causes... 这类追问的语料待整理。"
        },
        {
          "id": "p3-effects",
          "title": "P3 影响类",
          "type": "placeholder",
          "text": "影响、结果、利弊类追问待整理。"
        },
        {
          "id": "p3-compare",
          "title": "P3 对比类",
          "type": "placeholder",
          "text": "过去和现在、不同人群对比的说法待整理。补丁 A 的过去/现在对比可以先用在这里。"
        },
        {
          "id": "p3-future",
          "title": "P3 未来类",
          "type": "placeholder",
          "text": "Will / In the future 类追问待整理。"
        }
      ]
    },
    {
      "id": "practice",
      "name": "考场演练",
      "summary": "按部分计时练，或走一套完整口试",
      "cards": [
        {
          "id": "drill-p1",
          "title": "P1 抽题",
          "type": "drill",
          "drill": "p1",
          "summary": "大陆 31 个话题随机抽，小问逐题过，支持优先新题"
        },
        {
          "id": "drill-p2",
          "title": "P2 计时 + P3 追问",
          "type": "drill",
          "drill": "p2",
          "summary": "1 分钟准备 + 2 分钟作答，接着过本题的 P3 追问"
        },
        {
          "id": "drill-full",
          "title": "全套模拟",
          "type": "drill",
          "drill": "full",
          "summary": "P1 → P2 → P3 完整流程，共 11–14 分钟"
        }
      ]
    }
  ]
};
