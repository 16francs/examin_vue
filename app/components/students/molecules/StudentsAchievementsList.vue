<template>
  <div
    data-test="achievements-list"
  >
    <the-box
      v-for="achievement in achievements"
      :key="achievement.id"
      :title="achievement.question.sentence"
      :content="achievement.question.correct"
      :color="achievement.result ? '' : 'danger'"
    />
  </div>
</template>

<script>
import TheBox from '~/components/common/atoms/TheBox'

export default {
  name: 'StudentsAchievementsCardList',
  components: { TheBox },
  props: {
    achievements: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
