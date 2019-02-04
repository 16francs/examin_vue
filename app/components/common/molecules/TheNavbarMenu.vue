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
        <the-button
          data-test="userEdit"
          @click="handleUserEdit"
        >
          <span>設定</span>
        </the-button>

        <the-button
          data-test="logout"
          @click="handleLogout"
        >
          <span>Logout</span>
        </the-button>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '~/components/common/atoms/TheButton'

export default {
  components: {
    TheButton
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
