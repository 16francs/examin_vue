<template>
  <div class="content">
    <p>名前: <strong>{{ name }}</strong></p>
    <p>学校名: {{ school }}</p>
    <p>ログインID: {{ login_id }}</p>
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
    school: {
      type: String,
      default: 'テスト'
    },
    login_id: {
      type: String,
      default: 'test'
    }
  }
}
</script>
