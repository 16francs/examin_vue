<template>
  <students-user-edit />
</template>

<script>
import StudentsUserEdit from '~/components/students/templates/StudentsUserEdit'

export default {
  components: { StudentsUserEdit },
  layout: 'students/default',
  // 生徒情報を取得する
  async asyncData({ store }) {
    await store.dispatch('students/students/getStudent').catch(() => {
      console.log('status:', '401')
    })
  }
}
</script>
