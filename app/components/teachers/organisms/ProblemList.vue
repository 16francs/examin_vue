<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div
        v-for="problem in problems"
        :key="problem.id"
        class="column is-12-mobile is-6-tablet is-4-desktop">
        <ProblemCard :problem="problem" />
      </div>
    </div>
  </div>
</template>

<script>
import ProblemCard from '~/components/teachers/organisms/ProblemCard'

export default {
  components: {
    ProblemCard
  },

  data() {
    return {
      problems: [
        {
          id: 1,
          title: '問題集タイトル1',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        },
        {
          id: 2,
          title: '問題集タイトル2',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        },
        {
          id: 3,
          title: '問題集タイトル3',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        },
        {
          id: 4,
          title: '問題集タイトル4',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        },
        {
          id: 5,
          title: '問題集タイトル5',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        },
        {
          id: 6,
          title: '問題集タイトル6',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        },
        {
          id: 7,
          title: '問題集タイトル7',
          content: '問題集概要',
          teacher_id: 1,
          created_at: '2019/01/01 00:00:00',
          updated: '2019/01/01 00:00:00'
        }
      ]
    }
  }
}
</script>
