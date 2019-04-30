<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ student.name }}</td>
    <td>{{ student.school }}</td>
    <td>{{ student.login_id }}</td>
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
    student: {
      type: Object,
      default: () => {
        return {
          name: 'None',
          school: 'None',
          login_id: ''
        }
      }
    }
  }
}
</script>
