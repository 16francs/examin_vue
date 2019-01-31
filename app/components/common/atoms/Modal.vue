<template>
  <b-modal
    :active.sync="active"
    :has-modal-card="card"
    :width="width"
  >
    <header class="modal-card-head">
      <p class="modal-card-title">{{ title }}</p>
    </header>
    <slot />
    <footer class="modal-card-foot">
      <button
        class="button"
        data-test="cancel"
        @click="handleClose"
      >
        {{ cancel }}
      </button>
      <button
        class="button is-primary"
        data-test="submit"
        @click="handleSubmit"
      >
        {{ submit }}
      </button>
    </footer>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    active: {
      type: Boolean,
      default: false
    },
    card: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 960
    },
    cancel: {
      type: String,
      default: '閉じる'
    },
    submit: {
      type: String,
      default: '送信する'
    }
  },

  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleSubmit() {
      this.$emit('submit')
    }
  }
}
</script>
