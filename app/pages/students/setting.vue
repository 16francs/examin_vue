<template>
  <div class="hero-body">
    <students-setting-card
      v-if="!isEditing"
      @click="showEditForm"
    />
    <student-setting-edit-form
      v-if="isEditing"
      @doEdit="doEdit"
    />
  </div>
</template>

<script>
import StudentsSettingCard from '~/components/students/molecules/StudentsSettingCard'
import StudentSettingEditForm from '~/components/students/organisms/StudentSettingEditForm'
export default {
  components: { StudentSettingEditForm, StudentsSettingCard },
  layout: 'students/default',
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    showEditForm() {
      console.log('form open')
      this.isEditing = true
    },
    doEdit() {
      console.log('編集処理')
    }
  }
}
</script>
