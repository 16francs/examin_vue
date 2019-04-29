<template>
  <div data-test="answered-problem">
    <a @click="click(answeredProblem.id)">
      <the-card-header
        slot="header"
        :title="formattedTitle"
      />
    </a>
  </div>
</template>

<script>
import TheCardHeader from '~/components/common/molecules/TheCardHeader'

export default {
  name: 'StudentsAnsweredProblemCard',
  components: { TheCardHeader },
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
  },
  methods: {
    click(id) {
      this.$router.push(`/students/achievements/about/${id}`)
    }
  }
}
</script>
