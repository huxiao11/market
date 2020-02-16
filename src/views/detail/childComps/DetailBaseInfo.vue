<template>
    <div class="base-info" v-if="Object.keys(goods).length !== 0">
        <!-- 标题 -->
        <div class="info-title">{{goods.title}}</div>
        <!-- 价格 -->
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <!-- 快递信息-->
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length -1].name}}</span>
        </div>
        <!-- 服务信息 -->
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div> 
</template>

<script>
export default {
    name: "DetailBaseInfo",
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.base-info {
    margin-top: 10px;
    padding: 0 10px;
}
.info-title {
    color: #222;
    font-size: 16px;
}
.info-price {
    margin-top: 10px;
    position: relative;
}
.info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
}
.info-price .o-price {
    color: #999;
    font-size: 13px;
    margin-left: 5px;
    /* 穿过文本的线 */
    text-decoration: line-through;
}
.info-price .discount {
    background-color: var(--color-high-text);
    font-size: 6px;
    border-radius: 8px;
    color: #fff;
    margin-left: 10px;
    padding: 3px;
    position: absolute;
}
.info-other {
    display: flex;
    color: #999;
    font-size: 10px;
    margin-top: 15px;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding-bottom: 6px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 13px;
  color: #333;
  flex-wrap: wrap;
  border-bottom: solid 4px #efefef;
}
.info-service-item {
  display: flex;
  align-items: center;
}
.info-service-item img {
  width: 14px;
  height: 14px;
}
</style>