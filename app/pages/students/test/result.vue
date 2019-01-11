<template>
  <div>
    {{ results.length }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'students/default',
  computed: {
    ...mapGetters({
      results: 'students/achievements/results'
    })
  }
}
</script>
