<template>
  <label class="b-radio radio">
    <input
      :name="name"
      :value="value"
      :checked="value === select"
      type="radio"
      @change="doChange($event.target.value)"
    />
    <span class="check" />
    <span class="control-label">
      <slot />
    </span>
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
  },

  methods: {
    doChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>
