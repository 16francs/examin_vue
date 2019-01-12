<template>
  <Panel>
    <PanelBlock
      v-for="(answer, index) in answers"
      :key="index"
      :index="index"
      :text="answer"
      @select="select(index)"
    />
  </Panel>
</template>

<script>
import PanelBlock from '~/components/students/atoms/PanelBlock'
import Panel from '~/components/students/atoms/Panel'
export default {
  name: 'SelectList',
  components: { Panel, Select },
  props: {
    answers: {
      type: Array,
      default: null
    }
  },
  methods: {
    select(index) {
      this.$emit('select', index)
    }
  }
}
</script>
