<template>
  <div
    class="tile is-ancestor"
    data-test="user-edit"
  >
    <div class="tile is-vertical box">
      <div class="tile is-parent">
        <div class="title">ユーザー情報編集</div>
      </div>

      <teachers-user-edit-form />
    </div>
  </div>
</template>

<script>
import TeachersUserEditForm from '~/components/teachers/organisms/TeachersUserEditForm'

export default {
  components: {
    TeachersUserEditForm
  }
}
</script>

<style scoped>
.title {
  font-size: 5vh;
}
</style>
