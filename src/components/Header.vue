<template>
  <div class="header-container">
    <div class="btn-back">
      <i>&lt;</i>
    </div>
    <div class="title">
      <h3>我的预约看房</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
.header-container {
  .btn-back {
    color: red;
  }
}
</style>
