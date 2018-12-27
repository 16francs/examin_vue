<template>
  <b-field :label="label">
    <b-input
      :type="type"
      :value="value" />
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
  }
}
</script>
