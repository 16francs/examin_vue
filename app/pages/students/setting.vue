<template>
  <div class="hero-body">
    <students-setting-card
      v-if="!isEditing"
      :name="student.name"
      :school-name="student.school"
      @click="showEditForm"
    />
    <student-setting-edit-form
      v-if="isEditing"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      console.log('form open')
      this.isEditing = true
    },
    doEdit() {
      console.log('編集処理')
    },
    cancel() {
      this.isEditing = false
    }
  }
}
</script>
