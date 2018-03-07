<template>
  <div id="app">
    <!-- <v-header></v-header> -->
    <router-view/>
  </div>
</template>

<script>
import vHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    vHeader,
  },
}
</script>

<style>
</style>
