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
            // 如果不使用设置会影响性能
            probeType: this.probeType,
        })
        // 2、监听滚动的位置
        this.scroll.on('scroll', (position) => {
            // console.log(position)
            this.$emit('scroll', position)
        })
    },
    methods: {
        // 滚动到指定的位置！！！！
        scrollTo(x, y, time = 300) {
            this.scroll.scrollTo(x, y, time)
        }
    }
}
</script>

<style scoped>
.content {
    overflow: hidden;
}
</style>