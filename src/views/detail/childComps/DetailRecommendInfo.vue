<template>
    <div class="detail-recommend">
      <div class="recommend-title">热门推荐</div>
      <goods-list :goods-list="recommendInfo"/>
    </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'DetailRecommendInfo',
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList
  } 
}
</script>