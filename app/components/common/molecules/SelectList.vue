<template>
  <div>
    <div
      v-for="index in answers"
      :key="index"
    >
      <Select
        :index="index"
        :text="answers[index]"
      />
    </div>
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
