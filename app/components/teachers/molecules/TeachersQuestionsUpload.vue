<template>
  <div class="questions-upload">
    <h4>Excelテンプレートをアップロード</h4>

    <the-field class="file">
      <the-upload-field @upload="doUpload">
        <a class="button is-primary">
          <the-icon icon="upload" />
          <span>Click to upload</span>
        </a>
      </the-upload-field>

      <span
        v-if="file"
        class="file-name"
      >
        {{ file.name }}
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

  data() {
    return {
      file: null
    }
  },

  methods: {
    doUpload({ file }) {
      this.file = file
    }
  }
}
</script>
