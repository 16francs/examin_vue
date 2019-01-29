<template>
  <div class="card">
    <header class="card-header">
      <span class="card-header-title">{{ problem.title }}</span>
    </header>

    <div class="card-content">
      <div class="content">
        <div>{{ problem.content }}</div>

        <div>タグ</div>

        <span>{{ problem.updated_at }}</span>
        <span>@{{ problem.teacher_name }}</span>
      </div>
    </div>

    <footer class="card-footer">
      <span class="card-footer-item">
        <Icon icon="info-circle" />
      </span>
      <span class="card-footer-item">
        <Icon icon="edit" />
      </span>
      <span class="card-footer-item">
        <Icon icon="trash-alt" />
      </span>
    </footer>
  </div>
</template>

<script>
import Icon from '~/components/common/atoms/Icon'

export default {
  components: {
    Icon
  },

  props: {
    problem: {
      type: Object,
      default: () => {
        return {
          id: 0,
          title: '',
          content: '',
          teacher_name: '',
          updated_at: ''
        }
      }
    }
  }
}
</script>
