<template>
  <div class="content">
    <p>名前： <strong>{{ name }}</strong></p>
    <p>学校名：{{ schoolName }}</p>
  </div>
</template>

<script>
export default {
  name: 'StudentsSettingContent',
  props: {
    name: {
      type: String,
      default: '山田太郎'
    },
    schoolName: {
      type: String,
      default: 'テスト'
    }
  }
}
</script>
