<template>
  <the-card-hard>
    <the-card-header
      slot="header"
      title="生徒情報"
    />
    <the-media>
      <the-icon
        slot="left"
        icon="account"
        pack="mdi"
        size="medium"
      />
      <students-setting-content />
    </the-media>
    <footer
      slot="footer"
      class="card-footer"
    >
      <the-card-footer-item
        @click="click"
      >
        編集
      </the-card-footer-item>
    </footer>
  </the-card-hard>
</template>

<script>
import TheCardHard from '~/components/common/atoms/TheCardHard'
import TheCardHeader from '~/components/common/molecules/TheCardHeader'
import TheMedia from '~/components/common/atoms/TheMedia'
import TheIcon from '~/components/common/atoms/TheIcon'
import TheCardFooterItem from '~/components/common/atoms/TheCardFooterItem'
import StudentsSettingContent from '~/components/students/atoms/StudentsSettingContent'
export default {
  name: 'StudentsSettingCard',
  components: {
    StudentsSettingContent,
    TheCardFooterItem,
    TheIcon,
    TheMedia,
    TheCardHeader,
    TheCardHard
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>
