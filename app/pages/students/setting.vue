<template>
  <div class="hero-body">
    <students-setting-card/>
  </div>
</template>

<script>
import StudentsSettingCard from '../../components/students/molecules/StudentsSettingCard'
export default {
  components: { StudentsSettingCard },
  layout: 'students/default'
}
</script>
