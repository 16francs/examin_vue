<template>
  <students-panel data-test="panel">
    <students-panel-block-hard
      v-for="(result, index) in results"
      :key="result.question_id"
      :index="index"
      :text="result.result ? '正解': '不正解'"
      data-test="panel-hard-block"
    />
  </students-panel>
</template>

<script>
import StudentsPanel from '~/components/students/atoms/StudentsPanel'
import StudentsPanelBlockHard from '~/components/students/atoms/StudentsPanelBlockHard'

export default {
  name: 'StudentsResultPanel',
  components: { StudentsPanelBlockHard, StudentsPanel },
  props: {
    results: {
      type: Array,
      default: () => []
    }
  }
}
</script>
