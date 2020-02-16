<template>
    <div id="datail">
        <detail-nav-bar class="detail-nav"/>
        <scroll class="content">
            <detail-swiper :top-images="topImages" 
                            v-if="topImages.length"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
        </scroll>
    </div>
</template>

<script>
// 引入组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

// 引入公共组件
import Scroll from 'components/common/scroll/Scroll'

// 引入数据
import {getDetail, Goods, Shop} from '@/network/detail'

export default {
    name: "Detail",
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {}
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll
    },
    created() {
        // 1、保存传入放入iid
        this.iid = this.$route.params.iid

        // 2、根据iid请求详情页数据
        getDetail(this.iid).then(res => {
            // 1、获取顶部轮播图图片
            console.log(123, res)
            const data = res.result
            this.topImages = data.itemInfo.topImages
            
            // 2、获取详情页商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            // 3、获取详情页店铺信息
            this.shop = new Shop(data.shopInfo)
        })
    }
}
</script>

<style scoped>
/* 隐藏tabbar */
#detail {
    position: relative;
    z-index: 9;
    height: 100vh;
}

.detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
}

.content {
    height: calc(100% - 44px);
}
</style>