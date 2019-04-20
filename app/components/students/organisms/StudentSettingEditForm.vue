<template>
  <the-card-hard>
    <the-card-header
      slot="header"
      title="生徒情報編集"
    />
    <the-text-field
      v-model="formData.name"
      label="名前"
      data-test="name"
    />

    <the-text-field
      v-model="formData.schoolName"
      label="学校名"
      data-test="schoolName"
    />

    <the-submit-button
      color="info"
      text="編集"
      @submit="doSubmit"
    />
  </the-card-hard>
</template>

<script>
import TheTextField from '~/components/common/atoms/TheTextField'
import TheSubmitButton from '~/components/common/molecules/TheSubmitButton'
import TheCardHard from '~/components/common/atoms/TheCardHard'
import TheCardHeader from '../../common/molecules/TheCardHeader'

export default {
  name: 'StudentSettingEditForm',
  components: {
    TheCardHeader,
    TheCardHard,
    TheTextField,
    TheSubmitButton
  },
  data() {
    return {
      formData: {
        name: '',
        schoolName: ''
      }
    }
  },
  methods: {
    doSubmit() {
      this.$emit('doEdit')
    }
  }
}
</script>
