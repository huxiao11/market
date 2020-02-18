<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"/>
        <scroll class="content" ref="scroll">
            <detail-swiper :top-images="topImages" 
                            v-if="topImages.length"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo"
                                @imgLength = "imgLength"/>
            <detail-params-info :param-info="paramInfo"/>
            <detail-comment-info :comment-info="commentInfo"/>
            <goods-list :goods="recommendInfo"/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
        </scroll>
    </div>
</template>

<script>
// 引入组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'


// 引入公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

// 引入数据
import {getDetail, Goods, Shop, GoodsParams, getRecommends} from '@/network/detail'

export default {
    name: "Detail",
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommendInfo: []
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        Scroll,
        GoodsList
    },
    methods: {
        imgLength() {
            this.$refs.scroll.refresh();
        }
    },
    created() {
        // 1、保存传入放入iid
        this.iid = this.$route.params.iid;

        // 2、根据iid请求详情页数据
        getDetail(this.iid).then(res => {
            // 2.1、获取顶部轮播图图片
            console.log(123, res);
            const data = res.result;
            this.topImages = data.itemInfo.topImages;
            
            // 2.2、获取详情页商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

            // 2.3、获取详情页店铺信息
            this.shop = new Shop(data.shopInfo);

            // 2.4、获取详情页商品信息
            this.detailInfo = data.detailInfo;

            // 2.5、获取参数信息
            this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);

            // 2.6、获取评论信息
            if (data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0];
            }
        })

        // 3、获取推荐页数据
        getRecommends().then(res => {
            console.log(222, res);
            const datas = res.data;

            // 3.1 获取推荐数据
            this.recommendInfo = datas.list
        })
    }
}
</script>

<style scoped>
/* 隐藏tabbar */
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
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