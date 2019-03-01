<template>
  <div class="section">
    <teachers-problems />
  </div>
</template>

<script>
import TeachersProblems from '~/components/teachers/templates/TeachersProblems'

export default {
  layout: 'teachers/default',

  components: {
    TeachersProblems
  },

  async asyncData({ store }) {
    await store.dispatch('teachers/problems/getProblems').catch(response => {
      if (response.data.status === 401) {
        this.$emit('logout')
      }
    })
  }
}
</script>
