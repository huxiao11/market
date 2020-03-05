<template>
   <div class="goods-item" @click="itemClick">
       <img :src="showImage" alt="" @load="imageLoad">
       <div class="goods-info">
           <p>{{goodsItem.title}}</p>
           <span class="price">¥{{goodsItem.price}}</span>
           <span class="collect">{{goodsItem.cfav}}</span>
       </div>
    </div> 
</template>

<script>
export default {
   props: {
       goodsItem: {
           type: Object,
            default() {
                return {}
            }
       }
   },
   computed: {
     showImage() {
       return this.goodsItem.image || this.goodsItem.show.img
     }
   },
   methods: {
    //  处理首页滚动bug，监听图片加载完毕
     imageLoad() {

      //  思路1
      //  if (this.$route.path.indexOf('/home')) {
      //     this.$bus.$emit('homeItemImageLoad')
      //  } else if (this.$route.path.indexOf('/detail')) {
      //     this.$bus.$emit('detailItemImageLoad')
      //  }

      this.$bus.$emit('itemImgLoad')
     },
     itemClick() {
       this.$router.push('/detail/' + this.goodsItem.iid)
     }
   }
}
</script>

<style>
  .goods-item {
    width: 48%!important;
    position: relative;
    padding-bottom: 40px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
    padding: 2px;
    height: 100%;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info span {
    margin: 0 10px;
  }
  .price {
    color: var(--color-high-text);
    height: 100%;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    position: absolute;
    left: -15px;
    top: -1px;
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>