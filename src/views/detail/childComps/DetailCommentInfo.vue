<template>
    <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
        <div class="comment-title">
            <span class="left">用户评价</span>
            <span class="right">更多</span>
        </div>
        <div class="comment-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <div class="comment-content">{{commentInfo.content}}</div>
        <div class="comment-params">
            <span class="comment-time">{{commentInfo.created | getTime}}</span>
            <span>{{commentInfo.style}}</span>
        </div>
        <div class="comment-imgs">
            <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index">
        </div>
    </div>
</template>

<script>
import {formatDate} from 'common/utils'

export default {
    name: 'DetailComment',
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        getTime(value) {
            // 1、转换成date对象
            const date = new Date(value * 1000)
            // 2、转换时间格式
            return formatDate(date,'yyyy-MM-dd hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.detail-comment {
    padding: 20px 10px;
    border-bottom: solid 10px #efefef;
}
.comment-title {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #efefef;
}
.comment-title .left {
    font-size: 14px;
}
.comment-title .right {
    font-size: 13px;
}
.comment-user {
    display: flex;
    align-items: center;
    padding: 10px 0;
}
.comment-user img {
    width: 17%;
    border-radius: 50%;
    margin-right: 10px;
}
.comment-user span {
    font-size: 16x;
    /* height: 40px; */   
}
.comment-content {
    font-size: 14px;
    color: gray;
    height: 30px;
}
.comment-params {
    font-size: 14px;
    color: #999;
    height: 35px;
    line-height: 35px;
}
.comment-time {
    margin-right: 10px;
}
.comment-imgs img{
    width: 100px;
}
</style>