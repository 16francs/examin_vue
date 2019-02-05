<template>
  <div>
    <div class="title">
      <span>講師一覧</span>

      <teachers-new-button
        class="right"
        @new="doNew"
      />
    </div>

    <teachers-teacher-list />
  </div>
</template>

<script>
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersTeacherList from '~/components/teachers/organisms/TeachersTeacherList'

export default {
  components: {
    TeachersNewButton,
    TeachersTeacherList
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
