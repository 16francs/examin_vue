<template>
  <div
    :class="textColor, background"
    class="box"
  >
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'テスト'
    },
    content: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    textColor() {
      return this.color === '' ? '' : `has-text-${this.color}`
    },
    background() {
      return this.backgroundColor === ''
        ? ''
        : `has-background-${this.backgroundColor}`
    }
  }
}
</script>
