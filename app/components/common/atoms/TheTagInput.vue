<template>
  <b-field
    :label="label"
    :type="labelAlert"
  >
    <b-taginput
      :allow-new="allowNew"
      :attached="attached"
      :autocomplete="autocomplete"
      :closable="closable"
      :ellipsis="ellipsis"
      :maxlength="maxlength"
      :maxtags="maxtags"
      :placeholder="placeholder"
      :rounded="rounded"
      :size="formSize"
      :type="tagType"
      v-model="value"
      icon="label"
    >
      <slot />
    </b-taginput>
  </b-field>
</template>

<script>
export default {
  props: {
    alert: {
      type: String,
      default: ''
    },
    allowNew: {
      type: Boolean,
      default: false
    },
    attached: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 15
    },
    maxtags: {
      type: Number,
      default: 7
    },
    placeholder: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  computed: {
    // small, medium, large
    formSize: function() {
      return this.size === '' ? '' : `is-${this.size}`
    },
    // success, error, info, warning
    labelAlert() {
      return this.alert === '' ? '' : `is-${this.alert}`
    },
    // white, black, light, dark,
    // primary, info, success, warning, danger
    tagType() {
      return this.type === '' ? '' : `is-${this.type}`
    }
  }
}
</script>
