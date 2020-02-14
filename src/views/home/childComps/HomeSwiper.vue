<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isLoad: false
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        imgLoad() {
            // isLoad默认加载4次，实际上只需要加载1次
            if (!this.isLoad) {
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
            
        }
    }
}
</script>