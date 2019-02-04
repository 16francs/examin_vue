<template>
  <div class="content">

    <div class="tag">タグ</div>
    <div class="tag">タグ</div>
    <div class="tag">タグ</div>

    <div
      class="description"
      data-test="description"
    >
      {{ content }}
    </div>

    <div class="level">
      <div
        class="level-left"
        data-test="teacher-name"
      >
        @{{ teacherName }}
      </div>
      <div
        class="level-right"
        data-test="updated-at"
      >
        {{ updatedAt }}
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
      default: 'None'
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
