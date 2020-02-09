<template>
    <div class="tab-control">
        <div class="tab-control-item" 
             :class="{active: index === currentIndex}"
             @click="itemClick(index)"
             v-for="(item, index) in titles" :key="index">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    line-height: 40px;   
}
.tab-control-item {
    flex: 1;
    height: 40px;
}
.active {
    color: var(--color-high-text);
}
.active span {
    padding-bottom: 5px;
    border-bottom: 3px solid var(--color-high-text);
}
</style>