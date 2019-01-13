<template>
  <Navbar :color="color">
    <NavBrand />
  </Navbar>
</template>

<script>
import Navbar from '~/components/common/atoms/Navbar'
import NavBrand from '~/components/common/molecules/NavBrand'

export default {
  components: {
    Navbar,
    NavBrand
  },

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
