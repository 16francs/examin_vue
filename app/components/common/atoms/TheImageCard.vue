<template>
  <div class="card">
    <div class="card-image">
      <slot/>
    </div>
    <div class="card-content">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheImageCard',
  props: {
    title: {
      type: String,
      default: 'タイトル'
    },
    content: {
      type: String,
      default: 'コンテンツ'
    }
  }
}
</script>

<style scoped>
</style>
