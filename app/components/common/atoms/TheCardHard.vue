<template>
  <b-collapse class="card">
    <slot name="header" />

    <div class="card-content">
      <slot />
    </div>

    <slot name="footer" />
  </b-collapse>
</template>

<script>
export default {
  name: 'TheCardHard'
}
</script>
