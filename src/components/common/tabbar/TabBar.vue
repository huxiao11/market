<template>
  <div id="tab-bar">
    <slot></slot>   
  </div>
</template>
<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 定位到底部 */
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  /* 上边框设置阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.5);
}

</style>

<script>
export default {
  name: 'Tabbar'
};
</script>