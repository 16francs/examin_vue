<template>
  <footer
    class="card-footer"
    data-test="card-footer"
  >
    <the-card-footer-item @click="doShow">
      <the-tooltip label="詳細">
        <the-icon icon="info-circle" />
      </the-tooltip>
    </the-card-footer-item>


    <the-card-footer-item @click="doEdit">
      <the-tooltip label="編集">
        <the-icon icon="edit" />
      </the-tooltip>
    </the-card-footer-item>

    <the-card-footer-item @click="doDelete">
      <the-tooltip label="削除">
        <the-icon icon="trash-alt" />
      </the-tooltip>
    </the-card-footer-item>
  </footer>
</template>

<script>
import TheCardFooterItem from '../../common/atoms/TheCardFooterItem'
import TheIcon from '~/components/common/atoms/TheIcon'
import TheTooltip from '~/components/common/atoms/TheTooltip'

export default {
  components: {
    TheCardFooterItem,
    TheIcon,
    TheTooltip
  },

  methods: {
    doShow() {
      this.$emit('show')
    },

    doEdit() {
      console.log('log:', 'edit')
    },

    doDelete() {
      console.log('log:', 'delete')
    }
  }
}
</script>
