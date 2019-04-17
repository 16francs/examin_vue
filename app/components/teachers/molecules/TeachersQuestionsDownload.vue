<template>
  <div class="questions-download">
    <h4>Execテンプレートをダウンロード</h4>

    <the-button color="primary">
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
  }
}
</script>
