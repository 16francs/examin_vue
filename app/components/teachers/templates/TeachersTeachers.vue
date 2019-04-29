<template>
  <div>
    <teachers-teacher-new-modal
      :active="active"
      @close="doClose"
    />

    <div class="title">
      <span>講師一覧</span>

      <teachers-new-button
        class="right"
        data-test="teacher-new-button"
        @new="doNew"
      />
    </div>

    <teachers-teacher-list data-test="teacher-list" />
  </div>
</template>

<script>
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersTeacherList from '~/components/teachers/organisms/TeachersTeacherList'
import TeachersTeacherNewModal from '~/components/teachers/organisms/TeachersTeacherNewModal'

export default {
  components: {
    TeachersNewButton,
    TeachersTeacherList,
    TeachersTeacherNewModal
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
