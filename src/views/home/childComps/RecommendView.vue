<template>
    <div class="recommend">
        <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: { 
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="less">
.recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: solid 8px #eee;
    .recommend-item {
        width: 100%;
        flex: 1;      
        img {
            width: 65px;
            height: 65px;
        }
    }
}

</style>
