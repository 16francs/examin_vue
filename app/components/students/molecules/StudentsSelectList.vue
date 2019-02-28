<template>
  <students-panel data-test="panel">
    <students-panel-block
      v-for="(answer, index) in answers"
      :key="index"
      :index="index"
      :text="answer"
      data-test="panel-block"
      @select="select(index)"
    />
  </students-panel>
</template>

<script>
import StudentsPanelBlock from '~/components/students/atoms/StudentsPanelBlock'
import StudentsPanel from '~/components/students/atoms/StudentsPanel'

export default {
  components: { StudentsPanel, StudentsPanelBlock },
  props: {
    answers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    select(index) {
      this.$emit('select', index)
    }
  }
}
</script>
