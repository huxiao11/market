<template>
    <div class="shop-info">
        <!-- 顶部 -->
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>
        <!-- 中间 -->
        <div class="shop-middle">
            <!-- 中间左 -->
            <div class="shop-middle-left">
                <div class="shop-middle-left1">
                    <span>{{shop.sells}}万</span>
                    <p>总销量</p>
                </div>
                <div class="shop-middle-left2">
                    <span>{{shop.goodsCount}}</span>
                    <p>全部宝贝</p>
                </div>
            </div>
            <!-- 中间右 -->
            <div class="shop-middle-right">
                <div v-for="(item, index) in shop.score" :key="index"
                    class="right-item">
                    <span>{{item.name}}</span>
                    <span class="score" :class="{jscore: item.isBetter}">{{item.score}}</span>
                    <span class="better" :class="{jbetter: item.isBetter}">{{item.isBetter ? "高": "低"}}</span>
                </div>
            </div>
        </div>
        <div class="enter-shop">进店逛逛</div>
    </div>
</template>

<script>
export default {
    name: "DetailShopInfo",
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.score {
    color: green;
}
.better {
    background-color: green;
    color: #fff;
}
.jbetter {
    color: #fff;
    background-color: red;
}
.jscore {
    color: red;
}



.shop-info {
    margin-top: 20px;
    padding: 0 10px;
    border-bottom: 3px solid #efefef;
}
.shop-top {
    display: flex;
    height: 50px;
    font-size: 16px;
}
.shop-top img{
    width: 45px;    
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
}
.shop-top .title {
    flex: 1;
    line-height: 50px;
}
.shop-middle {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly
}
.shop-middle-left {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;   
    align-items: center;
    
}
.shop-middle-left1 {
    margin-right: 5px;
}
.shop-middle-left2 {
    padding-right: 20px;
    border-right: solid 1px #ccc;
}
.shop-middle-left span {
    color: black;
    font-size: 14px;
}
.shop-middle-left p {
    margin-top: 6px;
    font-size: 10px;
    font-weight: bolder;
}
.right-item {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
}
.shop-middle-right div:first-of-type {
    margin-top: 0;
}
.right-item span {
    font-size: 13px;
    margin-right: 10px;
}
.enter-shop {
    margin: 20px auto;
    width: 100px;
    height: 30px;
    background-color: #f2f5f8;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}
</style>