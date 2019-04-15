<template>
  <div class="columns is-mobile is-multiline">
    <div class="column is-12">

      <div class="title">問題一括登録</div>
      <div class="columns is-mobile is-multiline">
        <div class="column is-12-mobile is-12-tablet is-6-desktop">
          <h4>Execテンプレートをダウンロード</h4>
          <the-button color="primary">
            <the-icon icon="download">
              <span>ダウンロード</span>
            </the-icon>
          </the-button>
        </div>

        <div class="column is-12-mobile is-12-tablet is-6-desktop">
          <h4>Excelテンプレートをアップロード</h4>
          <b-field class="file">
            <b-upload v-model="file">
              <a class="button is-primary">
                <b-icon icon="upload" />
                <span>Click to upload</span>
              </a>
            </b-upload>
            <span
              v-if="file"
              class="file-name"
            >
              {{ file.name }}
            </span>
          </b-field>
        </div>
      </div>
    </div>

    <hr />

    <div class="column is-12">
      <div class="title">問題登録</div>

      <div class="form">
        <h4 class="form-title">問題情報</h4>

        <the-text-field
          v-model="value.sentence"
          data-test="form-sentence"
          label="問題"
          placeholder="read"
        />

        <the-text-field
          v-model="value.correct"
          data-test="form-correct"
          label="答え"
          placeholder="読む"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '~/components/common/atoms/TheButton'
import TheIcon from '~/components/common/atoms/TheIcon'
import TheTextField from '../../common/atoms/TheTextField'

export default {
  components: {
    TheTextField,
    TheButton,
    TheIcon
  },

  data() {
    return {
      file: null,
      value: {
        sentence: '',
        correct: ''
      }
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
}
</style>
