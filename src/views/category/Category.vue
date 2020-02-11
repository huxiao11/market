<template>
  <div class="wrapper" ref="aaa">
    <div class="content">
      <!-- 1、无论是否设置click：false， button都可以点击 -->
      <button>按钮点击</button>
      <!-- 2、必须设置click：true， div才能被点击监听 -->
      <div @click="divClick">div点击</div>
    </div>
  </div>
</template>

<script>
/*
  局部滚动～方式2
    使用better-scroll组件解决移动端滚动时卡顿问题
    注意事项：挂载模版必须在mounted生命周期里使用
  */
import BScorll from "better-scroll";

export default {
  data() {
    return {
      scroll: null
    };
  },
  created() {
    console.log(BScorll);
  },
  mounted() {
    // '.wrapper'代表最外层包裹标签的类名
    (this.scroll = new BScorll(document.querySelector(".wrapper"), {
      probeType: 3
    })),
      // 监听滚动时的位置
      this.scroll.on("scroll", position => {
        console.log(position);
      });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    // 监听滚动内容里的btn按钮
    btnClick() {
      console.log("btnClick");
    }
  }
};
</script>

<style lang="less" scoped>
/* 
  局部滚动～方式1
    1、设置确定具体高度
    2、scroll-y 
    缺点：属于原生滚动，在移动端会非常卡顿
*/

.wrapper {
  height: 100px;
  background-color: cyan;
  overflow: hidden;
  // overflow-y: scroll;
}
</style>