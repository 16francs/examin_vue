<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ question.sentence }}</td>
    <td>{{ question.correct }}</td>
    <td>
      <the-tooltip label="編集">
        <the-icon icon="edit" />
      </the-tooltip>
    </td>
  </tr>
</template>

<script>
import TheIcon from '~/components/common/atoms/TheIcon'
import TheTooltip from '~/components/common/atoms/TheTooltip'

export default {
  components: {
    TheIcon,
    TheTooltip
  },

  props: {
    index: {
      type: Number,
      default: 0
    },
    question: {
      type: Object,
      default: () => {
        return {
          sentence: 'None',
          correct: 'None'
        }
      }
    }
  }
}
</script>
