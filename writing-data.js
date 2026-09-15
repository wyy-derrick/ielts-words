// 作文模块数据。模板空位用 ____ 表示，中文提示写在 «» 里；改模板或话题素材只动这个文件，勿改 writing.html。
window.__WRITING_DATA__ = {
  "sections": [
    {
      "id": "task1",
      "name": "小作文 Task 1",
      "summary": "时态规则、核心词汇与五类图表模板",
      "cards": [
        {
          "id": "tenses",
          "title": "时态规则（动笔前先看）",
          "type": "article",
          "blocks": [
            {
              "heading": "先定时态，再动笔",
              "paragraphs": [
                "Task 1 用什么时态完全由图表里的年份决定。写第一句之前先圈出时间范围：全是过去年份、有将来年份、还是根本没年份，然后整篇统一，时态错了是最伤分的基础错误。"
              ]
            },
            {
              "heading": "动态图（线图 / 柱图 / 表格）",
              "paragraphs": [
                "年份全在过去 → 通篇一般过去时：started, rose, fell, remained, finished at。",
                "出现将来年份 → will + 动词原形，或 is expected to / is predicted to。",
                "过去 + 将来混合 → 已发生的用过去时、未发生的用将来，各管各的，不要一句话里混用。"
              ]
            },
            {
              "heading": "静态图（饼图 / 单年表格）",
              "paragraphs": [
                "只有一个时间点，照样看年份：过去年份 → 过去时（accounted for, was, made up, was seen）。",
                "没给年份或给现在 → 一般现在时（accounts for, is, represents）。"
              ]
            },
            {
              "heading": "地图题",
              "paragraphs": [
                "过去的变化 → 一般过去时 + 被动语态：was built, was demolished, was converted into。",
                "by + 过去年份 → 过去完成时被动：had been demolished and replaced by。",
                "现状 + 未来规划 → 将来被动：will be built / is expected to be constructed。"
              ]
            },
            {
              "heading": "流程图",
              "paragraphs": [
                "流程图不看年份，通篇一般现在时 + 被动语态：is transported, is then dried, is packed。",
                "Once + 现在完成时被动表示「这一步完成后进入下一步」：Once the beans have been dried, they are packed."
              ]
            },
            {
              "heading": "交卷前 2 分钟只查动词",
              "paragraphs": [
                "过去时的 -ed 有没有漏；被动语态 be + done 是否完整；第三人称单数有没有加 s。只查这三样，性价比最高。"
              ]
            }
          ]
        },
        {
          "id": "vocab",
          "title": "核心词汇",
          "type": "phrases",
          "intro": "动态图全靠这几组动词撑起来：一组说方向，一组说快慢，一组负责衔接。背默模式遮住中文，点词条自查。",
          "items": [
            {
              "en": "increase / grow",
              "zh": "上升（不及物，直接接数据）",
              "eg": "The figure increased from 10% to 25% between 2000 and 2010.",
              "egZh": "2000 到 2010 年间，该数字从 10% 升到 25%。",
              "from": "上升"
            },
            {
              "en": "peak",
              "zh": "达到峰值",
              "eg": "The number of visitors peaked at 3 million in 2008.",
              "egZh": "游客数量在 2008 年达到 300 万的峰值。",
              "from": "上升"
            },
            {
              "en": "decrease / fall / decline",
              "zh": "下降",
              "eg": "Sales fell significantly after 2015.",
              "egZh": "2015 年之后销售额显著下降。",
              "from": "下降"
            },
            {
              "en": "remain relatively stable",
              "zh": "基本保持稳定",
              "eg": "The percentage remained relatively stable throughout the period.",
              "egZh": "整个时间段里该百分比基本保持稳定。",
              "from": "稳定 / 波动"
            },
            {
              "en": "fluctuate",
              "zh": "波动",
              "eg": "The price fluctuated between $5 and $8 over the decade.",
              "egZh": "十年间价格在 5 到 8 美元之间波动。",
              "from": "稳定 / 波动"
            },
            {
              "en": "experience an upward / downward trend",
              "zh": "呈上升 / 下降趋势（趋势句型 1）",
              "eg": "Coal experienced a downward trend over the decade.",
              "egZh": "十年间煤炭呈下降趋势。",
              "from": "趋势句型"
            },
            {
              "en": "witness a xx growth / decline",
              "zh": "见证了……的增长 / 下滑（趋势句型 2）",
              "eg": "The city witnessed a significant growth in its population.",
              "egZh": "这座城市见证了人口的显著增长。",
              "from": "趋势句型"
            },
            {
              "en": "significant / significantly",
              "zh": "显著的 / 显著地（修饰幅度大）",
              "eg": "There was a significant increase in car ownership.",
              "egZh": "汽车保有量显著增长。",
              "from": "修饰词"
            },
            {
              "en": "dramatically",
              "zh": "急剧地（修饰变化又快又大）",
              "eg": "Unemployment rose dramatically during the recession.",
              "egZh": "经济衰退期间失业率急剧上升。",
              "from": "修饰词"
            },
            {
              "en": "similarly",
              "zh": "同样地（衔接同向的两个趋势）",
              "eg": "Similarly, the proportion of women also experienced an upward trend.",
              "egZh": "同样地，女性占比也呈上升趋势。",
              "from": "修饰词"
            },
            {
              "en": "Besides / What's more / Furthermore",
              "zh": "此外、而且（补充新信息）",
              "eg": "What's more, the figure for gas remained the second largest.",
              "egZh": "而且，天然气的数字保持第二高。",
              "from": "衔接词"
            },
            {
              "en": "Meanwhile",
              "zh": "与此同时（同一时期另一对象，常带对比）",
              "eg": "Meanwhile, the number of cinema visits remained low.",
              "egZh": "与此同时，去电影院的次数仍然很低。",
              "from": "衔接词"
            },
            {
              "en": "In addition to that / Apart from this",
              "zh": "除此之外（再补一点）",
              "eg": "In addition to that, the old market was replaced by a new shopping centre.",
              "egZh": "除此之外，老市场被新购物中心取代了。",
              "from": "衔接词"
            }
          ]
        },
        {
          "id": "dynamic",
          "title": "动态图模板",
          "type": "template",
          "tag": "线图 / 柱图 / 表格等随时间变化的数据",
          "intro": "四段结构：① 开头改写题目 → ② 总概况 2 点（不带数据）→ ③ 第一细节（上升组）→ ④ 第二细节（下降 / 平稳组）。",
          "tense": "过去年份 → 通篇一般过去时（started / rose / fell）；出现将来年份 → will 或 is expected to",
          "paragraphs": [
            {
              "label": "① 开头：重写题目",
              "note": "图表类型 + 主题 + 时间范围，同义替换不要抄原词。",
              "sentences": [
                {
                  "en": "The provided charts/graphs/tables illustrate/compare ____«主题» over a ____«年限» period between ____ and ____.",
                  "zh": "所给图表展示了……主题在……到……年期间的情况。"
                }
              ]
            },
            {
              "label": "② 总概况：概括 2 点（无数据）",
              "note": "概括 1 套 experience 句型，概括 2 套 witness 句型；只说方向和大小，不写任何数字。",
              "sentences": [
                {
                  "en": "Overall, it is clear that ____«概括1，用 experience 句型». Furthermore, it is noticeable that ____«概括2，用 witness 句型».",
                  "zh": "总的来说，……很明显；此外，……也值得关注。"
                }
              ]
            },
            {
              "label": "③ 第一细节：最突出的上升组",
              "note": "started → rose → before finishing 把起点、拐点、终点串成一条线；同向的另一个对象用 Similarly 接上。",
              "sentences": [
                {
                  "en": "Regarding ____«第一细节», ____ started at ____ in ____. Following this, it rose dramatically to ____, before finishing at ____.",
                  "zh": "关于……，起点是……，随后急剧升到……，最终停在……。"
                },
                {
                  "en": "Similarly, ____ also experienced an upward trend, ____«doing 形式补充数据或细节».",
                  "zh": "同样，……也呈上升趋势，……。"
                }
              ]
            },
            {
              "label": "④ 第二细节：走向相反的一组",
              "note": "先写下降的，再写平稳的；Meanwhile 引出相对稳定的那一个收尾。",
              "sentences": [
                {
                  "en": "In contrast, ____«第二细节» followed the opposite pattern. It began at ____ but then fell significantly, ending at ____.",
                  "zh": "相反，……走势正好反过来：起点……，随后大幅下降，止于……。"
                },
                {
                  "en": "Meanwhile, ____ remained relatively stable throughout the period, finishing at ____.",
                  "zh": "与此同时，……整个期间保持平稳，最终在……。"
                }
              ]
            }
          ]
        },
        {
          "id": "static",
          "title": "静态图模板",
          "type": "template",
          "tag": "饼图 / 无时间轴的表格",
          "intro": "四段结构：① 开头 → ② 总概况 2 点（无数据）→ ③ 第一细节（占比最大）→ ④ 第二细节（其余部分按大小排）。",
          "tense": "只有一个时间点，按年份定时态：过去年份 → 过去时（accounted / was / made up）；无年份 → 一般现在时",
          "paragraphs": [
            {
              "label": "① 开头：重写题目",
              "note": "静态图开头只带一个年份。",
              "sentences": [
                {
                  "en": "The provided pie charts/table illustrate information about ____«主题» in ____«年份».",
                  "zh": "所给饼图 / 表格展示了……年在……方面的信息。"
                }
              ]
            },
            {
              "label": "② 总概况：概括 2 点（无数据）",
              "note": "概括 1 = 谁占大头；概括 2 = 剩下的分布特征。同样不写数字。",
              "sentences": [
                {
                  "en": "Overall, it is clear that ____«概括1：占比最大的是谁». Furthermore, it is noticeable that ____«概括2：其余部分的分布».",
                  "zh": "总的来说，……；此外，……。"
                }
              ]
            },
            {
              "label": "③ 第一细节：占比最大",
              "note": "最大项 + 与第二大对比 + 两者合计，三句一层层压下来。",
              "sentences": [
                {
                  "en": "Regarding ____«第一细节», it accounted for the largest figure, at ____. This was significantly higher than ____, which represented ____. Together, these two parts comprised ____ of the total.",
                  "zh": "关于……，它占比最大，为……；远高于……的……；这两项合计占总数的……。"
                }
              ]
            },
            {
              "label": "④ 第二细节：其余部分",
              "note": "较小的、相近的、最小的，按大小顺序扫完就收段。",
              "sentences": [
                {
                  "en": "In contrast, ____ made up a smaller percentage, at ____. This was followed by ____ and ____, which both had similar figures of ____ and ____ respectively. The smallest proportion was seen in ____, at just ____.",
                  "zh": "相比之下，……占比较小，为……；其次是……和……，分别约为……和……；占比最小的是……，仅有……。"
                }
              ]
            }
          ]
        },
        {
          "id": "map",
          "title": "地图题模板",
          "type": "template",
          "tag": "同一地点两个年代（或现状 + 规划）的对比",
          "intro": "概括写两个最显著的变化（如绿地减少、居民空间上升）；方位描述把 south / north 放在前面，再往 east / west 展开。四段：① 开头 → ② 总概况 2 个显著变化 → ③ 方位一 → ④ 方位二。",
          "tense": "过去变化 → 过去时被动（was built / was demolished / was converted into）；by + 过去年份 → had been demolished；未来规划 → will be built",
          "paragraphs": [
            {
              "label": "① 开头：重写题目",
              "note": "地图题固定写 main changes that took place。",
              "sentences": [
                {
                  "en": "The provided maps illustrate the main changes that took place in ____«地点» between ____ and ____.",
                  "zh": "所给地图展示了……地在……到……期间发生的主要变化。"
                }
              ]
            },
            {
              "label": "② 总概况：2 个显著变化",
              "note": "不进细节，只点出整个区域「大变样」+ 两个最明显的方向性变化。",
              "sentences": [
                {
                  "en": "Overall, it is clear that the area underwent a significant transformation, ____«显著变化1». Furthermore, it is also noticeable that ____«显著变化2».",
                  "zh": "总的来说，该区域发生了巨大转变：……；此外，……也很明显。"
                }
              ]
            },
            {
              "label": "③ 方位一：south / north 优先",
              "note": "先写没变的（remained unchanged），再写新增的（a major addition / new … being built）。",
              "sentences": [
                {
                  "en": "Regarding the ____«south / north» part of the ____, ____«什么» remained unchanged throughout the period. However, a major addition was ____. What's more, ____«什么» was also developed, with new ____ being built where ____ used to be.",
                  "zh": "在……的南部 / 北部，……整个期间没有变化；不过新增了……；而且……也被开发，在原来……的位置上新建了……。"
                }
              ]
            },
            {
              "label": "④ 方位二：另一个方向",
              "note": "最显著变化 + 拆除重建（had been demolished and replaced by）+ 改造（was converted into）三连。",
              "sentences": [
                {
                  "en": "Looking at the ____«方向» part of the ____, the most noticeable change was ____. In ____, there was ____, but by ____, it had been demolished and replaced by a new ____. Nearby, ____«什么» was converted into a ____«新用途».",
                  "zh": "在……的……部，最明显的变化是……；……年时这里还是……，但到……年已被拆除、替换为新的……；附近，……被改造成了……。"
                }
              ]
            }
          ]
        },
        {
          "id": "process",
          "title": "流程图模板",
          "type": "template",
          "tag": "工序图 / 生命周期图",
          "intro": "概括 = 一共几步 + 起点 + 终点；第一细节段写前半部分流程，第二细节段写后半部分。",
          "tense": "不看年份，通篇一般现在时 + 被动语态（is transported / is then dried）；Once + 现在完成时被动衔接步骤",
          "paragraphs": [
            {
              "label": "① 开头：重写题目",
              "note": "工序写 the production of …，生命周期写 the life cycle of …。",
              "sentences": [
                {
                  "en": "The provided diagram illustrates the stages involved in the production of ____«产品» / the life cycle of ____«生物».",
                  "zh": "所给示意图展示了……的生产工序 /……的生命周期各阶段。"
                }
              ]
            },
            {
              "label": "② 总概况：步数 + 起点 + 终点",
              "note": "数一遍一共几步，开头是什么、最后产出什么，一句话说清。",
              "sentences": [
                {
                  "en": "Overall, it is clear that the process consists of ____«数字» steps, beginning with ____«起点» and finishing in ____«终点».",
                  "zh": "总的来说，整个流程共……步，从……开始，以……结束。"
                }
              ]
            },
            {
              "label": "③ 第一细节：前半部分流程",
              "note": "In the first stage 起头，Following this / Once … has been … 把步骤串起来；全程被动语态。",
              "sentences": [
                {
                  "en": "In the first stage, ____. Following this, ____ is transported to ____. Once the ____ has been ____, it is then ____.",
                  "zh": "第一步，……；随后，……被运往……；一旦……被……之后，它就会被……。"
                }
              ]
            },
            {
              "label": "④ 第二细节：后半部分流程",
              "note": "Subsequently 承接，At the same time 带出同步环节，最后一句落到终点产物。",
              "sentences": [
                {
                  "en": "Subsequently, the ____ is ____. At the same time, ____. In the final stage of the ____«流程», ____«终点产物 / 成年体».",
                  "zh": "随后，……被……；与此同时，……；在最后一步，……。"
                }
              ]
            }
          ]
        },
        {
          "id": "mixed",
          "title": "混合图模板",
          "type": "template",
          "tag": "两类图组合（如线图 + 表格）",
          "intro": "总概括和两个细节段各占一部分：Overview 仍放第二段合并两图最突出的特征，细节段一段管一张图，段内套用对应图型的句式（动态套动态、静态套静态）。",
          "tense": "两张图各自的年份各自定时态，别串",
          "paragraphs": [
            {
              "label": "① 开头：一次改写两张图",
              "note": "图1类型 + 图2类型 + 主题 + 时间，一句话说完。",
              "sentences": [
                {
                  "en": "The provided ____«图1类型» and ____«图2类型» illustrate/compare ____«主题» ____«时间范围».",
                  "zh": "所给的……图和……图展示了……在……期间的情况。"
                }
              ]
            },
            {
              "label": "② 总概况：两图各概括 1 点（无数据）",
              "note": "图 1 最突出的说一句，图 2 最突出的接一句。",
              "sentences": [
                {
                  "en": "Overall, it is clear that ____«图1最突出». Furthermore, it is noticeable that ____«图2最突出».",
                  "zh": "总的来说，图 1 中……很明显；此外，图 2 中……也值得关注。"
                }
              ]
            },
            {
              "label": "③ 第一细节：图 1",
              "note": "段内按图 1 的类型套句式：动态套 started / rose / before finishing，静态套 accounted for / was followed by。",
              "sentences": [
                {
                  "en": "Regarding the ____«图1», ____«按图1类型套动态 / 静态句式».",
                  "zh": "关于图 1，……。"
                }
              ]
            },
            {
              "label": "④ 第二细节：图 2",
              "note": "Turning to 换图，段内再按图 2 类型套句式，写法同上。",
              "sentences": [
                {
                  "en": "Turning to the ____«图2», ____«按图2类型套对应句式».",
                  "zh": "再看图 2，……。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "task2",
      "name": "大作文 Task 2",
      "summary": "两大万能四段模板 + CAE 论证链，背熟直接套题",
      "cards": [
        {
          "id": "good-bad",
          "title": "好坏类",
          "type": "template",
          "tag": "advantages outweigh / positive or negative / should / discuss both views",
          "intro": "原先利弊分析、同意与否、双边讨论已收进这一张。四段：开头亮立场 → Body 1 打透第一个优点（CAE）→ Body 2 第二个优点并让步拉回 → 结尾重申。考场抽到观点型、好坏型、比较型、讨论型都套这一套。立场默认写「利大于弊 / 应该做」；若要反对，把 I believe that 后面换成弊大于利即可。",
          "tense": "以一般现在时为主；举例可用过去时",
          "paragraphs": [
            {
              "label": "① 开头：改写题目 + 明确立场",
              "note": "背景句点出题目核心行为/趋势，第二句先带出反方，再亮自己的立场。不要在开头展开论证。",
              "sentences": [
                {
                  "en": "In today's world, the issue of ____«题目核心行为/趋势» has attracted much discussion.",
                  "zh": "在当今世界，……的问题引起了大量讨论。"
                },
                {
                  "en": "While some argue that ____«反方观点/潜在弊端», I believe that ____«自己立场：利大于弊 / 应该做某事».",
                  "zh": "虽然有人认为……，但我认为……。"
                }
              ]
            },
            {
              "label": "② Body 1：第一个优点（CAE 展开）",
              "note": "本段只打一个优点：观点句 → 条件 C → 行动 A → 效果 E → 举例扣回。写透比堆两个浅观点更稳。",
              "sentences": [
                {
                  "en": "First, ____«核心观点：某行为带来好处1».",
                  "zh": "首先，……。"
                },
                {
                  "en": "In a context where ____«现状/条件C», ____«行为A» enables ____«对象T» to ____«效果E».",
                  "zh": "在……的情况下，……使……能够……。"
                },
                {
                  "en": "For example, ____«具体例子», which clearly shows that ____«扣回观点：该好处确实重要».",
                  "zh": "例如，……，这清楚地说明……。"
                }
              ]
            },
            {
              "label": "③ Body 2：第二个优点 + 让步拉回",
              "note": "先抛第二个优点，再 Admittedly 让半步，However 说明好处 2 更强或该弊端其实也可转化。最后举例扣回。",
              "sentences": [
                {
                  "en": "Second, ____«核心观点：某行为带来好处2».",
                  "zh": "其次，……。"
                },
                {
                  "en": "Admittedly, some may claim that ____«反方观点/弊端», which might ____«潜在负面影响».",
                  "zh": "诚然，有人可能认为……，这或许会……。"
                },
                {
                  "en": "However, this concern is outweighed by the fact that ____«解释为什么好处2更强 / 该弊端其实也是好处».",
                  "zh": "然而，这一担忧比不上……。"
                },
                {
                  "en": "For instance, ____«举例». Therefore, ____«扣回观点：好处2更显著».",
                  "zh": "例如，……。因此，……。"
                }
              ]
            },
            {
              "label": "④ 结尾：总结立场",
              "note": "承认反方一句，点名两个优点，重申立场。不要加新观点。",
              "sentences": [
                {
                  "en": "In conclusion, although ____«反方观点/弊端» may exist, the benefits of ____«好处1» and ____«好处2» are more substantial.",
                  "zh": "总之，虽然……可能存在，但……和……带来的好处更为显著。"
                },
                {
                  "en": "I firmly believe that ____«重申立场».",
                  "zh": "我坚信……。"
                }
              ]
            }
          ]
        },
        {
          "id": "report-analysis",
          "title": "分析报告类",
          "type": "template",
          "tag": "reasons / problems / solutions / why + is it positive",
          "intro": "原先问题解决、原因影响已收进这一张。四段：开头点现象并预告 → Body 1 第一个原因或问题 → Body 2 第二个原因/方案或影响 → 结尾总结并给应对。考场抽到报告型、混合型都套这一套。若题目是「原因 + 是否积极」，把开头第二句换成分析原因并判断积极/消极。",
          "tense": "以一般现在时为主；举例可用过去时",
          "paragraphs": [
            {
              "label": "① 开头：改写题目 + 预告内容",
              "note": "第一句写现象。第二句预告本文写原因和方案；若题目问「原因 + 是否积极」，改用下面第三句。",
              "sentences": [
                {
                  "en": "In recent years, the trend/phenomenon of ____«题目核心现象» has become increasingly common.",
                  "zh": "近年来，……的趋势 / 现象变得越来越普遍。"
                },
                {
                  "en": "This essay will examine the main reasons behind this development and propose practical solutions.",
                  "zh": "本文将分析这一现象的主要原因，并提出切实可行的解决方案。"
                },
                {
                  "en": "This essay will analyze the underlying causes and argue that it is generally a positive/negative development.",
                  "zh": "本文将分析深层原因，并认为这总体上是一种积极 / 消极的发展。（原因 + 是否积极题用这句替换上一句）"
                }
              ]
            },
            {
              "label": "② Body 1：第一个原因 / 问题",
              "note": "主题句点出原因 1 或问题 1，再用宏观条件 C 推出结果 E，举例后小结影响大。",
              "sentences": [
                {
                  "en": "The primary factor driving this phenomenon is ____«原因1/问题1».",
                  "zh": "推动这一现象的首要因素是……。"
                },
                {
                  "en": "At the macro level, ____«宏观解释/条件C». This gives rise to ____«结果E».",
                  "zh": "在宏观层面，……。这导致了……。"
                },
                {
                  "en": "For example, ____«举例». Thus, ____«小结：该原因/问题确实存在且影响大».",
                  "zh": "例如，……。因此，……。"
                }
              ]
            },
            {
              "label": "③ Body 2：第二个原因 / 问题 + 方案或影响",
              "note": "可以写第二个原因，也可以直接给方案或积极/消极影响。Specifically 把行动接到效果上，Moreover 再补一句。",
              "sentences": [
                {
                  "en": "Another significant factor/solution is ____«原因2/方案».",
                  "zh": "另一个重要因素 / 方案是……。"
                },
                {
                  "en": "Specifically, ____«行动A» can ____«效果E», as it addresses ____«根源/目标».",
                  "zh": "具体来说，……能够……，因为它针对的是……。"
                },
                {
                  "en": "For instance, ____«举例». Moreover, ____«补充说明：另一个方案或积极影响».",
                  "zh": "例如，……。此外，……。"
                },
                {
                  "en": "This demonstrates that ____«扣回：该方案/影响有效».",
                  "zh": "这表明……。"
                }
              ]
            },
            {
              "label": "④ 结尾：总结 + 建议",
              "note": "先收原因/问题，再落到方案或合理应对。不要突然抛新点。",
              "sentences": [
                {
                  "en": "In conclusion, ____«总结原因/问题» are the main drivers/challenges.",
                  "zh": "总之，……是主要驱动力 / 挑战。"
                },
                {
                  "en": "Through ____«解决方案/合理应对», the negative effects can be mitigated / the positive outcomes can be maximized.",
                  "zh": "通过……，负面影响可以得到缓解 / 积极结果可以得到最大化。"
                }
              ]
            }
          ]
        },
        {
          "id": "cae",
          "title": "CAE 论证链",
          "type": "template",
          "tag": "任何一段需要展开解释时套用",
          "intro": "C 条件 → A 行动 → E 效果。好坏类 Body 1、分析报告类 Body 1 都按这个顺序写满。不要把三步拆成口号，连成一段自然的解释。",
          "tense": "一般现在时；举例可用过去时",
          "paragraphs": [
            {
              "label": "C · Condition 条件",
              "note": "先写前提/背景，说明为什么这件事会发生。",
              "sentences": [
                {
                  "en": "In a context where ____«现状/背景»",
                  "zh": "在……的现状下"
                }
              ]
            },
            {
              "label": "A · Action 行动",
              "note": "说明动作带来的直接作用。",
              "sentences": [
                {
                  "en": "doing ____«某行为/措施» enables/allows ____«对象» to ____«效果»",
                  "zh": "做……使……能够……"
                }
              ]
            },
            {
              "label": "E · Effect 效果",
              "note": "总结结果，并扣回本段观点。",
              "sentences": [
                {
                  "en": "As a result, ____«总结结果». / This clearly demonstrates that ____«扣回观点».",
                  "zh": "因此……。/ 这清楚地说明……。"
                }
              ]
            },
            {
              "label": "套用示例（好坏类 Body 1）",
              "note": "把 C-A-E 连成一段，不要拆成三句口号。",
              "sentences": [
                {
                  "en": "In a context where high school graduates lack real-world experience, travelling or working before university enables them to relate academic knowledge to reality. As a result, they develop stronger motivation for future study.",
                  "zh": "在高中毕业生缺乏真实世界经验的情况下，上大学前去旅行或工作能让他们把书本知识和现实联系起来。因此，他们对未来的学习会更有动力。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "task2-vocab",
      "name": "大作文话题素材",
      "summary": "教育 / 科技 / 社会 / 环境：每类 8 条，套进模板就能写",
      "cards": [
        {
          "id": "how-to",
          "title": "怎么用这批素材",
          "type": "article",
          "blocks": [
            {
              "heading": "模板有骨架，这里只补填空",
              "paragraphs": [
                "两大万能模板已经决定了段落顺序：好坏类（利弊 / 同意 / 双边）和分析报告类（原因 / 问题 / 方案）。缺的不是更多句式，而是「观点 / 解释 / 例子 / 方案」里要填的内容。下面按教育、科技、社会、环境各收 8 条：一条短短语 + 一句能直接改写进模板的例句。",
                "看题先对号入座：学校、留学、图书馆、父母施压 → 教育；手机、机器人、社交媒体、线上医疗 → 科技；收入、犯罪、广告、家庭、城市 → 社会；污染、绿地、回收、交通、淡水 → 环境。对不上就打开社会卡，多数题都能借到理由。"
              ]
            },
            {
              "heading": "往模板空位里怎么填",
              "paragraphs": [
                "好坏类：短语填「好处 1 / 好处 2」；例句改几个词后填进 CAE 或 For example。让步段从同一张卡另抽 1 条当反方，再用好处 2 拉回。",
                "分析报告类：原因 / 问题段用「导致…」那几条，方案段优先用「出台更严法规 / 鼓励公共交通 / 重复使用」这类。混合题第二段改写积极或消极影响即可。",
                "每类只有 8 条，够写 250 词。宁可用熟词写对，不要考场上换生词。背默模式遮中文，先盯短语，例句只作填空示范，不必整句死记。"
              ]
            }
          ]
        },
        {
          "id": "education",
          "title": "教育",
          "type": "phrases",
          "intro": "对应题库：学校行为、在家教育、能力分组、留学交换、图书馆、父母施压、大学更难。短语填好处或原因，例句改写后填进 CAE / For example。",
          "items": [
            {
              "en": "all-round development",
              "zh": "全面发展（学校该不该教品行、体育，不只盯考试）",
              "eg": "Schools should promote all-round development rather than focusing only on exam results.",
              "egZh": "学校应促进全面发展，而不是只盯着考试成绩。",
              "from": "学校职责"
            },
            {
              "en": "instil good behaviour",
              "zh": "培养良好行为（学校 vs 家庭谁该教品行）",
              "eg": "It is unrealistic to expect schools to instil good behaviour without support from parents.",
              "egZh": "没有家长配合，指望学校单独培养良好行为并不现实。",
              "from": "学校 vs 家庭"
            },
            {
              "en": "mixed-ability classes",
              "zh": "混合能力班级（按成绩分班还是混在一起）",
              "eg": "Mixed-ability classes allow weaker students to learn from their peers.",
              "egZh": "混合能力班级能让较弱的学生向同伴学习。",
              "from": "能力分组"
            },
            {
              "en": "one-to-one attention",
              "zh": "一对一关注（在家教育的核心优点；反方补社交）",
              "eg": "Homeschooling can offer one-to-one attention, but children may miss out on social skills.",
              "egZh": "在家教育能提供一对一关注，但孩子可能会缺少社交技能。",
              "from": "在家教育"
            },
            {
              "en": "broaden their horizons",
              "zh": "开阔眼界（留学、交换生、学国际新闻）",
              "eg": "Studying abroad can broaden students' horizons and make them more independent.",
              "egZh": "出国留学能开阔学生的眼界，并让他们更独立。",
              "from": "留学 / 交换"
            },
            {
              "en": "academic pressure",
              "zh": "学业压力（父母逼成功、过度竞争）",
              "eg": "Excessive academic pressure often leads to anxiety rather than better performance.",
              "egZh": "过重的学业压力往往带来焦虑，而不是更好的成绩。",
              "from": "父母施压"
            },
            {
              "en": "independent learning",
              "zh": "自主学习（大学比中学难、成人是否该自学技能）",
              "eg": "University is harder mainly because students are expected to rely on independent learning.",
              "egZh": "大学更难，主要是因为学生被要求依靠自主学习。",
              "from": "大学更难"
            },
            {
              "en": "reliable sources",
              "zh": "可靠来源（图书馆还有没有必要、知识存在网上）",
              "eg": "Libraries still matter because they help students find reliable sources instead of random online information.",
              "egZh": "图书馆仍然重要，因为它帮学生找到可靠来源，而不是网上的随意信息。",
              "from": "图书馆 vs 网络"
            }
          ]
        },
        {
          "id": "technology",
          "title": "科技",
          "type": "phrases",
          "intro": "对应题库：网络信息、面对面沟通、社交媒体、隐私、机器人、科技与犯罪、老人用手机、线上医疗。利弊题左右各抽 1 条就能写成让步。",
          "items": [
            {
              "en": "readily available",
              "zh": "随时可得（网上获取新闻/知识；反方补虚假信息）",
              "eg": "Information is now readily available online, which saves time but also spreads false news.",
              "egZh": "信息现在在网上随时可得，这节省了时间，但也传播了假新闻。",
              "from": "网络信息"
            },
            {
              "en": "face-to-face interaction",
              "zh": "面对面交流（手机电脑是否让人不会当面沟通）",
              "eg": "Heavy use of phones can reduce face-to-face interaction and weaken social skills.",
              "egZh": "过度使用手机会减少面对面交流，并削弱社交能力。",
              "from": "沟通能力"
            },
            {
              "en": "stay connected",
              "zh": "保持联系（社交媒体的主要好处）",
              "eg": "Social media helps people stay connected with friends, yet it can also create anxiety.",
              "egZh": "社交媒体帮人们与朋友保持联系，但也可能带来焦虑。",
              "from": "社交媒体"
            },
            {
              "en": "personal data",
              "zh": "个人数据（住址、银行卡放到网上）",
              "eg": "Putting personal data online is convenient for shopping, but it increases the risk of theft.",
              "egZh": "把个人数据放到网上购物很方便，但也增加了被盗用的风险。",
              "from": "网络隐私"
            },
            {
              "en": "replace human labour",
              "zh": "取代人力（机器人做家务或工作）",
              "eg": "Robots can replace human labour in repetitive tasks, which raises productivity but threatens some jobs.",
              "egZh": "机器人能在重复性工作中取代人力，这提高了效率，但也威胁到部分岗位。",
              "from": "机器人"
            },
            {
              "en": "cybercrime",
              "zh": "网络犯罪（科技减少犯罪还是助长犯罪）",
              "eg": "Technology can help the police track criminals, but it also makes cybercrime easier to commit.",
              "egZh": "科技能帮助警方追踪罪犯，但也让网络犯罪更容易实施。",
              "from": "科技与犯罪"
            },
            {
              "en": "the digital divide",
              "zh": "数字鸿沟（老人用手机最少、图书馆 vs 电脑）",
              "eg": "The digital divide means older people gain fewer benefits from the Internet than the young.",
              "egZh": "数字鸿沟意味着老年人从互联网中获得的好处少于年轻人。",
              "from": "老年人数字"
            },
            {
              "en": "remote medical services",
              "zh": "远程医疗服务（线上问诊；反方补误诊）",
              "eg": "Remote medical services are convenient for minor illnesses, but they cannot fully replace a physical check-up.",
              "egZh": "远程医疗服务对小病很方便，但不能完全替代当面检查。",
              "from": "线上医疗"
            }
          ]
        },
        {
          "id": "society",
          "title": "社会",
          "type": "phrases",
          "intro": "对应题库：收入差距、犯罪与监狱、广告、工作生活、健康饮食、名人榜样、城市拥挤、家庭结构。对不上前三类的题，优先来这里找理由。",
          "items": [
            {
              "en": "the income gap",
              "zh": "收入差距（贫富差距、高管高薪、薪酬上限）",
              "eg": "Narrowing the income gap may make society fairer, but it could also reduce the incentive to work hard.",
              "egZh": "缩小收入差距可能让社会更公平，但也可能削弱努力工作的动力。",
              "from": "收入平等"
            },
            {
              "en": "rehabilitation",
              "zh": "教育改造（监狱 vs 教育、刑满再犯罪）",
              "eg": "Education is more effective than prison because rehabilitation can stop people from re-offending.",
              "egZh": "教育比监禁更有效，因为改造能阻止人再次犯罪。",
              "from": "犯罪对策"
            },
            {
              "en": "misleading advertising",
              "zh": "误导性广告（禁广告、广告是否有用）",
              "eg": "Advertising can inform consumers, but misleading advertising often encourages unnecessary spending.",
              "egZh": "广告能告知消费者，但误导性广告常常鼓励不必要的消费。",
              "from": "广告"
            },
            {
              "en": "work-life balance",
              "zh": "工作与生活平衡（加班、换工作、搬家）",
              "eg": "Many people struggle to maintain a work-life balance, which makes them less happy even if they earn more.",
              "egZh": "许多人难以保持工作与生活的平衡，即使赚得更多也更不快乐。",
              "from": "工作生活"
            },
            {
              "en": "personal responsibility",
              "zh": "个人责任（垃圾食品、政府该不该管饮食）",
              "eg": "A healthy diet is mainly a matter of personal responsibility, although government rules can still help.",
              "egZh": "健康饮食主要是个人责任，不过政府规定仍然能起到帮助。",
              "from": "健康饮食"
            },
            {
              "en": "set a good example",
              "zh": "树立榜样（明星、运动员该不该被模仿）",
              "eg": "Famous people should set a good example, because many young people copy their behaviour.",
              "egZh": "名人应该树立好榜样，因为许多年轻人会模仿他们的行为。",
              "from": "名人榜样"
            },
            {
              "en": "urban overcrowding",
              "zh": "城市过度拥挤（大城市太大、交通、住房）",
              "eg": "Urban overcrowding leads to traffic jams and housing shortages, which lowers the quality of life.",
              "egZh": "城市过度拥挤带来交通堵塞和住房短缺，从而降低生活质量。",
              "from": "城市拥挤"
            },
            {
              "en": "family support",
              "zh": "家庭支持（独自生活、父亲居家、晚育）",
              "eg": "Living alone offers more freedom, but people may lose family support in difficult times.",
              "egZh": "独自生活更自由，但人们在困难时期可能会失去家庭支持。",
              "from": "家庭结构"
            }
          ]
        },
        {
          "id": "environment",
          "title": "环境",
          "type": "phrases",
          "intro": "对应题库：个人 vs 政府环保、绿地、石油、经济增长、抛弃型社会、物种减少、无车日/自行车、淡水。问题解决题优先背后 4 条当方案。",
          "items": [
            {
              "en": "take personal responsibility",
              "zh": "个人担责（个人能否改善环境；让步段承认个人作用有限）",
              "eg": "Individuals can take personal responsibility by using less energy, but large companies still cause most pollution.",
              "egZh": "个人可以通过少耗能来担责，但大部分污染仍来自大公司。",
              "from": "环保责任"
            },
            {
              "en": "impose stricter regulations",
              "zh": "出台更严法规（政府/大公司才能起作用；方案段首选）",
              "eg": "Governments should impose stricter regulations on factories, which would reduce pollution more effectively than individual action alone.",
              "egZh": "政府应对工厂出台更严法规，这比仅靠个人行动更能减少污染。",
              "from": "政府企业"
            },
            {
              "en": "carbon emissions",
              "zh": "碳排放（无车日、自行车、私家车）",
              "eg": "Encouraging public transport can cut carbon emissions and ease traffic in city centres.",
              "egZh": "鼓励公共交通能减少碳排放，并缓解市中心交通。",
              "from": "交通出行"
            },
            {
              "en": "urban greenery",
              "zh": "城市绿地（绿地改住房、公园改菜园）",
              "eg": "Replacing urban greenery with housing may solve a shortage of homes, but it harms public health.",
              "egZh": "用住房取代城市绿地或许能缓解住房短缺，但会损害公众健康。",
              "from": "绿地 / 公园"
            },
            {
              "en": "a throw-away culture",
              "zh": "一次性消费文化（食物浪费、消费品、回收）",
              "eg": "A throw-away culture leads to more waste, so people should reuse items instead of buying new ones.",
              "egZh": "一次性消费文化带来更多垃圾，所以人们应重复使用物品，而不是不断买新的。",
              "from": "抛弃型社会"
            },
            {
              "en": "habitat destruction",
              "zh": "栖息地破坏（偏远地区找石油、动植物减少）",
              "eg": "Searching for oil in remote areas often causes habitat destruction and threatens wildlife.",
              "egZh": "在偏远地区寻找石油常常破坏栖息地，并威胁野生动物。",
              "from": "物种 / 石油"
            },
            {
              "en": "sustainable development",
              "zh": "可持续发展（经济增长 vs 环境、国际合作）",
              "eg": "Economic growth should go together with sustainable development, rather than damaging the environment.",
              "egZh": "经济增长应与可持续发展并行，而不是破坏环境。",
              "from": "经济 vs 环境"
            },
            {
              "en": "scarce resources",
              "zh": "稀缺资源（淡水该不该管制、食物长途运输）",
              "eg": "Fresh water is a scarce resource, so governments have a duty to control wasteful use.",
              "egZh": "淡水是稀缺资源，因此政府有责任控制浪费性使用。",
              "from": "淡水 / 食物"
            }
          ]
        }
      ]
    },
    {
      "id": "task2-drill",
      "name": "考场演练 Task 2",
      "summary": "大作文真题随机抽取，40 分钟计时模拟",
      "cards": [
        {
          "id": "exam",
          "title": "大作文考场模拟",
          "type": "drill",
          "drill": "exam",
          "summary": "随机抽题 · 40 分钟计时 · 练习记录存本地"
        }
      ]
    }
  ]
};
