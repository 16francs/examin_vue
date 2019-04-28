<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ teacher.name }}</td>
    <td>{{ teacher.school }}</td>
    <td>{{ isAdmin }}</td>
    <td>{{ teacher.login_id }}</td>
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
    teacher: {
      type: Object,
      default: () => {
        return {
          name: 'None',
          school: 'None',
          role: 1
        }
      }
    }
  },

  computed: {
    isAdmin() {
      return this.teacher.role === 2 ? '管理者' : '講師'
    }
  }
}
</script>
