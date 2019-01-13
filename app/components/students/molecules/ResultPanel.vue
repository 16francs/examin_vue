<template>
  <panel data-test="panel">
    <panel-hard-block
      v-for="(result, index) in results"
      :key="result.question_id"
      :index="index"
      :text="result.result ? '正解': '不正解'"
      data-test="panel-hard-block"
    />
  </panel>
</template>

<script>
import Panel from '~/components/students/atoms/Panel'
import PanelHardBlock from '~/components/students/atoms/PanelHardBlock'

export default {
  name: 'ResultPanel',
  components: { PanelHardBlock, Panel },
  props: {
    results: {
      type: Array,
      default: () => []
    }
  }
}
</script>
