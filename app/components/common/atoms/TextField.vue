<template>
  <b-field :label="label">
    <b-input
      :type="type"
      v-model="formData"
    >
      <slot />
    </b-input>
  </b-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Name'
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },

  computed: {
    formData: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
