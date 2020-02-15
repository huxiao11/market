<template>
    <div id="datail">
        <detail-nav-bar/>
        <detail-swiper :top-images="topImages"/>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import {getDetail} from '@/network/detail'

export default {
    data() {
        return {
            iid: null,
            topImages: []
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper
    },
    created() {
        // 1、保存传入放入iid
        this.iid = this.$route.params.iid

        // 2、根据iid请求详情页数据
        getDetail(this.iid).then(res => {
            console.log(res)
            // 1、获取顶部轮播图图片
            this.topImages = res.result.itemInfo.topImages
        })
    }
}
</script>