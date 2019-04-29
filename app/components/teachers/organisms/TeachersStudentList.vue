<template>
  <the-table>
    <teachers-student-table-header slot="header" />

    <teachers-student-table-body
      v-for="(student, index) in students"
      :key="student.id"
      :index="index + 1"
      :student="student"
    />
  </the-table>
</template>

<script>
import { mapGetters } from 'vuex'
import TeachersStudentTableBody from '~/components/teachers/molecules/TeachersStudentTableBody'
import TeachersStudentTableHeader from '~/components/teachers/molecules/TeachersStudentTableHeader'
import ThePagination from '~/components/common/atoms/ThePagination'
import TheTable from '~/components/common/atoms/TheTable'

export default {
  components: {
    TeachersStudentTableBody,
    TeachersStudentTableHeader,
    ThePagination,
    TheTable
  },

  computed: {
    ...mapGetters('teachers/students', ['students'])
  }
}
</script>
