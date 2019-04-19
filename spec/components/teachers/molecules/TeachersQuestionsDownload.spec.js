import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionsDownload from '~/components/teachers/molecules/TeachersQuestionsDownload'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersQuestionsDownload', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TeachersQuestionsDownload, { localVue })
  })

  describe('template', () => {
    test('ボタンが存在すること', () => {
      expect(wrapper.contains('button')).toBeTruthy()
    })

    describe('ボタンクリック', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('ボタンクリックでhandleDownloadが呼ばれること', () => {
        wrapper.setMethods({ handleDownload: mock })
        wrapper.find('button').trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })

  describe('script', () => {
    describe('methods', () => {
      describe('handleDownload', () => {
        test('emitが正常に実行されること', async () => {
          await wrapper.vm.handleDownload()
          expect(wrapper.emitted().download).toBeTruthy()
        })
      })
    })
  })
})
