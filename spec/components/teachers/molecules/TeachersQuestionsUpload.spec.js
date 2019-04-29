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
    describe('props', () => {
      describe('fileName', () => {
        test('fileNameの初期値', () => {
          expect(wrapper.props().fileName).toBe('')
        })

        test('fileNameに代入', () => {
          wrapper.setProps({ fileName: 'ファイル' })
          expect(wrapper.props().fileName).toBe('ファイル')
        })
      })
    })

    describe('computed', () => {
      describe('isLoading', () => {
        test('fileName == null', () => {
          expect(wrapper.vm.isLoading).toBeFalsy()
        })

        test('fileName != null', () => {
          wrapper.setProps({ fileName: 'ファイル' })
          expect(wrapper.vm.isLoading).toBeTruthy()
        })
      })
    })

    describe('methods', () => {
      describe('doUpload', () => {
        test('emitが実行されること', async () => {
          await wrapper.vm.doUpload({ file: { name: 'ファイル' } })
          expect(wrapper.emitted().upload).toBeTruthy()
        })
      })
    })
  })
})
