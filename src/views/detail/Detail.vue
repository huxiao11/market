<template>
    <div id="datail">
        <detail-nav-bar/>
        <detail-swiper :top-images="topImages" 
                       v-if="topImages.length"/>
        <detail-base-info :goods="goods"/>
    </div>
</template>

<script>
// 引入组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'

// 引入数据
import {getDetail, Goods} from '@/network/detail'

export default {
    name: "Detail",
    data() {
        return {
            iid: null,
            topImages: [],
            goods: null
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo
    },
    created() {
        // 1、保存传入放入iid
        this.iid = this.$route.params.iid

        // 2、根据iid请求详情页数据
        getDetail(this.iid).then(res => {
            // 1、获取顶部轮播图图片
            console.log(res)
            const data = res.result
            this.topImages = data.itemInfo.topImages
            
            // 2、获取详情页商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        })
    }
}
</script>