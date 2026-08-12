(() => {
  "use strict";

  const STORAGE_KEY = "family-english-progress-v4";

  const lessons = {
    greeting: {
      id: "greeting",
      order: 1,
      meta: "第一课",
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
      room: []
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
    "cleanup", "shapes", "actions", "feelings", "weather", "manners", "room"
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
    if (lesson.order <= 1) return elapsedProgramDays(dateKey()) > 0 ? lessons.family : null;
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
      state.dialogueTurn = Math.min(Math.max(Number(state.dialogueTurn) || 0, 0), 4);
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
        { type: "phrasePractice", sourceLesson: lesson },
        ...lesson.stages.slice(4)
      ];
    }
    const previous = previousLesson(lesson);
    return [
      { type: "review", mode: previous ? "yesterday" : "warmup", sourceLesson: previous || lesson },
      ...lesson.stages.slice(0, 3),
      { type: "wordPractice", sourceLesson: lesson }
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

    const weekTwoUnlocked = elapsedProgramDays(dateKey()) >= 7;
    document.getElementById("weekTwoSection").classList.toggle("unlocked", weekTwoUnlocked);
    document.getElementById("weekTwoStatus").textContent = weekTwoUnlocked ? "已经开启" : "第 8 天自动开启";

    let completeCount = 0;
    document.querySelectorAll("[data-lesson-node]").forEach(node => {
      const nodeLesson = lessons[node.dataset.lessonNode];
      const completed = state.completions[nodeLesson.id].length > 0;
      if (completed) completeCount += 1;
      node.classList.toggle("current", nodeLesson.id === state.selectedLessonId);
      node.classList.toggle("completed", completed);
      const icon = node.querySelector(".node-icon");
      const subtitle = node.querySelector("small");
      const button = node.querySelector("button");
      const locked = nodeLesson.order > 7 && !weekTwoUnlocked;
      icon.textContent = completed ? "✓" : String(nodeLesson.order);
      subtitle.textContent = completed ? "已完成" : nodeLesson.nodeSubtitle;
      button.disabled = locked;
      button.setAttribute("aria-pressed", nodeLesson.id === state.selectedLessonId ? "true" : "false");
    });
    document.getElementById("familyProgress").textContent = `已完成 ${completeCount} / 14 个`;

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
        <small>${state.reviewHeard.includes(index) ? "听过了 ✓" : "点一下听"}</small>
      </button>`).join("");

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner("together")}
        <div class="stage-content">
          <h3>${title}</h3>
          <div class="review-grid">${buttons}</div>
          <div class="feedback${allHeard ? " success" : ""}" id="reviewFeedback" role="status">${allHeard ? "耳朵已经热起来了！" : "三张卡片都听一遍就可以。"}</div>
          <div class="stage-actions"><button class="primary-button" type="button" data-action="next"${allHeard ? "" : " disabled"}>复习好了，继续</button></div>
        </div>
      </article>`;

    const nextButton = stageHost.querySelector('[data-action="next"]');
    stageHost.querySelectorAll("[data-review-index]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.reviewIndex);
        speak(items[index].text, items[index].rate);
        if (!state.reviewHeard.includes(index)) state.reviewHeard.push(index);
        button.classList.add("heard");
        button.querySelector("small").textContent = "听过了 ✓";
        if (state.reviewHeard.length >= items.length) {
          nextButton.disabled = false;
          document.getElementById("reviewFeedback").textContent = "耳朵已经热起来了！";
          document.getElementById("reviewFeedback").className = "feedback success";
        }
        saveState();
      });
    });
    nextButton.addEventListener("click", nextStage);
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
          <div class="stage-actions">
            <button class="primary-button" type="button" data-action="next"${state.stageSolved ? "" : " disabled"}>继续</button>
          </div>
        </div>
      </article>`;

    stageHost.querySelector('[data-action="play-word"]').addEventListener("click", () => speak(stage.word, 0.74));
    const nextButton = stageHost.querySelector('[data-action="next"]');
    const feedback = document.getElementById("choiceFeedback");
    stageHost.querySelectorAll("[data-choice]").forEach(button => {
      button.addEventListener("click", () => {
        stageHost.querySelectorAll("[data-choice]").forEach(item => item.classList.remove("selected", "wrong"));
        if (button.dataset.choice === stage.word) {
          button.classList.add("selected");
          feedback.textContent = `找到了！${stage.word} 就是${stage.chinese}。`;
          feedback.className = "feedback success";
          nextButton.disabled = false;
          state.stageSolved = true;
          saveState();
          speak(stage.word, 0.76);
        } else {
          button.classList.add("wrong");
          feedback.textContent = "还不是这个，再听一次就知道啦。";
          feedback.className = "feedback try-again";
          speak(stage.word, 0.74);
        }
      });
    });
    nextButton.addEventListener("click", nextStage);
    if (!state.stageSolved) {
      window.setTimeout(() => {
        if (screens.lesson.classList.contains("active") && !state.stageSolved) speak(stage.word, 0.74);
      }, 320);
    }
  }

  function renderWordPractice(stage) {
    const source = stage.sourceLesson;
    const wordStages = source.stages.slice(0, 2);
    const rounds = [wordStages[0], wordStages[1], wordStages[0], wordStages[1]];
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
          return;
        }
        stageHost.querySelectorAll("[data-practice-choice]").forEach(item => { item.disabled = true; });
        button.classList.add("selected");
        feedback.textContent = "找对啦！小火车去下一站。";
        feedback.className = "feedback success";
        speak(currentRound.word, 0.76);
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

  function renderPhrasePractice(stage) {
    const phrases = stage.sourceLesson.stages.slice(2, 4);
    const cards = phrases.map((phrase, index) => {
      const normalKey = `${index}-normal`;
      const slowKey = `${index}-slow`;
      const saidKey = `${index}-said`;
      const heardNormal = state.practiceHeard.includes(normalKey);
      const heardSlow = state.practiceHeard.includes(slowKey);
      const said = state.practiceHeard.includes(saidKey);
      const readyToSay = heardNormal && heardSlow;
      return `
        <section class="phrase-practice-card${said ? " completed" : ""}">
          <span class="phrase-practice-number">${index + 1}</span>
          <p class="phrase-english">${phrase.phrase}</p>
          <p class="phrase-chinese">${phrase.chinese}</p>
          <div class="practice-listen-row">
            <button class="secondary-button${heardSlow ? " heard" : ""}" type="button" data-practice-audio="${index}" data-speed="slow">🐢 慢速${heardSlow ? " ✓" : ""}</button>
            <button class="secondary-button${heardNormal ? " heard" : ""}" type="button" data-practice-audio="${index}" data-speed="normal">▶️ 正常${heardNormal ? " ✓" : ""}</button>
          </div>
          <button class="dialogue-button" type="button" data-practice-said="${index}"${readyToSay && !said ? "" : " disabled"}>${said ? "我们说过了 ✓" : readyToSay ? "我们也说一遍" : "先听两种速度"}</button>
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
          <div class="feedback${allFinished ? " success" : ""}" role="status">${allFinished ? "两句话都练熟一点了！" : "每句话先听正常和慢速，再一起开口。"}</div>
          <div class="stage-actions"><button class="primary-button" type="button" data-action="next"${allFinished ? "" : " disabled"}>两句都练好了</button></div>
        </div>
      </article>`;

    stageHost.querySelectorAll("[data-practice-audio]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.practiceAudio);
        const speed = button.dataset.speed;
        const key = `${index}-${speed}`;
        if (!state.practiceHeard.includes(key)) state.practiceHeard.push(key);
        saveState();
        speak(phrases[index].phrase, speed === "slow" ? 0.36 : 1);
        renderStage();
      });
    });
    stageHost.querySelectorAll("[data-practice-said]").forEach(button => {
      button.addEventListener("click", () => {
        const key = `${button.dataset.practiceSaid}-said`;
        if (!state.practiceHeard.includes(key)) state.practiceHeard.push(key);
        saveState();
        renderStage();
      });
    });
    stageHost.querySelector('[data-action="next"]').addEventListener("click", nextStage);
  }

  function renderSpeak(stage) {
    const heardSlow = state.listenModes.includes("slow");
    const heardNormal = state.listenModes.includes("normal");
    const readyToSay = heardSlow && heardNormal;
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
            <button class="secondary-button${heardNormal ? " heard" : ""}" type="button" data-action="normal">▶️ 正常听${heardNormal ? " ✓" : ""}</button>
          </div>
          <div class="stage-actions">
            <button class="primary-button" type="button" data-action="said"${readyToSay || state.stageSolved ? "" : " disabled"}>${state.stageSolved ? "说得很好，继续" : readyToSay ? "我说好了" : "先听两种速度"}</button>
          </div>
          <div class="feedback${state.stageSolved ? " success" : ""}" id="speakFeedback" role="status">${state.stageSolved ? "太好了！接下来再换一个小情景。" : readyToSay ? "现在一起开口说一遍。" : "先听正常和慢速，不用追求标准。"}</div>
        </div>
      </article>`;

    const hearPhrase = (mode, rate) => {
      if (!state.listenModes.includes(mode)) state.listenModes.push(mode);
      saveState();
      speak(stage.phrase, rate);
      renderStage();
    };
    stageHost.querySelector('[data-action="slow"]').addEventListener("click", () => hearPhrase("slow", 0.36));
    stageHost.querySelector('[data-action="normal"]').addEventListener("click", () => hearPhrase("normal", 1));
    stageHost.querySelector('[data-action="said"]').addEventListener("click", event => {
      if (!state.stageSolved) {
        state.stageSolved = true;
        event.currentTarget.textContent = "说得很好，继续";
        document.getElementById("speakFeedback").textContent = "太好了！接下来再换一个小情景。";
        document.getElementById("speakFeedback").className = "feedback success";
        saveState();
        return;
      }
      nextStage();
    });
  }

  function renderDialogue(stage) {
    const lines = stage.lines.map((line, index) => {
      const rowClass = index < state.dialogueTurn ? "done" : index === state.dialogueTurn ? "current" : "";
      const status = index < state.dialogueTurn ? "说完了 ✓" : index === state.dialogueTurn ? "现在轮到" : "等一等";
      return `<div class="dialogue-row ${rowClass}" data-dialogue-index="${index}"><span class="dialogue-role" aria-hidden="true">${line.emoji}</span><div class="dialogue-copy"><strong>${line.role}：${line.english}</strong><small>${line.chinese}</small></div><span class="dialogue-state">${status}</span></div>`;
    }).join("");
    const finished = state.dialogueTurn >= stage.lines.length;
    const currentHeard = state.dialogueHeard.includes(state.dialogueTurn);

    stageHost.innerHTML = `
      <article class="stage-card">
        ${roleBanner(stage.role)}
        <div class="stage-content">
          <h3>${stage.title}</h3>
          <div class="dialogue-list">${lines}</div>
          <div class="stage-actions">
            ${finished
              ? '<button class="primary-button" type="button" data-action="next">对话完成，继续</button>'
              : `<button class="secondary-button${currentHeard ? " heard" : ""}" type="button" data-action="hear-line">🔊 听这一句${currentHeard ? " ✓" : ""}</button><button class="dialogue-button" type="button" data-action="said-line"${currentHeard ? "" : " disabled"}>${currentHeard ? "这一句说好了" : "先听这一句"}</button>`}
          </div>
          <div class="feedback${finished ? " success" : ""}" id="dialogueFeedback" role="status">${finished ? "你们已经完成了一段真实对话！" : currentHeard ? `听过了，轮到${stage.lines[state.dialogueTurn].role}跟着说。` : `先听一遍，再轮到${stage.lines[state.dialogueTurn].role}开口。`}</div>
        </div>
      </article>`;

    if (finished) {
      stageHost.querySelector('[data-action="next"]').addEventListener("click", nextStage);
      return;
    }
    const currentLine = stage.lines[state.dialogueTurn];
    stageHost.querySelector('[data-action="hear-line"]').addEventListener("click", event => {
      if (!state.dialogueHeard.includes(state.dialogueTurn)) state.dialogueHeard.push(state.dialogueTurn);
      saveState();
      speak(currentLine.english, 0.92);
      event.currentTarget.classList.add("heard");
      event.currentTarget.textContent = "🔊 听这一句 ✓";
      const saidButton = stageHost.querySelector('[data-action="said-line"]');
      saidButton.disabled = false;
      saidButton.textContent = "这一句说好了";
      document.getElementById("dialogueFeedback").textContent = `听过了，轮到${currentLine.role}跟着说。`;
    });
    stageHost.querySelector('[data-action="said-line"]').addEventListener("click", () => {
      state.dialogueTurn += 1;
      saveState();
      renderStage();
    });
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
    if (stage.type === "speak") renderSpeak(stage);
    if (stage.type === "phrasePractice") renderPhrasePractice(stage);
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

  document.querySelectorAll("[data-lesson-select]").forEach(button => {
    button.addEventListener("click", () => setSelectedLesson(button.dataset.lessonSelect));
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
