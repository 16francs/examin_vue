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
      v-model="formData.school"
      label="学校名"
      data-test="schoolName"
    />
    <the-text-field
      v-model="formData.login_id"
      label="ログインID"
      data-test="login_id"
    />
    <the-alert
      :error="error"
      message="入力値に誤りがあります"
    />
    <the-submit-button
      color="info"
      text="編集"
      @submit="doSubmit"
    />
    <the-button
      @click="cancel"
    >
      戻る
    </the-button>
  </the-card-hard>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheTextField from '~/components/common/atoms/TheTextField'
import TheSubmitButton from '~/components/common/molecules/TheSubmitButton'
import TheCardHard from '~/components/common/atoms/TheCardHard'
import TheCardHeader from '~/components/common/molecules/TheCardHeader'
import TheButton from '~/components/common/atoms/TheButton'
import TheAlert from '~/components/common/atoms/TheAlert'

export default {
  name: 'StudentUserEditForm',
  components: {
    TheAlert,
    TheButton,
    TheCardHeader,
    TheCardHard,
    TheTextField,
    TheSubmitButton
  },
  data() {
    return {
      formData: {
        name: '',
        school: '',
        login_id: ''
      },
      error: false
    }
  },
  computed: {
    ...mapGetters({
      student: 'students/students/student'
    })
  },
  mounted() {
    this.formData.name = this.student.name
    this.formData.school = this.student.school
    this.formData.login_id = this.student.login_id
  },
  methods: {
    async doSubmit() {
      await this.edit({
        user: {
          name: this.formData.name,
          school: this.formData.school,
          login_id: this.formData.login_id
        }
      })
        .then(() => {
          this.$emit('edit')
        })
        .catch(() => {
          this.error = true
        })
    },
    cancel() {
      this.$emit('cancel')
    },
    ...mapActions({
      edit: 'students/students/editStudent'
    })
  }
}
</script>
