<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
        <div class="detail-info-desc">
            <div class="detail-goods-top"></div>
            <div class="detail-goods-center">{{detailInfo.desc}}</div>
            <div class="detail-goods-bottom"></div>
        </div>
        <P class="info-key">{{detailInfo.detailImage[0].key}}</P>
        <div class="info-list">
            <img v-for="(item, index) in detailInfo.detailImage[0].list" 
                :key="index" 
                :src="item"
                @load="imgLoad"
                 alt="">
        </div>
    </div>
</template>

<script>
export default {
   name: 'DetailGoodsInfo',
   props: {
       detailInfo: {
           type: Object,
           default() {
               return {}
           }
       }
   },
   data() {
       return {
           counter: 0,
           imgLength: 0
       }
   },
   methods: {
       imgLoad() {
        //判断是否加载完，只回调一次
        if (++this.counter === this.imgLength) {
            this.$emit('imgLength')
        }
       },
   },
   watch: {
        detailInfo() {
            return this.imgLength === this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
.detail-goods-top {
  position: relative;
  float: left;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.detail-goods-top::before {
  position: absolute;
  top: -4px;
  left: 0;
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: #333;
}
.detail-goods-bottom {
  position: relative;
  float: right;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.detail-goods-bottom::after {
  position: absolute;
  top: -4px;
  right: 0;
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: #333;
}
.detail-goods-info {
    padding: 20px 10px;   
    border-bottom: 5px solid #efefef;
}
.detail-goods-info p{
    margin: 15px 0;
    color: #333;
}
.detail-goods-center {
    padding: 15px 0;
    font-size: 12px;
}
.info-list img {
    width: 100%;
}
</style>