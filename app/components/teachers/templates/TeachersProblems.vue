<template>
  <div>
    <div class="title">
      <span>問題集一覧</span>

      <teachers-new-button
        class="right"
        data-test="problem-new-button"
        @new="doNew"
      />
    </div>

    <teachers-problem-search data-test="problem-search" />
    <hr />
    <teachers-problem-list data-test="problem-list" />
  </div>
</template>

<script>
import TeachersNewButton from '../molecules/TeachersNewButton'
import TeachersProblemList from '~/components/teachers/organisms/TeachersProblemList'
import TeachersProblemSearch from '~/components/teachers/organisms/TeachersProblemSearch'

export default {
  components: {
    TeachersNewButton,
    TeachersProblemList,
    TeachersProblemSearch
  },

  methods: {
    doNew() {
      console.log('log:', 'new')
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}
</style>
