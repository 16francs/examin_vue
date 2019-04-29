<template>
  <div>
    <teachers-student-new-modal
      :active="active"
      @close="doClose"
    />

    <div class="title">
      <span>講師一覧</span>

      <teachers-new-button
        class="right"
        data-test="student-new-button"
        @new="doNew"
      />
    </div>

    <teachers-student-list data-test="teacher-list" />
  </div>
</template>

<script>
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersStudentList from '~/components/teachers/organisms/TeachersStudentList'
import TeachersStudentNewModal from '~/components/teachers/organisms/TeachersStudentNewModal'

export default {
  components: {
    TeachersNewButton,
    TeachersStudentList,
    TeachersStudentNewModal
  },

  data() {
    return {
      active: false
    }
  },

  methods: {
    doNew() {
      this.active = true
    },

    doClose() {
      this.active = false
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}
</style>
