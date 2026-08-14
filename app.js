(() => {
  "use strict";

  const STORAGE_KEY = "family-english-progress-v4";

  const lessons = {
    greeting: {
      id: "greeting",
      order: 1,
      meta: "第一课",
      nodeTitle: "问候",
      title: "小熊来做客",
      description: "学会见面和告别，再和小熊互相问好。",
      pictureMain: "🧸",
      pictureSmall: "👋",
      pictureClass: "picture-greeting",
      childGoal: "hello · bye-bye",
      grandmaGoal: "Good morning!",
      previewPhrase: "Good morning! How are you?",
      nodeSubtitle: "打招呼",
      reward: {
        picture: "👋 🧸 😊",
        title: "小熊认识新朋友了！",
        lead: "奶奶和宝宝一起完成了见面问候。",
        child: "认识 hello 和 bye-bye",
        grandma: "会问候和关心对方",
        unlockEmoji: "🚪",
        unlockTitle: "小熊家的欢迎门牌"
      },
      stages: [
        {
          type: "choice",
          role: "child",
          word: "hello",
          chinese: "你好",
          prompt: "听一听，哪一个动作是 hello？",
          options: [
            { value: "hello", label: "hello", emoji: "👋" },
            { value: "sleep", label: "sleep", emoji: "😴" },
            { value: "eat", label: "eat", emoji: "🍎" }
          ]
        },
        {
          type: "choice",
          role: "child",
          word: "bye-bye",
          chinese: "再见",
          prompt: "小熊要回家了，哪一个是 bye-bye？",
          options: [
            { value: "thank you", label: "thank you", emoji: "🙏" },
            { value: "bye-bye", label: "bye-bye", emoji: "👋" },
            { value: "sleep", label: "sleep", emoji: "🛏️" }
          ]
        },
        {
          type: "speak",
          role: "grandma",
          phrase: "Good morning!",
          chinese: "早上好！",
          context: "小熊早上来敲门"
        },
        {
          type: "speak",
          role: "grandma",
          phrase: "How are you?",
          chinese: "你好吗？",
          context: "奶奶关心小熊今天怎么样"
        },
        {
          type: "dialogue",
          role: "together",
          title: "欢迎小熊来做客",
          lines: [
            { role: "奶奶", emoji: "👩🏻", english: "Good morning!", chinese: "早上好！" },
            { role: "宝宝", emoji: "👦🏻", english: "Good morning, Grandma!", chinese: "奶奶，早上好！" },
            { role: "奶奶", emoji: "👩🏻", english: "How are you?", chinese: "你好吗？" },
            { role: "宝宝", emoji: "👦🏻", english: "I'm happy!", chinese: "我很开心！" }
          ]
        },
        {
          type: "mission",
          role: "together",
          title: "和家里的人打个招呼",
          picture: "👋 😊 👋",
          steps: [
            "宝宝挥挥手，说：<strong>Hello!</strong>",
            "奶奶回答：<strong>Good morning!</strong>",
            "两个人离开时一起说：<strong>Bye-bye!</strong>"
          ]
        }
      ]
    },
    colors: {
      id: "colors",
      order: 2,
      meta: "第二课",
      nodeTitle: "颜色",
      title: "彩虹不见了",
      description: "帮小熊找回颜色，再用英语问它是什么颜色。",
      pictureMain: "🌈",
      pictureSmall: "🎨",
      pictureClass: "picture-colors",
      childGoal: "red · blue",
      grandmaGoal: "What color is it?",
      previewPhrase: "What color is it? It is red.",
      nodeSubtitle: "找一找",
      reward: {
        picture: "🌈 🧸 🎨",
        title: "彩虹重新亮起来了！",
        lead: "奶奶和宝宝一起找到了两种颜色。",
        child: "认识 red 和 blue",
        grandma: "会询问和回答颜色",
        unlockEmoji: "🖼️",
        unlockTitle: "小熊的彩虹画"
      },
      stages: [
        {
          type: "choice",
          role: "child",
          word: "red",
          chinese: "红色",
          prompt: "听一听，哪一个是 red？",
          options: [
            { value: "blue", label: "blue", emoji: "🟦" },
            { value: "red", label: "red", emoji: "🟥" },
            { value: "yellow", label: "yellow", emoji: "🟨" }
          ]
        },
        {
          type: "choice",
          role: "child",
          word: "blue",
          chinese: "蓝色",
          prompt: "再找一个，哪一个是 blue？",
          options: [
            { value: "yellow", label: "yellow", emoji: "🟨" },
            { value: "green", label: "green", emoji: "🟩" },
            { value: "blue", label: "blue", emoji: "🟦" }
          ]
        },
        {
          type: "speak",
          role: "grandma",
          phrase: "What color is it?",
          chinese: "它是什么颜色？",
          context: "奶奶拿起一件红色的东西"
        },
        {
          type: "speak",
          role: "grandma",
          phrase: "It is red.",
          chinese: "它是红色的。",
          context: "奶奶告诉宝宝正确答案"
        },
        {
          type: "dialogue",
          role: "together",
          title: "一起寻找红色",
          lines: [
            { role: "奶奶", emoji: "👩🏻", english: "What color is it?", chinese: "它是什么颜色？" },
            { role: "宝宝", emoji: "👦🏻", english: "Red!", chinese: "红色！" },
            { role: "奶奶", emoji: "👩🏻", english: "Do you like red?", chinese: "你喜欢红色吗？" },
            { role: "宝宝", emoji: "👦🏻", english: "Yes, I do!", chinese: "是的，我喜欢！" }
          ]
        },
        {
          type: "mission",
          role: "together",
          title: "在家里找到一种颜色",
          picture: "🟥 🔎 🟦",
          steps: [
            "宝宝找一件红色物品，说：<strong>Red!</strong>",
            "奶奶问：<strong>What color is it?</strong>",
            "再一起找一件蓝色物品，说：<strong>Blue!</strong>"
          ]
        }
      ]
    },
    toys: {
      id: "toys",
      order: 3,
      meta: "第三课",
      nodeTitle: "玩具",
      title: "玩具小店开门了",
      description: "认识喜欢的玩具，再练习礼貌地提出请求。",
      pictureMain: "🧸",
      pictureSmall: "⚽",
      pictureClass: "picture-toys",
      childGoal: "ball · car",
      grandmaGoal: "Can I have…?",
      previewPhrase: "Can I have the ball, please?",
      nodeSubtitle: "一起玩",
      reward: {
        picture: "🧸 ⚽ 🚗",
        title: "玩具小店开门啦！",
        lead: "奶奶和宝宝一起完成了玩具店对话。",
        child: "认识 ball 和 car",
        grandma: "会礼貌地提出请求",
        unlockEmoji: "🧺",
        unlockTitle: "小熊的玩具篮"
      },
      stages: [
        {
          type: "choice",
          role: "child",
          word: "ball",
          chinese: "球",
          prompt: "听一听，哪一个是 ball？",
          options: [
            { value: "car", label: "car", emoji: "🚗" },
            { value: "ball", label: "ball", emoji: "⚽" },
            { value: "book", label: "book", emoji: "📕" }
          ]
        },
        {
          type: "choice",
          role: "child",
          word: "car",
          chinese: "小汽车",
          prompt: "再听一个，哪一个是 car？",
          options: [
            { value: "train", label: "train", emoji: "🚂" },
            { value: "car", label: "car", emoji: "🚗" },
            { value: "ball", label: "ball", emoji: "⚽" }
          ]
        },
        {
          type: "speak",
          role: "grandma",
          phrase: "Can I have the ball, please?",
          chinese: "可以把球给我吗？",
          context: "奶奶在玩具小店里礼貌地请求"
        },
        {
          type: "speak",
          role: "grandma",
          phrase: "Let's play together.",
          chinese: "我们一起玩吧。",
          context: "奶奶邀请宝宝一起玩"
        },
        {
          type: "dialogue",
          role: "together",
          title: "一起逛玩具小店",
          lines: [
            { role: "奶奶", emoji: "👩🏻", english: "Can I have the ball, please?", chinese: "可以把球给我吗？" },
            { role: "宝宝", emoji: "👦🏻", english: "Here you are.", chinese: "给你。" },
            { role: "奶奶", emoji: "👩🏻", english: "Thank you!", chinese: "谢谢！" },
            { role: "宝宝", emoji: "👦🏻", english: "Let's play!", chinese: "一起玩吧！" }
          ]
        },
        {
          type: "mission",
          role: "together",
          title: "用家里的玩具开一家小店",
          picture: "⚽ 🧸 🚗",
          steps: [
            "宝宝摆出一个球和一辆玩具车",
            "奶奶问：<strong>Can I have the ball, please?</strong>",
            "宝宝递过去，两个人说：<strong>Let's play!</strong>"
          ]
        }
      ]
    },
    animals: {
      id: "animals",
      order: 4,
      meta: "第四课",
      nodeTitle: "动物",
      title: "谁在叫呀",
      description: "听声音猜动物，再用英语说出它是谁。",
      pictureMain: "🐶",
      pictureSmall: "🐱",
      pictureClass: "picture-animals",
      childGoal: "cat · dog",
      grandmaGoal: "What animal is it?",
      previewPhrase: "What animal is it? It is a cat.",
      nodeSubtitle: "猜一猜",
      reward: {
        picture: "🐱 🐶 🐾",
        title: "找到小动物啦！",
        lead: "奶奶和宝宝一起完成了动物猜谜。",
        child: "认识 cat 和 dog",
        grandma: "会询问动物名称",
        unlockEmoji: "🐾",
        unlockTitle: "小熊的动物脚印"
      },
      stages: [
        { type: "choice", role: "child", word: "cat", chinese: "猫", prompt: "听一听，哪一个是 cat？", options: [{ value: "dog", label: "dog", emoji: "🐶" }, { value: "cat", label: "cat", emoji: "🐱" }, { value: "bird", label: "bird", emoji: "🐦" }] },
        { type: "choice", role: "child", word: "dog", chinese: "狗", prompt: "再找一个，哪一个是 dog？", options: [{ value: "rabbit", label: "rabbit", emoji: "🐰" }, { value: "bird", label: "bird", emoji: "🐦" }, { value: "dog", label: "dog", emoji: "🐶" }] },
        { type: "speak", role: "grandma", phrase: "What animal is it?", chinese: "它是什么动物？", context: "奶奶指着一张动物卡片" },
        { type: "speak", role: "grandma", phrase: "It is a cat.", chinese: "它是一只猫。", context: "奶奶告诉宝宝答案" },
        { type: "dialogue", role: "together", title: "听一听是谁在叫", lines: [{ role: "奶奶", emoji: "👩🏻", english: "What animal is it?", chinese: "它是什么动物？" }, { role: "宝宝", emoji: "👦🏻", english: "A cat!", chinese: "一只猫！" }, { role: "奶奶", emoji: "👩🏻", english: "Do you like cats?", chinese: "你喜欢猫吗？" }, { role: "宝宝", emoji: "👦🏻", english: "Yes, I do!", chinese: "是的，我喜欢！" }] },
        { type: "mission", role: "together", title: "玩一次动物模仿游戏", picture: "🐱 🎭 🐶", steps: ["宝宝模仿一种小动物", "奶奶问：<strong>What animal is it?</strong>", "猜对以后交换角色，再玩一次"] }
      ]
    },
    clothes: {
      id: "clothes",
      order: 5,
      meta: "第五课",
      nodeTitle: "穿衣",
      title: "小熊要出门",
      description: "帮小熊找到衣物，一起做好出门准备。",
      pictureMain: "🧢",
      pictureSmall: "👟",
      pictureClass: "picture-clothes",
      childGoal: "hat · shoes",
      grandmaGoal: "Put on your hat.",
      previewPhrase: "Put on your hat. Are you ready?",
      nodeSubtitle: "准备好",
      reward: {
        picture: "🧸 🧢 👟",
        title: "小熊准备好出门了！",
        lead: "奶奶和宝宝一起完成了穿衣任务。",
        child: "认识 hat 和 shoes",
        grandma: "会给出简单提示",
        unlockEmoji: "🧢",
        unlockTitle: "小熊的出门帽"
      },
      stages: [
        { type: "choice", role: "child", word: "hat", chinese: "帽子", prompt: "听一听，哪一个是 hat？", options: [{ value: "hat", label: "hat", emoji: "🧢" }, { value: "shoes", label: "shoes", emoji: "👟" }, { value: "bag", label: "bag", emoji: "🎒" }] },
        { type: "choice", role: "child", word: "shoes", chinese: "鞋子", prompt: "再找一个，哪一个是 shoes？", options: [{ value: "coat", label: "coat", emoji: "🧥" }, { value: "shoes", label: "shoes", emoji: "👟" }, { value: "hat", label: "hat", emoji: "🧢" }] },
        { type: "speak", role: "grandma", phrase: "Put on your hat.", chinese: "戴上你的帽子。", context: "奶奶帮小熊准备出门" },
        { type: "speak", role: "grandma", phrase: "Are you ready?", chinese: "你准备好了吗？", context: "出门前再确认一次" },
        { type: "dialogue", role: "together", title: "一起做好出门准备", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Put on your hat.", chinese: "戴上帽子。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }, { role: "奶奶", emoji: "👩🏻", english: "Are you ready?", chinese: "准备好了吗？" }, { role: "宝宝", emoji: "👦🏻", english: "I'm ready!", chinese: "我准备好了！" }] },
        { type: "mission", role: "together", title: "帮玩偶准备出门", picture: "🧸 🧢 🎒", steps: ["给玩偶找到帽子或小包", "奶奶说：<strong>Put on your hat.</strong>", "宝宝回答：<strong>I'm ready!</strong>"] }
      ]
    },
    park: {
      id: "park",
      order: 6,
      meta: "第六课",
      nodeTitle: "公园",
      title: "一起去公园",
      description: "认识公园里的事物，再邀请家人一起看看。",
      pictureMain: "🌳",
      pictureSmall: "🌼",
      pictureClass: "picture-park",
      childGoal: "tree · flower",
      grandmaGoal: "Let's go to the park.",
      previewPhrase: "Let's go to the park. Look at the flower.",
      nodeSubtitle: "去看看",
      reward: {
        picture: "🌳 🧸 🌼",
        title: "公园散步完成啦！",
        lead: "奶奶和宝宝一起发现了公园里的英语。",
        child: "认识 tree 和 flower",
        grandma: "会邀请和提醒观察",
        unlockEmoji: "🌼",
        unlockTitle: "小熊的小花园"
      },
      stages: [
        { type: "choice", role: "child", word: "tree", chinese: "树", prompt: "听一听，哪一个是 tree？", options: [{ value: "tree", label: "tree", emoji: "🌳" }, { value: "flower", label: "flower", emoji: "🌼" }, { value: "sun", label: "sun", emoji: "☀️" }] },
        { type: "choice", role: "child", word: "flower", chinese: "花", prompt: "再找一个，哪一个是 flower？", options: [{ value: "cloud", label: "cloud", emoji: "☁️" }, { value: "tree", label: "tree", emoji: "🌳" }, { value: "flower", label: "flower", emoji: "🌼" }] },
        { type: "speak", role: "grandma", phrase: "Let's go to the park.", chinese: "我们去公园吧。", context: "奶奶邀请宝宝一起出门" },
        { type: "speak", role: "grandma", phrase: "Look at the flower.", chinese: "看看这朵花。", context: "奶奶发现了一朵漂亮的小花" },
        { type: "dialogue", role: "together", title: "在公园里发现新东西", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Look at the flower.", chinese: "看看这朵花。" }, { role: "宝宝", emoji: "👦🏻", english: "A flower!", chinese: "一朵花！" }, { role: "奶奶", emoji: "👩🏻", english: "What color is it?", chinese: "它是什么颜色？" }, { role: "宝宝", emoji: "👦🏻", english: "Yellow!", chinese: "黄色！" }] },
        { type: "mission", role: "together", title: "站到窗边找一找", picture: "🪟 🔎 🌳", steps: ["从窗边或图片里找一棵树", "宝宝说：<strong>Tree!</strong>", "奶奶再指一样东西说：<strong>Look at...</strong>"] }
      ]
    },
    family: {
      id: "family",
      order: 7,
      meta: "第七课",
      nodeTitle: "家人",
      title: "我们的家",
      description: "说说自己的家人，用一句英语表达喜欢。",
      pictureMain: "🏠",
      pictureSmall: "❤️",
      pictureClass: "picture-family",
      childGoal: "family · grandma",
      grandmaGoal: "This is my family.",
      previewPhrase: "This is my family. I love you.",
      nodeSubtitle: "我爱你",
      special: {
        title: "小火车问候站",
        description: "问候、上车和火车声音，一边玩一边说",
        reward: {
          picture: "🚂 💨 🚉",
          title: "小火车顺利到站啦！",
          lead: "奶奶和宝宝完成了第一周的小火车特别版。",
          child: "认识 train 和小火车颜色",
          grandma: "会打招呼和说大家上车",
          unlockEmoji: "🎫",
          unlockTitle: "小火车乘车票"
        },
        stages: [
          { type: "choice", role: "child", word: "train", chinese: "火车", prompt: "听一听，哪一个是 train？", options: [{ value: "train", label: "train", emoji: "🚂" }, { value: "bus", label: "bus", emoji: "🚌" }, { value: "car", label: "car", emoji: "🚗" }] },
          { type: "choice", role: "child", word: "blue", chinese: "蓝色", prompt: "再找一找，哪一列是 blue 小火车？", options: [{ value: "red", label: "red train", emoji: "🔴 🚂" }, { value: "blue", label: "blue train", emoji: "🔵 🚂" }, { value: "yellow", label: "yellow train", emoji: "🟡 🚂" }] },
          { type: "speak", role: "grandma", phrase: "All aboard!", chinese: "大家上车！", context: "小火车准备从车站出发" },
          { type: "speak", role: "grandma", phrase: "Here comes the train.", chinese: "火车来啦。", context: "远处传来了小火车的声音" },
          { type: "dialogue", role: "together", title: "小火车准备出发", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Hello!", chinese: "你好！" }, { role: "宝宝", emoji: "👦🏻", english: "Choo-choo!", chinese: "呜——呜——！" }, { role: "奶奶", emoji: "👩🏻", english: "All aboard!", chinese: "大家上车！" }, { role: "宝宝", emoji: "👦🏻", english: "Let's go!", chinese: "出发吧！" }] },
          { type: "mission", role: "together", title: "在家开一列小火车", picture: "👩🏻 🚂 👦🏻", steps: ["用椅子或积木排成一列小火车", "奶奶说：<strong>All aboard!</strong>", "宝宝学火车说：<strong>Choo-choo!</strong>，一起出发"] }
        ]
      },
      reward: {
        picture: "👩🏻 ❤️ 👦🏻",
        title: "家庭英语周完成啦！",
        lead: "奶奶和宝宝一起完成了七天的小故事。",
        child: "认识 family 和 grandma",
        grandma: "会介绍自己的家人",
        unlockEmoji: "🏠",
        unlockTitle: "我们的家庭小屋"
      },
      stages: [
        { type: "choice", role: "child", word: "family", chinese: "家人", prompt: "听一听，哪一张是 family？", options: [{ value: "family", label: "family", emoji: "👨‍👩‍👦" }, { value: "park", label: "park", emoji: "🌳" }, { value: "car", label: "car", emoji: "🚗" }] },
        { type: "choice", role: "child", word: "grandma", chinese: "奶奶", prompt: "再听一个，哪一位是 grandma？", options: [{ value: "baby", label: "baby", emoji: "👶🏻" }, { value: "grandma", label: "grandma", emoji: "👩🏻" }, { value: "dad", label: "dad", emoji: "👨🏻" }] },
        { type: "speak", role: "grandma", phrase: "This is my family.", chinese: "这是我的家人。", context: "奶奶指着一张家庭照片" },
        { type: "speak", role: "grandma", phrase: "I love you.", chinese: "我爱你。", context: "奶奶和宝宝互相表达喜欢" },
        { type: "dialogue", role: "together", title: "一起看看家庭照片", lines: [{ role: "奶奶", emoji: "👩🏻", english: "This is my family.", chinese: "这是我的家人。" }, { role: "宝宝", emoji: "👦🏻", english: "Grandma!", chinese: "奶奶！" }, { role: "奶奶", emoji: "👩🏻", english: "I love you.", chinese: "我爱你。" }, { role: "宝宝", emoji: "👦🏻", english: "I love you too!", chinese: "我也爱你！" }] },
        { type: "mission", role: "together", title: "找一张家庭照片", picture: "🖼️ 👩🏻 👦🏻", steps: ["一起找一张家人的照片", "奶奶说：<strong>This is my family.</strong>", "两个人互相说：<strong>I love you.</strong>"] }
      ]
    },
    cleanup: {
      id: "cleanup",
      order: 8,
      meta: "第八课",
      nodeTitle: "整理",
      title: "玩具回家了",
      description: "把玩具和图书送回原位，一边整理一边说英语。",
      pictureMain: "🧺",
      pictureSmall: "🧸",
      pictureClass: "picture-cleanup",
      childGoal: "toy · book",
      grandmaGoal: "Let's clean up.",
      previewPhrase: "Let's clean up. Put it here.",
      nodeSubtitle: "收一收",
      reward: { picture: "🧺 🧸 📕", title: "房间整理好啦！", lead: "奶奶和宝宝一起完成了整理任务。", child: "认识 toy 和 book", grandma: "会用英语提示整理", unlockEmoji: "🧺", unlockTitle: "小熊的收纳篮" },
      stages: [
        { type: "choice", role: "child", word: "toy", chinese: "玩具", prompt: "听一听，哪一个是 toy？", options: [{ value: "toy", label: "toy", emoji: "🧸" }, { value: "book", label: "book", emoji: "📕" }, { value: "shoe", label: "shoe", emoji: "👟" }] },
        { type: "choice", role: "child", word: "book", chinese: "书", prompt: "再找一个，哪一个是 book？", options: [{ value: "ball", label: "ball", emoji: "⚽" }, { value: "book", label: "book", emoji: "📕" }, { value: "car", label: "car", emoji: "🚗" }] },
        { type: "speak", role: "grandma", phrase: "Let's clean up.", chinese: "我们来收拾吧。", context: "玩具时间结束了" },
        { type: "speak", role: "grandma", phrase: "Put it here.", chinese: "把它放在这里。", context: "奶奶指着收纳篮" },
        { type: "dialogue", role: "together", title: "帮玩具找到家", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's clean up.", chinese: "我们来收拾吧。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }, { role: "奶奶", emoji: "👩🏻", english: "Put it here.", chinese: "放在这里。" }, { role: "宝宝", emoji: "👦🏻", english: "All done!", chinese: "都完成啦！" }] },
        { type: "mission", role: "together", title: "一起收好三样东西", picture: "🧸 ➜ 🧺", steps: ["宝宝找到三样玩具或图书", "奶奶说：<strong>Put it here.</strong>", "收好后一起说：<strong>All done!</strong>"] }
      ]
    },
    shapes: {
      id: "shapes",
      order: 9,
      meta: "第九课",
      nodeTitle: "形状",
      title: "形状侦探",
      description: "在家里寻找圆形和星形，用英语问一问。",
      pictureMain: "⭕",
      pictureSmall: "⭐",
      pictureClass: "picture-shapes",
      childGoal: "circle · star",
      grandmaGoal: "What shape is it?",
      previewPhrase: "What shape is it? It is a circle.",
      nodeSubtitle: "看一看",
      reward: { picture: "⭕ 🔎 ⭐", title: "找到形状啦！", lead: "奶奶和宝宝一起完成了形状寻宝。", child: "认识 circle 和 star", grandma: "会询问和回答形状", unlockEmoji: "⭐", unlockTitle: "小熊的星星贴纸" },
      stages: [
        { type: "choice", role: "child", word: "circle", chinese: "圆形", prompt: "听一听，哪一个是 circle？", options: [{ value: "circle", label: "circle", emoji: "⭕" }, { value: "star", label: "star", emoji: "⭐" }, { value: "square", label: "square", emoji: "🟦" }] },
        { type: "choice", role: "child", word: "star", chinese: "星形", prompt: "再找一个，哪一个是 star？", options: [{ value: "heart", label: "heart", emoji: "❤️" }, { value: "triangle", label: "triangle", emoji: "🔺" }, { value: "star", label: "star", emoji: "⭐" }] },
        { type: "speak", role: "grandma", phrase: "What shape is it?", chinese: "它是什么形状？", context: "奶奶拿起一张形状卡片" },
        { type: "speak", role: "grandma", phrase: "It is a circle.", chinese: "它是圆形的。", context: "奶奶告诉宝宝答案" },
        { type: "dialogue", role: "together", title: "一起猜形状", lines: [{ role: "奶奶", emoji: "👩🏻", english: "What shape is it?", chinese: "它是什么形状？" }, { role: "宝宝", emoji: "👦🏻", english: "A star!", chinese: "星形！" }, { role: "奶奶", emoji: "👩🏻", english: "Can you find a circle?", chinese: "你能找到一个圆形吗？" }, { role: "宝宝", emoji: "👦🏻", english: "Here it is!", chinese: "在这里！" }] },
        { type: "mission", role: "together", title: "在家里找两个形状", picture: "🔎 ⭕ ⭐", steps: ["宝宝先找一个圆形物品", "奶奶问：<strong>What shape is it?</strong>", "再一起找一个星形或方形"] }
      ]
    },
    actions: {
      id: "actions",
      order: 10,
      meta: "第十课",
      nodeTitle: "动作",
      title: "跟着口令动一动",
      description: "认识手和脚，听英语口令做动作。",
      pictureMain: "👏",
      pictureSmall: "🦶",
      pictureClass: "picture-actions",
      childGoal: "hands · feet",
      grandmaGoal: "Clap your hands.",
      previewPhrase: "Clap your hands. Stamp your feet.",
      nodeSubtitle: "动一动",
      reward: { picture: "👏 🎵 🦶", title: "动作游戏完成啦！", lead: "奶奶和宝宝一起听懂了英语口令。", child: "认识 hands 和 feet", grandma: "会说两个动作口令", unlockEmoji: "🎵", unlockTitle: "小熊的动作音乐" },
      stages: [
        { type: "choice", role: "child", word: "hands", chinese: "手", prompt: "听一听，哪一个是 hands？", options: [{ value: "hands", label: "hands", emoji: "👏" }, { value: "feet", label: "feet", emoji: "🦶" }, { value: "eyes", label: "eyes", emoji: "👀" }] },
        { type: "choice", role: "child", word: "feet", chinese: "脚", prompt: "再找一个，哪一个是 feet？", options: [{ value: "ears", label: "ears", emoji: "👂" }, { value: "feet", label: "feet", emoji: "🦶" }, { value: "hands", label: "hands", emoji: "👏" }] },
        { type: "speak", role: "grandma", phrase: "Clap your hands.", chinese: "拍拍手。", context: "奶奶带宝宝做动作" },
        { type: "speak", role: "grandma", phrase: "Stamp your feet.", chinese: "跺跺脚。", context: "换一个新的动作口令" },
        { type: "dialogue", role: "together", title: "听口令做动作", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Clap your hands.", chinese: "拍拍手。" }, { role: "宝宝", emoji: "👦🏻", english: "Clap, clap!", chinese: "拍拍手！" }, { role: "奶奶", emoji: "👩🏻", english: "Stamp your feet.", chinese: "跺跺脚。" }, { role: "宝宝", emoji: "👦🏻", english: "Stamp, stamp!", chinese: "跺跺脚！" }] },
        { type: "mission", role: "together", title: "轮流当英语指挥官", picture: "👩🏻 🎵 👦🏻", steps: ["奶奶先说一个动作口令", "宝宝做动作，再交换角色", "连续完成三轮就过关"] }
      ]
    },
    feelings: {
      id: "feelings",
      order: 11,
      meta: "第十一课",
      nodeTitle: "心情",
      title: "今天心情怎么样",
      description: "认识开心和疲倦，学会说出自己的感觉。",
      pictureMain: "😊",
      pictureSmall: "😴",
      pictureClass: "picture-feelings",
      childGoal: "happy · tired",
      grandmaGoal: "How do you feel?",
      previewPhrase: "How do you feel? I feel happy.",
      nodeSubtitle: "说一说",
      reward: { picture: "😊 💬 😴", title: "心情说出来啦！", lead: "奶奶和宝宝一起表达了今天的感觉。", child: "认识 happy 和 tired", grandma: "会询问和表达感受", unlockEmoji: "😊", unlockTitle: "小熊的心情卡" },
      stages: [
        { type: "choice", role: "child", word: "happy", chinese: "开心", prompt: "听一听，哪一个是 happy？", options: [{ value: "sad", label: "sad", emoji: "😢" }, { value: "happy", label: "happy", emoji: "😊" }, { value: "angry", label: "angry", emoji: "😠" }] },
        { type: "choice", role: "child", word: "tired", chinese: "疲倦", prompt: "再找一个，哪一个是 tired？", options: [{ value: "happy", label: "happy", emoji: "😊" }, { value: "surprised", label: "surprised", emoji: "😮" }, { value: "tired", label: "tired", emoji: "😴" }] },
        { type: "speak", role: "grandma", phrase: "How do you feel?", chinese: "你感觉怎么样？", context: "奶奶关心宝宝的心情" },
        { type: "speak", role: "grandma", phrase: "I feel happy.", chinese: "我觉得很开心。", context: "奶奶说出自己的心情" },
        { type: "dialogue", role: "together", title: "互相说说心情", lines: [{ role: "奶奶", emoji: "👩🏻", english: "How do you feel?", chinese: "你感觉怎么样？" }, { role: "宝宝", emoji: "👦🏻", english: "I feel happy!", chinese: "我很开心！" }, { role: "奶奶", emoji: "👩🏻", english: "Me too!", chinese: "我也是！" }, { role: "宝宝", emoji: "👦🏻", english: "Let's play!", chinese: "一起玩吧！" }] },
        { type: "mission", role: "together", title: "做三张心情脸", picture: "😊 😴 😮", steps: ["宝宝做一个开心的表情", "奶奶问：<strong>How do you feel?</strong>", "换两个不同表情再猜一猜"] }
      ]
    },
    weather: {
      id: "weather",
      order: 12,
      meta: "第十二课",
      nodeTitle: "天气",
      title: "窗外的天气",
      description: "看看窗外，用英语说今天晴朗还是下雨。",
      pictureMain: "☀️",
      pictureSmall: "🌧️",
      pictureClass: "picture-weather",
      childGoal: "sunny · rainy",
      grandmaGoal: "How is the weather?",
      previewPhrase: "How is the weather? It is sunny.",
      nodeSubtitle: "望窗外",
      reward: { picture: "☀️ 🪟 🌧️", title: "天气播报完成啦！", lead: "奶奶和宝宝一起做了英语天气播报。", child: "认识 sunny 和 rainy", grandma: "会询问和描述天气", unlockEmoji: "☀️", unlockTitle: "小熊的天气窗" },
      stages: [
        { type: "choice", role: "child", word: "sunny", chinese: "晴朗", prompt: "听一听，哪一个是 sunny？", options: [{ value: "rainy", label: "rainy", emoji: "🌧️" }, { value: "cloudy", label: "cloudy", emoji: "☁️" }, { value: "sunny", label: "sunny", emoji: "☀️" }] },
        { type: "choice", role: "child", word: "rainy", chinese: "下雨", prompt: "再找一个，哪一个是 rainy？", options: [{ value: "snowy", label: "snowy", emoji: "❄️" }, { value: "rainy", label: "rainy", emoji: "🌧️" }, { value: "sunny", label: "sunny", emoji: "☀️" }] },
        { type: "speak", role: "grandma", phrase: "How is the weather?", chinese: "天气怎么样？", context: "奶奶和宝宝一起看向窗外" },
        { type: "speak", role: "grandma", phrase: "It is sunny.", chinese: "今天晴朗。", context: "奶奶做今天的天气播报" },
        { type: "dialogue", role: "together", title: "做一次天气播报", lines: [{ role: "奶奶", emoji: "👩🏻", english: "How is the weather?", chinese: "天气怎么样？" }, { role: "宝宝", emoji: "👦🏻", english: "It is sunny!", chinese: "今天晴朗！" }, { role: "奶奶", emoji: "👩🏻", english: "Let's go outside.", chinese: "我们出去吧。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }] },
        { type: "mission", role: "together", title: "站到窗边播报天气", picture: "🪟 ☀️ 🎤", steps: ["一起观察窗外的天气", "奶奶问：<strong>How is the weather?</strong>", "宝宝选择 sunny、rainy 或 cloudy 回答"] }
      ]
    },
    manners: {
      id: "manners",
      order: 13,
      meta: "第十三课",
      nodeTitle: "礼貌",
      title: "礼貌小帮手",
      description: "练习请、谢谢和道歉，在家里就能马上使用。",
      pictureMain: "🙏",
      pictureSmall: "💛",
      pictureClass: "picture-manners",
      childGoal: "please · sorry",
      grandmaGoal: "Please help me.",
      previewPhrase: "Please help me. Thank you.",
      nodeSubtitle: "请与谢谢",
      reward: { picture: "🙏 💛 😊", title: "礼貌小帮手完成啦！", lead: "奶奶和宝宝一起练习了礼貌表达。", child: "认识 please 和 sorry", grandma: "会礼貌请求和感谢", unlockEmoji: "💛", unlockTitle: "小熊的礼貌徽章" },
      stages: [
        { type: "choice", role: "child", word: "please", chinese: "请", prompt: "听一听，哪一个是 please？", options: [{ value: "please", label: "please", emoji: "🙏" }, { value: "stop", label: "stop", emoji: "✋" }, { value: "hello", label: "hello", emoji: "👋" }] },
        { type: "choice", role: "child", word: "sorry", chinese: "对不起", prompt: "再听一个，哪一个是 sorry？", options: [{ value: "happy", label: "happy", emoji: "😊" }, { value: "sorry", label: "sorry", emoji: "🙇" }, { value: "bye-bye", label: "bye-bye", emoji: "👋" }] },
        { type: "speak", role: "grandma", phrase: "Please help me.", chinese: "请帮帮我。", context: "奶奶需要宝宝帮一个小忙" },
        { type: "speak", role: "grandma", phrase: "Thank you.", chinese: "谢谢你。", context: "宝宝帮忙以后说谢谢" },
        { type: "dialogue", role: "together", title: "当一次礼貌小帮手", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Please help me.", chinese: "请帮帮我。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }, { role: "奶奶", emoji: "👩🏻", english: "Thank you.", chinese: "谢谢你。" }, { role: "宝宝", emoji: "👦🏻", english: "You're welcome!", chinese: "不客气！" }] },
        { type: "mission", role: "together", title: "完成一个家庭小帮忙", picture: "👩🏻 🤝 👦🏻", steps: ["奶奶请宝宝递一样安全的东西", "先说：<strong>Please help me.</strong>", "完成后说：<strong>Thank you.</strong>"] }
      ]
    },
    room: {
      id: "room",
      order: 14,
      meta: "第十四课",
      nodeTitle: "房间",
      title: "房间寻宝",
      description: "认识床和桌子，练习询问东西在哪里。",
      pictureMain: "🛏️",
      pictureSmall: "🪑",
      pictureClass: "picture-room",
      childGoal: "bed · table",
      grandmaGoal: "Where is the book?",
      previewPhrase: "Where is the book? It is on the table.",
      nodeSubtitle: "找东西",
      special: {
        title: "小火车快慢站",
        description: "扮演列车长，练习快、慢、出发和停车",
        reward: {
          picture: "🚄 🚦 🚉",
          title: "小小列车长毕业啦！",
          lead: "奶奶和宝宝完成了第二周的小火车特别版。",
          child: "认识 fast 和 slow",
          grandma: "会说火车快慢和停车指令",
          unlockEmoji: "🧢",
          unlockTitle: "小小列车长帽"
        },
        stages: [
          { type: "choice", role: "child", word: "fast", chinese: "快", prompt: "听一听，哪一列火车是 fast？", options: [{ value: "fast", label: "fast", emoji: "🚄" }, { value: "slow", label: "slow", emoji: "🚂" }, { value: "stop", label: "stop", emoji: "🛑" }] },
          { type: "choice", role: "child", word: "slow", chinese: "慢", prompt: "再听一个，哪一列火车是 slow？", options: [{ value: "stop", label: "stop", emoji: "🛑" }, { value: "fast", label: "fast", emoji: "🚄" }, { value: "slow", label: "slow", emoji: "🚂" }] },
          { type: "speak", role: "grandma", phrase: "The train is fast.", chinese: "火车开得很快。", context: "小火车快速穿过小桥" },
          { type: "speak", role: "grandma", phrase: "The train is slow.", chinese: "火车开得很慢。", context: "小火车慢慢进入车站" },
          { type: "dialogue", role: "together", title: "轮流当一次列车长", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Ready?", chinese: "准备好了吗？" }, { role: "宝宝", emoji: "👦🏻", english: "Let's go!", chinese: "出发吧！" }, { role: "奶奶", emoji: "👩🏻", english: "Stop at the station.", chinese: "在车站停车。" }, { role: "宝宝", emoji: "👦🏻", english: "We are here!", chinese: "我们到啦！" }] },
          { type: "mission", role: "together", title: "玩一次快慢火车", picture: "🚄 ➜ 🚂 ➜ 🚉", steps: ["宝宝当小火车，奶奶当列车长", "听到 <strong>fast</strong> 就快走，听到 <strong>slow</strong> 就慢走", "奶奶说：<strong>Stop at the station.</strong>，宝宝在终点停车"] }
        ]
      },
      reward: { picture: "🛏️ 🔎 🍽️", title: "两周挑战完成啦！", lead: "奶奶和宝宝一起完成了十四天英语故事。", child: "认识 bed 和 table", grandma: "会询问物品位置", unlockEmoji: "🔑", unlockTitle: "家庭小屋的寻宝钥匙" },
      stages: [
        { type: "choice", role: "child", word: "bed", chinese: "床", prompt: "听一听，哪一个是 bed？", options: [{ value: "chair", label: "chair", emoji: "🪑" }, { value: "bed", label: "bed", emoji: "🛏️" }, { value: "lamp", label: "lamp", emoji: "💡" }] },
        { type: "choice", role: "child", word: "table", chinese: "桌子", prompt: "再找一个，哪一个是 table？", options: [{ value: "door", label: "door", emoji: "🚪" }, { value: "table", label: "table", emoji: "🍽️" }, { value: "bed", label: "bed", emoji: "🛏️" }] },
        { type: "speak", role: "grandma", phrase: "Where is the book?", chinese: "书在哪里？", context: "奶奶把一本书藏在房间里" },
        { type: "speak", role: "grandma", phrase: "It is on the table.", chinese: "它在桌子上。", context: "奶奶告诉宝宝位置" },
        { type: "dialogue", role: "together", title: "一起寻找小熊的书", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Where is the book?", chinese: "书在哪里？" }, { role: "宝宝", emoji: "👦🏻", english: "On the table!", chinese: "在桌子上！" }, { role: "奶奶", emoji: "👩🏻", english: "Can you find it?", chinese: "你能找到吗？" }, { role: "宝宝", emoji: "👦🏻", english: "Here it is!", chinese: "在这里！" }] },
        { type: "mission", role: "together", title: "玩一次房间寻宝", picture: "📕 🔎 🛏️", steps: ["一人藏好一本书或一个玩具", "另一人问：<strong>Where is it?</strong>", "用 on the bed 或 on the table 提示位置"] }
      ]
    },
    body: {
      id: "body",
      order: 15,
      meta: "第十五课",
      nodeTitle: "身体",
      title: "脸上的小侦探",
      description: "认识鼻子和嘴巴，学会用英语做动作提示。",
      pictureMain: "👃",
      pictureSmall: "👄",
      pictureClass: "picture-body",
      childGoal: "nose · mouth",
      grandmaGoal: "Touch your nose.",
      previewPhrase: "Touch your nose. Open your mouth.",
      nodeSubtitle: "指一指",
      reward: { picture: "👃 😊 👄", title: "脸部小侦探毕业啦！", lead: "奶奶和宝宝一起认识了脸上的两个部位。", child: "认识 nose 和 mouth", grandma: "会发出简单动作指令", unlockEmoji: "🪞", unlockTitle: "小熊的小镜子" },
      stages: [
        { type: "choice", role: "child", word: "nose", chinese: "鼻子", prompt: "听一听，哪一个是 nose？", options: [{ value: "ear", label: "ear", emoji: "👂" }, { value: "nose", label: "nose", emoji: "👃" }, { value: "eye", label: "eye", emoji: "👀" }] },
        { type: "choice", role: "child", word: "mouth", chinese: "嘴巴", prompt: "再找一个，哪一个是 mouth？", options: [{ value: "nose", label: "nose", emoji: "👃" }, { value: "mouth", label: "mouth", emoji: "👄" }, { value: "eye", label: "eye", emoji: "👀" }] },
        { type: "speak", role: "grandma", phrase: "Touch your nose.", chinese: "摸摸你的鼻子。", context: "奶奶带宝宝认识脸上的部位" },
        { type: "speak", role: "grandma", phrase: "Open your mouth.", chinese: "张开你的嘴巴。", context: "刷牙前一起张大嘴巴" },
        { type: "dialogue", role: "together", title: "一起找找脸上的小侦探", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Touch your nose.", chinese: "摸摸你的鼻子。" }, { role: "宝宝", emoji: "👦🏻", english: "My nose!", chinese: "我的鼻子！" }, { role: "奶奶", emoji: "👩🏻", english: "Open your mouth.", chinese: "张开嘴巴。" }, { role: "宝宝", emoji: "👦🏻", english: "Ahh!", chinese: "啊——！" }] },
        { type: "mission", role: "together", title: "玩一次指部位游戏", picture: "👃 🎯 👄", steps: ["奶奶说：<strong>Touch your nose.</strong>", "宝宝指鼻子，说：<strong>My nose!</strong>", "交换角色，再玩一轮"] }
      ]
    },
    food: {
      id: "food",
      order: 16,
      meta: "第十六课",
      nodeTitle: "食物",
      title: "水果下午茶",
      description: "认识苹果和香蕉，练习问喜不喜欢。",
      pictureMain: "🍎",
      pictureSmall: "🍌",
      pictureClass: "picture-food",
      childGoal: "apple · banana",
      grandmaGoal: "Do you like…?",
      previewPhrase: "Do you like apples? Yes, I do.",
      nodeSubtitle: "尝一尝",
      reward: { picture: "🍎 🧸 🍌", title: "水果下午茶开好啦！", lead: "奶奶和宝宝一起完成了水果下午茶。", child: "认识 apple 和 banana", grandma: "会询问对方的喜好", unlockEmoji: "🍎", unlockTitle: "小熊的水果篮" },
      stages: [
        { type: "choice", role: "child", word: "apple", chinese: "苹果", prompt: "听一听，哪一个是 apple？", options: [{ value: "banana", label: "banana", emoji: "🍌" }, { value: "apple", label: "apple", emoji: "🍎" }, { value: "bread", label: "bread", emoji: "🍞" }] },
        { type: "choice", role: "child", word: "banana", chinese: "香蕉", prompt: "再找一个，哪一个是 banana？", options: [{ value: "apple", label: "apple", emoji: "🍎" }, { value: "milk", label: "milk", emoji: "🥛" }, { value: "banana", label: "banana", emoji: "🍌" }] },
        { type: "speak", role: "grandma", phrase: "Do you like apples?", chinese: "你喜欢苹果吗？", context: "奶奶在果盘旁提问" },
        { type: "speak", role: "grandma", phrase: "Yes, I do.", chinese: "是的，我喜欢。", context: "奶奶也说说自己喜欢的水果" },
        { type: "dialogue", role: "together", title: "一起尝尝水果", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Do you like apples?", chinese: "你喜欢苹果吗？" }, { role: "宝宝", emoji: "👦🏻", english: "Yes, I do!", chinese: "是的，我喜欢！" }, { role: "奶奶", emoji: "👩🏻", english: "Here you are.", chinese: "给你。" }, { role: "宝宝", emoji: "👦🏻", english: "Thank you!", chinese: "谢谢！" }] },
        { type: "mission", role: "together", title: "开一次水果下午茶", picture: "🍎 🍽️ 🍌", steps: ["准备两种水果", "奶奶问：<strong>Do you like apples?</strong>", "宝宝用 <strong>Yes, I do.</strong> 回答，然后一起尝一尝"] }
      ]
    },
    numbers: {
      id: "numbers",
      order: 17,
      meta: "第十七课",
      nodeTitle: "数字",
      title: "小熊数积木",
      description: "认识一和二，学会一起数三样东西。",
      pictureMain: "🔢",
      pictureSmall: "🧱",
      pictureClass: "picture-numbers",
      childGoal: "one · two",
      grandmaGoal: "How many?",
      previewPhrase: "One, two, three. Let's count.",
      nodeSubtitle: "数一数",
      reward: { picture: "🧮 🧸 🧱", title: "积木数好啦！", lead: "奶奶和宝宝一起完成了数字游戏。", child: "认识 one 和 two", grandma: "会询问数量并一起数数", unlockEmoji: "🧮", unlockTitle: "小熊的算珠" },
      stages: [
        { type: "choice", role: "child", word: "one", chinese: "一", prompt: "听一听，哪一个是 one？", options: [{ value: "one", label: "one", emoji: "1️⃣" }, { value: "two", label: "two", emoji: "2️⃣" }, { value: "three", label: "three", emoji: "3️⃣" }] },
        { type: "choice", role: "child", word: "two", chinese: "二", prompt: "再听一个，哪一个是 two？", options: [{ value: "three", label: "three", emoji: "3️⃣" }, { value: "two", label: "two", emoji: "2️⃣" }, { value: "one", label: "one", emoji: "1️⃣" }] },
        { type: "speak", role: "grandma", phrase: "How many?", chinese: "有几个？", context: "奶奶指着桌上的积木" },
        { type: "speak", role: "grandma", phrase: "One, two, three.", chinese: "一、二、三。", context: "奶奶和宝宝一起数数" },
        { type: "dialogue", role: "together", title: "数一数积木", lines: [{ role: "奶奶", emoji: "👩🏻", english: "How many?", chinese: "有几个？" }, { role: "宝宝", emoji: "👦🏻", english: "One, two!", chinese: "一、二！" }, { role: "奶奶", emoji: "👩🏻", english: "Let's count.", chinese: "我们来数一数。" }, { role: "宝宝", emoji: "👦🏻", english: "One, two, three!", chinese: "一、二、三！" }] },
        { type: "mission", role: "together", title: "数一数家里的物品", picture: "🧱 1️⃣ 2️⃣", steps: ["找出三件一样的物品", "奶奶说：<strong>Let's count.</strong>", "一起数：<strong>One, two, three.</strong>"] }
      ]
    },
    music: {
      id: "music",
      order: 18,
      meta: "第十八课",
      nodeTitle: "音乐",
      title: "家庭小乐队",
      description: "认识鼓和铃铛，再一起唱一首歌。",
      pictureMain: "🥁",
      pictureSmall: "🔔",
      pictureClass: "picture-music",
      childGoal: "drum · bell",
      grandmaGoal: "Let's sing a song.",
      previewPhrase: "Let's sing a song. Listen to the music.",
      nodeSubtitle: "敲一敲",
      reward: { picture: "🥁 🎶 🔔", title: "家庭音乐会成功啦！", lead: "奶奶和宝宝一起开了一场小音乐会。", child: "认识 drum 和 bell", grandma: "会邀请唱歌和听音乐", unlockEmoji: "🥁", unlockTitle: "小熊的小鼓" },
      stages: [
        { type: "choice", role: "child", word: "drum", chinese: "鼓", prompt: "听一听，哪一个是 drum？", options: [{ value: "drum", label: "drum", emoji: "🥁" }, { value: "bell", label: "bell", emoji: "🔔" }, { value: "guitar", label: "guitar", emoji: "🎸" }] },
        { type: "choice", role: "child", word: "bell", chinese: "铃铛", prompt: "再找一个，哪一个是 bell？", options: [{ value: "bell", label: "bell", emoji: "🔔" }, { value: "drum", label: "drum", emoji: "🥁" }, { value: "piano", label: "piano", emoji: "🎹" }] },
        { type: "speak", role: "grandma", phrase: "Let's sing a song.", chinese: "我们来唱首歌。", context: "奶奶提议开一场音乐会" },
        { type: "speak", role: "grandma", phrase: "Listen to the music.", chinese: "听听音乐。", context: "奶奶提醒宝宝注意听节奏" },
        { type: "dialogue", role: "together", title: "开一场家庭音乐会", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's sing a song.", chinese: "我们来唱首歌。" }, { role: "宝宝", emoji: "👦🏻", english: "La la la!", chinese: "啦啦啦！" }, { role: "奶奶", emoji: "👩🏻", english: "Listen to the music.", chinese: "听听音乐。" }, { role: "宝宝", emoji: "👦🏻", english: "Clap your hands!", chinese: "拍拍手！" }] },
        { type: "mission", role: "together", title: "用锅碗开一场音乐会", picture: "🥣 🥁 🔔", steps: ["找两样能敲响的安全物品", "奶奶说：<strong>Let's sing a song.</strong>", "宝宝敲节奏，奶奶说：<strong>Listen to the music.</strong>"] }
      ]
    },
    bath: {
      id: "bath",
      order: 19,
      meta: "第十九课",
      nodeTitle: "洗澡",
      title: "泡泡洗澡时间",
      description: "认识小鸭和肥皂，练习洗手的英语提示。",
      pictureMain: "🛁",
      pictureSmall: "🦆",
      pictureClass: "picture-bath",
      childGoal: "duck · soap",
      grandmaGoal: "Wash your hands.",
      previewPhrase: "Wash your hands. Let's take a bath.",
      nodeSubtitle: "洗一洗",
      reward: { picture: "🛁 🦆 🧼", title: "泡泡时间完成啦！", lead: "奶奶和宝宝一起完成了洗澡英语。", child: "认识 duck 和 soap", grandma: "会用英语提示洗手和洗澡", unlockEmoji: "🦆", unlockTitle: "小熊的橡皮鸭" },
      stages: [
        { type: "choice", role: "child", word: "duck", chinese: "小鸭", prompt: "听一听，哪一个是 duck？", options: [{ value: "duck", label: "duck", emoji: "🦆" }, { value: "boat", label: "boat", emoji: "⛵" }, { value: "fish", label: "fish", emoji: "🐟" }] },
        { type: "choice", role: "child", word: "soap", chinese: "肥皂", prompt: "再找一个，哪一个是 soap？", options: [{ value: "duck", label: "duck", emoji: "🦆" }, { value: "soap", label: "soap", emoji: "🧼" }, { value: "sponge", label: "sponge", emoji: "🧽" }] },
        { type: "speak", role: "grandma", phrase: "Wash your hands.", chinese: "洗洗手。", context: "吃饭前提醒宝宝洗手" },
        { type: "speak", role: "grandma", phrase: "Let's take a bath.", chinese: "我们来洗澡。", context: "洗澡时间到了" },
        { type: "dialogue", role: "together", title: "洗澡时间到", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's take a bath.", chinese: "我们来洗澡。" }, { role: "宝宝", emoji: "👦🏻", english: "Splash, splash!", chinese: "哗啦哗啦！" }, { role: "奶奶", emoji: "👩🏻", english: "Wash your hands.", chinese: "洗洗手。" }, { role: "宝宝", emoji: "👦🏻", english: "All done!", chinese: "都完成啦！" }] },
        { type: "mission", role: "together", title: "完成一次洗手小任务", picture: "👐 🧼 💧", steps: ["一起用肥皂洗手", "奶奶说：<strong>Wash your hands.</strong>", "洗完一起说：<strong>All done!</strong>"] }
      ]
    },
    bedtime: {
      id: "bedtime",
      order: 20,
      meta: "第二十课",
      nodeTitle: "睡前",
      title: "月亮出来啦",
      description: "认识月亮和小熊玩偶，学会睡前道晚安。",
      pictureMain: "🌙",
      pictureSmall: "⭐",
      pictureClass: "picture-bedtime",
      childGoal: "moon · teddy",
      grandmaGoal: "Good night.",
      previewPhrase: "Good night. Sweet dreams.",
      nodeSubtitle: "说晚安",
      reward: { picture: "🌙 🧸 ⭐", title: "晚安英语完成啦！", lead: "奶奶和宝宝一起完成了睡前问候。", child: "认识 moon 和 teddy", grandma: "会道晚安和好梦", unlockEmoji: "🌙", unlockTitle: "小熊的晚安月亮" },
      stages: [
        { type: "choice", role: "child", word: "moon", chinese: "月亮", prompt: "听一听，哪一个是 moon？", options: [{ value: "moon", label: "moon", emoji: "🌙" }, { value: "sun", label: "sun", emoji: "☀️" }, { value: "cloud", label: "cloud", emoji: "☁️" }] },
        { type: "choice", role: "child", word: "teddy", chinese: "小熊", prompt: "再找一个，哪一个是 teddy？", options: [{ value: "teddy", label: "teddy", emoji: "🧸" }, { value: "ball", label: "ball", emoji: "⚽" }, { value: "book", label: "book", emoji: "📕" }] },
        { type: "speak", role: "grandma", phrase: "Good night.", chinese: "晚安。", context: "睡前互相道晚安" },
        { type: "speak", role: "grandma", phrase: "Sweet dreams.", chinese: "做个好梦。", context: "给宝宝盖好被子" },
        { type: "dialogue", role: "together", title: "晚安小剧场", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Good night.", chinese: "晚安。" }, { role: "宝宝", emoji: "👦🏻", english: "Good night, Grandma!", chinese: "奶奶晚安！" }, { role: "奶奶", emoji: "👩🏻", english: "Sweet dreams.", chinese: "做个好梦。" }, { role: "宝宝", emoji: "👦🏻", english: "I love you!", chinese: "我爱你！" }] },
        { type: "mission", role: "together", title: "完成一次睡前仪式", picture: "🌙 🧸 🛏️", steps: ["和宝宝一起收好一样玩具", "奶奶说：<strong>Good night.</strong>", "宝宝抱玩偶说：<strong>Sweet dreams.</strong>"] }
      ]
    },
    games: {
      id: "games",
      order: 21,
      meta: "第二十一课",
      nodeTitle: "游戏",
      title: "游戏时间到",
      description: "认识积木和拼图，学会轮流玩一个游戏。",
      pictureMain: "🧩",
      pictureSmall: "🧱",
      pictureClass: "picture-games",
      childGoal: "blocks · puzzle",
      grandmaGoal: "Let's play a game.",
      previewPhrase: "Let's play a game. It's your turn.",
      nodeSubtitle: "轮流玩",
      special: {
        title: "小火车数字站",
        description: "数数车厢和水果，开着火车去野餐",
        reward: {
          picture: "🚂 🔢 🧺",
          title: "数字小火车到站啦！",
          lead: "奶奶和宝宝完成了第三周的小火车特别版。",
          child: "会数 one、two 和 three",
          grandma: "会数车厢并招呼大家上车",
          unlockEmoji: "🚏",
          unlockTitle: "小熊的数字站牌"
        },
        stages: [
          { type: "choice", role: "child", word: "three", chinese: "三", prompt: "听一听，哪一个是 three？", options: [{ value: "one", label: "one", emoji: "1️⃣" }, { value: "three", label: "three", emoji: "3️⃣" }, { value: "two", label: "two", emoji: "2️⃣" }] },
          { type: "choice", role: "child", word: "banana", chinese: "香蕉", prompt: "再听一个，哪一个是 banana？", options: [{ value: "apple", label: "apple", emoji: "🍎" }, { value: "banana", label: "banana", emoji: "🍌" }, { value: "bread", label: "bread", emoji: "🍞" }] },
          { type: "speak", role: "grandma", phrase: "How many cars?", chinese: "有几节车厢？", context: "奶奶数一数野餐小火车" },
          { type: "speak", role: "grandma", phrase: "Here comes the train.", chinese: "火车来啦。", context: "远处传来了小火车的声音" },
          { type: "dialogue", role: "together", title: "野餐小火车出发", lines: [{ role: "奶奶", emoji: "👩🏻", english: "All aboard!", chinese: "大家上车！" }, { role: "宝宝", emoji: "👦🏻", english: "One, two, three!", chinese: "一、二、三！" }, { role: "奶奶", emoji: "👩🏻", english: "Here comes the train.", chinese: "火车来啦。" }, { role: "宝宝", emoji: "👦🏻", english: "Choo-choo!", chinese: "呜——呜——！" }] },
          { type: "mission", role: "together", title: "开一列野餐小火车", picture: "🧺 🚂 🍌", steps: ["用小椅子排出三节车厢", "一起数：<strong>One, two, three.</strong>", "奶奶说：<strong>All aboard!</strong>，带上水果上车"] }
        ]
      },
      reward: { picture: "🧩 🧸 🧱", title: "游戏日大成功！", lead: "奶奶和宝宝一起完成了第三周的英语故事。", child: "认识 blocks 和 puzzle", grandma: "会说开始游戏和轮流", unlockEmoji: "🎲", unlockTitle: "小熊的游戏骰子" },
      stages: [
        { type: "choice", role: "child", word: "blocks", chinese: "积木", prompt: "听一听，哪一个是 blocks？", options: [{ value: "blocks", label: "blocks", emoji: "🧱" }, { value: "puzzle", label: "puzzle", emoji: "🧩" }, { value: "ball", label: "ball", emoji: "⚽" }] },
        { type: "choice", role: "child", word: "puzzle", chinese: "拼图", prompt: "再找一个，哪一个是 puzzle？", options: [{ value: "car", label: "car", emoji: "🚗" }, { value: "puzzle", label: "puzzle", emoji: "🧩" }, { value: "blocks", label: "blocks", emoji: "🧱" }] },
        { type: "speak", role: "grandma", phrase: "Let's play a game.", chinese: "我们来玩游戏。", context: "奶奶提议玩一个新游戏" },
        { type: "speak", role: "grandma", phrase: "It's your turn.", chinese: "轮到你了。", context: "游戏时提醒宝宝轮到他" },
        { type: "dialogue", role: "together", title: "一起玩拼图", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's play a game.", chinese: "我们来玩游戏。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }, { role: "奶奶", emoji: "👩🏻", english: "It's your turn.", chinese: "轮到你了。" }, { role: "宝宝", emoji: "👦🏻", english: "Here it is!", chinese: "在这里！" }] },
        { type: "mission", role: "together", title: "轮流玩一个游戏", picture: "🎲 👩🏻 👦🏻", steps: ["找一个喜欢的玩具或小游戏", "奶奶说：<strong>Let's play a game.</strong>", "轮到对方时说：<strong>It's your turn.</strong>"] }
      ]
    },
    farm: {
      id: "farm",
      order: 22,
      meta: "第二十二课",
      nodeTitle: "农场",
      title: "小小农场主",
      description: "认识奶牛和小猪，学一学动物的叫声。",
      pictureMain: "🐄",
      pictureSmall: "🐷",
      pictureClass: "picture-farm",
      childGoal: "cow · pig",
      grandmaGoal: "The cow says moo.",
      previewPhrase: "It is a cow. The cow says moo.",
      nodeSubtitle: "学叫声",
      reward: { picture: "🐄 🐷 🐔", title: "农场参观完成啦！", lead: "奶奶和宝宝一起认识了农场动物。", child: "认识 cow 和 pig", grandma: "会介绍动物和它们的叫声", unlockEmoji: "🐄", unlockTitle: "小熊的奶牛玩偶" },
      stages: [
        { type: "choice", role: "child", word: "cow", chinese: "奶牛", prompt: "听一听，哪一个是 cow？", options: [{ value: "cow", label: "cow", emoji: "🐄" }, { value: "pig", label: "pig", emoji: "🐷" }, { value: "duck", label: "duck", emoji: "🦆" }] },
        { type: "choice", role: "child", word: "pig", chinese: "小猪", prompt: "再找一个，哪一个是 pig？", options: [{ value: "sheep", label: "sheep", emoji: "🐑" }, { value: "pig", label: "pig", emoji: "🐷" }, { value: "cow", label: "cow", emoji: "🐄" }] },
        { type: "speak", role: "grandma", phrase: "It is a cow.", chinese: "它是一头牛。", context: "奶奶指着图片上的奶牛" },
        { type: "speak", role: "grandma", phrase: "The cow says moo.", chinese: "牛叫哞哞。", context: "奶奶学一学奶牛的声音" },
        { type: "dialogue", role: "together", title: "农场的声音", lines: [{ role: "奶奶", emoji: "👩🏻", english: "What animal is it?", chinese: "它是什么动物？" }, { role: "宝宝", emoji: "👦🏻", english: "A cow!", chinese: "一头牛！" }, { role: "奶奶", emoji: "👩🏻", english: "The cow says moo.", chinese: "牛叫哞哞。" }, { role: "宝宝", emoji: "👦🏻", english: "Moo, moo!", chinese: "哞哞！" }] },
        { type: "mission", role: "together", title: "开一次动物模仿会", picture: "🐄 🎭 🐷", steps: ["宝宝模仿一种农场动物", "奶奶问：<strong>What animal is it?</strong>", "猜对后交换角色，再玩一次"] }
      ]
    },
    transport: {
      id: "transport",
      order: 23,
      meta: "第二十三课",
      nodeTitle: "出行",
      title: "公交车来啦",
      description: "认识公交车和自行车，练习出门的英语。",
      pictureMain: "🚌",
      pictureSmall: "🚲",
      pictureClass: "picture-transport",
      childGoal: "bus · bike",
      grandmaGoal: "Here comes the bus.",
      previewPhrase: "Here comes the bus. Let's go by bus.",
      nodeSubtitle: "去兜风",
      reward: { picture: "🚌 🚲 🛣️", title: "公交旅行完成啦！", lead: "奶奶和宝宝一起完成了出行英语。", child: "认识 bus 和 bike", grandma: "会提醒车辆来了", unlockEmoji: "🚌", unlockTitle: "小熊的公交卡" },
      stages: [
        { type: "choice", role: "child", word: "bus", chinese: "公交车", prompt: "听一听，哪一个是 bus？", options: [{ value: "bus", label: "bus", emoji: "🚌" }, { value: "bike", label: "bike", emoji: "🚲" }, { value: "car", label: "car", emoji: "🚗" }] },
        { type: "choice", role: "child", word: "bike", chinese: "自行车", prompt: "再找一个，哪一个是 bike？", options: [{ value: "bike", label: "bike", emoji: "🚲" }, { value: "plane", label: "plane", emoji: "✈️" }, { value: "bus", label: "bus", emoji: "🚌" }] },
        { type: "speak", role: "grandma", phrase: "Here comes the bus.", chinese: "公交车来了。", context: "奶奶提醒宝宝车来了" },
        { type: "speak", role: "grandma", phrase: "Let's go by bus.", chinese: "我们坐公交车去。", context: "奶奶提议坐公交出门" },
        { type: "dialogue", role: "together", title: "等公交车", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Here comes the bus.", chinese: "公交车来了。" }, { role: "宝宝", emoji: "👦🏻", english: "Beep beep!", chinese: "哔哔！" }, { role: "奶奶", emoji: "👩🏻", english: "Let's go by bus.", chinese: "我们坐公交车去。" }, { role: "宝宝", emoji: "👦🏻", english: "Let's go!", chinese: "出发吧！" }] },
        { type: "mission", role: "together", title: "开一次公交车游戏", picture: "🪑 🚌 🪑", steps: ["摆两把椅子当公交车", "奶奶说：<strong>Here comes the bus.</strong>", "宝宝假装刷卡上车，说：<strong>Let's go!</strong>"] }
      ]
    },
    beach: {
      id: "beach",
      order: 24,
      meta: "第二十四课",
      nodeTitle: "海边",
      title: "去海边玩沙",
      description: "认识贝壳和小船，练习邀请去海边的英语。",
      pictureMain: "🐚",
      pictureSmall: "⛵",
      pictureClass: "picture-beach",
      childGoal: "shell · boat",
      grandmaGoal: "Let's go to the beach.",
      previewPhrase: "Let's go to the beach. Look at the shell.",
      nodeSubtitle: "捡贝壳",
      reward: { picture: "🐚 ⛵ ☀️", title: "海边寻宝完成啦！", lead: "奶奶和宝宝一起完成了海边英语。", child: "认识 shell 和 boat", grandma: "会邀请和引导观察", unlockEmoji: "🐚", unlockTitle: "小熊的贝壳收藏" },
      stages: [
        { type: "choice", role: "child", word: "shell", chinese: "贝壳", prompt: "听一听，哪一个是 shell？", options: [{ value: "shell", label: "shell", emoji: "🐚" }, { value: "boat", label: "boat", emoji: "⛵" }, { value: "fish", label: "fish", emoji: "🐟" }] },
        { type: "choice", role: "child", word: "boat", chinese: "小船", prompt: "再找一个，哪一个是 boat？", options: [{ value: "ball", label: "ball", emoji: "⚽" }, { value: "boat", label: "boat", emoji: "⛵" }, { value: "shell", label: "shell", emoji: "🐚" }] },
        { type: "speak", role: "grandma", phrase: "Let's go to the beach.", chinese: "我们去海边吧。", context: "奶奶提议一次海边旅行" },
        { type: "speak", role: "grandma", phrase: "Look at the shell.", chinese: "看看这个贝壳。", context: "奶奶捡到一个漂亮贝壳" },
        { type: "dialogue", role: "together", title: "海边的发现", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Look at the shell.", chinese: "看看这个贝壳。" }, { role: "宝宝", emoji: "👦🏻", english: "A shell!", chinese: "一个贝壳！" }, { role: "奶奶", emoji: "👩🏻", english: "Let's go to the beach.", chinese: "我们去海边吧。" }, { role: "宝宝", emoji: "👦🏻", english: "Let's go!", chinese: "出发吧！" }] },
        { type: "mission", role: "together", title: "玩一次贝壳寻宝", picture: "🐚 🔎 🏖️", steps: ["在图片或家里找一样像贝壳的东西", "奶奶说：<strong>Look at the shell.</strong>", "宝宝指出来，说：<strong>A shell!</strong>"] }
      ]
    },
    shopping: {
      id: "shopping",
      order: 25,
      meta: "第二十五课",
      nodeTitle: "购物",
      title: "小小商店",
      description: "认识购物袋和面包，练习买东西的英语。",
      pictureMain: "🛍️",
      pictureSmall: "🍞",
      pictureClass: "picture-shopping",
      childGoal: "bag · bread",
      grandmaGoal: "Let's go shopping.",
      previewPhrase: "Let's go shopping. Some bread, please.",
      nodeSubtitle: "买东西",
      reward: { picture: "🛍️ 🍞 🧺", title: "购物小任务完成啦！", lead: "奶奶和宝宝一起完成了商店对话。", child: "认识 bag 和 bread", grandma: "会发起购物并礼貌点单", unlockEmoji: "🛍️", unlockTitle: "小熊的购物袋" },
      stages: [
        { type: "choice", role: "child", word: "bag", chinese: "袋子", prompt: "听一听，哪一个是 bag？", options: [{ value: "bag", label: "bag", emoji: "🛍️" }, { value: "basket", label: "basket", emoji: "🧺" }, { value: "box", label: "box", emoji: "📦" }] },
        { type: "choice", role: "child", word: "bread", chinese: "面包", prompt: "再找一个，哪一个是 bread？", options: [{ value: "apple", label: "apple", emoji: "🍎" }, { value: "bread", label: "bread", emoji: "🍞" }, { value: "banana", label: "banana", emoji: "🍌" }] },
        { type: "speak", role: "grandma", phrase: "Let's go shopping.", chinese: "我们去买东西。", context: "奶奶提议去小商店" },
        { type: "speak", role: "grandma", phrase: "Some bread, please.", chinese: "请来一些面包。", context: "奶奶在商店里点单" },
        { type: "dialogue", role: "together", title: "逛小商店", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's go shopping.", chinese: "我们去买东西。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }, { role: "奶奶", emoji: "👩🏻", english: "Some bread, please.", chinese: "请来一些面包。" }, { role: "宝宝", emoji: "👦🏻", english: "Here you are.", chinese: "给你。" }] },
        { type: "mission", role: "together", title: "开一家家庭小商店", picture: "🧺 🛍️ 🍞", steps: ["摆出两样“商品”", "奶奶说：<strong>Let's go shopping.</strong>", "宝宝“买”一样，说：<strong>Some bread, please.</strong>"] }
      ]
    },
    opposites: {
      id: "opposites",
      order: 26,
      meta: "第二十六课",
      nodeTitle: "反义词",
      title: "比一比谁更大",
      description: "认识大和小，用英语说出两样东西的区别。",
      pictureMain: "🐘",
      pictureSmall: "🐭",
      pictureClass: "picture-opposites",
      childGoal: "big · small",
      grandmaGoal: "It is big.",
      previewPhrase: "It is big. It is small.",
      nodeSubtitle: "比一比",
      reward: { picture: "🐘 ⚖️ 🐭", title: "大小比较完成啦！", lead: "奶奶和宝宝一起认识了反义词。", child: "认识 big 和 small", grandma: "会描述物品的大小", unlockEmoji: "🐘", unlockTitle: "小熊的大小积木" },
      stages: [
        { type: "choice", role: "child", word: "big", chinese: "大", prompt: "听一听，哪一个是 big？", options: [{ value: "big", label: "big", emoji: "🐘" }, { value: "small", label: "small", emoji: "🐭" }, { value: "fast", label: "fast", emoji: "🚄" }] },
        { type: "choice", role: "child", word: "small", chinese: "小", prompt: "再找一个，哪一个是 small？", options: [{ value: "small", label: "small", emoji: "🐭" }, { value: "big", label: "big", emoji: "🐘" }, { value: "tall", label: "tall", emoji: "🦒" }] },
        { type: "speak", role: "grandma", phrase: "It is big.", chinese: "它很大。", context: "奶奶指着大皮球" },
        { type: "speak", role: "grandma", phrase: "It is small.", chinese: "它很小。", context: "奶奶指着小皮球" },
        { type: "dialogue", role: "together", title: "比一比大小", lines: [{ role: "奶奶", emoji: "👩🏻", english: "It is big.", chinese: "它很大。" }, { role: "宝宝", emoji: "👦🏻", english: "Big!", chinese: "大！" }, { role: "奶奶", emoji: "👩🏻", english: "It is small.", chinese: "它很小。" }, { role: "宝宝", emoji: "👦🏻", english: "Small!", chinese: "小！" }] },
        { type: "mission", role: "together", title: "在家里找一对大小", picture: "🐘 🔎 🐭", steps: ["找一大一小两样同种物品", "奶奶指着大的说：<strong>It is big.</strong>", "宝宝指着小的说：<strong>It is small.</strong>"] }
      ]
    },
    cooking: {
      id: "cooking",
      order: 27,
      meta: "第二十七课",
      nodeTitle: "做饭",
      title: "厨房小厨师",
      description: "认识鸡蛋和牛奶，一起做一道简单早餐。",
      pictureMain: "🥚",
      pictureSmall: "🥛",
      pictureClass: "picture-cooking",
      childGoal: "egg · milk",
      grandmaGoal: "Let's cook.",
      previewPhrase: "Let's cook. It is yummy.",
      nodeSubtitle: "做早餐",
      reward: { picture: "🥚 🍳 🥛", title: "早餐做好啦！", lead: "奶奶和宝宝一起完成了厨房英语。", child: "认识 egg 和 milk", grandma: "会邀请做饭并夸奖食物", unlockEmoji: "🍳", unlockTitle: "小熊的小煎锅" },
      stages: [
        { type: "choice", role: "child", word: "egg", chinese: "鸡蛋", prompt: "听一听，哪一个是 egg？", options: [{ value: "egg", label: "egg", emoji: "🥚" }, { value: "milk", label: "milk", emoji: "🥛" }, { value: "bread", label: "bread", emoji: "🍞" }] },
        { type: "choice", role: "child", word: "milk", chinese: "牛奶", prompt: "再找一个，哪一个是 milk？", options: [{ value: "milk", label: "milk", emoji: "🥛" }, { value: "water", label: "water", emoji: "💧" }, { value: "juice", label: "juice", emoji: "🧃" }] },
        { type: "speak", role: "grandma", phrase: "Let's cook.", chinese: "我们来做饭。", context: "奶奶邀请宝宝进厨房" },
        { type: "speak", role: "grandma", phrase: "It is yummy.", chinese: "真好吃。", context: "奶奶尝了一口刚做好的食物" },
        { type: "dialogue", role: "together", title: "一起做早餐", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's cook.", chinese: "我们来做饭。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好！" }, { role: "奶奶", emoji: "👩🏻", english: "Here is an egg.", chinese: "这里有一个鸡蛋。" }, { role: "宝宝", emoji: "👦🏻", english: "Yummy!", chinese: "真好吃！" }] },
        { type: "mission", role: "together", title: "一起做一道简单早餐", picture: "🥚 🥛 🍽️", steps: ["和宝宝一起剥鸡蛋或倒牛奶", "奶奶说：<strong>Let's cook.</strong>", "尝一口，说：<strong>It is yummy.</strong>"] }
      ]
    },
    celebration: {
      id: "celebration",
      order: 28,
      meta: "第二十八课",
      nodeTitle: "庆祝",
      title: "第四周庆祝会",
      description: "认识蛋糕和气球，庆祝坚持学完第四周。",
      pictureMain: "🎂",
      pictureSmall: "🎈",
      pictureClass: "picture-celebration",
      childGoal: "cake · balloon",
      grandmaGoal: "Well done!",
      previewPhrase: "Well done! Let's celebrate!",
      nodeSubtitle: "庆祝啦",
      special: {
        title: "小火车星空站",
        description: "夜晚的星空小火车，载着星星飞向月球",
        reward: {
          picture: "🚂 🌙 ✨",
          title: "星空小火车到站啦！",
          lead: "奶奶和宝宝完成了第四周的小火车特别版，旅程走过一半啦！",
          child: "认识 moon 和 star",
          grandma: "会说出发指令和晚安",
          unlockEmoji: "🚀",
          unlockTitle: "小熊的星星车票"
        },
        stages: [
          { type: "choice", role: "child", word: "moon", chinese: "月亮", prompt: "听一听，哪一个是 moon？", options: [{ value: "moon", label: "moon", emoji: "🌙" }, { value: "sun", label: "sun", emoji: "☀️" }, { value: "star", label: "star", emoji: "⭐" }] },
          { type: "choice", role: "child", word: "star", chinese: "星星", prompt: "再找一个，哪一个是 star？", options: [{ value: "star", label: "star", emoji: "⭐" }, { value: "moon", label: "moon", emoji: "🌙" }, { value: "cloud", label: "cloud", emoji: "☁️" }] },
          { type: "speak", role: "grandma", phrase: "The train is ready.", chinese: "火车准备好了。", context: "星空小火车在站台等待" },
          { type: "speak", role: "grandma", phrase: "To the moon!", chinese: "去月球！", context: "奶奶宣布今晚的目的地" },
          { type: "dialogue", role: "together", title: "开向月亮的小火车", lines: [{ role: "奶奶", emoji: "👩🏻", english: "All aboard!", chinese: "大家上车！" }, { role: "宝宝", emoji: "👦🏻", english: "Choo-choo!", chinese: "呜——呜——！" }, { role: "奶奶", emoji: "👩🏻", english: "To the moon!", chinese: "去月球！" }, { role: "宝宝", emoji: "👦🏻", english: "Good night!", chinese: "晚安！" }] },
          { type: "mission", role: "together", title: "开一列星空小火车", picture: "🌙 🚂 ✨", steps: ["打开小夜灯，排出一列小火车", "一起数三颗“星星”", "宝宝说：<strong>Good night!</strong>，旅程结束"] }
        ]
      },
      reward: { picture: "🎂 🎈 🏆", title: "第四周完成啦！", lead: "奶奶和宝宝一起完成了第四周的英语旅程。", child: "认识 cake 和 balloon", grandma: "会鼓励和一起庆祝", unlockEmoji: "🏆", unlockTitle: "第四周庆祝小奖杯" },
      stages: [
        { type: "choice", role: "child", word: "cake", chinese: "蛋糕", prompt: "听一听，哪一个是 cake？", options: [{ value: "cake", label: "cake", emoji: "🎂" }, { value: "balloon", label: "balloon", emoji: "🎈" }, { value: "gift", label: "gift", emoji: "🎁" }] },
        { type: "choice", role: "child", word: "balloon", chinese: "气球", prompt: "再找一个，哪一个是 balloon？", options: [{ value: "balloon", label: "balloon", emoji: "🎈" }, { value: "star", label: "star", emoji: "⭐" }, { value: "cake", label: "cake", emoji: "🎂" }] },
        { type: "speak", role: "grandma", phrase: "Well done!", chinese: "做得真棒！", context: "奶奶表扬坚持学习的宝宝" },
        { type: "speak", role: "grandma", phrase: "Let's celebrate!", chinese: "我们来庆祝！", context: "奶奶提议开一场庆祝会" },
        { type: "dialogue", role: "together", title: "第四周庆祝会", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Well done!", chinese: "做得真棒！" }, { role: "宝宝", emoji: "👦🏻", english: "Thank you!", chinese: "谢谢！" }, { role: "奶奶", emoji: "👩🏻", english: "Let's celebrate!", chinese: "我们来庆祝！" }, { role: "宝宝", emoji: "👦🏻", english: "I'm happy!", chinese: "我很开心！" }] },
        { type: "mission", role: "together", title: "开一次家庭庆祝会", picture: "🎂 🎉 🏆", steps: ["和家人分享今天学到的英语", "奶奶说：<strong>Well done!</strong>", "一起说：<strong>Let's celebrate!</strong>"] }
      ]
    },
  jump: {
    id: "jump",
    order: 29,
    meta: "第二十九课",
    nodeTitle: "蹦蹦跳跳",
    title: "宝宝运动会",
    description: "学 jump 和 run，一起动起来开运动会。",
    pictureMain: "🤸",
    pictureSmall: "🏃",
    pictureClass: "picture-actions",
    childGoal: "jump · run",
    grandmaGoal: "I can jump.",
    previewPhrase: "I can jump. I can run.",
    nodeSubtitle: "动一动",
    wordGame: "wordMatch",
    reward: { picture: "🤸 🏃 🏅", title: "运动会开幕啦！", lead: "奶奶和宝宝一起完成了跳跃和跑步。", child: "认识 jump 和 run", grandma: "会说 I can jump.", unlockEmoji: "🏅", unlockTitle: "宝宝的运动会奖牌" },
    stages: [
      { type: "choice", role: "child", word: "jump", chinese: "跳", prompt: "听一听，哪个动作是 jump？", options: [{ value: "jump", label: "jump", emoji: "🤸" }, { value: "run", label: "run", emoji: "🏃" }, { value: "sleep", label: "sleep", emoji: "😴" }] },
      { type: "choice", role: "child", word: "run", chinese: "跑", prompt: "再听一个，哪个是 run？", options: [{ value: "run", label: "run", emoji: "🏃" }, { value: "jump", label: "jump", emoji: "🤸" }, { value: "sit", label: "sit", emoji: "🪑" }] },
      { type: "speak", role: "grandma", phrase: "I can jump.", chinese: "我会跳。", context: "奶奶在院子里示范跳一跳" },
      { type: "speak", role: "grandma", phrase: "I can run.", chinese: "我会跑。", context: "奶奶和宝宝准备赛跑" },
      { type: "dialogue", role: "together", title: "宝宝运动会", lines: [{ role: "奶奶", emoji: "👩🏻", english: "I can jump!", chinese: "我会跳！" }, { role: "宝宝", emoji: "👦🏻", english: "I can jump too!", chinese: "我也会跳！" }, { role: "奶奶", emoji: "👩🏻", english: "Let's run!", chinese: "我们来跑！" }, { role: "宝宝", emoji: "👦🏻", english: "Run, run, run!", chinese: "跑呀跑！" }] },
      { type: "mission", role: "together", title: "开一场家庭运动会", picture: "🤸 🏃 🏅", steps: ["宝宝原地跳三下，说：<strong>Jump!</strong>", "一起小跑一段，说：<strong>Run!</strong>", "奶奶说：<strong>I can jump.</strong>，宝宝跟着做"] }
    ]
  },
  sit: {
    id: "sit",
    order: 30,
    meta: "第三十课",
    nodeTitle: "坐一坐",
    title: "上课啦，坐坐好",
    description: "学 sit 和 stand，听懂坐下和站起来的指令。",
    pictureMain: "🪑",
    pictureSmall: "🧍",
    pictureClass: "picture-body",
    childGoal: "sit · stand",
    grandmaGoal: "Sit down.",
    previewPhrase: "Sit down. Stand up.",
    nodeSubtitle: "听指令",
    reward: { picture: "🪑 🧍 ✨", title: "会听指令啦！", lead: "奶奶和宝宝一起练习了坐下和站起。", child: "认识 sit 和 stand", grandma: "会说 Sit down. 和 Stand up.", unlockEmoji: "🪑", unlockTitle: "宝宝的小椅子" },
    stages: [
      { type: "choice", role: "child", word: "sit", chinese: "坐下", prompt: "听一听，哪个是 sit？", options: [{ value: "sit", label: "sit", emoji: "🪑" }, { value: "stand", label: "stand", emoji: "🧍" }, { value: "run", label: "run", emoji: "🏃" }] },
      { type: "choice", role: "child", word: "stand", chinese: "站起", prompt: "再听一个，哪个是 stand？", options: [{ value: "stand", label: "stand", emoji: "🧍" }, { value: "sit", label: "sit", emoji: "🪑" }, { value: "jump", label: "jump", emoji: "🤸" }] },
      { type: "speak", role: "grandma", phrase: "Sit down.", chinese: "请坐下。", context: "奶奶请宝宝坐到小椅子上" },
      { type: "speak", role: "grandma", phrase: "Stand up.", chinese: "请站起来。", context: "游戏开始前请大家站好" },
      { type: "dialogue", role: "together", title: "听指令做动作", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Sit down, please.", chinese: "请坐下。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好的！" }, { role: "奶奶", emoji: "👩🏻", english: "Stand up!", chinese: "站起来！" }, { role: "宝宝", emoji: "👦🏻", english: "Up, up, up!", chinese: "起起起！" }] },
      { type: "mission", role: "together", title: "玩一次听指令游戏", picture: "🪑 🧍 👂", steps: ["奶奶说：<strong>Sit down.</strong>，宝宝坐下", "奶奶说：<strong>Stand up.</strong>，宝宝站起", "交换角色，让宝宝也说指令"] }
    ]
  },
  open: {
    id: "open",
    order: 31,
    meta: "第三十一课",
    nodeTitle: "开和关",
    title: "神秘的小盒子",
    description: "学 open 和 close，探索打开与关上。",
    pictureMain: "📦",
    pictureSmall: "🚪",
    pictureClass: "picture-room",
    childGoal: "open · close",
    grandmaGoal: "Open the door.",
    previewPhrase: "Open the box. Close the door.",
    nodeSubtitle: "找一找",
    wordGame: "wordMatch",
    reward: { picture: "📦 🚪 🔑", title: "打开神秘宝盒！", lead: "奶奶和宝宝一起学会了打开和关上。", child: "认识 open 和 close", grandma: "会说 Open the door.", unlockEmoji: "🔑", unlockTitle: "神秘宝盒的小钥匙" },
    stages: [
      { type: "choice", role: "child", word: "open", chinese: "打开", prompt: "听一听，哪个是 open？", options: [{ value: "open", label: "open", emoji: "📖" }, { value: "close", label: "close", emoji: "🙈" }, { value: "sleep", label: "sleep", emoji: "😴" }] },
      { type: "choice", role: "child", word: "close", chinese: "关上", prompt: "再听一个，哪个是 close？", options: [{ value: "close", label: "close", emoji: "🙈" }, { value: "open", label: "open", emoji: "📖" }, { value: "run", label: "run", emoji: "🏃" }] },
      { type: "speak", role: "grandma", phrase: "Open the box.", chinese: "打开盒子。", context: "奶奶拿出一个神秘的小盒子" },
      { type: "speak", role: "grandma", phrase: "Close the door.", chinese: "关上门。", context: "睡前请宝宝帮忙关上门" },
      { type: "dialogue", role: "together", title: "神秘的小盒子", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Open the box.", chinese: "打开盒子。" }, { role: "宝宝", emoji: "👦🏻", english: "What is it?", chinese: "是什么呀？" }, { role: "奶奶", emoji: "👩🏻", english: "Close it!", chinese: "关上它！" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好的！" }] },
      { type: "mission", role: "together", title: "玩一次开开关关", picture: "📦 🚪 🎁", steps: ["找一个盒子，宝宝说：<strong>Open!</strong> 打开", "看看里面，说：<strong>Close!</strong> 关上", "帮家里关一次门，说：<strong>Close the door.</strong>"] }
    ]
  },
  place: {
    id: "place",
    order: 32,
    meta: "第三十二课",
    nodeTitle: "在哪里",
    title: "玩具躲猫猫",
    description: "学 in 和 on，找到玩具藏在哪里。",
    pictureMain: "🧸",
    pictureSmall: "📦",
    pictureClass: "picture-toys",
    childGoal: "in · on",
    grandmaGoal: "It is in the box.",
    previewPhrase: "It is in the box. It is on the table.",
    nodeSubtitle: "找东西",
    reward: { picture: "🧸 📦 🔍", title: "找到小熊啦！", lead: "奶奶和宝宝一起用 in 和 on 找到了玩具。", child: "认识 in 和 on", grandma: "会说 It is in the box.", unlockEmoji: "🔍", unlockTitle: "宝宝的放大镜" },
    stages: [
      { type: "choice", role: "child", word: "in", chinese: "在里面", prompt: "听一听，哪个是 in？", options: [{ value: "in", label: "in", emoji: "📦🐻" }, { value: "on", label: "on", emoji: "📦🧸" }, { value: "under", label: "under", emoji: "🛏️🧸" }] },
      { type: "choice", role: "child", word: "on", chinese: "在上面", prompt: "再听一个，哪个是 on？", options: [{ value: "on", label: "on", emoji: "📦🧸" }, { value: "in", label: "in", emoji: "📦🐻" }, { value: "behind", label: "behind", emoji: "🚪🧸" }] },
      { type: "speak", role: "grandma", phrase: "It is in the box.", chinese: "它在盒子里。", context: "小熊躲在盒子里" },
      { type: "speak", role: "grandma", phrase: "It is on the table.", chinese: "它在桌子上。", context: "小熊坐在桌子上" },
      { type: "dialogue", role: "together", title: "玩具躲猫猫", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Where is the bear?", chinese: "小熊在哪里？" }, { role: "宝宝", emoji: "👦🏻", english: "It is in the box!", chinese: "在盒子里！" }, { role: "奶奶", emoji: "👩🏻", english: "Where is the ball?", chinese: "球在哪里？" }, { role: "宝宝", emoji: "👦🏻", english: "It is on the table!", chinese: "在桌子上！" }] },
      { type: "mission", role: "together", title: "一起找玩具", picture: "🧸 📦 🔍", steps: ["把小熊放进盒子，说：<strong>In!</strong>", "把小熊放到桌上，说：<strong>On!</strong>", "奶奶问：<strong>Where is the bear?</strong>，宝宝指一指"] }
    ]
  },
  hiding: {
    id: "hiding",
    order: 33,
    meta: "第三十三课",
    nodeTitle: "藏起来",
    title: "小熊躲到哪里去",
    description: "学 under 和 behind，继续玩躲猫猫。",
    pictureMain: "🛏️",
    pictureSmall: "🚪",
    pictureClass: "picture-bedtime",
    childGoal: "under · behind",
    grandmaGoal: "It is under the bed.",
    previewPhrase: "It is under the bed. It is behind the door.",
    nodeSubtitle: "躲猫猫",
    wordGame: "wordMatch",
    reward: { picture: "🛏️ 🚪 🙈", title: "躲猫猫冠军！", lead: "奶奶和宝宝用 under 和 behind 找到了小熊。", child: "认识 under 和 behind", grandma: "会说 It is under the bed.", unlockEmoji: "🙈", unlockTitle: "躲猫猫小勋章" },
    stages: [
      { type: "choice", role: "child", word: "under", chinese: "在下面", prompt: "听一听，哪个是 under？", options: [{ value: "under", label: "under", emoji: "🛏️🧸" }, { value: "on", label: "on", emoji: "📦🧸" }, { value: "behind", label: "behind", emoji: "🚪🧸" }] },
      { type: "choice", role: "child", word: "behind", chinese: "在后面", prompt: "再听一个，哪个是 behind？", options: [{ value: "behind", label: "behind", emoji: "🚪🧸" }, { value: "under", label: "under", emoji: "🛏️🧸" }, { value: "in", label: "in", emoji: "📦🐻" }] },
      { type: "speak", role: "grandma", phrase: "It is under the bed.", chinese: "它在床下面。", context: "小熊躲到了床底下" },
      { type: "speak", role: "grandma", phrase: "It is behind the door.", chinese: "它在门后面。", context: "小熊藏在了门后" },
      { type: "dialogue", role: "together", title: "小熊躲到哪里去", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Where is the bear?", chinese: "小熊在哪里？" }, { role: "宝宝", emoji: "👦🏻", english: "Under the bed!", chinese: "床底下！" }, { role: "奶奶", emoji: "👩🏻", english: "No, look again.", chinese: "不对，再看看。" }, { role: "宝宝", emoji: "👦🏻", english: "Behind the door!", chinese: "门后面！" }] },
      { type: "mission", role: "together", title: "一起躲猫猫", picture: "🙈 🚪 🛏️", steps: ["把小熊藏到床下，说：<strong>Under!</strong>", "把小熊藏到门后，说：<strong>Behind!</strong>", "宝宝闭上眼睛数三下，再去找"] }
    ]
  },
  walk: {
    id: "walk",
    order: 34,
    meta: "第三十四课",
    nodeTitle: "走和停",
    title: "红灯停，绿灯走",
    description: "学 walk 和 stop，认识过马路的规则。",
    pictureMain: "🚶",
    pictureSmall: "🛑",
    pictureClass: "picture-park",
    childGoal: "walk · stop",
    grandmaGoal: "Let's walk.",
    previewPhrase: "Let's walk. Stop! Be careful.",
    nodeSubtitle: "去走走",
    reward: { picture: "🚶 🛑 🚦", title: "会安全过马路啦！", lead: "奶奶和宝宝一起练习了走和停。", child: "认识 walk 和 stop", grandma: "会说 Let's walk. 和 Stop!", unlockEmoji: "🚦", unlockTitle: "安全小卫士红绿灯" },
    stages: [
      { type: "choice", role: "child", word: "walk", chinese: "走", prompt: "听一听，哪个是 walk？", options: [{ value: "walk", label: "walk", emoji: "🚶" }, { value: "stop", label: "stop", emoji: "🛑" }, { value: "run", label: "run", emoji: "🏃" }] },
      { type: "choice", role: "child", word: "stop", chinese: "停", prompt: "再听一个，哪个是 stop？", options: [{ value: "stop", label: "stop", emoji: "🛑" }, { value: "walk", label: "walk", emoji: "🚶" }, { value: "jump", label: "jump", emoji: "🤸" }] },
      { type: "speak", role: "grandma", phrase: "Let's walk.", chinese: "我们走吧。", context: "奶奶牵着宝宝出门散步" },
      { type: "speak", role: "grandma", phrase: "Stop! Be careful.", chinese: "停！小心。", context: "过马路前要停下看一看" },
      { type: "dialogue", role: "together", title: "红灯停绿灯走", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's walk.", chinese: "我们走吧。" }, { role: "宝宝", emoji: "👦🏻", english: "Walk, walk, walk.", chinese: "走走走。" }, { role: "奶奶", emoji: "👩🏻", english: "Stop! Red light!", chinese: "停！红灯！" }, { role: "宝宝", emoji: "👦🏻", english: "Stop!", chinese: "停！" }] },
      { type: "mission", role: "together", title: "玩一次红灯绿灯", picture: "🚦 🚶 🛑", steps: ["奶奶说：<strong>Walk!</strong>，宝宝向前走", "奶奶说：<strong>Stop!</strong>，宝宝立刻停住", "交换角色再来一轮"] }
    ]
  },
  abilities: {
    id: "abilities",
    order: 35,
    meta: "第三十五课",
    nodeTitle: "我会做",
    title: "本领小火车",
    description: "复习这一周的动作，登上本领小火车。",
    pictureMain: "🚂",
    pictureSmall: "💪",
    pictureClass: "picture-games",
    childGoal: "jump · run · sit",
    grandmaGoal: "I can do it!",
    previewPhrase: "I can jump. I can do it!",
    nodeSubtitle: "我都会",
    special: {
      title: "本领小火车",
      description: "把这一周学的动作，装进本领小火车",
      reward: { picture: "🚂 💪 ⭐", title: "本领小火车到站啦！", lead: "奶奶和宝宝完成了第五周的小火车特别版。", child: "复习 jump、run、sit", grandma: "会说 I can do it!", unlockEmoji: "🎫", unlockTitle: "本领小火车车票" },
      stages: [
        { type: "choice", role: "child", word: "jump", chinese: "跳", prompt: "听一听，哪个是 jump？", options: [{ value: "jump", label: "jump", emoji: "🤸" }, { value: "sit", label: "sit", emoji: "🪑" }, { value: "walk", label: "walk", emoji: "🚶" }] },
        { type: "choice", role: "child", word: "sit", chinese: "坐下", prompt: "再听一个，哪个是 sit？", options: [{ value: "sit", label: "sit", emoji: "🪑" }, { value: "walk", label: "walk", emoji: "🚶" }, { value: "stop", label: "stop", emoji: "🛑" }] },
        { type: "speak", role: "grandma", phrase: "I can do it!", chinese: "我能做到！", context: "奶奶为宝宝加油打气" },
        { type: "speak", role: "grandma", phrase: "All aboard!", chinese: "大家上车！", context: "本领小火车准备出发" },
        { type: "dialogue", role: "together", title: "本领小火车出发", lines: [{ role: "奶奶", emoji: "👩🏻", english: "All aboard!", chinese: "大家上车！" }, { role: "宝宝", emoji: "👦🏻", english: "I can jump!", chinese: "我会跳！" }, { role: "奶奶", emoji: "👩🏻", english: "I can do it!", chinese: "我能做到！" }, { role: "宝宝", emoji: "👦🏻", english: "I can do it too!", chinese: "我也能做到！" }] },
        { type: "mission", role: "together", title: "本领小达人表演", picture: "🤸 🏃 🚂", steps: ["宝宝表演 jump，说：<strong>I can jump!</strong>", "宝宝表演 run，说：<strong>I can run!</strong>", "奶奶一起说：<strong>I can do it!</strong>"] }
      ]
    },
    reward: { picture: "💪 ⭐ 🏆", title: "第五周完成啦！", lead: "奶奶和宝宝一起完成了动作与位置的一周。", child: "会说 jump、run、sit 等动作词", grandma: "会用 in、on、under 说位置", unlockEmoji: "💪", unlockTitle: "本领小达人奖状" },
    stages: [
      { type: "choice", role: "child", word: "jump", chinese: "跳", prompt: "听一听，哪个是 jump？", options: [{ value: "jump", label: "jump", emoji: "🤸" }, { value: "sit", label: "sit", emoji: "🪑" }, { value: "walk", label: "walk", emoji: "🚶" }] },
      { type: "choice", role: "child", word: "run", chinese: "跑", prompt: "再听一个，哪个是 run？", options: [{ value: "run", label: "run", emoji: "🏃" }, { value: "jump", label: "jump", emoji: "🤸" }, { value: "stop", label: "stop", emoji: "🛑" }] },
      { type: "speak", role: "grandma", phrase: "I can do it!", chinese: "我能做到！", context: "奶奶为宝宝加油" },
      { type: "speak", role: "grandma", phrase: "All aboard!", chinese: "大家上车！", context: "本领小火车准备出发" },
      { type: "dialogue", role: "together", title: "本领小达人", lines: [{ role: "奶奶", emoji: "👩🏻", english: "I can jump!", chinese: "我会跳！" }, { role: "宝宝", emoji: "👦🏻", english: "I can run!", chinese: "我会跑！" }, { role: "奶奶", emoji: "👩🏻", english: "I can do it!", chinese: "我能做到！" }, { role: "宝宝", emoji: "👦🏻", english: "I can do it too!", chinese: "我也能！" }] },
      { type: "mission", role: "together", title: "本领大展示", picture: "🤸 🏃 💪", steps: ["宝宝表演一个动作，奶奶说英文", "交换：奶奶做动作，宝宝说英文", "一起说：<strong>I can do it!</strong>"] }
    ]
  },
  askwhat: {
    id: "askwhat",
    order: 36,
    meta: "第三十六课",
    nodeTitle: "这是什么",
    title: "好奇宝宝问一问",
    description: "学用 What is it? 提问，认识小动物。",
    pictureMain: "🐱",
    pictureSmall: "❓",
    pictureClass: "picture-animals",
    childGoal: "cat · dog",
    grandmaGoal: "What is it?",
    previewPhrase: "What is it? It is a cat.",
    nodeSubtitle: "问一问",
    wordGame: "wordTap",
    reward: { picture: "🐱 🐶 ❓", title: "会提问啦！", lead: "奶奶和宝宝一起学会了 What is it?", child: "复习 cat 和 dog", grandma: "会问 What is it?", unlockEmoji: "❓", unlockTitle: "好奇宝宝小问号" },
    stages: [
      { type: "choice", role: "child", word: "cat", chinese: "猫", prompt: "听一听，哪个是 cat？", options: [{ value: "cat", label: "cat", emoji: "🐱" }, { value: "dog", label: "dog", emoji: "🐶" }, { value: "bird", label: "bird", emoji: "🐦" }] },
      { type: "choice", role: "child", word: "dog", chinese: "狗", prompt: "再听一个，哪个是 dog？", options: [{ value: "dog", label: "dog", emoji: "🐶" }, { value: "cat", label: "cat", emoji: "🐱" }, { value: "fish", label: "fish", emoji: "🐟" }] },
      { type: "speak", role: "grandma", phrase: "What is it?", chinese: "这是什么？", context: "奶奶指着一只小动物问" },
      { type: "speak", role: "grandma", phrase: "It is a cat.", chinese: "这是一只猫。", context: "奶奶揭晓答案" },
      { type: "dialogue", role: "together", title: "好奇宝宝问一问", lines: [{ role: "奶奶", emoji: "👩🏻", english: "What is it?", chinese: "这是什么？" }, { role: "宝宝", emoji: "👦🏻", english: "It is a cat!", chinese: "这是一只猫！" }, { role: "奶奶", emoji: "👩🏻", english: "What is it?", chinese: "这是什么？" }, { role: "宝宝", emoji: "👦🏻", english: "It is a dog!", chinese: "这是一只狗！" }] },
      { type: "mission", role: "together", title: "一起指一指问一问", picture: "🐱 🐶 ❓", steps: ["奶奶指一个东西，问：<strong>What is it?</strong>", "宝宝用英语回答，或说中文再由奶奶翻译", "交换角色，让宝宝也来问"] }
    ]
  },
  askwhere: {
    id: "askwhere",
    order: 37,
    meta: "第三十七课",
    nodeTitle: "在哪里",
    title: "找呀找，在哪里",
    description: "学用 Where is it? 提问，说出东西的位置。",
    pictureMain: "🪑",
    pictureSmall: "🗺️",
    pictureClass: "picture-room",
    childGoal: "table · box",
    grandmaGoal: "Where is it?",
    previewPhrase: "Where is it? It is on the table.",
    nodeSubtitle: "找一找",
    reward: { picture: "🪑 📦 🗺️", title: "小小寻宝家！", lead: "奶奶和宝宝学会了 Where is it?", child: "认识 table 和 box", grandma: "会问 Where is it?", unlockEmoji: "🗺️", unlockTitle: "寻宝小地图" },
    stages: [
      { type: "choice", role: "child", word: "table", chinese: "桌子", prompt: "听一听，哪个是 table？", options: [{ value: "table", label: "table", emoji: "🪑" }, { value: "box", label: "box", emoji: "📦" }, { value: "bed", label: "bed", emoji: "🛏️" }] },
      { type: "choice", role: "child", word: "box", chinese: "盒子", prompt: "再听一个，哪个是 box？", options: [{ value: "box", label: "box", emoji: "📦" }, { value: "table", label: "table", emoji: "🪑" }, { value: "door", label: "door", emoji: "🚪" }] },
      { type: "speak", role: "grandma", phrase: "Where is it?", chinese: "它在哪里？", context: "奶奶找不到玩具了" },
      { type: "speak", role: "grandma", phrase: "It is on the table.", chinese: "它在桌子上。", context: "原来玩具在桌子上" },
      { type: "dialogue", role: "together", title: "找呀找在哪里", lines: [{ role: "宝宝", emoji: "👦🏻", english: "Where is it?", chinese: "它在哪里？" }, { role: "奶奶", emoji: "👩🏻", english: "It is on the table.", chinese: "它在桌子上。" }, { role: "宝宝", emoji: "👦🏻", english: "Where is it?", chinese: "它在哪里？" }, { role: "奶奶", emoji: "👩🏻", english: "It is in the box.", chinese: "它在盒子里。" }] },
      { type: "mission", role: "together", title: "藏起来找一找", picture: "📦 🪑 🗺️", steps: ["把玩具藏起来，宝宝问：<strong>Where is it?</strong>", "奶奶用 on / in 回答位置", "交换角色再玩一次"] }
    ]
  },
  askwho: {
    id: "askwho",
    order: 38,
    meta: "第三十八课",
    nodeTitle: "是谁呀",
    title: "咚咚咚，谁在敲门",
    description: "学用 Who is it? 提问，认识家里的人。",
    pictureMain: "🚪",
    pictureSmall: "👨‍👩‍👦",
    pictureClass: "picture-family",
    childGoal: "grandma · baby",
    grandmaGoal: "Who is it?",
    previewPhrase: "Who is it? It is Grandma.",
    nodeSubtitle: "猜一猜",
    wordGame: "wordTap",
    reward: { picture: "🚪 👨‍👩‍👦 🔔", title: "会认家里人啦！", lead: "奶奶和宝宝学会了 Who is it?", child: "复习 grandma 和 baby", grandma: "会问 Who is it?", unlockEmoji: "🔔", unlockTitle: "小熊家的门铃" },
    stages: [
      { type: "choice", role: "child", word: "grandma", chinese: "奶奶", prompt: "听一听，哪位是 grandma？", options: [{ value: "grandma", label: "grandma", emoji: "👩🏻" }, { value: "baby", label: "baby", emoji: "👶🏻" }, { value: "dad", label: "dad", emoji: "👨🏻" }] },
      { type: "choice", role: "child", word: "baby", chinese: "宝宝", prompt: "再听一个，哪位是 baby？", options: [{ value: "baby", label: "baby", emoji: "👶🏻" }, { value: "grandma", label: "grandma", emoji: "👩🏻" }, { value: "mom", label: "mom", emoji: "👩🏻" }] },
      { type: "speak", role: "grandma", phrase: "Who is it?", chinese: "是谁呀？", context: "门外传来了敲门声" },
      { type: "speak", role: "grandma", phrase: "It is Grandma.", chinese: "是奶奶。", context: "打开门一看是奶奶" },
      { type: "dialogue", role: "together", title: "咚咚咚谁在敲门", lines: [{ role: "宝宝", emoji: "👦🏻", english: "Who is it?", chinese: "是谁呀？" }, { role: "奶奶", emoji: "👩🏻", english: "It is Grandma!", chinese: "是奶奶！" }, { role: "宝宝", emoji: "👦🏻", english: "Hello, Grandma!", chinese: "奶奶好！" }, { role: "奶奶", emoji: "👩🏻", english: "Hello, baby!", chinese: "宝宝好！" }] },
      { type: "mission", role: "together", title: "玩一次敲门游戏", picture: "🚪 🔔 👩🏻", steps: ["宝宝敲门，说：<strong>Knock, knock!</strong>", "奶奶问：<strong>Who is it?</strong>", "宝宝回答：<strong>It is baby!</strong>"] }
    ]
  },
  howmany: {
    id: "howmany",
    order: 39,
    meta: "第三十九课",
    nodeTitle: "数一数",
    title: "几只小鸭子",
    description: "学用 How many? 提问，复习数数。",
    pictureMain: "🦆",
    pictureSmall: "🔢",
    pictureClass: "picture-numbers",
    childGoal: "one · two",
    grandmaGoal: "How many?",
    previewPhrase: "How many? Two cars.",
    nodeSubtitle: "数一数",
    reward: { picture: "🦆 🔢 ✨", title: "会数数啦！", lead: "奶奶和宝宝学会了 How many?", child: "复习 one 和 two", grandma: "会问 How many?", unlockEmoji: "🔢", unlockTitle: "数数小星星" },
    stages: [
      { type: "choice", role: "child", word: "one", chinese: "一", prompt: "听一听，哪个是 one？", options: [{ value: "one", label: "one", emoji: "1️⃣" }, { value: "two", label: "two", emoji: "2️⃣" }, { value: "three", label: "three", emoji: "3️⃣" }] },
      { type: "choice", role: "child", word: "two", chinese: "二", prompt: "再听一个，哪个是 two？", options: [{ value: "two", label: "two", emoji: "2️⃣" }, { value: "one", label: "one", emoji: "1️⃣" }, { value: "three", label: "three", emoji: "3️⃣" }] },
      { type: "speak", role: "grandma", phrase: "How many?", chinese: "有多少个？", context: "奶奶指着小鸭子问" },
      { type: "speak", role: "grandma", phrase: "Two ducks.", chinese: "两只鸭子。", context: "一起数出答案" },
      { type: "dialogue", role: "together", title: "几只小鸭子", lines: [{ role: "奶奶", emoji: "👩🏻", english: "How many ducks?", chinese: "有几只鸭子？" }, { role: "宝宝", emoji: "👦🏻", english: "One, two!", chinese: "一、二！" }, { role: "奶奶", emoji: "👩🏻", english: "How many?", chinese: "有多少个？" }, { role: "宝宝", emoji: "👦🏻", english: "Two ducks!", chinese: "两只鸭子！" }] },
      { type: "mission", role: "together", title: "一起数一数", picture: "🦆 🔢 🧸", steps: ["拿出两个玩具，奶奶问：<strong>How many?</strong>", "宝宝数：<strong>One, two!</strong>", "再数数家里的小凳子"] }
    ]
  },
  whichone: {
    id: "whichone",
    order: 40,
    meta: "第四十课",
    nodeTitle: "哪一个",
    title: "我要选哪一个",
    description: "学用 Which one? 提问，说出想要的颜色。",
    pictureMain: "🎨",
    pictureSmall: "👉",
    pictureClass: "picture-colors",
    childGoal: "red · blue",
    grandmaGoal: "Which one?",
    previewPhrase: "Which one? The red one.",
    nodeSubtitle: "选一选",
    wordGame: "wordTap",
    reward: { picture: "🎨 👉 🌈", title: "会做选择啦！", lead: "奶奶和宝宝学会了 Which one?", child: "复习 red 和 blue", grandma: "会问 Which one?", unlockEmoji: "🎨", unlockTitle: "彩虹调色盘" },
    stages: [
      { type: "choice", role: "child", word: "red", chinese: "红色", prompt: "听一听，哪个是 red？", options: [{ value: "red", label: "red", emoji: "🔴" }, { value: "blue", label: "blue", emoji: "🔵" }, { value: "yellow", label: "yellow", emoji: "🟡" }] },
      { type: "choice", role: "child", word: "blue", chinese: "蓝色", prompt: "再听一个，哪个是 blue？", options: [{ value: "blue", label: "blue", emoji: "🔵" }, { value: "red", label: "red", emoji: "🔴" }, { value: "green", label: "green", emoji: "🟢" }] },
      { type: "speak", role: "grandma", phrase: "Which one?", chinese: "哪一个？", context: "奶奶请宝宝选一个颜色" },
      { type: "speak", role: "grandma", phrase: "The red one.", chinese: "红色的那个。", context: "宝宝选了红色" },
      { type: "dialogue", role: "together", title: "我要选哪一个", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Which one?", chinese: "哪一个？" }, { role: "宝宝", emoji: "👦🏻", english: "The red one!", chinese: "红色的！" }, { role: "奶奶", emoji: "👩🏻", english: "Which one?", chinese: "哪一个？" }, { role: "宝宝", emoji: "👦🏻", english: "The blue one!", chinese: "蓝色的！" }] },
      { type: "mission", role: "together", title: "一起选一选", picture: "🎨 👉 🌈", steps: ["摆出两个颜色的玩具", "奶奶问：<strong>Which one?</strong>", "宝宝说：<strong>The red one!</strong> 再选一次"] }
    ]
  },
  howfeel: {
    id: "howfeel",
    order: 41,
    meta: "第四十一课",
    nodeTitle: "你感觉怎样",
    title: "今天开心吗",
    description: "学用 How do you feel? 提问，说出感受。",
    pictureMain: "😊",
    pictureSmall: "💛",
    pictureClass: "picture-feelings",
    childGoal: "happy · tired",
    grandmaGoal: "How do you feel?",
    previewPhrase: "How do you feel? I am happy.",
    nodeSubtitle: "说一说",
    reward: { picture: "😊 🥱 💛", title: "会表达感受啦！", lead: "奶奶和宝宝学会了 How do you feel?", child: "复习 happy 和 tired", grandma: "会问 How do you feel?", unlockEmoji: "💛", unlockTitle: "心情小太阳" },
    stages: [
      { type: "choice", role: "child", word: "happy", chinese: "开心", prompt: "听一听，哪个是 happy？", options: [{ value: "happy", label: "happy", emoji: "😊" }, { value: "tired", label: "tired", emoji: "🥱" }, { value: "sad", label: "sad", emoji: "😢" }] },
      { type: "choice", role: "child", word: "tired", chinese: "累", prompt: "再听一个，哪个是 tired？", options: [{ value: "tired", label: "tired", emoji: "🥱" }, { value: "happy", label: "happy", emoji: "😊" }, { value: "hungry", label: "hungry", emoji: "😋" }] },
      { type: "speak", role: "grandma", phrase: "How do you feel?", chinese: "你感觉怎么样？", context: "奶奶关心宝宝今天的心情" },
      { type: "speak", role: "grandma", phrase: "I am happy.", chinese: "我很开心。", context: "宝宝笑着说出了感受" },
      { type: "dialogue", role: "together", title: "今天开心吗", lines: [{ role: "奶奶", emoji: "👩🏻", english: "How do you feel?", chinese: "你感觉怎么样？" }, { role: "宝宝", emoji: "👦🏻", english: "I am happy!", chinese: "我很开心！" }, { role: "奶奶", emoji: "👩🏻", english: "I am happy too!", chinese: "我也很开心！" }, { role: "宝宝", emoji: "👦🏻", english: "Yay!", chinese: "耶！" }] },
      { type: "mission", role: "together", title: "说说今天的心情", picture: "😊 🥱 💛", steps: ["奶奶问：<strong>How do you feel?</strong>", "宝宝说：<strong>I am happy!</strong> 或 tired", "一起做个表情，说说今天开不开心"] }
    ]
  },
  questioner: {
    id: "questioner",
    order: 42,
    meta: "第四十二课",
    nodeTitle: "好奇宝宝",
    title: "问题小火车",
    description: "复习这一周的问句，登上问题小火车。",
    pictureMain: "🚂",
    pictureSmall: "❓",
    pictureClass: "picture-games",
    childGoal: "what · where · who",
    grandmaGoal: "What is it?",
    previewPhrase: "What is it? Where is it?",
    nodeSubtitle: "会提问",
    special: {
      title: "问题小火车",
      description: "把小问号们装进问题小火车",
      reward: { picture: "🚂 ❓ 🔍", title: "问题小火车到站啦！", lead: "奶奶和宝宝完成了第六周的小火车特别版。", child: "会问 what、where、who", grandma: "会用问题引导宝宝思考", unlockEmoji: "🎫", unlockTitle: "问题小火车车票" },
      stages: [
        { type: "choice", role: "child", word: "cat", chinese: "猫", prompt: "听一听，哪个是 cat？", options: [{ value: "cat", label: "cat", emoji: "🐱" }, { value: "dog", label: "dog", emoji: "🐶" }, { value: "bird", label: "bird", emoji: "🐦" }] },
        { type: "choice", role: "child", word: "table", chinese: "桌子", prompt: "再听一个，哪个是 table？", options: [{ value: "table", label: "table", emoji: "🪑" }, { value: "box", label: "box", emoji: "📦" }, { value: "bed", label: "bed", emoji: "🛏️" }] },
        { type: "speak", role: "grandma", phrase: "What is it?", chinese: "这是什么？", context: "小火车里藏着好多东西" },
        { type: "speak", role: "grandma", phrase: "Where is it?", chinese: "它在哪里？", context: "一起找找小火车里的宝贝" },
        { type: "dialogue", role: "together", title: "问题小火车出发", lines: [{ role: "奶奶", emoji: "👩🏻", english: "What is it?", chinese: "这是什么？" }, { role: "宝宝", emoji: "👦🏻", english: "It is a cat!", chinese: "是一只猫！" }, { role: "奶奶", emoji: "👩🏻", english: "Where is it?", chinese: "它在哪里？" }, { role: "宝宝", emoji: "👦🏻", english: "On the table!", chinese: "在桌子上！" }] },
        { type: "mission", role: "together", title: "小小提问家", picture: "❓ 🔍 🚂", steps: ["宝宝指一样东西，问：<strong>What is it?</strong>", "宝宝再问：<strong>Where is it?</strong>", "奶奶回答，然后交换角色"] }
      ]
    },
    reward: { picture: "❓ 🔍 🏆", title: "第六周完成啦！", lead: "奶奶和宝宝一起完成了一周的提问练习。", child: "会问 what、where、who", grandma: "会用问题引导宝宝思考", unlockEmoji: "🏆", unlockTitle: "好奇宝宝奖状" },
    stages: [
      { type: "choice", role: "child", word: "cat", chinese: "猫", prompt: "听一听，哪个是 cat？", options: [{ value: "cat", label: "cat", emoji: "🐱" }, { value: "dog", label: "dog", emoji: "🐶" }, { value: "bird", label: "bird", emoji: "🐦" }] },
      { type: "choice", role: "child", word: "table", chinese: "桌子", prompt: "再听一个，哪个是 table？", options: [{ value: "table", label: "table", emoji: "🪑" }, { value: "box", label: "box", emoji: "📦" }, { value: "bed", label: "bed", emoji: "🛏️" }] },
      { type: "speak", role: "grandma", phrase: "What is it?", chinese: "这是什么？", context: "奶奶引导宝宝用英文提问" },
      { type: "speak", role: "grandma", phrase: "Where is it?", chinese: "它在哪里？", context: "继续练习提问" },
      { type: "dialogue", role: "together", title: "好奇宝宝大提问", lines: [{ role: "宝宝", emoji: "👦🏻", english: "What is it?", chinese: "这是什么？" }, { role: "奶奶", emoji: "👩🏻", english: "It is a cat!", chinese: "是一只猫！" }, { role: "宝宝", emoji: "👦🏻", english: "Where is it?", chinese: "它在哪里？" }, { role: "奶奶", emoji: "👩🏻", english: "On the table!", chinese: "在桌子上！" }] },
      { type: "mission", role: "together", title: "一天问三个问题", picture: "❓ ❓ ❓", steps: ["宝宝今天问奶奶三个英文问题", "奶奶用英文回答", "睡前再复习一遍今天的问题"] }
    ]
  },
  wakeup: {
    id: "wakeup",
    order: 43,
    meta: "第四十三课",
    nodeTitle: "起床啦",
    title: "太阳公公起床啦",
    description: "讲一个起床的小故事，学 sun 和 up。",
    pictureMain: "🌞",
    pictureSmall: "🛏️",
    pictureClass: "picture-bedtime",
    childGoal: "sun · up",
    grandmaGoal: "The sun is up.",
    previewPhrase: "The sun is up. I wake up.",
    nodeSubtitle: "说早安",
    phraseGame: "phraseSong",
    song: {
      title: "起床歌",
      emoji: "🌞",
      lines: [
        { english: "The sun is up.", chinese: "太阳升起来了。" },
        { english: "I wake up.", chinese: "我醒来了。" },
        { english: "Good morning, sun!", chinese: "太阳，早上好！" },
        { english: "Let's say hello!", chinese: "一起来问好！" }
      ]
    },
    reward: { picture: "🌞 🛏️ ⏰", title: "会起床说早安啦！", lead: "奶奶和宝宝一起讲了一个起床的小故事。", child: "认识 sun 和 up", grandma: "会说 The sun is up.", unlockEmoji: "⏰", unlockTitle: "小熊的小闹钟" },
    stages: [
      { type: "choice", role: "child", word: "sun", chinese: "太阳", prompt: "听一听，哪个是 sun？", options: [{ value: "sun", label: "sun", emoji: "🌞" }, { value: "moon", label: "moon", emoji: "🌙" }, { value: "star", label: "star", emoji: "⭐" }] },
      { type: "choice", role: "child", word: "up", chinese: "向上", prompt: "再听一个，哪个是 up？", options: [{ value: "up", label: "up", emoji: "⬆️" }, { value: "down", label: "down", emoji: "⬇️" }, { value: "sit", label: "sit", emoji: "🪑" }] },
      { type: "speak", role: "grandma", phrase: "The sun is up.", chinese: "太阳升起来了。", context: "清晨太阳升起来" },
      { type: "speak", role: "grandma", phrase: "I wake up.", chinese: "我醒来了。", context: "宝宝伸个懒腰起床" },
      { type: "dialogue", role: "together", title: "太阳公公起床啦", lines: [{ role: "奶奶", emoji: "👩🏻", english: "The sun is up!", chinese: "太阳升起来了！" }, { role: "宝宝", emoji: "👦🏻", english: "Good morning, sun!", chinese: "太阳，早上好！" }, { role: "奶奶", emoji: "👩🏻", english: "I wake up.", chinese: "我醒来了。" }, { role: "宝宝", emoji: "👦🏻", english: "Me too!", chinese: "我也是！" }] },
      { type: "mission", role: "together", title: "早上的小仪式", picture: "🌞 🛏️ ⏰", steps: ["早上拉开窗帘，说：<strong>The sun is up!</strong>", "宝宝伸个懒腰，说：<strong>I wake up.</strong>", "一起说：<strong>Good morning, sun!</strong>"] }
    ]
  },
  breakfast: {
    id: "breakfast",
    order: 44,
    meta: "第四十四课",
    nodeTitle: "吃早餐",
    title: "香香的早餐",
    description: "讲一个吃早餐的小故事，学 milk 和 bread。",
    pictureMain: "🥛",
    pictureSmall: "🍞",
    pictureClass: "picture-food",
    childGoal: "milk · bread",
    grandmaGoal: "I want milk.",
    previewPhrase: "I want milk. Here is the bread.",
    nodeSubtitle: "做早餐",
    phraseGame: "phraseSong",
    song: {
      title: "早餐歌",
      emoji: "🥛",
      lines: [
        { english: "I want milk.", chinese: "我想喝牛奶。" },
        { english: "Here is the bread.", chinese: "这是面包。" },
        { english: "Yummy, yummy!", chinese: "真好吃！" },
        { english: "Good morning, breakfast!", chinese: "早餐，早上好！" }
      ]
    },
    reward: { picture: "🥛 🍞 😋", title: "会点早餐啦！", lead: "奶奶和宝宝一起讲了吃早餐的故事。", child: "认识 milk 和 bread", grandma: "会说 I want milk.", unlockEmoji: "🥛", unlockTitle: "宝宝的小牛奶杯" },
    stages: [
      { type: "choice", role: "child", word: "milk", chinese: "牛奶", prompt: "听一听，哪个是 milk？", options: [{ value: "milk", label: "milk", emoji: "🥛" }, { value: "bread", label: "bread", emoji: "🍞" }, { value: "egg", label: "egg", emoji: "🥚" }] },
      { type: "choice", role: "child", word: "bread", chinese: "面包", prompt: "再听一个，哪个是 bread？", options: [{ value: "bread", label: "bread", emoji: "🍞" }, { value: "milk", label: "milk", emoji: "🥛" }, { value: "cake", label: "cake", emoji: "🎂" }] },
      { type: "speak", role: "grandma", phrase: "I want milk.", chinese: "我想喝牛奶。", context: "宝宝想吃早餐" },
      { type: "speak", role: "grandma", phrase: "Here is the bread.", chinese: "这是面包。", context: "奶奶端来了面包" },
      { type: "dialogue", role: "together", title: "香香的早餐", lines: [{ role: "宝宝", emoji: "👦🏻", english: "I want milk.", chinese: "我想喝牛奶。" }, { role: "奶奶", emoji: "👩🏻", english: "Here is the milk.", chinese: "给你牛奶。" }, { role: "宝宝", emoji: "👦🏻", english: "I want bread.", chinese: "我想要面包。" }, { role: "奶奶", emoji: "👩🏻", english: "Here is the bread.", chinese: "给你面包。" }] },
      { type: "mission", role: "together", title: "一起吃早餐", picture: "🥛 🍞 😋", steps: ["宝宝说：<strong>I want milk.</strong>", "奶奶说：<strong>Here is the bread.</strong>", "吃完说：<strong>Yummy, yummy!</strong>"] }
    ]
  },
  goingout: {
    id: "goingout",
    order: 45,
    meta: "第四十五课",
    nodeTitle: "出门啦",
    title: "我们要出门啦",
    description: "讲一个出门的小故事，学 shoes 和 door。",
    pictureMain: "👟",
    pictureSmall: "🚪",
    pictureClass: "picture-clothes",
    childGoal: "shoes · door",
    grandmaGoal: "Put on your shoes.",
    previewPhrase: "Put on your shoes. Open the door.",
    nodeSubtitle: "去走走",
    reward: { picture: "👟 🚪 🎒", title: "会自己准备出门啦！", lead: "奶奶和宝宝一起讲了出门的故事。", child: "复习 shoes 和 door", grandma: "会说 Put on your shoes.", unlockEmoji: "🎒", unlockTitle: "宝宝的小背包" },
    stages: [
      { type: "choice", role: "child", word: "shoes", chinese: "鞋子", prompt: "听一听，哪个是 shoes？", options: [{ value: "shoes", label: "shoes", emoji: "👟" }, { value: "hat", label: "hat", emoji: "🧢" }, { value: "door", label: "door", emoji: "🚪" }] },
      { type: "choice", role: "child", word: "door", chinese: "门", prompt: "再听一个，哪个是 door？", options: [{ value: "door", label: "door", emoji: "🚪" }, { value: "window", label: "window", emoji: "🪟" }, { value: "shoes", label: "shoes", emoji: "👟" }] },
      { type: "speak", role: "grandma", phrase: "Put on your shoes.", chinese: "穿上你的鞋。", context: "出门前先穿好鞋" },
      { type: "speak", role: "grandma", phrase: "Open the door.", chinese: "打开门。", context: "准备好后打开门出发" },
      { type: "dialogue", role: "together", title: "我们要出门啦", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Put on your shoes.", chinese: "穿上你的鞋。" }, { role: "宝宝", emoji: "👦🏻", english: "Okay!", chinese: "好的！" }, { role: "奶奶", emoji: "👩🏻", english: "Open the door.", chinese: "打开门。" }, { role: "宝宝", emoji: "👦🏻", english: "Let's go!", chinese: "我们走吧！" }] },
      { type: "mission", role: "together", title: "一起准备出门", picture: "👟 🚪 🎒", steps: ["宝宝自己穿鞋，说：<strong>Put on my shoes.</strong>", "走到门边，说：<strong>Open the door.</strong>", "出门时说：<strong>Let's go!</strong>"] }
    ]
  },
  thepark: {
    id: "thepark",
    order: 46,
    meta: "第四十六课",
    nodeTitle: "去公园",
    title: "公园里的小鸟",
    description: "讲一个公园的小故事，学 bird 和 tree。",
    pictureMain: "🐦",
    pictureSmall: "🌳",
    pictureClass: "picture-park",
    childGoal: "bird · tree",
    grandmaGoal: "I see a bird.",
    previewPhrase: "I see a bird. The bird is in the tree.",
    nodeSubtitle: "去看看",
    phraseGame: "phraseSong",
    song: {
      title: "小鸟歌",
      emoji: "🐦",
      lines: [
        { english: "I see a bird.", chinese: "我看见一只小鸟。" },
        { english: "The bird is in the tree.", chinese: "小鸟在树上。" },
        { english: "Tweet, tweet, tweet!", chinese: "叽叽喳喳！" },
        { english: "Fly away, little bird!", chinese: "小鸟，飞走吧！" }
      ]
    },
    reward: { picture: "🐦 🌳 🌿", title: "会讲公园的故事啦！", lead: "奶奶和宝宝一起讲了公园里小鸟的故事。", child: "认识 bird 和 tree", grandma: "会说 I see a bird.", unlockEmoji: "🌿", unlockTitle: "公园里的小树叶" },
    stages: [
      { type: "choice", role: "child", word: "bird", chinese: "小鸟", prompt: "听一听，哪个是 bird？", options: [{ value: "bird", label: "bird", emoji: "🐦" }, { value: "tree", label: "tree", emoji: "🌳" }, { value: "flower", label: "flower", emoji: "🌼" }] },
      { type: "choice", role: "child", word: "tree", chinese: "树", prompt: "再听一个，哪个是 tree？", options: [{ value: "tree", label: "tree", emoji: "🌳" }, { value: "bird", label: "bird", emoji: "🐦" }, { value: "sun", label: "sun", emoji: "🌞" }] },
      { type: "speak", role: "grandma", phrase: "I see a bird.", chinese: "我看见一只小鸟。", context: "奶奶指给树上的小鸟" },
      { type: "speak", role: "grandma", phrase: "The bird is in the tree.", chinese: "小鸟在树上。", context: "小鸟停在树枝上" },
      { type: "dialogue", role: "together", title: "公园里的小鸟", lines: [{ role: "奶奶", emoji: "👩🏻", english: "I see a bird.", chinese: "我看见一只小鸟。" }, { role: "宝宝", emoji: "👦🏻", english: "Where is it?", chinese: "在哪里？" }, { role: "奶奶", emoji: "👩🏻", english: "The bird is in the tree.", chinese: "小鸟在树上。" }, { role: "宝宝", emoji: "👦🏻", english: "Tweet, tweet, tweet!", chinese: "叽叽喳喳！" }] },
      { type: "mission", role: "together", title: "去公园看小鸟", picture: "🐦 🌳 🌿", steps: ["走到公园，说：<strong>I see a tree.</strong>", "看到小鸟，说：<strong>I see a bird.</strong>", "一起学鸟叫：<strong>Tweet, tweet!</strong>"] }
    ]
  },
  counting: {
    id: "counting",
    order: 47,
    meta: "第四十七课",
    nodeTitle: "数到十",
    title: "一起数到十",
    description: "学 six 和 ten，把数字数到十。",
    pictureMain: "6️⃣",
    pictureSmall: "🔟",
    pictureClass: "picture-numbers",
    childGoal: "six · ten",
    grandmaGoal: "Count to ten.",
    previewPhrase: "Count to ten. I have six.",
    nodeSubtitle: "数一数",
    reward: { picture: "6️⃣ 🔟 ⭐", title: "能数到十啦！", lead: "奶奶和宝宝一起把数字数到了十。", child: "认识 six 和 ten", grandma: "会说 Count to ten.", unlockEmoji: "🔟", unlockTitle: "数字小星星" },
    stages: [
      { type: "choice", role: "child", word: "six", chinese: "六", prompt: "听一听，哪个是 six？", options: [{ value: "six", label: "six", emoji: "6️⃣" }, { value: "ten", label: "ten", emoji: "🔟" }, { value: "three", label: "three", emoji: "3️⃣" }] },
      { type: "choice", role: "child", word: "ten", chinese: "十", prompt: "再听一个，哪个是 ten？", options: [{ value: "ten", label: "ten", emoji: "🔟" }, { value: "six", label: "six", emoji: "6️⃣" }, { value: "two", label: "two", emoji: "2️⃣" }] },
      { type: "speak", role: "grandma", phrase: "Count to ten.", chinese: "数到十。", context: "奶奶和宝宝一起数数" },
      { type: "speak", role: "grandma", phrase: "I have six.", chinese: "我有六个。", context: "宝宝数了六块积木" },
      { type: "dialogue", role: "together", title: "一起数到十", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Let's count to ten.", chinese: "我们数到十吧。" }, { role: "宝宝", emoji: "👦🏻", english: "One, two, three...", chinese: "一、二、三……" }, { role: "奶奶", emoji: "👩🏻", english: "...six, seven, eight...", chinese: "……六、七、八……" }, { role: "宝宝", emoji: "👦🏻", english: "...nine, ten!", chinese: "……九、十！" }] },
      { type: "mission", role: "together", title: "一起数到十", picture: "🔢 🧱 ⭐", steps: ["数数积木，说：<strong>One, two, three...</strong>", "一直数到：<strong>Ten!</strong>", "数完说：<strong>I have six.</strong>（换别的数字）"] }
    ]
  },
  sequence: {
    id: "sequence",
    order: 48,
    meta: "第四十八课",
    nodeTitle: "先和后",
    title: "先洗手，再吃饭",
    description: "学用 first 和 next 讲做事的顺序。",
    pictureMain: "🧼",
    pictureSmall: "🍽️",
    pictureClass: "picture-cleanup",
    childGoal: "wash · eat",
    grandmaGoal: "First, wash your hands.",
    previewPhrase: "First, wash your hands. Next, let's eat.",
    nodeSubtitle: "排顺序",
    reward: { picture: "🧼 🍽️ ✅", title: "会讲顺序啦！", lead: "奶奶和宝宝学会了用 first 和 next。", child: "复习 wash 和 eat", grandma: "会说 First, wash your hands.", unlockEmoji: "✅", unlockTitle: "顺序小勾勾" },
    stages: [
      { type: "choice", role: "child", word: "wash", chinese: "洗", prompt: "听一听，哪个是 wash？", options: [{ value: "wash", label: "wash", emoji: "🧼" }, { value: "eat", label: "eat", emoji: "🍽️" }, { value: "sleep", label: "sleep", emoji: "😴" }] },
      { type: "choice", role: "child", word: "eat", chinese: "吃", prompt: "再听一个，哪个是 eat？", options: [{ value: "eat", label: "eat", emoji: "🍽️" }, { value: "wash", label: "wash", emoji: "🧼" }, { value: "run", label: "run", emoji: "🏃" }] },
      { type: "speak", role: "grandma", phrase: "First, wash your hands.", chinese: "先洗洗手。", context: "吃饭前要先洗手" },
      { type: "speak", role: "grandma", phrase: "Next, let's eat.", chinese: "然后，我们吃饭。", context: "洗完手就开饭啦" },
      { type: "dialogue", role: "together", title: "先洗手再吃饭", lines: [{ role: "奶奶", emoji: "👩🏻", english: "First, wash your hands.", chinese: "先洗洗手。" }, { role: "宝宝", emoji: "👦🏻", english: "Wash, wash, wash.", chinese: "洗洗洗。" }, { role: "奶奶", emoji: "👩🏻", english: "Next, let's eat.", chinese: "然后，我们吃饭。" }, { role: "宝宝", emoji: "👦🏻", english: "Yummy, yummy!", chinese: "真好吃！" }] },
      { type: "mission", role: "together", title: "一起排顺序", picture: "🧼 🍽️ ✅", steps: ["奶奶说：<strong>First, wash your hands.</strong>", "宝宝洗好手，说：<strong>Next, let's eat.</strong>", "用 first / next 说说睡觉前的顺序"] }
    ]
  },
  storyteller: {
    id: "storyteller",
    order: 49,
    meta: "第四十九课",
    nodeTitle: "讲故事",
    title: "故事小火车",
    description: "把这一周的小故事装进故事小火车。",
    pictureMain: "🚂",
    pictureSmall: "📖",
    pictureClass: "picture-games",
    childGoal: "sun · bird · milk",
    grandmaGoal: "Once upon a time...",
    previewPhrase: "Once upon a time... The sun is up.",
    nodeSubtitle: "会讲故事",
    special: {
      title: "故事小火车",
      description: "把三个小故事装进故事小火车",
      reward: { picture: "🚂 📖 ⭐", title: "故事小火车到站啦！", lead: "奶奶和宝宝完成了第七周的小火车特别版。", child: "会讲起床和公园的小故事", grandma: "会用 first / next 讲故事", unlockEmoji: "🎫", unlockTitle: "故事小火车车票" },
      stages: [
        { type: "choice", role: "child", word: "sun", chinese: "太阳", prompt: "听一听，哪个是 sun？", options: [{ value: "sun", label: "sun", emoji: "🌞" }, { value: "moon", label: "moon", emoji: "🌙" }, { value: "star", label: "star", emoji: "⭐" }] },
        { type: "choice", role: "child", word: "bird", chinese: "小鸟", prompt: "再听一个，哪个是 bird？", options: [{ value: "bird", label: "bird", emoji: "🐦" }, { value: "tree", label: "tree", emoji: "🌳" }, { value: "flower", label: "flower", emoji: "🌼" }] },
        { type: "speak", role: "grandma", phrase: "Once upon a time...", chinese: "很久很久以前……", context: "故事小火车开始讲故事" },
        { type: "speak", role: "grandma", phrase: "The sun is up.", chinese: "太阳升起来了。", context: "第一个小故事开始" },
        { type: "dialogue", role: "together", title: "故事小火车出发", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Once upon a time...", chinese: "很久很久以前……" }, { role: "宝宝", emoji: "👦🏻", english: "The sun is up!", chinese: "太阳升起来了！" }, { role: "奶奶", emoji: "👩🏻", english: "I see a bird.", chinese: "我看见一只小鸟。" }, { role: "宝宝", emoji: "👦🏻", english: "The bird is in the tree!", chinese: "小鸟在树上！" }] },
        { type: "mission", role: "together", title: "编一个小故事", picture: "📖 🌞 🐦", steps: ["奶奶开头：<strong>Once upon a time...</strong>", "宝宝接一句今天学过的句子", "一起把故事讲到结尾"] }
      ]
    },
    reward: { picture: "📖 ⭐ 🏆", title: "第七周完成啦！", lead: "奶奶和宝宝一起完成了一周的故事练习。", child: "会讲三个小故事", grandma: "会用 Once upon a time 开头", unlockEmoji: "🏆", unlockTitle: "小小故事家奖状" },
    stages: [
      { type: "choice", role: "child", word: "sun", chinese: "太阳", prompt: "听一听，哪个是 sun？", options: [{ value: "sun", label: "sun", emoji: "🌞" }, { value: "moon", label: "moon", emoji: "🌙" }, { value: "star", label: "star", emoji: "⭐" }] },
      { type: "choice", role: "child", word: "bird", chinese: "小鸟", prompt: "再听一个，哪个是 bird？", options: [{ value: "bird", label: "bird", emoji: "🐦" }, { value: "tree", label: "tree", emoji: "🌳" }, { value: "flower", label: "flower", emoji: "🌼" }] },
      { type: "speak", role: "grandma", phrase: "Once upon a time...", chinese: "很久很久以前……", context: "奶奶开始讲一个小故事" },
      { type: "speak", role: "grandma", phrase: "The sun is up.", chinese: "太阳升起来了。", context: "故事的开始" },
      { type: "dialogue", role: "together", title: "一起讲故事", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Once upon a time...", chinese: "很久很久以前……" }, { role: "宝宝", emoji: "👦🏻", english: "The sun is up!", chinese: "太阳升起来了！" }, { role: "奶奶", emoji: "👩🏻", english: "I see a bird.", chinese: "我看见一只小鸟。" }, { role: "宝宝", emoji: "👦🏻", english: "The bird is in the tree!", chinese: "小鸟在树上！" }] },
      { type: "mission", role: "together", title: "睡前讲一个故事", picture: "📖 🌙 ⭐", steps: ["奶奶用 Once upon a time 开头讲故事", "宝宝每听到一个学过的词就拍手", "一起把故事讲到结尾"] }
    ]
  },
  helloagain: {
    id: "helloagain",
    order: 50,
    meta: "第五十课",
    nodeTitle: "再见问好",
    title: "老朋友又见面啦",
    description: "复习问候，学说 Nice to meet you。",
    pictureMain: "🤝",
    pictureSmall: "👋",
    pictureClass: "picture-greeting",
    childGoal: "hello · bye-bye",
    grandmaGoal: "Nice to meet you.",
    previewPhrase: "Nice to meet you. See you later.",
    nodeSubtitle: "打招呼",
    wordGame: "wordMatch",
    reward: { picture: "🤝 👋 🌟", title: "会大方打招呼啦！", lead: "奶奶和宝宝复习了问候并学了新句子。", child: "复习 hello 和 bye-bye", grandma: "会说 Nice to meet you.", unlockEmoji: "🌟", unlockTitle: "见面小星星" },
    stages: [
      { type: "choice", role: "child", word: "hello", chinese: "你好", prompt: "听一听，哪个是 hello？", options: [{ value: "hello", label: "hello", emoji: "👋" }, { value: "bye-bye", label: "bye-bye", emoji: "👋" }, { value: "sorry", label: "sorry", emoji: "🙇" }] },
      { type: "choice", role: "child", word: "bye-bye", chinese: "再见", prompt: "再听一个，哪个是 bye-bye？", options: [{ value: "bye-bye", label: "bye-bye", emoji: "👋" }, { value: "hello", label: "hello", emoji: "👋" }, { value: "please", label: "please", emoji: "🙏" }] },
      { type: "speak", role: "grandma", phrase: "Nice to meet you.", chinese: "很高兴见到你。", context: "见到老朋友要这样问候" },
      { type: "speak", role: "grandma", phrase: "See you later.", chinese: "回头见。", context: "告别时这样说" },
      { type: "dialogue", role: "together", title: "老朋友又见面啦", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Hello, baby!", chinese: "宝宝好！" }, { role: "宝宝", emoji: "👦🏻", english: "Nice to meet you!", chinese: "很高兴见到你！" }, { role: "奶奶", emoji: "👩🏻", english: "See you later!", chinese: "回头见！" }, { role: "宝宝", emoji: "👦🏻", english: "Bye-bye!", chinese: "再见！" }] },
      { type: "mission", role: "together", title: "大方地打招呼", picture: "🤝 👋 🌟", steps: ["见到家人说：<strong>Nice to meet you!</strong>", "离开时说：<strong>See you later.</strong>", "练一练挥手说：<strong>Bye-bye!</strong>"] }
    ]
  },
  colorcount: {
    id: "colorcount",
    order: 51,
    meta: "第五十一课",
    nodeTitle: "颜色和数字",
    title: "彩虹糖分一分",
    description: "复习颜色和数字，学说完整的选择句。",
    pictureMain: "🍬",
    pictureSmall: "🌈",
    pictureClass: "picture-colors",
    childGoal: "red · three",
    grandmaGoal: "The red one, please.",
    previewPhrase: "The red one, please. I have three.",
    nodeSubtitle: "数一数",
    reward: { picture: "🍬 🌈 🔢", title: "会分彩虹糖啦！", lead: "奶奶和宝宝一起复习了颜色和数字。", child: "复习 red 和 three", grandma: "会说 The red one, please.", unlockEmoji: "🍬", unlockTitle: "彩虹糖小罐子" },
    stages: [
      { type: "choice", role: "child", word: "red", chinese: "红色", prompt: "听一听，哪个是 red？", options: [{ value: "red", label: "red", emoji: "🔴" }, { value: "blue", label: "blue", emoji: "🔵" }, { value: "yellow", label: "yellow", emoji: "🟡" }] },
      { type: "choice", role: "child", word: "three", chinese: "三", prompt: "再听一个，哪个是 three？", options: [{ value: "three", label: "three", emoji: "3️⃣" }, { value: "two", label: "two", emoji: "2️⃣" }, { value: "one", label: "one", emoji: "1️⃣" }] },
      { type: "speak", role: "grandma", phrase: "The red one, please.", chinese: "请给我红色的那个。", context: "分彩虹糖时这样说" },
      { type: "speak", role: "grandma", phrase: "I have three.", chinese: "我有三个。", context: "宝宝数了数自己的彩虹糖" },
      { type: "dialogue", role: "together", title: "彩虹糖分一分", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Which one?", chinese: "哪一个？" }, { role: "宝宝", emoji: "👦🏻", english: "The red one, please.", chinese: "请给我红色的。" }, { role: "奶奶", emoji: "👩🏻", english: "How many?", chinese: "有多少个？" }, { role: "宝宝", emoji: "👦🏻", english: "I have three!", chinese: "我有三个！" }] },
      { type: "mission", role: "together", title: "分一分数一数", picture: "🍬 🌈 🔢", steps: ["宝宝说：<strong>The red one, please.</strong>", "数一数分到的，说：<strong>I have three.</strong>", "换个颜色再来一次"] }
    ]
  },
  animalplay: {
    id: "animalplay",
    order: 52,
    meta: "第五十二课",
    nodeTitle: "动物和动作",
    title: "农场运动会",
    description: "复习动物叫声和动作，一起开运动会。",
    pictureMain: "🐄",
    pictureSmall: "🤸",
    pictureClass: "picture-farm",
    childGoal: "cow · jump",
    grandmaGoal: "The cow says moo.",
    previewPhrase: "The cow says moo. I can jump.",
    nodeSubtitle: "动一动",
    wordGame: "wordTap",
    reward: { picture: "🐄 🤸 🏅", title: "农场运动会冠军！", lead: "奶奶和宝宝复习了动物和动作。", child: "复习 cow 和 jump", grandma: "会说 The cow says moo.", unlockEmoji: "🏅", unlockTitle: "农场运动会奖牌" },
    stages: [
      { type: "choice", role: "child", word: "cow", chinese: "奶牛", prompt: "听一听，哪个是 cow？", options: [{ value: "cow", label: "cow", emoji: "🐄" }, { value: "pig", label: "pig", emoji: "🐷" }, { value: "duck", label: "duck", emoji: "🦆" }] },
      { type: "choice", role: "child", word: "jump", chinese: "跳", prompt: "再听一个，哪个是 jump？", options: [{ value: "jump", label: "jump", emoji: "🤸" }, { value: "run", label: "run", emoji: "🏃" }, { value: "sit", label: "sit", emoji: "🪑" }] },
      { type: "speak", role: "grandma", phrase: "The cow says moo.", chinese: "奶牛哞哞叫。", context: "奶奶学奶牛叫" },
      { type: "speak", role: "grandma", phrase: "I can jump.", chinese: "我会跳。", context: "宝宝开心地跳起来" },
      { type: "dialogue", role: "together", title: "农场运动会", lines: [{ role: "奶奶", emoji: "👩🏻", english: "The cow says moo.", chinese: "奶牛哞哞叫。" }, { role: "宝宝", emoji: "👦🏻", english: "Moo, moo!", chinese: "哞哞！" }, { role: "奶奶", emoji: "👩🏻", english: "I can jump!", chinese: "我会跳！" }, { role: "宝宝", emoji: "👦🏻", english: "I can jump too!", chinese: "我也会跳！" }] },
      { type: "mission", role: "together", title: "农场运动会", picture: "🐄 🤸 🏅", steps: ["学奶牛叫：<strong>Moo, moo!</strong>", "宝宝跳三下，说：<strong>I can jump!</strong>", "奶奶一起跳，一起喊口号"] }
    ]
  },
  polite: {
    id: "polite",
    order: 53,
    meta: "第五十三课",
    nodeTitle: "请和谢谢",
    title: "有礼貌的小宝贝",
    description: "学说 please 和 thank you，做有礼貌的宝宝。",
    pictureMain: "🙏",
    pictureSmall: "💝",
    pictureClass: "picture-manners",
    childGoal: "please · thank you",
    grandmaGoal: "Please, may I have it?",
    previewPhrase: "Please, may I have it? Thank you very much.",
    nodeSubtitle: "请与谢谢",
    phraseGame: "phraseSong",
    song: {
      title: "礼貌歌",
      emoji: "🙏",
      lines: [
        { english: "Please, may I have it?", chinese: "请问，可以给我吗？" },
        { english: "Here you are.", chinese: "给你。" },
        { english: "Thank you very much.", chinese: "非常感谢。" },
        { english: "You're welcome!", chinese: "不客气！" }
      ]
    },
    reward: { picture: "🙏 💝 🌸", title: "有礼貌的好宝宝！", lead: "奶奶和宝宝一起学了礼貌用语。", child: "会说 please 和 thank you", grandma: "会说 Please, may I have it?", unlockEmoji: "🌸", unlockTitle: "礼貌小花朵" },
    stages: [
      { type: "choice", role: "child", word: "please", chinese: "请", prompt: "听一听，哪个是 please？", options: [{ value: "please", label: "please", emoji: "🙏" }, { value: "sorry", label: "sorry", emoji: "🙇" }, { value: "thank you", label: "thank you", emoji: "💝" }] },
      { type: "choice", role: "child", word: "thank you", chinese: "谢谢", prompt: "再听一个，哪个是 thank you？", options: [{ value: "thank you", label: "thank you", emoji: "💝" }, { value: "please", label: "please", emoji: "🙏" }, { value: "hello", label: "hello", emoji: "👋" }] },
      { type: "speak", role: "grandma", phrase: "Please, may I have it?", chinese: "请问，可以给我吗？", context: "想要东西时要有礼貌" },
      { type: "speak", role: "grandma", phrase: "Thank you very much.", chinese: "非常感谢。", context: "收到东西后要说谢谢" },
      { type: "dialogue", role: "together", title: "有礼貌的小宝贝", lines: [{ role: "宝宝", emoji: "👦🏻", english: "Please, may I have it?", chinese: "请问，可以给我吗？" }, { role: "奶奶", emoji: "👩🏻", english: "Here you are.", chinese: "给你。" }, { role: "宝宝", emoji: "👦🏻", english: "Thank you very much.", chinese: "非常感谢。" }, { role: "奶奶", emoji: "👩🏻", english: "You're welcome!", chinese: "不客气！" }] },
      { type: "mission", role: "together", title: "今天说十次谢谢", picture: "🙏 💝 🌸", steps: ["要东西时说：<strong>Please, may I have it?</strong>", "拿到后说：<strong>Thank you very much.</strong>", "一天里多说几次 please 和 thank you"] }
    ]
  },
  love: {
    id: "love",
    order: 54,
    meta: "第五十四课",
    nodeTitle: "我爱你",
    title: "我爱你，奶奶",
    description: "学说表达爱意的句子，感受家人的爱。",
    pictureMain: "❤️",
    pictureSmall: "😊",
    pictureClass: "picture-family",
    childGoal: "happy · love",
    grandmaGoal: "I love you very much.",
    previewPhrase: "I am happy. I love you very much.",
    nodeSubtitle: "我爱你",
    phraseGame: "phraseSong",
    song: {
      title: "爱心歌",
      emoji: "❤️",
      lines: [
        { english: "I love you.", chinese: "我爱你。" },
        { english: "I am happy.", chinese: "我很开心。" },
        { english: "You are my sunshine.", chinese: "你是我的小太阳。" },
        { english: "I love you very much.", chinese: "我非常爱你。" }
      ]
    },
    reward: { picture: "❤️ 😊 🌟", title: "会表达爱啦！", lead: "奶奶和宝宝一起学会了表达爱。", child: "会说 I love you", grandma: "会说 I love you very much.", unlockEmoji: "❤️", unlockTitle: "爱心小太阳" },
    stages: [
      { type: "choice", role: "child", word: "happy", chinese: "开心", prompt: "听一听，哪个是 happy？", options: [{ value: "happy", label: "happy", emoji: "😊" }, { value: "tired", label: "tired", emoji: "🥱" }, { value: "sad", label: "sad", emoji: "😢" }] },
      { type: "choice", role: "child", word: "love", chinese: "爱", prompt: "再听一个，哪个是 love？", options: [{ value: "love", label: "love", emoji: "❤️" }, { value: "like", label: "like", emoji: "👍" }, { value: "happy", label: "happy", emoji: "😊" }] },
      { type: "speak", role: "grandma", phrase: "I am happy.", chinese: "我很开心。", context: "奶奶抱着宝宝说" },
      { type: "speak", role: "grandma", phrase: "I love you very much.", chinese: "我非常爱你。", context: "奶奶对宝宝表达爱" },
      { type: "dialogue", role: "together", title: "我爱你奶奶", lines: [{ role: "奶奶", emoji: "👩🏻", english: "I love you very much.", chinese: "我非常爱你。" }, { role: "宝宝", emoji: "👦🏻", english: "I love you too!", chinese: "我也爱你！" }, { role: "奶奶", emoji: "👩🏻", english: "I am happy.", chinese: "我很开心。" }, { role: "宝宝", emoji: "👦🏻", english: "Me too!", chinese: "我也是！" }] },
      { type: "mission", role: "together", title: "抱抱说我爱你", picture: "❤️ 🤗 😊", steps: ["奶奶抱抱宝宝，说：<strong>I love you.</strong>", "宝宝回应：<strong>I love you too!</strong>", "一起说：<strong>I am happy.</strong>"] }
    ]
  },
  friends: {
    id: "friends",
    order: 55,
    meta: "第五十五课",
    nodeTitle: "一起玩",
    title: "我们是最好的朋友",
    description: "学说邀请和友谊的句子，一起快乐玩耍。",
    pictureMain: "🤝",
    pictureSmall: "🎠",
    pictureClass: "picture-games",
    childGoal: "friend · play",
    grandmaGoal: "Let's play together.",
    previewPhrase: "Let's play together. You are my friend.",
    nodeSubtitle: "一起玩",
    reward: { picture: "🤝 🎠 🌟", title: "有好朋友啦！", lead: "奶奶和宝宝学会了友谊的表达。", child: "认识 friend 和 play", grandma: "会说 Let's play together.", unlockEmoji: "🌟", unlockTitle: "友谊小星星" },
    stages: [
      { type: "choice", role: "child", word: "friend", chinese: "朋友", prompt: "听一听，哪个是 friend？", options: [{ value: "friend", label: "friend", emoji: "🤝" }, { value: "family", label: "family", emoji: "👨‍👩‍👦" }, { value: "baby", label: "baby", emoji: "👶🏻" }] },
      { type: "choice", role: "child", word: "play", chinese: "玩", prompt: "再听一个，哪个是 play？", options: [{ value: "play", label: "play", emoji: "🎠" }, { value: "sleep", label: "sleep", emoji: "😴" }, { value: "eat", label: "eat", emoji: "🍽️" }] },
      { type: "speak", role: "grandma", phrase: "Let's play together.", chinese: "我们一起玩吧。", context: "奶奶邀请宝宝一起玩" },
      { type: "speak", role: "grandma", phrase: "You are my friend.", chinese: "你是我的朋友。", context: "奶奶和宝宝成了好朋友" },
      { type: "dialogue", role: "together", title: "我们是最好的朋友", lines: [{ role: "宝宝", emoji: "👦🏻", english: "Let's play together.", chinese: "我们一起玩吧。" }, { role: "奶奶", emoji: "👩🏻", english: "Okay, let's play!", chinese: "好的，一起玩！" }, { role: "宝宝", emoji: "👦🏻", english: "You are my friend.", chinese: "你是我的朋友。" }, { role: "奶奶", emoji: "👩🏻", english: "You are my friend too!", chinese: "你也是我的朋友！" }] },
      { type: "mission", role: "together", title: "一起玩一个游戏", picture: "🤝 🎠 🌟", steps: ["宝宝邀请：<strong>Let's play together.</strong>", "一起玩喜欢的游戏", "结束时说：<strong>You are my friend.</strong>"] }
    ]
  },
  graduate: {
    id: "graduate",
    order: 56,
    meta: "第五十六课",
    nodeTitle: "毕业啦",
    title: "毕业小火车",
    description: "八周英语旅程毕业，登上毕业小火车。",
    pictureMain: "🚂",
    pictureSmall: "🎓",
    pictureClass: "picture-celebration",
    childGoal: "hello · love · play",
    grandmaGoal: "Well done! I'm proud of you.",
    previewPhrase: "Well done! I'm proud of you.",
    nodeSubtitle: "毕业啦",
    special: {
      title: "毕业小火车",
      description: "八周旅程的最后一站，毕业小火车",
      reward: { picture: "🚂 🎓 🏆", title: "毕业小火车到站啦！", lead: "奶奶和宝宝完成了整整八周的英语旅程！", child: "会唱儿歌、会提问、会表达爱", grandma: "会用英语和宝宝开心对话", unlockEmoji: "🎓", unlockTitle: "英语毕业小博士帽" },
      stages: [
        { type: "choice", role: "child", word: "hello", chinese: "你好", prompt: "听一听，哪个是 hello？", options: [{ value: "hello", label: "hello", emoji: "👋" }, { value: "bye-bye", label: "bye-bye", emoji: "👋" }, { value: "sorry", label: "sorry", emoji: "🙇" }] },
        { type: "choice", role: "child", word: "love", chinese: "爱", prompt: "再听一个，哪个是 love？", options: [{ value: "love", label: "love", emoji: "❤️" }, { value: "happy", label: "happy", emoji: "😊" }, { value: "play", label: "play", emoji: "🎠" }] },
        { type: "speak", role: "grandma", phrase: "Well done!", chinese: "做得真棒！", context: "奶奶为坚持八周的宝宝鼓掌" },
        { type: "speak", role: "grandma", phrase: "I'm proud of you.", chinese: "我为你骄傲。", context: "奶奶深情地鼓励宝宝" },
        { type: "dialogue", role: "together", title: "毕业小火车", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Well done, baby!", chinese: "宝宝，做得真棒！" }, { role: "宝宝", emoji: "👦🏻", english: "Thank you, Grandma!", chinese: "谢谢奶奶！" }, { role: "奶奶", emoji: "👩🏻", english: "I'm proud of you.", chinese: "我为你骄傲。" }, { role: "宝宝", emoji: "👦🏻", english: "I love you very much!", chinese: "我非常爱你！" }] },
        { type: "mission", role: "together", title: "毕业庆祝会", picture: "🎓 🎉 🏆", steps: ["一起唱一首学过的英文儿歌", "奶奶说：<strong>I'm proud of you.</strong>", "宝宝说：<strong>I love you very much!</strong>"] }
      ]
    },
    reward: { picture: "🎓 🏆 🎉", title: "八周英语旅程毕业啦！", lead: "奶奶和宝宝一起完成了整整八周的英语学习。", child: "会说几十个单词和句子", grandma: "会和宝宝用英语开心对话", unlockEmoji: "🎓", unlockTitle: "英语毕业小博士帽" },
    stages: [
      { type: "choice", role: "child", word: "hello", chinese: "你好", prompt: "听一听，哪个是 hello？", options: [{ value: "hello", label: "hello", emoji: "👋" }, { value: "bye-bye", label: "bye-bye", emoji: "👋" }, { value: "sorry", label: "sorry", emoji: "🙇" }] },
      { type: "choice", role: "child", word: "love", chinese: "爱", prompt: "再听一个，哪个是 love？", options: [{ value: "love", label: "love", emoji: "❤️" }, { value: "happy", label: "happy", emoji: "😊" }, { value: "play", label: "play", emoji: "🎠" }] },
      { type: "speak", role: "grandma", phrase: "Well done!", chinese: "做得真棒！", context: "奶奶为宝宝鼓掌" },
      { type: "speak", role: "grandma", phrase: "I'm proud of you.", chinese: "我为你骄傲。", context: "奶奶鼓励宝宝" },
      { type: "dialogue", role: "together", title: "毕业啦", lines: [{ role: "奶奶", emoji: "👩🏻", english: "Well done, baby!", chinese: "宝宝，做得真棒！" }, { role: "宝宝", emoji: "👦🏻", english: "Thank you, Grandma!", chinese: "谢谢奶奶！" }, { role: "奶奶", emoji: "👩🏻", english: "I'm proud of you.", chinese: "我为你骄傲。" }, { role: "宝宝", emoji: "👦🏻", english: "I love you very much!", chinese: "我非常爱你！" }] },
      { type: "mission", role: "together", title: "毕业庆祝会", picture: "🎓 🎉 🏆", steps: ["一起唱一首学过的英文儿歌", "奶奶说：<strong>I'm proud of you.</strong>", "宝宝说：<strong>I love you very much!</strong>"] }
    ]
  }
  };

  const screens = {
    home: document.getElementById("homeScreen"),
    lesson: document.getElementById("lessonScreen"),
    reward: document.getElementById("rewardScreen"),
    break: document.getElementById("breakScreen")
  };
  const stageHost = document.getElementById("stageHost");
  const progressText = document.getElementById("progressText");
  const progressPercent = document.getElementById("progressPercent");
  const progressTrack = document.getElementById("progressTrack");
  const progressFill = document.getElementById("progressFill");
  const toast = document.getElementById("toast");

  let state = {
    programStartDate: "",
    lastOpenedDate: "",
    selectedLessonId: "greeting",
    activeLessonId: null,
    activeSession: 0,
    stageIndex: 0,
    stageSolved: false,
    dialogueTurn: 0,
    dialogueHeard: [],
    reviewHeard: [],
    listenModes: [],
    practiceRound: 0,
    practiceHeard: [],
    completions: {
      greeting: [],
      colors: [],
      toys: [],
      animals: [],
      clothes: [],
      park: [],
      family: [],
      cleanup: [],
      shapes: [],
      actions: [],
      feelings: [],
      weather: [],
      manners: [],
      room: [],
      body: [],
      food: [],
      numbers: [],
      music: [],
      bath: [],
      bedtime: [],
      games: [],
      farm: [],
      transport: [],
      beach: [],
      shopping: [],
      opposites: [],
      cooking: [],
      celebration: [],
      jump: [],
      sit: [],
      open: [],
      place: [],
      hiding: [],
      walk: [],
      abilities: [],
      askwhat: [],
      askwhere: [],
      askwho: [],
      howmany: [],
      whichone: [],
      howfeel: [],
      questioner: [],
      wakeup: [],
      breakfast: [],
      goingout: [],
      thepark: [],
      counting: [],
      sequence: [],
      storyteller: [],
      helloagain: [],
      colorcount: [],
      animalplay: [],
      polite: [],
      love: [],
      friends: [],
      graduate: []
    },
    sessionCompletions: {}
  };
  let toastTimer = 0;
  let availableVoices = [];
  let currentAudio = null;

  const preferredVoiceNames = [
    "Microsoft Aria",
    "Microsoft Jenny",
    "Google US English",
    "Ava",
    "Samantha",
    "Zoe",
    "Allison",
    "Susan"
  ];

  const noveltyVoiceNames = [
    "Albert",
    "Bad News",
    "Bahh",
    "Bells",
    "Boing",
    "Bubbles",
    "Cellos",
    "Good News",
    "Jester",
    "Organ",
    "Superstar",
    "Trinoids",
    "Whisper",
    "Wobble",
    "Zarvox"
  ];

  function dateKey(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  const programOrder = [
    "greeting", "colors", "toys", "animals", "clothes", "park", "family",
    "cleanup", "shapes", "actions", "feelings", "weather", "manners", "room",
    "body", "food", "numbers", "music", "bath", "bedtime", "games",
    "farm", "transport", "beach", "shopping", "opposites", "cooking", "celebration",
    "jump", "sit", "open", "place", "hiding", "walk", "abilities",
    "askwhat", "askwhere", "askwho", "howmany", "whichone", "howfeel", "questioner",
    "wakeup", "breakfast", "goingout", "thepark", "counting", "sequence", "storyteller",
    "helloagain", "colorcount", "animalplay", "polite", "love", "friends", "graduate"
  ];

  function elapsedProgramDays(dateString) {
    const start = new Date(`${state.programStartDate || dateString}T00:00:00`);
    const current = new Date(`${dateString}T00:00:00`);
    return Math.max(0, Math.floor((current - start) / 86400000));
  }

  function dayNumberFor(dateString) {
    return (elapsedProgramDays(dateString) % programOrder.length) + 1;
  }

  function scheduledLessonId() {
    return programOrder[dayNumberFor(dateKey()) - 1];
  }

  function previousLesson(lesson) {
    if (lesson.order <= 1) return elapsedProgramDays(dateKey()) > 0 ? lessons[programOrder[programOrder.length - 1]] : null;
    return lessons[programOrder[lesson.order - 2]];
  }

  function completedSessions(lessonId, day = dateKey()) {
    const sessions = state.sessionCompletions?.[day]?.[lessonId];
    return Array.isArray(sessions) ? sessions : [];
  }

  function isSessionComplete(lessonId, sessionNumber) {
    return completedSessions(lessonId).includes(sessionNumber);
  }

  function markSessionComplete(lessonId, sessionNumber) {
    const today = dateKey();
    if (!state.sessionCompletions[today]) state.sessionCompletions[today] = {};
    if (!Array.isArray(state.sessionCompletions[today][lessonId])) state.sessionCompletions[today][lessonId] = [];
    if (!state.sessionCompletions[today][lessonId].includes(sessionNumber)) {
      state.sessionCompletions[today][lessonId].push(sessionNumber);
    }
  }

  function validLessonId(value) {
    return Object.prototype.hasOwnProperty.call(lessons, value) ? value : "greeting";
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && typeof saved === "object") {
        const safeCompletions = {};
        Object.keys(lessons).forEach(lessonId => {
          safeCompletions[lessonId] = Array.isArray(saved.completions?.[lessonId]) ? saved.completions[lessonId].slice(-60) : [];
        });
        state = {
          ...state,
          ...saved,
          selectedLessonId: validLessonId(saved.selectedLessonId),
          activeLessonId: saved.activeLessonId ? validLessonId(saved.activeLessonId) : null,
          activeSession: [1, 2, 3].includes(saved.activeSession) ? saved.activeSession : 0,
          dialogueHeard: Array.isArray(saved.dialogueHeard) ? saved.dialogueHeard.slice(0, 8) : [],
          reviewHeard: Array.isArray(saved.reviewHeard) ? saved.reviewHeard.slice(0, 3) : [],
          listenModes: Array.isArray(saved.listenModes) ? saved.listenModes.filter(mode => mode === "normal" || mode === "slow") : [],
          practiceRound: Math.min(Math.max(Number(saved.practiceRound) || 0, 0), 4),
          practiceHeard: Array.isArray(saved.practiceHeard) ? saved.practiceHeard.slice(0, 12) : [],
          completions: safeCompletions,
          sessionCompletions: saved.sessionCompletions && typeof saved.sessionCompletions === "object" ? saved.sessionCompletions : {}
        };
      }
    } catch (_) {
      // The lesson remains usable if browser storage is unavailable.
    }

    const today = dateKey();
    if (!state.programStartDate) state.programStartDate = today;
    if (state.lastOpenedDate !== today) {
      state.selectedLessonId = scheduledLessonId();
      state.activeLessonId = null;
      state.activeSession = 0;
      state.stageIndex = 0;
      state.stageSolved = false;
      state.dialogueTurn = 0;
      state.dialogueHeard = [];
      state.reviewHeard = [];
      state.listenModes = [];
      state.practiceRound = 0;
      state.practiceHeard = [];
    }
    state.lastOpenedDate = today;
    if (state.activeLessonId && state.activeSession === 3 && !activeLesson().special) {
      state.activeLessonId = null;
      state.activeSession = 0;
      state.stageIndex = 0;
    }
    if (state.activeLessonId && state.activeSession) {
      state.stageIndex = Math.min(Math.max(Number(state.stageIndex) || 0, 0), activeStages().length - 1);
      state.dialogueTurn = Math.min(Math.max(Number(state.dialogueTurn) || 0, 0), 8);
    } else {
      state.activeLessonId = null;
      state.activeSession = 0;
      state.stageIndex = 0;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      // The lesson remains usable if browser storage is unavailable.
    }
  }

  function selectedLesson() {
    return lessons[state.selectedLessonId];
  }

  function activeLesson() {
    return lessons[state.activeLessonId || state.selectedLessonId];
  }

  function sessionStages(lesson, sessionNumber) {
    if (sessionNumber === 3) {
      return lesson.special?.stages || [];
    }
    if (sessionNumber === 2) {
      return [
        { type: "review", mode: "today", sourceLesson: lesson },
        lesson.stages[3],
        { type: lesson.phraseGame || "phrasePractice", sourceLesson: lesson },
        ...lesson.stages.slice(4)
      ];
    }
    const previous = previousLesson(lesson);
    return [
      { type: "review", mode: previous ? "yesterday" : "warmup", sourceLesson: previous || lesson },
      ...lesson.stages.slice(0, 3),
      { type: lesson.wordGame || "wordPractice", sourceLesson: lesson }
    ];
  }

  function activeStages() {
    return sessionStages(activeLesson(), [1, 2, 3].includes(state.activeSession) ? state.activeSession : 1);
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, screen]) => {
      screen.classList.toggle("active", key === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function refreshVoices() {
    if (!("speechSynthesis" in window)) return;
    availableVoices = window.speechSynthesis.getVoices();
  }

  function chooseNaturalVoice() {
    const englishVoices = availableVoices.filter(voice => /^en[-_]/i.test(voice.lang));
    const usableVoices = englishVoices.filter(voice => !noveltyVoiceNames.some(name => voice.name.includes(name)));
    const candidates = usableVoices.length ? usableVoices : englishVoices;
    return candidates
      .map(voice => {
        let score = /^en[-_]US/i.test(voice.lang) ? 40 : 10;
        if (/Natural|Premium|Enhanced/i.test(voice.name)) score += 100;
        const preferredIndex = preferredVoiceNames.findIndex(name => voice.name.includes(name));
        if (preferredIndex >= 0) score += 80 - preferredIndex;
        if (voice.localService) score += 5;
        return { voice, score };
      })
      .sort((a, b) => b.score - a.score)[0]?.voice || null;
  }

  function speakWithDeviceVoice(text, rate) {
    if (!("speechSynthesis" in window)) {
      showToast("这台设备暂时不能播放语音");
      return;
    }
    if (!availableVoices.length) refreshVoices();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.pitch = 1;
    const naturalVoice = chooseNaturalVoice();
    if (naturalVoice) utterance.voice = naturalVoice;
    window.speechSynthesis.speak(utterance);
  }

  function audioSlug(text) {
    return text
      .toLowerCase()
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function speak(text, rate = 0.9) {
    const speed = rate < 0.65 ? "slow" : "normal";
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();

    const audio = new Audio(`./audio/${audioSlug(text)}-${speed}.mp3`);
    currentAudio = audio;
    let usedFallback = false;
    const fallback = () => {
      if (usedFallback) return;
      usedFallback = true;
      speakWithDeviceVoice(text, rate);
    };
    audio.addEventListener("error", fallback, { once: true });
    const playResult = audio.play();
    if (playResult) playResult.catch(fallback);
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
  }

  // ---- 欢乐反馈层：音效 / 撒花 / 吉祥物 ----

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  let toneContext = null;
  function getToneContext() {
    if (!toneContext) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      toneContext = new Ctx();
    }
    if (toneContext.state === "suspended") toneContext.resume();
    return toneContext;
  }

  function playTone(type) {
    if (reducedMotion()) return;
    const ctx = getToneContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const note = (freq, start, dur, gain = 0.12) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(gain, start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + dur + 0.05);
    };
    if (type === "correct") {
      note(523.25, now, 0.12);
      note(783.99, now + 0.1, 0.16);
    } else if (type === "wrong") {
      note(220, now, 0.16, 0.07);
      note(185, now + 0.12, 0.18, 0.07);
    } else if (type === "complete") {
      note(523.25, now, 0.12);
      note(659.25, now + 0.12, 0.12);
      note(783.99, now + 0.24, 0.16);
      note(1046.5, now + 0.38, 0.24);
    } else if (type === "flip") {
      note(392, now, 0.06, 0.06);
    }
  }

  function celebrate() {
    if (reducedMotion()) return;
    const colors = ["#f2c866", "#df7c64", "#5d84ba", "#28765b", "#e8a1b8", "#9bc48a"];
    for (let i = 0; i < 26; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${6 + Math.random() * 88}%`;
      piece.style.top = "-3%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      piece.style.animationDuration = `${0.9 + Math.random() * 0.8}s`;
      piece.style.setProperty("--sway", `${(Math.random() - 0.5) * 180}px`);
      document.body.appendChild(piece);
      window.setTimeout(() => piece.remove(), 2300);
    }
  }

  function reactMascot(reaction) {
    const el = document.getElementById("mascotReaction");
    if (!el) return;
    const faces = { happy: "😊", celebrate: "🎉", think: "🤔", sad: "🥺" };
    el.textContent = faces[reaction] || faces.happy;
    el.classList.remove("bounce");
    void el.offsetWidth;
    el.classList.add("bounce");
  }

  function setSelectedLesson(lessonId) {
    state.selectedLessonId = validLessonId(lessonId);
    saveState();
    updateHome();
  }

  function specialCompletionDates(lessonId) {
    return Object.entries(state.sessionCompletions || {})
      .filter(([, lessonsForDay]) => Array.isArray(lessonsForDay?.[lessonId]) && lessonsForDay[lessonId].includes(3))
      .map(([day]) => day)
      .sort();
  }

  function rewardCollectionItems() {
    return programOrder.flatMap(lessonId => {
      const lesson = lessons[lessonId];
      const items = [{
        key: `lesson-${lesson.id}`,
        lesson,
        reward: lesson.reward,
        dates: state.completions[lesson.id] || [],
        label: `第 ${lesson.order} 天`,
        special: false
      }];
      if (lesson.special) {
        items.push({
          key: `special-${lesson.id}`,
          lesson,
          reward: lesson.special.reward,
          dates: specialCompletionDates(lesson.id),
          label: `第 ${lesson.order} 天特别版`,
          special: true
        });
      }
      return items;
    });
  }

  function formatRewardDate(day) {
    const parsed = new Date(`${day}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return day;
    return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric" }).format(parsed);
  }

  function renderRewardCollection() {
    const items = rewardCollectionItems();
    const collection = document.getElementById("rewardCollection");
    const acquiredCount = items.filter(item => item.dates.length > 0).length;
    document.getElementById("rewardCollectionCount").textContent = `已点亮 ${acquiredCount} / ${items.length} 节`;
    collection.innerHTML = items.map(item => {
      const acquired = item.dates.length > 0;
      const countBadge = item.dates.length > 1 ? `<span class="reward-car-badge">×${item.dates.length}</span>` : "";
      const title = acquired ? item.reward.unlockTitle : "还没获得";
      const actionLabel = acquired
        ? `查看${item.reward.unlockTitle}`
        : `${item.label}的奖励还没有获得`;
      return `
        <button class="reward-car${acquired ? "" : " locked"}" type="button" data-reward-key="${item.key}" aria-label="${actionLabel}">
          ${countBadge}
          <span class="reward-car-day">${item.label}</span>
          <span class="reward-car-emoji" aria-hidden="true">${item.reward.unlockEmoji}</span>
          <strong>${title}</strong>
        </button>`;
    }).join("");
  }

  function showRewardDetail(rewardKey) {
    const item = rewardCollectionItems().find(candidate => candidate.key === rewardKey);
    if (!item || !item.dates.length) {
      showToast("完成这一天的学习，就能把奖励带回家");
      return;
    }
    const latestDate = item.dates[item.dates.length - 1];
    document.getElementById("rewardDetailEmoji").textContent = item.reward.unlockEmoji;
    document.getElementById("rewardDetailMeta").textContent = `${item.label} · ${item.lesson.title}`;
    document.getElementById("rewardDetailTitle").textContent = item.reward.unlockTitle;
    document.getElementById("rewardDetailDate").textContent = item.dates.length > 1
      ? `最近一次在 ${formatRewardDate(latestDate)} 获得 · 一共获得 ${item.dates.length} 次`
      : `${formatRewardDate(latestDate)} 获得`;
    document.getElementById("rewardCollectionDetail").hidden = false;
  }

  const WEEK_SIZE = 7;

  const weekNumberNames = ["第一周", "第二周", "第三周", "第四周", "第五周", "第六周", "第七周", "第八周"];

  function weekOf(lesson) {
    return Math.ceil(lesson.order / WEEK_SIZE);
  }

  function weekUnlocked(weekNumber) {
    return elapsedProgramDays(dateKey()) >= (weekNumber - 1) * WEEK_SIZE;
  }

  function renderWeekSections() {
    const container = document.getElementById("weekSections");
    if (!container) return;
    const totalWeeks = Math.ceil(programOrder.length / WEEK_SIZE);
    const totalComplete = programOrder.filter(lessonId => state.completions[lessonId].length > 0).length;
    container.innerHTML = Array.from({ length: totalWeeks }, (_, index) => {
      const weekNumber = index + 1;
      const weekLessons = programOrder.slice(index * WEEK_SIZE, (index + 1) * WEEK_SIZE);
      const unlocked = weekUnlocked(weekNumber);
      const weekComplete = weekLessons.filter(lessonId => state.completions[lessonId].length > 0).length;
      const statusText = unlocked
        ? (weekNumber === 1 ? `已完成 ${totalComplete} / ${programOrder.length} 个` : `已完成 ${weekComplete} 个`)
        : `第 ${index * WEEK_SIZE + 1} 天自动开启`;
      const nodes = weekLessons.map(lessonId => {
        const lesson = lessons[lessonId];
        return `
        <li class="story-node" data-lesson-node="${lesson.id}">
          <button class="story-node-button" type="button" data-lesson-select="${lesson.id}" aria-label="选择${lesson.nodeTitle}课程">
            <span class="node-icon">${lesson.order}</span><strong>${lesson.nodeTitle}</strong><small>${lesson.nodeSubtitle}</small>
          </button>
        </li>`;
      }).join("");
      return `
      <section class="week-section${weekNumber > 1 ? " week-preview" : ""}${unlocked ? " unlocked" : ""}" aria-labelledby="weekTitle${weekNumber}">
        <div class="section-heading">
          <h2 id="weekTitle${weekNumber}">${weekNumberNames[weekNumber - 1] || `第${weekNumber}周`}</h2>
          <span>${statusText}</span>
        </div>
        <ol class="story-path seven-days">${nodes}</ol>
      </section>`;
    }).join("");
  }

  function updateHome() {
    const lesson = selectedLesson();
    const today = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "long" }).format(new Date());
    document.getElementById("todayLabel").textContent = `${today} · 第 ${lesson.order} 天`;
    document.getElementById("homeTitle").textContent = `今天学：${lesson.title}`;
    document.getElementById("lessonMetaType").textContent = lesson.meta;
    document.getElementById("lessonTitle").textContent = lesson.title;
    document.getElementById("lessonDescription").textContent = lesson.description;
    document.getElementById("lessonPictureMain").textContent = lesson.pictureMain;
    document.getElementById("lessonPictureSmall").textContent = lesson.pictureSmall;
    document.getElementById("childGoal").textContent = lesson.childGoal;
    document.getElementById("grandmaGoal").textContent = lesson.grandmaGoal;
    const picture = document.getElementById("lessonPicture");
    picture.className = `lesson-picture ${lesson.pictureClass}`;

    renderWeekSections();

    document.querySelectorAll("[data-lesson-node]").forEach(node => {
      const nodeLesson = lessons[node.dataset.lessonNode];
      const completed = state.completions[nodeLesson.id].length > 0;
      node.classList.toggle("current", nodeLesson.id === state.selectedLessonId);
      node.classList.toggle("completed", completed);
      const icon = node.querySelector(".node-icon");
      const subtitle = node.querySelector("small");
      const button = node.querySelector("button");
      const locked = !weekUnlocked(weekOf(nodeLesson));
      icon.textContent = completed ? "✓" : String(nodeLesson.order);
      subtitle.textContent = completed ? "已完成" : nodeLesson.nodeSubtitle;
      button.disabled = locked;
      button.setAttribute("aria-pressed", nodeLesson.id === state.selectedLessonId ? "true" : "false");
    });

    const sessionOneDone = isSessionComplete(lesson.id, 1);
    const sessionTwoDone = isSessionComplete(lesson.id, 2);
    const trainSpecialDone = isSessionComplete(lesson.id, 3);
    const sessionOneButton = document.getElementById("startSessionOneButton");
    const sessionTwoButton = document.getElementById("startSessionTwoButton");
    const trainSpecialCard = document.getElementById("trainSpecialCard");
    const trainSpecialButton = document.getElementById("startTrainSpecialButton");
    const sessionOneText = document.getElementById("sessionOneButtonText");
    const sessionTwoText = document.getElementById("sessionTwoButtonText");
    const trainSpecialText = document.getElementById("trainSpecialButtonText");
    document.getElementById("sessionOneCard").classList.toggle("completed", sessionOneDone);
    document.getElementById("sessionTwoCard").classList.toggle("completed", sessionTwoDone);

    if (sessionOneDone) {
      sessionOneText.textContent = "再玩第一段";
      sessionOneButton.disabled = false;
    } else if (state.activeLessonId === lesson.id && state.activeSession === 1) {
      sessionOneText.textContent = `继续第一段 · 第 ${state.stageIndex + 1} 步`;
      sessionOneButton.disabled = false;
    } else {
      sessionOneText.textContent = "开始第一段";
      sessionOneButton.disabled = false;
    }

    if (sessionTwoDone) {
      sessionTwoText.textContent = "再玩第二段";
      sessionTwoButton.disabled = false;
    } else if (!sessionOneDone) {
      sessionTwoText.textContent = "完成第一段后开始";
      sessionTwoButton.disabled = true;
    } else if (state.activeLessonId === lesson.id && state.activeSession === 2) {
      sessionTwoText.textContent = `继续第二段 · 第 ${state.stageIndex + 1} 步`;
      sessionTwoButton.disabled = false;
    } else {
      sessionTwoText.textContent = "开始第二段";
      sessionTwoButton.disabled = false;
    }

    trainSpecialCard.hidden = !lesson.special;
    if (lesson.special) {
      document.getElementById("trainSpecialTitle").textContent = lesson.special.title;
      document.getElementById("trainSpecialDescription").textContent = lesson.special.description;
      trainSpecialCard.classList.toggle("completed", trainSpecialDone);
      if (trainSpecialDone) {
        trainSpecialText.textContent = "再开小火车";
        trainSpecialButton.disabled = false;
      } else if (!sessionTwoDone) {
        trainSpecialText.textContent = "完成第二段后开启";
        trainSpecialButton.disabled = true;
      } else if (state.activeLessonId === lesson.id && state.activeSession === 3) {
        trainSpecialText.textContent = `继续小火车 · 第 ${state.stageIndex + 1} 步`;
        trainSpecialButton.disabled = false;
      } else {
        trainSpecialText.textContent = "开小火车";
        trainSpecialButton.disabled = false;
      }
    }
    renderRewardCollection();
  }

  function roleBanner(role) {
    if (role === "child") {
      return `<div class="role-banner role-banner-child"><span class="mini-avatar" aria-hidden="true">👦🏻</span><div class="role-banner-copy"><strong>宝宝来找一找</strong></div></div>`;
    }
    if (role === "grandma") {
      return `<div class="role-banner role-banner-grandma"><span class="mini-avatar" aria-hidden="true">👩🏻</span><div class="role-banner-copy"><strong>奶奶来说一句</strong></div></div>`;
    }
    return `<div class="role-banner"><span class="mini-avatar" aria-hidden="true">🤝</span><div class="role-banner-copy"><strong>一起完成</strong></div></div>`;
  }

  function renderProgress() {
    const total = activeStages().length;
    const percent = Math.round(((state.stageIndex + 1) / total) * 100);
    const sessionLabel = state.activeSession === 3 ? "小火车特别版" : `第 ${state.activeSession} 段`;
    progressText.textContent = `${sessionLabel} · 第 ${state.stageIndex + 1} 步，共 ${total} 步`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    progressTrack.setAttribute("aria-valuenow", String(percent));
  }

  function renderReview(stage) {
    const source = stage.sourceLesson;
    const firstWord = source.stages[0];
    const secondWord = source.stages[1];
    const firstPhrase = source.stages[2];
    const firstEmoji = firstWord.options.find(option => option.value === firstWord.word)?.emoji || "🔊";
    const secondEmoji = secondWord.options.find(option => option.value === secondWord.word)?.emoji || "🔊";
    const items = [
      { text: firstWord.word, label: firstWord.word, emoji: firstEmoji, rate: 0.76 },
      { text: secondWord.word, label: secondWord.word, emoji: secondEmoji, rate: 0.76 },
      { text: firstPhrase.phrase, label: firstPhrase.phrase, emoji: "💬", rate: 0.92 }
    ];
    const headings = {
      warmup: "第一天先热热身",
      yesterday: `复习：${source.title}`,
      today: "先快速回忆今天"
    };
    const title = headings[stage.mode];
    const allHeard = state.reviewHeard.length >= items.length;
    const buttons = items.map((item, index) => `
      <button class="review-audio-button${state.reviewHeard.includes(index) ? " heard" : ""}" type="button" data-review-index="${index}">
        <span aria-hidden="true">${item.emoji}</span>
        <strong>${item.label}</strong>
        <small>${state.reviewHeard.includes(index) ? "听过了 ✓" : "马上播放"}</small>
      </button>`).join("");

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("together")}
        <div class="stage-content">
          <h3>${title}</h3>
          <div class="review-grid">${buttons}</div>
          <div class="feedback${allHeard ? " success" : ""}" id="reviewFeedback" role="status">${allHeard ? "耳朵已经热起来了！" : "三张卡片会自动播放，点卡片可重听。"}</div>
          <div class="stage-actions"><button class="primary-button" type="button" data-action="next"${allHeard ? "" : " disabled"}>复习好了，继续</button></div>
        </div>
      </article>`;

    const nextButton = stageHost.querySelector('[data-action="next"]');
    const markHeard = index => {
      if (!state.reviewHeard.includes(index)) state.reviewHeard.push(index);
      const button = stageHost.querySelector(`[data-review-index="${index}"]`);
      if (button) {
        button.classList.add("heard");
        const small = button.querySelector("small");
        if (small) small.textContent = "听过了 ✓";
      }
      if (state.reviewHeard.length >= items.length) {
        nextButton.disabled = false;
        const feedback = document.getElementById("reviewFeedback");
        if (feedback) {
          feedback.textContent = "耳朵已经热起来了！";
          feedback.className = "feedback success";
        }
      }
      saveState();
    };
    stageHost.querySelectorAll("[data-review-index]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.reviewIndex);
        speak(items[index].text, items[index].rate);
        markHeard(index);
      });
    });
    nextButton.addEventListener("click", nextStage);
    const stageIndexAtRender = state.stageIndex;
    items.forEach((item, index) => {
      window.setTimeout(() => {
        if (screens.lesson.classList.contains("active") && state.stageIndex === stageIndexAtRender) {
          speak(item.text, item.rate);
          markHeard(index);
        }
      }, 350 + index * 1600);
    });
  }

  function renderChoice(stage) {
    const options = stage.options.map(option => `
      <button class="choice-button${state.stageSolved && option.value === stage.word ? " selected" : ""}" type="button" data-choice="${option.value}">
        <span class="choice-emoji" aria-hidden="true">${option.emoji}</span>
        <span>${option.label}</span>
      </button>`).join("");

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner(stage.role)}
        <div class="stage-content">
          <h3>${stage.prompt}</h3>
          <button class="sound-button" type="button" data-action="play-word" aria-label="播放单词 ${stage.word}">🔊</button>
          <div class="choice-grid" role="group" aria-label="选择正确答案">${options}</div>
          <div class="feedback${state.stageSolved ? " success" : ""}" id="choiceFeedback" role="status">${state.stageSolved ? `找到了！${stage.word} 就是${stage.chinese}。` : "先听一听，再点一张图片"}</div>
        </div>
      </article>`;

    stageHost.querySelector('[data-action="play-word"]').addEventListener("click", () => speak(stage.word, 0.74));
    const feedback = document.getElementById("choiceFeedback");
    stageHost.querySelectorAll("[data-choice]").forEach(button => {
      button.addEventListener("click", () => {
        if (state.stageSolved) return;
        if (button.dataset.choice === stage.word) {
          stageHost.querySelectorAll("[data-choice]").forEach(item => { item.disabled = true; });
          button.classList.add("selected");
          feedback.textContent = `找到了！${stage.word} 就是${stage.chinese}。`;
          feedback.className = "feedback success";
          state.stageSolved = true;
          saveState();
          speak(stage.word, 0.76);
          playTone("correct");
          celebrate();
          reactMascot("happy");
          window.setTimeout(() => {
            if (screens.lesson.classList.contains("active") && state.stageSolved) nextStage();
          }, 800);
        } else {
          button.classList.add("wrong");
          feedback.textContent = "还不是这个，再听一次就知道啦。";
          feedback.className = "feedback try-again";
          speak(stage.word, 0.74);
          playTone("wrong");
          reactMascot("think");
          window.setTimeout(() => button.classList.remove("wrong"), 500);
        }
      });
    });
    if (!state.stageSolved) {
      window.setTimeout(() => {
        if (screens.lesson.classList.contains("active") && !state.stageSolved) speak(stage.word, 0.74);
      }, 320);
    }
  }

  function renderWordPractice(stage) {
    const source = stage.sourceLesson;
    const wordStages = source.stages.slice(0, 2);
    const rounds = [wordStages[0], wordStages[1], wordStages[0]];
    const finished = state.practiceRound >= rounds.length;
    const dots = rounds.map((_, index) => `<span class="${index < state.practiceRound ? "done" : index === state.practiceRound ? "current" : ""}"></span>`).join("");

    if (finished) {
      stageHost.innerHTML = `
        <article class="stage-card">
          ${roleBanner("child")}
          <div class="stage-content">
            <p class="stage-kicker">四轮都完成了</p>
            <div class="practice-finish-picture" aria-hidden="true">🚂 ⭐ ⭐</div>
            <h3>单词小火车到站啦！</h3>
            <p class="practice-lead">今天的两个单词都听了三遍，也找对了两次。</p>
            <div class="practice-progress" aria-hidden="true">${dots}</div>
            <div class="stage-actions"><button class="primary-button" type="button" data-action="next">完成第一段</button></div>
          </div>
        </article>`;
      stageHost.querySelector('[data-action="next"]').addEventListener("click", nextStage);
      return;
    }

    const currentRound = rounds[state.practiceRound];
    const rotation = state.practiceRound % currentRound.options.length;
    const options = [...currentRound.options.slice(rotation), ...currentRound.options.slice(0, rotation)]
      .map(option => `
        <button class="choice-button" type="button" data-practice-choice="${option.value}">
          <span class="choice-emoji" aria-hidden="true">${option.emoji}</span>
          <span>${option.label}</span>
        </button>`)
      .join("");

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("child")}
        <div class="stage-content">
          <p class="stage-kicker">单词小火车 · 第 ${state.practiceRound + 1} / ${rounds.length} 站</p>
          <h3>听清楚，再帮小火车找一次</h3>
          <div class="practice-progress" aria-label="四轮单词练习进度">${dots}</div>
          <button class="sound-button" type="button" data-action="play-practice-word" aria-label="播放单词 ${currentRound.word}">🔊</button>
          <div class="choice-grid" role="group" aria-label="选择正确答案">${options}</div>
          <div class="feedback" id="practiceFeedback" role="status">先听一听，图片位置会变一变。</div>
        </div>
      </article>`;

    stageHost.querySelector('[data-action="play-practice-word"]').addEventListener("click", () => speak(currentRound.word, 0.74));
    const feedback = document.getElementById("practiceFeedback");
    const practiceRoundAtRender = state.practiceRound;
    stageHost.querySelectorAll("[data-practice-choice]").forEach(button => {
      button.addEventListener("click", () => {
        if (button.dataset.practiceChoice !== currentRound.word) {
          button.classList.add("wrong");
          feedback.textContent = "再听一遍，小火车还没有找到正确车站。";
          feedback.className = "feedback try-again";
          speak(currentRound.word, 0.74);
          playTone("wrong");
          return;
        }
        stageHost.querySelectorAll("[data-practice-choice]").forEach(item => { item.disabled = true; });
        button.classList.add("selected");
        feedback.textContent = "找对啦！小火车去下一站。";
        feedback.className = "feedback success";
        speak(currentRound.word, 0.76);
        playTone("correct");
        celebrate();
        const completedRound = state.practiceRound;
        state.practiceRound += 1;
        saveState();
        window.setTimeout(() => {
          if (screens.lesson.classList.contains("active") && state.practiceRound === completedRound + 1) renderStage();
        }, 650);
      });
    });
    window.setTimeout(() => {
      if (screens.lesson.classList.contains("active") && state.practiceRound === practiceRoundAtRender) {
        speak(currentRound.word, 0.74);
      }
    }, 320);
  }

  function renderWordMatch(stage) {
    const source = stage.sourceLesson;
    const previous = previousLesson(source);
    const wordStages = [
      source.stages[0],
      source.stages[1],
      (previous && previous.stages[0]) || source.stages[0]
    ];
    const pairs = wordStages.map((wordStage, index) => ({
      id: index,
      word: wordStage.word,
      emoji: wordStage.options.find(option => option.value === wordStage.word)?.emoji || "🔊"
    }));

    let cards = [];
    pairs.forEach(pair => {
      cards.push({ pairId: pair.id, word: pair.word, emoji: pair.emoji });
      cards.push({ pairId: pair.id, word: pair.word, emoji: pair.emoji });
    });
    cards = cards.map(card => ({ ...card, r: Math.random() })).sort((a, b) => a.r - b.r);

    let flipped = [];
    const matched = new Set();
    let locked = false;

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("child")}
        <div class="stage-content">
          <p class="stage-kicker">记忆小游戏</p>
          <h3>翻一翻，找到两张一样的卡片</h3>
          <div class="match-grid" role="group" aria-label="记忆配对游戏">
            ${cards.map((card, index) => `
              <button class="match-card" type="button" data-match-index="${index}" aria-label="卡片 ${index + 1}">
                <span class="match-card-inner">
                  <span class="match-card-back" aria-hidden="true">❓</span>
                  <span class="match-card-face" aria-hidden="true">${card.emoji}</span>
                </span>
              </button>`).join("")}
          </div>
          <div class="feedback" id="matchFeedback" role="status">翻开一张卡片，听一听它的英文。</div>
          <div class="stage-actions"><button class="primary-button" type="button" data-action="next" disabled>配对完成，继续</button></div>
        </div>
      </article>`;

    const nextButton = stageHost.querySelector('[data-action="next"]');
    const feedback = document.getElementById("matchFeedback");
    const cardElements = [...stageHost.querySelectorAll("[data-match-index]")];
    const setFlipped = (element, up) => element.classList.toggle("flipped", up);
    const allMatched = () => matched.size === pairs.length;

    cardElements.forEach(element => {
      element.addEventListener("click", () => {
        if (locked) return;
        const index = Number(element.dataset.matchIndex);
        const card = cards[index];
        if (matched.has(card.pairId) || flipped.includes(index)) return;
        setFlipped(element, true);
        playTone("flip");
        speak(card.word, 0.74);
        flipped.push(index);

        if (flipped.length === 2) {
          const [first, second] = flipped;
          const firstCard = cards[first];
          const secondCard = cards[second];
          if (firstCard.pairId === secondCard.pairId) {
            matched.add(firstCard.pairId);
            flipped = [];
            playTone("correct");
            celebrate();
            feedback.textContent = "找到一对啦！真棒！";
            if (allMatched()) {
              feedback.textContent = "全部配对成功，记忆小达人！";
              nextButton.disabled = false;
              playTone("complete");
              celebrate();
            }
          } else {
            locked = true;
            feedback.textContent = "这两张不一样，记住它们的位置再试一次。";
            window.setTimeout(() => {
              setFlipped(cardElements[first], false);
              setFlipped(cardElements[second], false);
              flipped = [];
              locked = false;
            }, 850);
          }
        }
      });
    });

    nextButton.addEventListener("click", nextStage);
  }

  function renderWordTap(stage) {
    const source = stage.sourceLesson;
    const wordStages = source.stages.slice(0, 2);
    const rounds = [wordStages[0], wordStages[1], wordStages[0]];
    const finished = state.practiceRound >= rounds.length;
    const dots = rounds.map((_, index) => `<span class="${index < state.practiceRound ? "done" : index === state.practiceRound ? "current" : ""}"></span>`).join("");

    if (finished) {
      stageHost.innerHTML = `
        <article class="stage-card">
          ${roleBanner("child")}
          <div class="stage-content">
            <p class="stage-kicker">拍一拍都完成了</p>
            <div class="practice-finish-picture" aria-hidden="true">🙌 ⭐ ⭐</div>
            <h3>拍得又快又准！</h3>
            <p class="practice-lead">两个单词都听清了，也拍对了。</p>
            <div class="practice-progress" aria-hidden="true">${dots}</div>
            <div class="stage-actions"><button class="primary-button" type="button" data-action="next">完成第一段</button></div>
          </div>
        </article>`;
      stageHost.querySelector('[data-action="next"]').addEventListener("click", nextStage);
      return;
    }

    const currentRound = rounds[state.practiceRound];
    const pool = new Map();
    wordStages.forEach(wordStage => wordStage.options.forEach(option => pool.set(option.value, option)));
    const correct = pool.get(currentRound.word) || currentRound.options.find(option => option.value === currentRound.word);
    const others = [...pool.values()].filter(option => option.value !== currentRound.word);
    let options = [correct, ...others.slice(0, 3)];
    const rotation = state.practiceRound % options.length;
    options = [...options.slice(rotation), ...options.slice(0, rotation)];

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("child")}
        <div class="stage-content">
          <p class="stage-kicker">拍一拍 · 第 ${state.practiceRound + 1} / ${rounds.length} 关</p>
          <h3>听一听，快拍拍对的那一张</h3>
          <div class="practice-progress" aria-label="拍一拍进度">${dots}</div>
          <button class="sound-button" type="button" data-action="play-tap-word" aria-label="播放单词 ${currentRound.word}">🔊</button>
          <div class="tap-grid" role="group" aria-label="拍一拍选择">
            ${options.map(option => `
              <button class="tap-card" type="button" data-tap-choice="${option.value}">
                <span class="tap-emoji" aria-hidden="true">${option.emoji}</span>
                <span>${option.label}</span>
              </button>`).join("")}
          </div>
          <div class="feedback" id="tapFeedback" role="status">听一听，再拍对的那一张。</div>
        </div>
      </article>`;

    stageHost.querySelector('[data-action="play-tap-word"]').addEventListener("click", () => speak(currentRound.word, 0.74));
    const feedback = document.getElementById("tapFeedback");
    const tapRoundAtRender = state.practiceRound;

    stageHost.querySelectorAll("[data-tap-choice]").forEach(button => {
      button.addEventListener("click", () => {
        if (button.dataset.tapChoice !== currentRound.word) {
          button.classList.add("wrong");
          feedback.textContent = "拍错啦，再听一遍找一找。";
          feedback.className = "feedback try-again";
          playTone("wrong");
          speak(currentRound.word, 0.74);
          window.setTimeout(() => button.classList.remove("wrong"), 500);
          return;
        }
        button.classList.add("selected");
        feedback.textContent = "拍对啦！";
        feedback.className = "feedback success";
        playTone("correct");
        celebrate();
        speak(currentRound.word, 0.76);
        const completedRound = state.practiceRound;
        state.practiceRound += 1;
        saveState();
        window.setTimeout(() => {
          if (screens.lesson.classList.contains("active") && state.practiceRound === completedRound + 1) renderStage();
        }, 700);
      });
    });

    window.setTimeout(() => {
      if (screens.lesson.classList.contains("active") && state.practiceRound === tapRoundAtRender) {
        speak(currentRound.word, 0.74);
      }
    }, 320);
  }

  function renderPhrasePractice(stage) {
    const phrases = stage.sourceLesson.stages.slice(2, 4);
    const cards = phrases.map((phrase, index) => {
      const saidKey = `${index}-said`;
      const said = state.practiceHeard.includes(saidKey);
      return `
        <section class="phrase-practice-card${said ? " completed" : ""}">
          <span class="phrase-practice-number">${index + 1}</span>
          <p class="phrase-english">${phrase.phrase}</p>
          <p class="phrase-chinese">${phrase.chinese}</p>
          <div class="practice-listen-row">
            <button class="secondary-button" type="button" data-practice-replay="${index}">🔊 再听一遍</button>
            <button class="dialogue-button" type="button" data-practice-said="${index}"${said ? " disabled" : ""}>${said ? "说过了 ✓" : "我们也说一遍"}</button>
          </div>
        </section>`;
    }).join("");
    const allFinished = phrases.every((_, index) => state.practiceHeard.includes(`${index}-said`));

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("together")}
        <div class="stage-content">
          <p class="stage-kicker">再练一轮，不急着往后赶</p>
          <h3>两句话都听清楚、说一遍</h3>
          <div class="phrase-practice-grid">${cards}</div>
          <div class="feedback${allFinished ? " success" : ""}" role="status">${allFinished ? "两句话都练熟一点了！" : "每句话会自动播放，点“我们也说一遍”就好。"}</div>
          <div class="stage-actions"><button class="primary-button" type="button" data-action="next"${allFinished ? "" : " disabled"}>两句都练好了</button></div>
        </div>
      </article>`;

    stageHost.querySelectorAll("[data-practice-replay]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.practiceReplay);
        speak(phrases[index].phrase, 0.9);
      });
    });
    stageHost.querySelectorAll("[data-practice-said]").forEach(button => {
      button.addEventListener("click", () => {
        const key = `${button.dataset.practiceSaid}-said`;
        if (!state.practiceHeard.includes(key)) state.practiceHeard.push(key);
        saveState();
        playTone("correct");
        renderStage();
      });
    });
    stageHost.querySelector('[data-action="next"]').addEventListener("click", nextStage);
    const firstUnsaid = phrases.findIndex((_, index) => !state.practiceHeard.includes(`${index}-said`));
    if (firstUnsaid >= 0) {
      window.setTimeout(() => {
        if (screens.lesson.classList.contains("active")) speak(phrases[firstUnsaid].phrase, 0.9);
      }, 320);
    }
  }

  function renderPhraseSong(stage) {
    const source = stage.sourceLesson;
    const song = source.song || {
      title: `一起唱：${source.nodeTitle}`,
      emoji: source.pictureMain || "🎵",
      lines: source.stages.slice(2, 4).map(phrase => ({ english: phrase.phrase, chinese: phrase.chinese }))
    };
    const currentIndex = song.lines.findIndex((_, index) => !state.practiceHeard.includes(`${index}-sung`));

    const linesHtml = song.lines.map((line, index) => {
      const sung = state.practiceHeard.includes(`${index}-sung`);
      const current = index === currentIndex;
      const beat = sung ? "✅" : current ? "🎤" : "🎵";
      return `
        <button class="song-line${sung ? " sung" : ""}${current ? " current" : ""}" type="button" data-song-index="${index}">
          <span class="song-line-beat" aria-hidden="true">${beat}</span>
          <span class="song-line-copy"><strong>${line.english}</strong><small>${line.chinese}</small></span>
        </button>`;
    }).join("");
    const allSung = currentIndex === -1;

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("together")}
        <div class="stage-content">
          <p class="stage-kicker">一起唱儿歌</p>
          <h3>${song.title}</h3>
          <div class="song-emoji" aria-hidden="true">${song.emoji}</div>
          <div class="song-list">${linesHtml}</div>
          <div class="feedback${allSung ? " success" : ""}" id="songFeedback" role="status">${allSung ? "整首儿歌都会唱啦！" : "点一行听一听，再跟着一起唱。"}</div>
          <div class="stage-actions"><button class="primary-button" type="button" data-action="next"${allSung ? "" : " disabled"}>都唱完啦，继续</button></div>
        </div>
      </article>`;

    const nextButton = stageHost.querySelector('[data-action="next"]');
    stageHost.querySelectorAll("[data-song-index]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.songIndex);
        const key = `${index}-sung`;
        speak(song.lines[index].english, 0.8);
        playTone("flip");
        if (!state.practiceHeard.includes(key)) state.practiceHeard.push(key);
        saveState();
        renderStage();
      });
    });
    nextButton.addEventListener("click", nextStage);
  }

  function renderSpeak(stage) {
    const heardSlow = state.listenModes.includes("slow");
    const heardNormal = state.listenModes.includes("normal");
    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner(stage.role)}
        <div class="stage-content">
          <p class="stage-kicker">${stage.context}</p>
          <div class="phrase-panel">
            <p class="phrase-english">${stage.phrase}</p>
            <p class="phrase-chinese">${stage.chinese}</p>
          </div>
          <div class="listen-row">
            <button class="secondary-button${heardSlow ? " heard" : ""}" type="button" data-action="slow">🐢 慢速听${heardSlow ? " ✓" : ""}</button>
            <button class="secondary-button${heardNormal ? " heard" : ""}" type="button" data-action="normal">▶️ 再听一遍${heardNormal ? " ✓" : ""}</button>
          </div>
          <div class="stage-actions">
            <button class="primary-button" type="button" data-action="said">说好了，继续</button>
          </div>
          <div class="feedback" id="speakFeedback" role="status">先听一听，再跟着说一遍。</div>
        </div>
      </article>`;

    const hearPhrase = (mode, rate) => {
      if (!state.listenModes.includes(mode)) state.listenModes.push(mode);
      saveState();
      speak(stage.phrase, rate);
      const button = stageHost.querySelector(`[data-action="${mode}"]`);
      if (button) {
        button.classList.add("heard");
        button.textContent = mode === "slow" ? "🐢 慢速听 ✓" : "▶️ 再听一遍 ✓";
      }
    };
    stageHost.querySelector('[data-action="slow"]').addEventListener("click", () => hearPhrase("slow", 0.36));
    stageHost.querySelector('[data-action="normal"]').addEventListener("click", () => hearPhrase("normal", 1));
    stageHost.querySelector('[data-action="said"]').addEventListener("click", () => {
      playTone("correct");
      nextStage();
    });
    window.setTimeout(() => {
      if (screens.lesson.classList.contains("active")) speak(stage.phrase, 1);
    }, 320);
  }

  function renderDialogue(stage) {
    const lines = stage.lines.map((line, index) => {
      const rowClass = index < state.dialogueTurn ? "done" : index === state.dialogueTurn ? "current" : "";
      const status = index < state.dialogueTurn ? "说完了 ✓" : index === state.dialogueTurn ? "现在轮到" : "等一等";
      return `<div class="dialogue-row ${rowClass}" data-dialogue-index="${index}"><span class="dialogue-role" aria-hidden="true">${line.emoji}</span><div class="dialogue-copy"><strong>${line.role}：${line.english}</strong><small>${line.chinese}</small></div><span class="dialogue-state">${status}</span></div>`;
    }).join("");
    const finished = state.dialogueTurn >= stage.lines.length;

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner(stage.role)}
        <div class="stage-content">
          <h3>${stage.title}</h3>
          <div class="dialogue-list">${lines}</div>
          <div class="stage-actions">
            ${finished
              ? '<button class="primary-button" type="button" data-action="next">对话完成，继续</button>'
              : '<button class="secondary-button" type="button" data-action="hear-line">🔊 再听一遍</button><button class="dialogue-button" type="button" data-action="said-line">这一句说好了</button>'}
          </div>
          <div class="feedback${finished ? " success" : ""}" id="dialogueFeedback" role="status">${finished ? "你们已经完成了一段真实对话！" : `轮到${stage.lines[state.dialogueTurn].role}：会自动播放，听完跟着说一句。`}</div>
        </div>
      </article>`;

    if (finished) {
      stageHost.querySelector('[data-action="next"]').addEventListener("click", nextStage);
      return;
    }
    const currentLine = stage.lines[state.dialogueTurn];
    const turnAtRender = state.dialogueTurn;
    stageHost.querySelector('[data-action="hear-line"]').addEventListener("click", () => {
      speak(currentLine.english, 0.92);
    });
    stageHost.querySelector('[data-action="said-line"]').addEventListener("click", () => {
      state.dialogueTurn += 1;
      saveState();
      playTone("correct");
      renderStage();
    });
    window.setTimeout(() => {
      if (screens.lesson.classList.contains("active") && state.dialogueTurn === turnAtRender) {
        speak(currentLine.english, 0.92);
      }
    }, 320);
  }

  function renderMission(stage) {
    const steps = stage.steps.map((step, index) => `<li><span class="mission-number">${index + 1}</span><span>${step}</span></li>`).join("");
    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("together")}
        <div class="stage-content">
          <p class="stage-kicker">离开屏幕练习约五分钟</p>
          <h3>${stage.title}</h3>
          <div class="mission-picture" aria-hidden="true">${stage.picture}</div>
          <ol class="mission-steps">${steps}</ol>
          <div class="stage-actions">
            <button class="primary-button" type="button" data-action="complete">我们完成啦</button>
          </div>
        </div>
      </article>`;
    stageHost.querySelector('[data-action="complete"]').addEventListener("click", completeSession);
  }

  function renderStage() {
    const stage = activeStages()[state.stageIndex];
    renderProgress();
    if (stage.type === "review") renderReview(stage);
    if (stage.type === "choice") renderChoice(stage);
    if (stage.type === "wordPractice") renderWordPractice(stage);
    if (stage.type === "wordMatch") renderWordMatch(stage);
    if (stage.type === "wordTap") renderWordTap(stage);
    if (stage.type === "speak") renderSpeak(stage);
    if (stage.type === "phrasePractice") renderPhrasePractice(stage);
    if (stage.type === "phraseSong") renderPhraseSong(stage);
    if (stage.type === "dialogue") renderDialogue(stage);
    if (stage.type === "mission") renderMission(stage);
  }

  function resetSessionProgress(lessonId, sessionNumber) {
    state.activeLessonId = lessonId;
    state.activeSession = sessionNumber;
    state.stageIndex = 0;
    state.stageSolved = false;
    state.dialogueTurn = 0;
    state.dialogueHeard = [];
    state.reviewHeard = [];
    state.listenModes = [];
    state.practiceRound = 0;
    state.practiceHeard = [];
  }

  function startSession(sessionNumber, forceRestart = false) {
    if (sessionNumber === 2 && !isSessionComplete(state.selectedLessonId, 1)) {
      showToast("先完成第一段，休息后再来第二段");
      return;
    }
    if (sessionNumber === 3) {
      const lesson = selectedLesson();
      if (!lesson.special) return;
      if (!isSessionComplete(lesson.id, 2)) {
        showToast("完成今天的两段学习后，小火车才出发");
        return;
      }
    }
    if (forceRestart || state.activeLessonId !== state.selectedLessonId || state.activeSession !== sessionNumber) {
      resetSessionProgress(state.selectedLessonId, sessionNumber);
    }
    saveState();
    showScreen("lesson");
    renderStage();
  }

  function nextStage() {
    const stages = activeStages();
    if (state.stageIndex >= stages.length - 1) {
      completeSession();
      return;
    }
    state.stageIndex += 1;
    state.stageSolved = false;
    state.dialogueTurn = 0;
    state.dialogueHeard = [];
    state.reviewHeard = [];
    state.listenModes = [];
    state.practiceRound = 0;
    state.practiceHeard = [];
    saveState();
    renderStage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function fillReward(lesson, useSpecialReward = false) {
    const reward = useSpecialReward ? lesson.special.reward : lesson.reward;
    document.getElementById("rewardPicture").textContent = reward.picture;
    document.getElementById("rewardTitle").textContent = reward.title;
    document.getElementById("rewardLead").textContent = reward.lead;
    document.getElementById("childReward").textContent = reward.child;
    document.getElementById("grandmaReward").textContent = reward.grandma;
    document.getElementById("unlockEmoji").textContent = reward.unlockEmoji;
    document.getElementById("unlockTitle").textContent = reward.unlockTitle;
    document.getElementById("replayButton").dataset.session = useSpecialReward ? "3" : "2";
  }

  function completeSession() {
    const lesson = activeLesson();
    const finishedSession = state.activeSession;
    const today = dateKey();
    markSessionComplete(lesson.id, finishedSession);
    if (finishedSession === 2) {
      if (!state.completions[lesson.id].includes(today)) state.completions[lesson.id].push(today);
      state.completions[lesson.id] = state.completions[lesson.id].slice(-60);
    }
    state.selectedLessonId = lesson.id;
    state.activeLessonId = null;
    state.activeSession = 0;
    state.stageIndex = 0;
    state.stageSolved = false;
    state.dialogueTurn = 0;
    state.dialogueHeard = [];
    state.reviewHeard = [];
    state.listenModes = [];
    state.practiceRound = 0;
    state.practiceHeard = [];
    saveState();
    if (finishedSession === 1) {
      showScreen("break");
    } else {
      fillReward(lesson, finishedSession === 3);
      showScreen("reward");
      playTone("complete");
      celebrate();
      reactMascot("celebrate");
    }
  }

  function goHome() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    updateHome();
    showScreen("home");
  }

  function goHomeToRewards() {
    goHome();
    window.setTimeout(() => {
      document.getElementById("rewardCollectionTitle").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 240);
  }

  document.getElementById("weekSections").addEventListener("click", event => {
    const button = event.target.closest("[data-lesson-select]");
    if (button && !button.disabled) setSelectedLesson(button.dataset.lessonSelect);
  });
  document.getElementById("startSessionOneButton").addEventListener("click", () => {
    startSession(1, isSessionComplete(state.selectedLessonId, 1));
  });
  document.getElementById("startSessionTwoButton").addEventListener("click", () => {
    startSession(2, isSessionComplete(state.selectedLessonId, 2));
  });
  document.getElementById("startTrainSpecialButton").addEventListener("click", () => {
    startSession(3, isSessionComplete(state.selectedLessonId, 3));
  });
  document.getElementById("rewardCollection").addEventListener("click", event => {
    const rewardButton = event.target.closest("[data-reward-key]");
    if (rewardButton) showRewardDetail(rewardButton.dataset.rewardKey);
  });
  document.getElementById("previewButton").addEventListener("click", () => speak(selectedLesson().previewPhrase, 0.95));
  document.getElementById("exitLessonButton").addEventListener("click", goHome);
  document.getElementById("finishButton").addEventListener("click", goHomeToRewards);
  document.getElementById("replayButton").addEventListener("click", event => startSession(Number(event.currentTarget.dataset.session) || 2, true));
  document.getElementById("breakHomeButton").addEventListener("click", goHome);
  document.getElementById("brandButton").addEventListener("click", goHome);

  const offlineStatus = document.getElementById("offlineStatus");
  const offlineStatusText = document.getElementById("offlineStatusText");

  function setCacheStatus(status, completed = 0, total = 1) {
    offlineStatus.className = `offline-status ${status}`;
    if (status === "ready") {
      offlineStatusText.textContent = "加载完成";
      return;
    }
    if (status === "error") {
      offlineStatusText.textContent = "加载失败";
      return;
    }
    const percent = Math.max(0, Math.min(100, Math.round((completed / total) * 100)));
    offlineStatusText.textContent = `正在加载 ${percent}%`;
  }

  window.addEventListener("beforeunload", saveState);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) saveState();
  });

  loadState();
  refreshVoices();
  if ("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = refreshVoices;
  updateHome();
  showScreen("home");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", event => {
      const message = event.data;
      if (!message || message.type !== "CACHE_STATUS") return;
      setCacheStatus(message.status, message.completed, message.total);
    });

    window.addEventListener("load", () => {
      setCacheStatus("loading", 0, 1);
      navigator.serviceWorker.register("./sw.js")
        .then(registration => registration.update().catch(() => registration))
        .then(registration => {
          const worker = registration.installing;
          if (!worker) {
            setCacheStatus("ready", 1, 1);
            return;
          }

          const syncWorkerState = () => {
            if (worker.state === "installed" || worker.state === "activating" || worker.state === "activated") {
              setCacheStatus("ready", 1, 1);
            } else if (worker.state === "redundant") {
              setCacheStatus("error", 0, 1);
            }
          };

          worker.addEventListener("statechange", syncWorkerState);
          syncWorkerState();
        })
        .catch(() => setCacheStatus("error", 0, 1));
    });
  } else {
    setCacheStatus("error", 0, 1);
  }
})();
