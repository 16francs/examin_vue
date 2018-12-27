<template>
  <b-field :label="label">
    <b-input
      :type="type"
      @:value="value"
      @:input="value = $event"
    />
  </b-field>
</template>

<script>
export default {
  name: 'Input',
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

<style scoped>
</style>
