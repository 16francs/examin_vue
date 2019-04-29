<template>
  <section class="section">
    <students-result-panel
      :results="results"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentsResultPanel from '~/components/students/molecules/StudentsResultPanel'

export default {
  components: { StudentsResultPanel },
  layout: 'students/default',
  computed: {
    ...mapGetters({
      results: 'students/achievements/results'
    })
  }
}
</script>
