<template>
  <footer class="card-footer">
    <a class="card-footer-item">
      <the-tooltip label="詳細">
        <the-icon icon="info-circle" />
      </the-tooltip>
    </a>

    <a class="card-footer-item">
      <the-tooltip label="編集">
        <the-icon icon="edit" />
      </the-tooltip>
    </a>

    <a class="card-footer-item">
      <the-tooltip label="削除">
        <the-icon icon="trash-alt" />
      </the-tooltip>
    </a>
  </footer>
</template>

<script>
import TheIcon from '~/components/common/atoms/TheIcon'
import TheTooltip from '~/components/common/atoms/TheTooltip'

export default {
  components: {
    TheIcon,
    TheTooltip
  }
}
</script>
