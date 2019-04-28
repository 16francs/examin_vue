<template>
  <div class="hero-body">
    <students-setting-card
      v-if="!isEditing"
      :name="student.name"
      :school="student.school"
      :login_id="student.login_id"
      @click="showEditForm"
    />
    <student-setting-edit-form
      v-if="isEditing"
      @edit="edit"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StudentsSettingCard from '~/components/students/molecules/StudentsSettingCard'
import StudentSettingEditForm from '~/components/students/organisms/StudentSettingEditForm'

export default {
  components: { StudentSettingEditForm, StudentsSettingCard },
  layout: 'students/default',
  // 生徒情報を取得する
  async asyncData({ store }) {
    await store.dispatch('students/students/getStudent').catch(() => {
      console.log('status:', '401')
    })
  },
  data() {
    return {
      isEditing: false
    }
  },
  computed: {
    ...mapGetters({
      student: 'students/students/student'
    })
  },
  methods: {
    showEditForm() {
      this.isEditing = true
    },
    edit() {
      this.update()
      this.isEditing = false
      this.$toast.open({
        message: 'ユーザー情報を編集しました.',
        type: 'is-success'
      })
    },
    cancel() {
      this.isEditing = false
    },
    ...mapActions({
      update: 'students/students/getStudent'
    })
  }
}
</script>
