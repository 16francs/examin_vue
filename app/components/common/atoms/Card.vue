<template>
  <b-collapse
    :open="isOpen"
    class="card">
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
      <a class="card-header-icon">
        <b-icon
          :icon="isOpen ? 'menu-down' : 'menu-up'"
        />
      </a>
    </div>
    <div class="card-content">
      <div class="content">
        {{ content }}
      </div>
    </div>
    <footer class="card-footer">
      <slot/>
    </footer>
  </b-collapse>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'タイトル'
    },
    content: {
      type: String,
      default: 'コンテンツ'
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>
