<template>
  <label class="radio">
    <input
      :name="name"
      :value="value"
      :checked="value === select"
      type="radio"
      @change="$emit('change', $event.target.value)"
    />
    <slot />
  </label>
</template>

<script>
export default {
  model: {
    prop: 'select',
    event: 'change'
  },

  props: {
    name: {
      type: String,
      default: 'radio'
    },
    select: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
