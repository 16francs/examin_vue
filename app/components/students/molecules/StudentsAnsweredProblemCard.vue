<template>
  <nuxt-link
    :to="{path: '/students/achievements/about/' + answeredProblem.id}"
  >
    <the-card-header
      slot="header"
      :title="formattedTitle"
    />
  </nuxt-link>
</template>

<script>
import TheCardHard from '~/components/common/atoms/TheCardHard'
import TheCardHeader from '~/components/common/molecules/TheCardHeader'
export default {
  name: 'StudentsAnsweredProblemCard',
  components: { TheCardHeader, TheCardHard },
  props: {
    answeredProblem: {
      type: Object,
      default() {
        return {
          id: -1,
          created_at: '2000-11-11'
        }
      }
    }
  },
  computed: {
    formattedTitle() {
      return this.answeredProblem.created_at + 'の記録'
    }
  }
}
</script>
