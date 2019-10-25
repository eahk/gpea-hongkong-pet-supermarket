<template>
  <div class="supermarket">
    <div class="greenline"></div>
    <div class="grid">
      <div
        class="store"
        v-for="store in supermarket"
        :key="store.name"
        v-b-popover.hover.top="`${store.name}`"
        variant="primary"
      >
        <img :src="store.icon" alt="store.name" class="img-fluid" v-on:click="pickStore(store)" />
      </div>
    </div>
    <div class="greenline"></div>
    <div id="site-visit" v-show="showPicked">
      <div class="store-img">
        <img :src="picked.image" alt="picked.name" class="img-fluid" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPicked: false,
      picked: {},
      supermarket: [
        {
          id: "wellcome",
          name: "惠康 Wellcome",
          icon: require("@/assets/img/supermarket/wellcome-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190430_113727.jpg")
        },
        {
          id: "parknshop",
          name: "百佳 ParknShop",
          icon: require("@/assets/img/supermarket/parknshop-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190424_103348.jpg")
        },
        {
          id: "aeon",
          name: "AEON",
          icon: require("@/assets/img/supermarket/aeon-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190502_105554.jpg")
        },
        {
          id: "citysuper",
          name: "city'super",
          icon: require("@/assets/img/supermarket/citysuper-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190502_105034.jpg")
        },
        {
          id: "fusion",
          name: "Fusion",
          icon: require("@/assets/img/supermarket/fusion-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190502_095637.jpg")
        },
        {
          id: "international",
          name: "International",
          icon: require("@/assets/img/supermarket/international-logo.jpg"),
          image: require("@/assets/img/supermarket/IMG_20190424_115558.jpg")
        },
        {
          id: "marketplacebyjasons",
          name: "Market Place by Jason's",
          icon: require("@/assets/img/supermarket/marketplace-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190424_115558.jpg")
        },

        {
          id: "taste",
          name: "Taste",
          icon: require("@/assets/img/supermarket/taste-logo.png"),
          image: require("@/assets/img/supermarket/IMG_20190503_122220.jpg")
        },

        {
          id: "yata",
          name: "一田 Yata",
          icon: require("@/assets/img/supermarket/yata-logo.jpg"),
          image: require("@/assets/img/supermarket/IMG_20190427_202621.jpg")
        }
      ]
    };
  },
  methods: {
    pickStore(store) {
      this.showPicked = false;
      this.picked = store;
      this.showPicked = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.supermarket {
  position: sticky;
  top: 16px;
}
.greenline {
  height: 1px;
  background: url("../assets/img/greenline.png") repeat-x 0 0;
  background-size: 800px 5px;
  background-position: left;
  padding: 2rem 0;
  opacity: 0.5;
}
.grid {
  position: relative;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
.store {
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  img {
    width: 100%;
    height: auto;
  }
  &:hover {
    transition: all 0.2s ease;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
}
.store-img {
  img {
    width: 100%;
  }
}
</style>


