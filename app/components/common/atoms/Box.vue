<template>
  <div class="box">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    title: {
      type: String,
      default: 'テスト'
    },
    content: {
      type: String,
      default: 'コンテンツ'
    }
  }
}
</script>
