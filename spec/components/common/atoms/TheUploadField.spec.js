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
      })
    })
  })
})
