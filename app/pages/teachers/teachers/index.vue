<template>
  <div class="section">
    <teachers-teachers />
  </div>
</template>

<script>
import TeachersTeachers from '~/components/teachers/templates/TeachersTeachers'
export default {
  layout: 'teachers/default',

  components: {
    TeachersTeachers
  }
}
</script>
