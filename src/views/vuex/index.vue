<template>
  <div>
    <div>vuex中state最简单用法：{{$store.state.count}}</div>
    <div>一般情况是在computed中使用：{{count}}</div>
    <div>
      <span>mutations的使用方式：</span>
      <button @click="handleIncrement"> + 1 </button>
      <span>{{count}}</span>
      <button @click="handleDecrease"> - 2 </button>
    </div>
    <div>过滤过的列表是：{{filteredList}}</div>
    <div><button @click="handleAction">异步操作</button></div>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count;
    },
    filteredList () {
      return this.$store.getters.filteredList;
    },
  },
  methods: {
    handleIncrement () {
      this.$store.commit('increment');
    },
    handleDecrease () {
      this.$store.commit('decrease', 2);
    },
    handleAction () {
      this.$store.dispatch('increment').then(msg => {
        console.log(msg);
      });
    },
  }
}
</script>
