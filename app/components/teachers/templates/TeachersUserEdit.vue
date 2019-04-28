<template>
  <div
    class="tile is-ancestor"
    data-test="user-edit"
  >
    <div class="tile is-vertical box">
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
