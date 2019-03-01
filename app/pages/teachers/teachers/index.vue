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

  async asyncData({ store }) {
    await store.dispatch('teachers/teachers/getTeachers').catch(response => {
      if (response.data.status === 401) {
        this.$emit('logout')
      }
    })
  }
}
</script>
