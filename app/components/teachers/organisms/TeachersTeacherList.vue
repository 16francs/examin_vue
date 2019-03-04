<template>
  <the-table>
    <teachers-teacher-table-header slot="header" />

    <teachers-teacher-table-body
      v-for="(teacher, index) in teachers"
      :key="teacher.id"
      :index="index + 1"
      :teacher="teacher"
    />
  </the-table>
</template>

<script>
import { mapGetters } from 'vuex'
import TeachersTeacherTableBody from '~/components/teachers/molecules/TeachersTeacherTableBody'
import TeachersTeacherTableHeader from '~/components/teachers/molecules/TeachersTeacherTableHeader'
import ThePagination from '~/components/common/atoms/ThePagination'
import TheTable from '~/components/common/atoms/TheTable'

export default {
  components: {
    TeachersTeacherTableBody,
    TeachersTeacherTableHeader,
    ThePagination,
    TheTable
  },

  computed: {
    ...mapGetters('teachers/teachers', ['teachers'])
  }
}
</script>
