<template>
  <span>User Edit</span>
</template>

<script>
export default {
  layout: 'teachers/default',

  async asyncData({ store }) {
    await store.dispatch('getUser').catch(() => {
      console.log('status:', '401')
    })
  }
}
</script>
