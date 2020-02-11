<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 
        此处技巧小结：
        1、写死之后维护性能不清，故用插槽，写成动态，在模版中定义slot，在使用时修改或扩展 
        2、slot插槽在使用模版时会被替换，替换之后原本的属性也会被直接替换，所以用div标签元素包裹slot插槽
           将设置的属性移动在div中，可以保持属性
    -->
    <!-- 活跃时显示的图片 -->
    <div v-if="!isActive" ><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
    <!-- 通过动态绑定样式 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>

    <!-- <img src="../../assets/img/tabbar/home.svg" alt />
    <div>首页</div> -->
  </div>
</template>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  /* margin-top: 3px; */
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* 去掉图片默认的3像素 */
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
    color: red
} */
</style>

<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: true,
        }
    },
    // 当谁活跃变红色的处理！！！！！固定写法，没达到真正封装
    computed:{
        // 1、固定写法
        isActive() {
            // 当当前活跃的路由路径包括点击的tabBarItem的路径时，则变红色
            return this.$route.path.indexOf(this.path) !== -1
        },
        // 2、动态绑定样式的写法
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : {}
        }
    },
    methods: {
        // 监听tabBarItem的点击事件
        itemClick() {
            // console.log('itemClick')
            this.$router.replace(this.path)
        }
    }
};
</script>