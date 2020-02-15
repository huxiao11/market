<template>
    <div id="datail">
        <detail-nav-bar/>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
    data() {
        return {
            iid: null
        }
    },
    components: {
        DetailNavBar
    },
    created() {
        this.iid = this.$route.params.iid
    }
}
</script>