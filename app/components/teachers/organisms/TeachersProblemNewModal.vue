<template>
  <the-modal
    :active="active"
    submit="作成する"
    title="問題集作成"
    @close="doClose"
    @submit="doSubmit"
  >
    <section class="modal-card-body">
      <teachers-problem-form v-model="problem" />
    </section>
  </the-modal>
</template>

<script>
import { mapActions } from 'vuex'
import TheModal from '~/components/common/atoms/TheModal'
import TeachersProblemForm from '~/components/teachers/molecules/TeachersProblemForm'

export default {
  components: {
    TeachersProblemForm,
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
      // 問題登録
      this.createProblem({
        problem: this.problem
      })
        .then(() => {
          // 成功時の処理
          this.doClose()
        })
        .catch(() => {
          console.log('log:', 'error')
        })
    },
    ...mapActions('teachers/problems', ['createProblem'])
  }
}
</script>
