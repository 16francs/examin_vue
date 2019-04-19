<template>
  <div class="questions-download">
    <h4>Execテンプレートをダウンロード</h4>

    <the-button
      color="primary"
      @click="handleDownload"
    >
      <the-icon icon="download">
        <span>ダウンロード</span>
      </the-icon>
    </the-button>
  </div>
</template>

<script>
import TheButton from '~/components/common/atoms/TheButton'
import TheIcon from '~/components/common/atoms/TheIcon'

export default {
  components: {
    TheButton,
    TheIcon
  },

  methods: {
    handleDownload() {
      this.$emit('download')
    }
  }
}
</script>
