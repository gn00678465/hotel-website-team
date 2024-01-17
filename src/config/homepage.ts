export const aboutContent = [
  '享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。\n我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。',
  '我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。\n我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。',
  '在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。',
  '享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。',
];

const newsInfo: Record<string, string>[] = [
  {
    title: '秋季旅遊，豪華享受方案',
    describe:
      '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
  },
  {
    title: '輕鬆住房專案',
    describe:
      '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
  },
  {
    title: '耶誕快樂，住房送禮',
    describe:
      '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
  },
];

export function newsContent<T = Record<string, string>>() {
  const images = Object.values(
    import.meta.glob('/src/assets/images/homepage/news-[[:digit:]].{png,jpg,jpeg,PNG,JPEG}', {
      eager: true,
      as: 'url',
    }),
  );

  return images.map((image, idx) => ({ ...newsInfo[idx], image }) as T);
}

const foodInfo: Record<string, string>[] = [
  {
    name: '海霸',
    days: 'SUN-MON',
    time: '11:00 - 20:30',
    describe:
      '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。',
  },
  {
    name: '日食',
    days: 'SUN-MON',
    time: '17:00 - 22:00',
    describe:
      '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。',
  },
  {
    name: '山臻',
    days: 'SUN-MON',
    time: '11:30 - 20:30',
    describe:
      '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。',
  },
  {
    name: '月永',
    days: 'SUN-MON',
    time: '11:00 - 20:00',
    describe:
      '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。',
  },
  {
    name: '天潮',
    days: 'SUN-MON',
    time: '14:00 - 19:30',
    describe:
      '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。',
  },
];

export function foodContent<T = Record<string, string>>() {
  const images = Object.values(
    import.meta.glob('/src/assets/images/homepage/food-[[:digit:]].{png,jpg,jpeg,PNG,JPEG}', {
      eager: true,
      as: 'url',
    }),
  );

  return images.map((image, idx) => ({ ...foodInfo[idx], image }) as T);
}
