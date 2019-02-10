<template>
  <the-modal
    :active="active"
    submit="作成する"
    title="問題集作成"
    @close="doClose"
    @submit="doSubmit"
  >
    <section class="modal-card-body">
      <h4 class="form-title">問題集情報</h4>

      <the-text-field
        :value="problem.title"
        label="タイトル"
        placeholder="英単語テスト"
      />

      <the-text-field
        :value="problem.content"
        label="概要"
        placeholder="日本語 → 英語"
      />

      <b-field label="タグ">
        <b-taginput
          :value="problem.tags"
          ellipsis
          icon="label"
        />
      </b-field>
    </section>
  </the-modal>
</template>

<script>
import TheModal from '~/components/common/atoms/TheModal'
import TheTextField from '../../common/atoms/TheTextField'

export default {
  components: {
    TheTextField,
    TheModal
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      problem: {
        title: '',
        content: '',
        tags: []
      }
    }
  },

  methods: {
    doClose() {
      this.$emit('close')
    },

    doSubmit() {
      console.log('log:', 'create')
      // TODO: 問題登録

      // 成功時の処理
      this.doClose()
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
}
</style>
