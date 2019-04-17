<template>
  <div class="questions-upload">
    <h4>Excelテンプレートをアップロード</h4>

    <b-field class="file">
      <b-upload v-model="value">
        <a class="button is-primary">
          <b-icon icon="upload" />
          <span>Click to upload</span>
        </a>
      </b-upload>
      <span
        v-if="value"
        class="file-name"
      >
        {{ value.name }}
      </span>
    </b-field>    
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          name: ''
        }
      }
    }
  }
}
</script>
