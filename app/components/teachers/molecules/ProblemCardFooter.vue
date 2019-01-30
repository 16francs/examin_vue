<template>
  <footer class="card-footer">
    <a class="card-footer-item">
      <Tooltip label="詳細">
        <Icon icon="info-circle" />
      </Tooltip>
    </a>

    <a class="card-footer-item">
      <Tooltip label="編集">
        <Icon icon="edit" />
      </Tooltip>
    </a>

    <a class="card-footer-item">
      <Tooltip label="削除">
        <Icon icon="trash-alt" />
      </Tooltip>
    </a>
  </footer>
</template>

<script>
import Icon from '~/components/common/atoms/Icon'
import Tooltip from '~/components/common/atoms/Tooltip'

export default {
  components: {
    Icon,
    Tooltip
  }
}
</script>
