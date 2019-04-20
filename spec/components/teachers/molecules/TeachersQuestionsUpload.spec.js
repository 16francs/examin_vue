import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionsUpload from '~/components/teachers/molecules/TeachersQuestionsUpload'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersQuestionsUpload', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestionsUpload, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('アップロードフォームが存在すること', () => {
      expect(wrapper.contains(content('form-upload')))
    })
  })

  describe('script', () => {
    describe('data', () => {
      test('file', () => {
        expect(wrapper.vm.file).toBeNull()
      })
    })

    describe('methods', () => {
      describe('doUpload', () => {
        test('正常に実行されること', async () => {
          await wrapper.vm.doUpload({ file: { name: 'ファイル' } })
          expect(wrapper.vm.file).toEqual({ name: 'ファイル' })
        })
      })
    })
  })
})
