<template>
  <div class="form">
    <h4 class="form-title">テスト情報</h4>

    <the-radio
      v-for="radio in data"
      :key="radio"
      :value="radio"
      v-model="value.count"
      name="count"
    >
      {{ radio }}問
    </the-radio>
  </div>
</template>

<script>
import TheRadio from '~/components/common/atoms/TheRadio'

export default {
  components: {
    TheRadio
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {
          count: '20'
        }
      }
    }
  },

  data() {
    return {
      data: ['20', '30', '50']
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
}
</style>
