<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div
        v-for="problem in problems"
        :key="problem.id"
        class="column is-12-mobile is-6-tablet is-4-desktop">
        <teachers-problem-card :problem="problem" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeachersProblemCard from '~/components/teachers/organisms/TeachersProblemCard'

export default {
  components: {
    TeachersProblemCard
  },

  computed: {
    ...mapGetters('teachers/problems', ['problems'])
  }
}
</script>
