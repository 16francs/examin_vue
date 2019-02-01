<template>
  <the-navbar :color="color">
    <the-navbar-brand />
  </the-navbar>
</template>

<script>
import TheNavbar from '~/components/common/atoms/TheNavbar'
import TheNavbarBrand from '~/components/common/molecules/TheNavbarBrand'

export default {
  components: {
    TheNavbar,
    TheNavbarBrand
  },

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
