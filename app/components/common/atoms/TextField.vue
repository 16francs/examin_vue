<template>
  <b-field
    :label="label"
    :type="labelAlert"
  >
    <b-input
      :disabled="disabled"
      :loading="loading"
      :placeholder="placeholder"
      :size="formSize"
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
    alert: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
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
    },
    // small, medium, large
    formSize: function() {
      return this.size === '' ? '' : `is-${this.size}`
    },
    // success, error, info, warning
    labelAlert() {
      return this.alert === '' ? '' : `is-${this.alert}`
    }
  }
}
</script>
