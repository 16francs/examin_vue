<template>
  <div class="card-content">
    <div class="content">

      <div class="tag">タグ</div>
      <div class="tag">タグ</div>
      <div class="tag">タグ</div>

      <div class="description">{{ content }}</div>

      <div class="level">
        <div class="level-left">@{{ teacherName }}</div>
        <div class="level-right">{{ updatedAt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    teacherName: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.description {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
