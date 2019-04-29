<template>
  <div class="hero-body">
    <students-setting-card
      v-if="!isEditing"
      :name="student.name"
      :school="student.school"
      :login_id="student.login_id"
      @click="showEditForm"
    />
    <students-user-edit-form
      v-if="isEditing"
      @edit="edit"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StudentsSettingCard from '~/components/students/molecules/StudentsSettingCard'
import StudentsUserEditForm from '~/components/students/organisms/StudentsUserEditForm'

export default {
  name: 'StudentsUserEdit',
  components: { StudentsUserEditForm, StudentsSettingCard },
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
