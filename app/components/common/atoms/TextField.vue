<template>
  <b-field :label="label">
    <b-input
      :type="type"
      v-model="syncData"
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
    data: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },

  computed: {
    syncData: {
      get() {
        return this.data
      },
      set(val) {
        this.$emit('update', val)
      }
    }
  }
}
</script>
