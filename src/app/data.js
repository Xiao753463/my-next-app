// src/data.js
export const portfolioItems = [
  {
    id: 1,
    category: 'Web',
    title: '裕珍馨 YJS employee training',
    git: 'https://github.com/Xiao753463/yjs-employee-training-course-backend',
    subtitle: '員工訓練系統',
    description: `裕珍馨 YJS 員工訓練系統是一個專門設計用來管理員工資料、權限設定、以及教育訓練的綜合平台。
        整體系統界面簡潔明瞭，採用多卡片佈局形式，讓使用者能輕鬆瀏覽與操作各模組功能。右側提供了操作按鈕，供管理者進行關鍵操作如新增、編輯或刪除資料，系統並設有即時更新的功能，確保管理者掌握最新的員工資訊及訓練進度。
        此系統整合了從人員基本資料到訓練成績的完整管理流程，提升了企業在人力資源培訓上的效率和準確性。
        `,
    work: '模組後端API開發、MySQL資料庫建構、系統功能整合',
    images: [`00.png`, `01.png`, '02.png', '03.png', '04.png', '05.png'],
    tech: ['商業接案', 'HTML', 'CSS', 'Flask', 'SQL'],
  },
  {
    id: 2,
    category: 'Unity',
    title: 'RAKUTOU KART',
    subtitle: 'Unity 單機多人賽車遊戲',
    description: `RAKUTOU 賽車遊戲，可最多四人單機共遊，遊戲內有三個關卡、多台賽車、電腦玩家、甩尾、道具系統等支援最多四位玩家進行本地多人遊玩。玩家可以選擇各具特色的賽車，在三個精心設計的賽道中競速。遊戲內建 AI 電腦玩家，為玩家提供不同的難度挑戰。甩尾系統增添了遊戲的技巧性，讓玩家能在彎道上展現高超的駕駛技術。
        遊戲的道具系統讓比賽更加激烈，玩家可以收集道具來攻擊對手或防禦自己，使賽事瞬息萬變，充滿競爭樂趣。每個賽道都有獨特的風格、地形與障礙設計，提供多樣的遊玩體驗。此外，遊戲還具備精美的畫面效果和流暢的物理運算，讓玩家享受沉浸式的賽車體驗。`,
    work: 'Unity 遊戲功能設計、遊戲程式開發，Input System 實現單機多人邏輯',
    images: ['01.png', '02.png', '03.png', '04.png', '05.png'],
    tech: ['商業接案', 'Unity', 'C#'],
  },
  {
    id: 3,
    category: 'Unity',
    title: '食力派對',
    subtitle: 'Unity Photon Fusion 連線多人派對遊戲',
    description: `這款以台灣特色美食為主題的多人彈幕射擊派對遊戲，不僅融合了趣味性與競技性，還巧妙地結合了營養均衡的重要性。玩家可以扮演各種台灣經典美食角色，如珍珠奶茶、肉粽、蚵仔煎等，並通過獲取「適量營養素」來提升角色的能力。然而，遊戲中特別設計了一個教育性機制：如果玩家攝取的營養素過量，角色能力將會受到負面影響，反映出營養失衡對身體的不良影響。例如，攝取過多的脂肪或糖分會導致角色移動變慢，反應變遲鈍，甚至在面對對手攻擊時變得更脆弱。
遊戲的核心玩法是彈幕射擊，玩家需要靈活操控角色，利用射擊和戰術將對手擊飛出競技場，並成為最後倖存者。在這過程中，玩家需要不斷尋找適量的營養素來維持最佳狀態，避免攝取過量導致負面效果。這一機制不僅增加了遊戲的戰略深度，也讓玩家在競技的同時，學習到如何掌控營養攝取的平衡。
此外，遊戲內建的 AI 電腦玩家經過精心訓練，能夠模擬不同難度的真實玩家行為，為單人或多人對戰增添挑戰與變數。AI 玩家也會根據營養攝取狀況做出相應的調整，進一步強化了遊戲的教育性和競技樂趣。
這款遊戲的場景設計充滿了台灣美食的獨特文化氛圍，從角色外觀到道具設置，都深具台灣風味。整體氛圍輕鬆活潑，畫面精美，讓玩家在享受刺激對戰的同時，潛移默化地學習到如何正確攝取營養、避免過量攝取帶來的健康問題。這是一款適合朋友間快速對戰的遊戲，同時也是推廣健康飲食理念的創新教育工具。`,
    work: 'Unity 遊戲功能設計、遊戲程式開發，使用 Photon Fusion 實現多人連線邏輯，並運用ML Agent 訓練機器人玩家，利用強化學習的概念讓機器人在訓練過程中逐步進步，適應遊戲環境與戰略。',
    images: ['foodfighter.png', '02.png', '03.png', '04.png'],
    tech: ['大學畢業專題', 'Unity', 'Photon Fusion', 'C#'],
  },
  {
    id: 4,
    category: 'APP',
    title: 'VocaVibe 即時英文紀錄助手',
    subtitle: '手機APP',
    description: `「VocaVibe」是一款即時英文記錄助手，旨在解決人們在聽英文授課、演講或對話時的理解困難，結合了錄音、逐字稿和英漢字典功能。用戶在錄音的同時，能夠自動生成逐字稿，並對不懂的部分進行即時標記，便於後續查找和複習。
        此外，該系統還內建英漢字典，方便用戶隨時查詢不懂的詞彙，並提供單字收藏庫來幫助用戶強化詞彙記憶。這款產品的目標群體包括學生、研究生，以及經常參與國際會議的專業人士。`,
    work: '模組後端API開發、MySQL資料庫建構、系統功能整合',
    images: ['work04.png', '02.png', '03.png', '04.png', '05.png'],
    tech: ['課堂專案', 'Flutter', 'Dart', 'SQL'],
  },
  {
    id: 7,
    category: 'APP',
    title: '拳王',
    git: 'https://github.com/Xiao753463/CSharp-Mediapipe-RPS-Game',
    subtitle: '線上連線 ✖ 電腦視覺 ✖ 猜拳遊戲',
    description: `本專案結合多種技術，打造創新且直覺的遊戲體驗，提供操作流暢、視覺友好的平台，讓玩家能輕鬆上手並享受沉浸式互動。
✅ 直覺式人機互動介面
➡ 採用 C# Windows Forms 開發遊戲界面，提供流暢的操作體驗與友善的視覺設計，使玩家能快速適應遊戲環境。
✅ 手勢辨識技術 – 無接觸互動
➡ 整合 Python 的手勢辨識模組，運用 電腦視覺技術 即時偵測玩家手勢，突破傳統按鍵限制，實現自然、直觀的操作方式，提升遊戲沉浸感。
✅ 多人連線對戰 – 即時競技
➡ 為了提升遊戲的社交與競爭性，專案支援 多人連線對戰，透過 Socket (UDP) 傳遞即時數據，確保玩家在低延遲的環境下享受流暢的競技體驗，與好友或全球玩家同場較勁。
✅ 競技排行榜 – 激發挑戰動力
➡ 遊戲內建 排行榜機制，透過 MSSQL 儲存玩家的對戰紀錄與成績，讓玩家即時查看排名、追蹤自身進步，並與其他玩家競爭，增強持續遊玩的動機。
本專案充分運用 C#、Python、電腦視覺與網路通訊技術，結合直覺互動與多人連線競技，為玩家帶來全新的遊戲體驗。
`,
    work: '模組後端API開發、MySQL資料庫建構、系統功能整合',
    images: ['PRS.png', '猜拳.webp', '02.png', '03.png', '04.png'],
    tech: [
      '課堂專案',
      'C#',
      'Python',
      'MSSQL',
      'Socket UDP',
      'Computer Vision',
    ],
  },
  {
    id: 5,
    category: 'APP',
    title: '錢包助手',
    subtitle: 'C# Window Form 專案',
    description: `錢包助手，旨在幫助用戶方便地管理日常開銷。用戶可以通過記帳功能記錄各種消費項目，輸入項目名稱、金額，以及為每個項目選擇一個類別，如「飲食」、「日常用品」等。此外，系統還支持添加標籤，讓用戶能夠根據個人需求進行分類，方便後續檢索或整理。每個項目都可以附加備註，並記錄購買日期及到期日。
主要的界面展示了當月的花費總覽，讓用戶一目了然地了解當月的消費狀況，並且可以查看特定日期的詳細花費內容。除此之外，系統會對即將到期的項目發出提醒，幫助用戶不會錯過重要的到期日，從而更好地管理財務狀況。`,
    work: '模組後端API開發、MySQL資料庫建構、系統功能整合',
    images: ['work05.png', '02.png', '03.png', '04.png'],
    tech: ['課堂專案', 'C#', 'SQL'],
  },
  {
    id: 6,
    category: 'Web',
    title: '茶亭 Cha-Ting',
    subtitle: '網頁即時聊天室',
    description: `茶亭 Cha-Ting 是一款簡潔實用的網頁聊天室平台，專為想要快速、便捷進行即時溝通的使用者打造。平台提供了一個自由、靈活的聊天室系統，讓使用者能夠依照需求輕鬆創建和加入各種聊天室。
在 Cha-Ting 上，使用者可以自行創建聊天室，並根據具體需求設置不同的選項。例如，聊天室的創建者可以選擇是否為聊天室設定密碼，這讓使用者能夠控制進入聊天室的權限，確保私密性和安全性。同時，創建者還可以決定聊天室是否要在平台大廳顯示。如果選擇隱藏聊天室，那麼該聊天室將不會出現在大廳中，只有知道房間密碼的使用者才能手動輸入密碼加入，進一步保障私密聊天的需求。
Cha-Ting 平台的大廳功能則提供了公開聊天室的列表，讓使用者能夠快速找到並加入公開的聊天室。每個聊天室都可以自由加入，使平台充滿了社群互動的活力。對於不需要特別私密的聊天室，顯示在大廳中的聊天室為使用者提供了一個即時交流的空間，方便結識新朋友或是與熟人快速開啟對話。`,
    work: '模組後端API開發、MySQL資料庫建構、系統功能整合',
    images: ['Cha-Ting.png', '02.png', '03.png', '04.png', '05.png'],
    tech: [
      '課堂專案',
      'HTML',
      'CSS',
      'javascript',
      'Node.js',
      'Socket.io',
      'Firebase',
    ],
  },

  // 更多作品
]
