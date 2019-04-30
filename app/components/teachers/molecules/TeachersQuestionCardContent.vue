<template>
  <div class="content">
    <div
      v-for="tag in tags"
      :key="tag"
      class="tag"
    >
      {{ tag }}
    </div>

    <div
      class="count"
      data-test="count"
    >
      問題数: {{ count }} 問
    </div>

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
    count: {
      type: Number,
      default: 0
    },
    tags: {
      type: Array,
      default: () => {
        return []
      }
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
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.tag {
  margin-right: 1vh;
  margin-bottom: 3vh;
}
</style>
