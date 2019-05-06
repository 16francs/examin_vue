<template>
  <teachers-user-edit />
</template>

<script>
import TeachersUserEdit from '~/components/teachers/templates/TeachersUserEdit'

export default {
  layout: 'teachers/default',

  components: {
    TeachersUserEdit
  },

  async fetch({ store }) {
    await store.dispatch('getUser').catch(() => {
      console.log('status:', '401')
    })
  }
}
</script>
