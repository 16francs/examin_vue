<template>
  <nav :class="type">
    <div class="navbar-brand">
      <div class="navbar-item is-info">
        <Icon
          icon="lead-pencil"
        />
        <span>examin</span>
      </div>
    </div>
  </nav>
</template>

<script>
import Icon from '~/components/common/atoms/Icon'
export default {
  name: 'Navbar',
  components: { Icon },
  props: {
    type: {
      type: String,
      default: 'navbar is-info'
    }
  }
}
</script>

<style scoped>
</style>
