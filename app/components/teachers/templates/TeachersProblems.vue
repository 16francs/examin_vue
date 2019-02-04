<template>
  <div>
    <div class="title">問題集一覧</div>
    <teachers-problem-search data-test="problem-search" />
    <hr />
    <teachers-problem-list data-test="problem-list" />
  </div>
</template>

<script>
import TeachersProblemList from '~/components/teachers/organisms/TeachersProblemList'
import TeachersProblemSearch from '~/components/teachers/organisms/TeachersProblemSearch'

export default {
  components: {
    TeachersProblemList,
    TeachersProblemSearch
  }
}
</script>
