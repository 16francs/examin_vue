<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div
        v-for="problem in problems"
        :key="problem.id"
        class="column is-12-mobile is-6-tablet is-4-desktop">
        <ProblemCard :problem="problem" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProblemCard from '~/components/teachers/organisms/ProblemCard'

export default {
  components: {
    ProblemCard
  },

  computed: {
    ...mapGetters('teachers/problems', ['problems'])
  }
}
</script>
