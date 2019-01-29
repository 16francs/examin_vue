<template>
  <div>
    <div class="title">問題集一覧</div>
    <ProblemSearch />
    <hr />
    <ProblemList />
  </div>
</template>

<script>
import ProblemList from '~/components/teachers/organisms/ProblemList'
import ProblemSearch from '~/components/teachers/organisms/ProblemSearch'

export default {
  components: {
    ProblemList,
    ProblemSearch
  }
}
</script>
