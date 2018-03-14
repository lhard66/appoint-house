<template>
  <span>{{msg}}</span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'vuex-advance',
  data () {
    return {
      msg: 'vuex高级用法',
      students: ['jim', 'lucy', 'tom'],
    }
  },
  computed: {
    // 类似的map方法还有 mapState, mapGetters, mapActions 和 mapMutations，详细见Module章节。
    ...mapGetters([
      'getList'
    ]),
    getStudents () {
      return this.students;
    },
  }
}
</script>
