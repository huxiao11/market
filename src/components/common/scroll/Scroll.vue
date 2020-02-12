<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        // 1、创建better-scroll对象
        this.scroll = new BScroll (this.$refs.wrapper, {
            click: true,
            // 如果不使用设置会影响性能，用时传递即可
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        // 2、监听滚动的位置
        this.scroll.on('scroll', (position) => {
            // console.log(position)
            this.$emit('scroll', position)
        })
        console.log(this.scroll)
        // 解决滚动区域的bug，图片加载之前和加载之后的高度不同
        // this.scroll.refresh
    },
    methods: {
        // 滚动到指定的位置！！！！
        scrollTo(x, y, time = 300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        // 
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        //refresh封装
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>
.content {
    overflow: hidden;
}
</style>