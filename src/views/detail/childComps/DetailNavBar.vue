<template>
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div class="title" slot="center">
            <div 
                class="titleItem" 
                v-for="(item, index) in titles" 
                :key="index"
                :class="{active:index === currentIndex}"
                @click="titleClick(index)">
            {{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
 
export default {
    components: {
       NavBar 
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
        },
        backClick() {
            this.$router.back()
        }
     }
}
</script>

<style scoped>
.title {
    display: flex;
}
.titleItem {
    flex: 1;
    font-size: 13px;
}
.active {
    color: var(--color-high-text)
}
.back {
    margin-top: 6px;
}
</style>