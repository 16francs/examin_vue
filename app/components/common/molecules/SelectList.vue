<template>
  <div class="panel">
    <Select
      v-for="(answer, index) in answers"
      :key="index"
      :index="index"
      :text="answer"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Select from '../atoms/Select'
export default {
  name: 'SelectList',
  components: { Select },
  props: {
    answers: {
      type: Array,
      default: null
    }
  }
}
</script>
