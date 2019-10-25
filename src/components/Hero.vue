<template>
  <div class="hero">
    <div class="hero-inner">
      <div class="row">
        <div class="col-12 col-xl-8">
          <div class="kv">
            <img src="../assets/img/greenpeace_plastic_kv_c.jpg" alt="無謂包裝超市卸裝" />
          </div>
          <div class="hero__text mt-4">
            <p>走進超市，映入眼簾的是各式各樣的貨品，以及鋪天蓋地的即棄塑膠包裝。貨架上的蔬菜、生果、麵包等，都被保鮮紙、膠兜、果網或發泡膠盤等即棄塑膠層層包裹。拆開這些無謂的包裝只須數秒，帶來的環境污染卻禍害深遠。</p>
            <p>
              調查發現
              <u>84%</u>的超市食物被無謂的即棄塑膠包裹著，當中
              <u>52%更由超市自行加上</u>。而分店數目最多的惠康，塑膠包裝使用率達82%；分店第二多的百佳達84%。另外，三間分店較少的品牌也不容忽視，City'super、AEON及一田的包膠率分別達82%及89%及99%。
            </p>
            <p>這不禁令人反思，這些包裝都是必須的嗎？香港每年有至少112噸塑膠包裝垃圾經河流流入海洋，超市中的大量即棄包裝正正就是重災區之一。濫用無謂包裝，不但會逼爆堆填區，更導致塑膠圍港。一旦塑膠垃圾經由河流進入大海，分裂成數以萬計的微塑膠，會危害海洋生態，更會透過食物鏈進入人體，威脅我們的健康。</p>
            <p class="text--green">
              <span class="hashtag">#無謂包裝</span>
              <span class="hashtag">#超市走塑</span>
              <span class="hashtag">#UnwrapOurGrocery</span>
            </p>
          </div>
          <div class="ask ask__supermarket">
            <h2 class="text--bggreen">立即聯署要求超市：</h2>
            <ul class="ask-list">
              <li>
                <p>
                  淘汰
                  <span
                    class="underline--dot"
                    v-b-popover.hover.topright="'無謂包裝，是指那些在貨物包裹的無必要用途、用完即棄的塑膠包裝。他們以一層或多層塑膠（如保鮮紙、發泡膠盤、膠袋）包裝蔬菜這些無謂包裝迫使消費者製造大量垃圾，污染環境、生態、食物鏈等多達千年以上時間，威脅人體健康。'"
                    variant="primary"
                  >無謂包裝</span>，提出具體走塑時間表，並定期公佈進度
                </p>
              </li>
              <li>
                <p>
                  設立
                  <span
                    class="underline--dot"
                    v-b-popover.hover.topright="'超市中的無塑購物區，擺放的貨品均沒有使用任何即棄塑膠包裝，店舖會以按樽制或自由斟等使用可重用包裝的方式銷售產品，顧客也可自備可重用器皿，按需要購買合適份量。'"
                    variant="primary"
                  >無塑購物區域</span>，及推出走塑優惠，鼓勵顧客使用可重用器皿
                </p>
              </li>
              <li>
                <p>進一步向供應商要求源頭走塑</p>
              </li>
            </ul>
          </div>
          <div class="ask ask__government">
            <h2 class="text--bggreen">我們亦要求政府：</h2>
            <ul class="ask-list">
              <li>
                <p>設立生產者責任制，從源頭管制即棄塑膠，包括塑膠包裝、即棄餐具、微膠珠等</p>
              </li>
              <li>
                <p>制訂走塑時間表，逐步禁用即棄及難以回收的塑膠產品，並向市民公布進度</p>
              </li>
              <li>
                <p>投放資源予社區教育及提供回收減廢設施，例如在街市設置自取站予人拿取環保袋及器皿等</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <Supermarket />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-xl-6">
          <h3 class="text--bggreen">什麼是無謂包裝？</h3>
          <p>無謂包裝是指預先以不必要、用完即棄的塑膠來包裝貨品，例如用一層或多層塑膠（如保鮮紙、發泡膠盤、膠袋）包裝蔬果、零食等，並能夠以其他方法（如: 產品重新設計、容許使用可重用器皿）取而代之。這些無謂包裝迫使消費者製造大量垃圾，污染環境、生態、食物鏈等多達千年以上時間。</p>
        </div>
        <div class="col-12 col-xl-6">
          <h3 class="text--bggreen">什麼是無塑購物區域？</h3>
          <p>該區域的貨品沒有使用任何即棄塑膠包裝，店舖會以按樽制收回及重用器皿，或讓顧客使用可重用器皿，按需要購買合適份量。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Supermarket from "@/components/Supermarket.vue";
export default {
  components: {
    Supermarket
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.text--green {
  color: $s-green !important;
}
.text--bggreen {
  display: inline-block;
  background: $s-green;
  color: #fff;
  padding: 4px 4px 4px 16px;
}

.hashtag {
  display: inline-block;
  margin-top: 2rem;
  margin-right: 16px;
  letter-spacing: normal;
}

.underline--dot {
  background-image: linear-gradient(to right, $s-green 50%, transparent 50%);
  background-position: left bottom;
  background-repeat: repeat-x;
  background-size: 6px 2px;
}
.hero {
  .hero-inner {
    padding: 16px;
  }
  h2 {
    font-size: 2rem;
    margin: 40px auto;
  }
  h3 {
    font-size: 1.6rem;
    margin: 20px auto;
  }
  p {
    color: rgba(0, 0, 0, 0.65);
    letter-spacing: 2px;
    text-align: justify;
    margin-bottom: 16px;
    u {
      color: $s-green;
    }
  }
}
.hero__title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    opacity: 0;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: $s-green;
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.25s ease-in-out;
    > span {
      width: 300px;
      display: flex;
      justify-content: space-around;
    }
  }
}

.kv {
  img {
    width: 100%;
    height: auto;
  }
}

.ask {
  h2 {
    display: inline-block;
    position: relative;
  }
  li {
    display: inline-block;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 10px;
    border-left: 1px solid $s-green;
    line-height: 2;
    p {
      margin: 0;
    }
  }
}
</style>
