<template>
  <div class="section">
    <teachers-teachers />
  </div>
</template>

<script>
import TeachersTeachers from '~/components/teachers/templates/TeachersTeachers'

export default {
  layout: 'teachers/default',

  components: {
    TeachersTeachers
  },

  async fetch({ store }) {
    await store.dispatch('teachers/teachers/getTeachers').catch(() => {
      console.log('status:', '401')
    })
  }
}
</script>
