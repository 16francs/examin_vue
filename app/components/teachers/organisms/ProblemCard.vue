<template>
  <div class="card">
    <header class="card-header">
      <span class="card-header-title">{{ problem.title }}</span>
    </header>

    <div class="card-content">
      <div class="content">

        <div class="tag">タグ</div>
        <div class="tag">タグ</div>
        <div class="tag">タグ</div>

        <div class="description">{{ problem.content }}</div>

        <div class="level">
          <div class="level-left">@{{ problem.teacher_name }}</div>
          <div class="level-right">{{ problem.updated_at }}</div>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <span class="card-footer-item">
        <Tooltip label="詳細">
          <Icon icon="info-circle" />
        </Tooltip>
      </span>
      <span class="card-footer-item">
        <Tooltip label="編集">
          <Icon icon="edit" />
        </Tooltip>
      </span>
      <span class="card-footer-item">
        <Tooltip label="削除">
          <Icon icon="trash-alt" />
        </Tooltip>
      </span>
    </footer>
  </div>
</template>

<script>
import Icon from '~/components/common/atoms/Icon'
import Tooltip from '~/components/common/atoms/Tooltip'

export default {
  components: {
    Icon,
    Tooltip
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

<style scoped>
.description {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
