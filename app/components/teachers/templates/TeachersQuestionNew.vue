<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile is-vertical box">
        <div class="tile is-parent">
          <div class="title">問題一括登録</div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <h4>Execテンプレートをダウンロード</h4>
            <the-button color="primary">
              <the-icon icon="download">
                <span>ダウンロード</span>
              </the-icon>
            </the-button>
          </div>

          <div class="tile is-child box">
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

      <div class="tile is-vertical box">
        <div class="tile is-parent">
          <div class="title">問題登録</div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box form">
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

            <teachers-submit-button @submit="doSubmit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeachersSubmitButton from '~/components/teachers/molecules/TeachersSubmitButton'
import TheButton from '~/components/common/atoms/TheButton'
import TheIcon from '~/components/common/atoms/TheIcon'
import TheTextField from '~/components/common/atoms/TheTextField'

export default {
  components: {
    TeachersSubmitButton,
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
  },

  methods: {
    doSubmit() {
      console.log('log:', 'create')
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
}
</style>
