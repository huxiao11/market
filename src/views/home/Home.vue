<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="home-scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 注意：组件不能直接绑定点击事件！！！得通过.native属性绑定-->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

// 引入当前页面组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 引入请求数据
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      isShowTabControl: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 在created中拿到的scroll是空的，所以要在mounted中拿
  },

  mounted() {
    // 1、图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });

    // 2、获取tabControl的offsetTop,组件没有offsetTop的属性，
    // 所有组件都有$el的属性：用于获取组件中的元素
    // 在mounted中只是挂载，图片没加载出来，所以得更新后再获取offsetTop
  },
  methods: {
    /* 
        事件监听相关方法 
      */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
            this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // scroll的显示与隐藏
    contentScroll(position) {
      // 1、判断backTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2、决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop ? true : false;
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 图片加载
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 利用剩余参数法存储数据！！！
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //  完成上拉加载更多，否则只进行一次加载
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
/* 
  小结：
      给nav导航固定定位之后，nav导航脱离文档流，轮播图上部会被遮盖，
    此时给home主页设置padding-top，可让轮播图完全显示
*/
#home {
  /* vh：视口 */
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 10;
  /* 在使用浏览器 */
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9; */
}
/* 特殊设置：当滑动到距离顶部一定距离时，成为固定位置 */
.tab-control {
  position: relative;
  z-index: 9;
  /* position: sticky;
  top: 44px; */
}
/* 设置scroll滚动高度 */
.home-scroll {
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
/* .fixed {
  position: fixed;
  left: 0;
  top: 44px;
  right: 0;
} */
</style>

