<template>
  <div class="card-content">
    <div
      class="content"
      data-test="card-content"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCardContent',
  props: {
    content: {
      type: String,
      default: 'コンテンツ'
    }
  }
}
</script>
