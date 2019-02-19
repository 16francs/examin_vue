<template>
  <b-field
    :label="label"
    :type="labelColor"
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
      data-test="tag-input"
      icon="label"
    >
      <slot />
    </b-taginput>
  </b-field>
</template>

<script>
export default {
  props: {
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
    labelType: {
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
    formSize() {
      return this.size === '' ? '' : `is-${this.size}`
    },
    // success, error, info, warning
    labelColor() {
      return this.labelType === '' ? '' : `is-${this.labelType}`
    },
    // white, black, light, dark,
    // primary, info, success, warning, danger
    tagType() {
      return this.type === '' ? '' : `is-${this.type}`
    }
  }
}
</script>
