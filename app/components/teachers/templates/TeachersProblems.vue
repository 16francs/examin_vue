<template>
  <div>
    <teachers-problem-new-modal
      :active="active"
      @close="doClose"
    />

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
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersProblemList from '~/components/teachers/organisms/TeachersProblemList'
import TeachersProblemNewModal from '~/components/teachers/organisms/TeachersProblemNewModal'
import TeachersProblemSearch from '~/components/teachers/organisms/TeachersProblemSearch'
import TheModal from '~/components/common/atoms/TheModal'

export default {
  components: {
    TeachersNewButton,
    TeachersProblemList,
    TeachersProblemNewModal,
    TeachersProblemSearch,
    TheModal
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
