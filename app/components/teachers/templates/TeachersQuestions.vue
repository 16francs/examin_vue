<template>
  <div>
    <div class="title">
      <span>問題一覧</span>

      <the-button
        class="right"
        color="primary"
        @click="doNew"
      >
        <span>作成する</span>
      </the-button>
    </div>

    <the-table>
      <tr>
        <th>No.</th>
        <th>問題</th>
        <th>答え</th>
        <th />
      </tr>

      <tr
        v-for="(question, index) in questions"
        :key="question.id"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ question.sentence }}</td>
        <td>{{ question.correct }}</td>
        <td>
          <the-tooltip label="編集">
            <the-icon icon="edit" />
          </the-tooltip>
        </td>
      </tr>
    </the-table>
  </div>
</template>

<script>
import TheButton from '~/components/common/atoms/TheButton'
import TheIcon from '~/components/common/atoms/TheIcon'
import TheTable from '~/components/common/atoms/TheTable'
import TheTooltip from '~/components/common/atoms/TheTooltip'

export default {
  components: {
    TheButton,
    TheIcon,
    TheTable,
    TheTooltip
  },

  data() {
    return {
      questions: [
        {
          id: 1,
          sentence: 'read',
          correct: '読む'
        },
        {
          id: 2,
          sentence: 'work',
          correct: '働く'
        },
        {
          id: 3,
          sentence: 'do',
          correct: 'する'
        }
      ]
    }
  },

  methods: {
    doNew() {
      console.log('log:', 'new')
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}
</style>
