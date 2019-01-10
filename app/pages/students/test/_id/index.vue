<template>
  <AnswerForm/>
</template>

<script>
import Box from '../../../../components/common/atoms/Box'
import SelectList from '../../../../components/common/molecules/SelectList'
import Select from '../../../../components/common/atoms/Select'
import AnswerForm from '../../../../components/students/organisms/AnswerForm'
export default {
  components: { AnswerForm, Select, SelectList, Box },
  layout: 'students/default',
  async asyncData({ store, route }) {
    const { id } = route.params
    await store.dispatch('students/questions/getRandomQuestions', {
      accessToken: store.getters['accessToken'],
      problemId: id
    })
  }
}
</script>
