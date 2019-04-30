<template>
  <div class="questions-upload">
    <h4>Excelテンプレートをアップロード</h4>

    <the-field
      class="file"
      data-test="form-upload"
    >
      <the-upload-field
        :loading="isLoading"
        accept=".xlsx"
        @upload="doUpload"
      >
        <a class="button is-primary">
          <the-icon icon="upload" />
          <span>Click to upload</span>
        </a>
      </the-upload-field>

      <span
        v-if="fileName"
        class="file-name"
      >
        {{ fileName }}
      </span>
    </the-field>    
  </div>
</template>

<script>
import TheField from '~/components/common/atoms/TheField'
import TheIcon from '~/components/common/atoms/TheIcon'
import TheUploadField from '~/components/common/atoms/TheUploadField'

export default {
  components: {
    TheField,
    TheIcon,
    TheUploadField
  },

  props: {
    fileName: {
      type: String,
      default: ''
    }
  },

  computed: {
    isLoading() {
      return this.fileName != ''
    }
  },

  methods: {
    doUpload({ file }) {
      this.$emit('upload', { file: file })
    }
  }
}
</script>
