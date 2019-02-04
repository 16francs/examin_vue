<template>
  <header class="card-header">
    <span
      class="card-header-title"
      data-test="title"
    >
      {{ title }}
    </span>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
