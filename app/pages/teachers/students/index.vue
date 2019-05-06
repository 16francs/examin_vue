<template>
  <div class="section">
    <teachers-students />
  </div>
</template>

<script>
import TeachersStudents from '~/components/teachers/templates/TeachersStudents'

export default {
  layout: 'teachers/default',

  components: {
    TeachersStudents
  },

  async fetch({ store }) {
    await store.dispatch('teachers/students/getStudents').catch(() => {
      console.log('status:', '401')
    })
  }
}
</script>
