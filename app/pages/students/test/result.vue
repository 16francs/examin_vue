<template>
  <section class="section">
    <result-panel
      :results="results"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ResultPanel from '~/components/students/molecules/ResultPanel'
export default {
  components: { ResultPanel },
  layout: 'students/default',
  computed: {
    ...mapGetters({
      results: 'students/achievements/results'
    })
  }
}
</script>
