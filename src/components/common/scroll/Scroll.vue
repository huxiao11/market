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
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll (this.$refs.wrapper, {
        })
        //回到顶部所要调用的方法
        this.scroll.scrollTo(0, 0)
    },
    methods: {
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