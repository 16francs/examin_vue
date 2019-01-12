<template>
  <b-collapse
    :open="isOpen"
    class="card"
    data-test="card"
  >
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header">
      <p
        class="card-header-title"
        data-test="card-title"
      >
        {{ title }}
      </p>
      <a class="card-header-icon">
        <b-icon
          :icon="icon"
        />
      </a>
    </div>
    <div class="card-content">
      <div
        class="content"
        data-test="card-content"
      >
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
  },
  computed: {
    icon() {
      return this.isOpen ? 'menu-down' : 'menu-up'
    }
  }
}
</script>
