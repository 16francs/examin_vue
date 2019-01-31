<template>
  <div
    id="navMenu"
    :class="{ 'is-active': isActive }"
    class="navbar-menu"
  >
    <div class="navbar-start">
      <nuxt-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.link"
        class="navbar-item"
        @click.native="handleClick"
      >
        {{ item.label }}
      </nuxt-link>
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
  name: 'NavMenu',

  components: {
    Button
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleClick() {
      this.$emit('close')
    },
    handleUserEdit() {
      this.$emit('userEdit')
    },
    handleLogout() {
      this.$emit('logout')
    }
  }
}
</script>
