import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TheUploadField from '~/components/common/atoms/TheUploadField'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheUploadField', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TheUploadField, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('アップロードフォームが存在すること', () => {
      expect(wrapper.contains(content('upload'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('accept', () => {
        test('acceptの初期値', () => {
          expect(wrapper.props().accept).toBe('')
        })

        test('acceptに代入', () => {
          wrapper.setProps({ accept: '.xlsx' })
          expect(wrapper.props().accept).toBe('.xlsx')
        })
      })

      describe('loading', () => {
        test('loadingの初期値', () => {
          expect(wrapper.props().loading).toBeFalsy()
        })

        test('loadingに代入', () => {
          wrapper.setProps({ loading: true })
          expect(wrapper.props().loading).toBeTruthy()
        })
      })
    })

    describe('data', () => {
      test('file', () => {
        expect(wrapper.vm.file).toBeNull()
      })
    })

    describe('methods', () => {
      describe('handleUpload', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleUpload: mock })
          wrapper.vm.handleUpload()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async () => {
          await wrapper.vm.handleUpload()
          expect(wrapper.emitted().upload).toBeTruthy()
        })

        test('fileがnullになること', () => {
          wrapper.vm.handleUpload()
          expect(wrapper.vm.file).toBeNull()
        })
      })
    })
  })
})
