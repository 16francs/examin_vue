<template>
  <div
    id="navMenu"
    class="navbar-menu"
  >
    <div class="navbar-start">
      <a
        v-for="(item, index) in list"
        :key="index"
        :href="item.link"
        class="navbar-item"
      >
        {{ item.label }}
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item buttons">
        <Button
          data-test="userEdit"
          @click="handleUserEdit"
        >
          <span>設定</span>
        </Button>

        <Button
          data-test="logout"
          @click="handleLogout"
        >
          <span>Logout</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/common/atoms/Button'

export default {
  components: {
    Button
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleUserEdit() {
      this.$emit('userEdit')
    },

    handleLogout() {
      this.$emit('logout')
    }
  }
}
</script>
