<template>
  <div
    class="media"
  >
    <div class="media-left">
      <p class="image is-64x64">
        <slot name="left" />
      </p>
    </div>
    <div class="media-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMedia'
}
</script>
