<template>
  <div>
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
import StudentsAchievementsCard from '~/components/students/molecules/StudentsAchievementsCard'
import TheBox from '../../common/atoms/TheBox'
export default {
  name: 'StudentsAchievementsCardList',
  components: { TheBox, StudentsAchievementsCard },
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
