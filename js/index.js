// For G's 5th assignment: Map app using API
// Initialize and add the map
// let map;

async function initMap() {
  // Request needed libraries.
  // To use info window and pin element
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement,PinElement } = await google.maps.importLibrary("marker");

  // The map, centered at Tokyo Tower
  const map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 35.65872866544349, lng: 139.74536315887647 },
    mapId: "WORLD_ATTRACTION_MAP",
  });

  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    {
      position: { lat: 35.65872866544349, lng: 139.74536315887647 },
      title: "Tokyo Tower 東京タワー"
    },
    {
      position: { lat: 48.858539480890364, lng: 2.2949694590002316 },
      title: "Tour Eiffel エッフェル塔"
    },
    {
      position: { lat: 66.53994378982719, lng: 25.812172054333324 },
      title: "Santa Park サンタクロースの住むところ"
    },
    {
      position: { lat: 40.432282226263816, lng: 116.57164714835756 },
      title: "Great Wall of China 万里の長城"
    },
    {
      position: { lat: 35.36135952778539, lng: 138.72907995586334 },
      title: "Mt. Fuji 富士山"
    },
    {
      position: { lat: -13.226121902144815, lng: -72.49696745279724 },
      title: "Machu Picchu マチュ・ピチュ"
    },
    {
      position: { lat: -25.34487697137077, lng: 131.0341403214908 },
      title: "Uluru エアーズ・ロック"
    },
    {
      position: { lat: 43.09118184658634, lng: -60.73985134009506 },
      title: "Statue of Liberty 自由の女神像"
    },
    {
      position: { lat: 47.62065813536591, lng: -122.3481616041407 },
      title: "Space Needle スペースニードル"
    },
    {
      position: { lat: 36.77642593023005, lng: -110.9347689001663 },
      title: "Grand Canyon グランド・キャニオン"
    },
    {
      position: { lat: -22.95167887197319, lng: -43.2096771770874 },
      title: "Cristo Redentor コルコバードのキリスト像"
    },
    {
      position: { lat: -49.29104664778631, lng:-73.08625100806576 },
      title: "Cerro Torre チェロ・トーレ"
    },
    {
      position: { lat: 35.17055977818349, lng: -5.266174856272072 },
      title: "Chefchaouen シェフシャウエン"
    },
    {
      position: { lat: -27.124863333995158, lng: -109.27428915107556 },
      title: "Моаї モアイ像 イースター島"
    },
    {
      position: { lat: -77.84452623698475, lng: 166.6724027480307 },
      title: "McMurdo Station マクマード基地"
    },
    {
      position: { lat: 27.991283721216448, lng: 86.93355248160597 },
      title: "Mount Everest エベレスト山"
    },
    {
      position: { lat: -41.259909995304405, lng: 176.03045603223035 },
      title: "Mount Cook アオラキ山"
    },
    {
      position: { lat: 37.82121106775189, lng: -122.47508063557525 },
      title: "Golden Gate Bridge ゴールデン・ゲート・ブリッジ"
    },
    {
      position: { lat: 64.41533727969592, lng: -19.97232352061385 },
      title: "Þingvellir National Park シンクヴェトリル国立公園"
    },
    {
      position: { lat: 48.71991912550844, lng: 109.73545474734712 },
      title: "Gorkhi-Terelj National Park テレルジ国立公園"
    },
    {
      position: { lat: 43.72312255050552, lng: 10.397036878936454 },
      title: "Torre di Pisa ピサの斜塔"
    },
    {
      position: { lat: 51.47702670982957, lng: -0.0000710494585588484 },
      title: "Royal Observatory Greenwich グリニッジ天文台"
    },
    {
      position: { lat: -23.9881887349958, lng: 31.555652146856165 },
      title: "Kruger National Park クルーガー国立公園"
    },
    {
      position: { lat: 25.197449384430488, lng: 55.27509522785587 },
      title: "Burj Khalifa ブルジュ・ハリファ"
    },
    {
      position: { lat: 21.27617936982965, lng: -157.82746911958398 },
      title: "Waikīkī Beach ワイキキ海岸"
    },
    {
      position: { lat: 29.979402809430095, lng: 31.134633749467692 },
      title: "Pyramid of Khufu クフ王のピラミッド"
    },
    {
      position: { lat: 27.176061071004444, lng: 78.04478149353349 },
      title: "Taj Mahal タージ・マハル"
    },
    {
      position: { lat: 45.97776434389653, lng: 7.664717343061362 },
      title: "Matterhorn マッターホルン"
    },
    {
      position: { lat: -3.0656245378056775, lng: 37.360862688512626 },
      title: "Mount Kilimanjaro キリマンジャロ"
    },
    {
      position: { lat: 1.617963063468414, lng: 32.28153722540666 },
      title: "Victoria Nile ビクトリアナイル川"
    },
    {
      position: { lat: -20.24935396474508, lng: 44.42513815927856 },
      title: "Baobab Avenue バオバブ・アベニュー"
    },
    {
      position: { lat: -34.35741359604411, lng: 18.478397724980866 },
      title: "Cape of Good Hope 喜望峰"




      
    },
    {
      position: { lat: 39.602721853405264, lng: -9.075164017503868 },
      title: "Nazaré ナザレ"
    },
    {
      position: { lat: 1.2868294331723646, lng: 103.85459237144117 },
      title: "Merlion マーライオン"
    },
    {
      position: { lat: 20.685886934757786, lng: -88.56469420214708 },
      title: "Chichén Itzá チチェン・イッツァ"
    },
    {
      position: { lat: 13.744088099281019, lng: 100.48925224074071 },
      title: "Wat Arun ワット・アルン"
    },
    {
      position: { lat: -20.2045911371559, lng: -67.58162610603875 },
      title: "Salar de Uyuni ウユニ塩原"
    },
    {
      position: { lat: 29.356982092547454, lng: 110.46182434327957 },
      title: "Zhangjiajie 張家界"
    },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },
    // {
    //   position: { lat: , lng: },
    //   title: "Great Wall of China"
    // },

  ];

  // Create an info window to share between markers.
  const infoWindow = new InfoWindow();

  // Create the markers.
  tourStops.forEach(({ position, title }, i) => {
    const pin = new PinElement ({
      glyph: `${i + 1}`,
    });
    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}.${title}`,
      content: pin.element,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  });
}

initMap();