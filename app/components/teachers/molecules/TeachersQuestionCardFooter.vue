<template>
  <footer
    class="card-footer"
    data-test="card-footer"
  >
    <the-card-footer-item @click="doTest">
      テスト作成
    </the-card-footer-item>

    <the-card-footer-item @click="doQuestions">
      問題出力
    </the-card-footer-item>
  </footer> 
</template>

<script>
import TheCardFooterItem from '~/components/common/atoms/TheCardFooterItem'

export default {
  components: {
    TheCardFooterItem
  },

  methods: {
    doQuestions() {
      this.$emit('questions')
    },

    doTest() {
      this.$emit('test')
    }
  }
}
</script>
