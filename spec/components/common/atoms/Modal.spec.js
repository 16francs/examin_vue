import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Modal from '~/components/common/atoms/Modal'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/Modal', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(Modal, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    beforeEach(() => {
      wrapper.setProps({ active: true })
    })

    describe('ボタン', () => {
      test('closeボタンが存在すること', () => {
        expect(wrapper.find(content('cancel'))).toBeTruthy()
      })

      test('submitボタンが存在すること', () => {
        expect(wrapper.find(content('submit'))).toBeTruthy()
      })
    })

    describe('ボタンクリック', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('cancelボタンをクリックでhandleCloseが呼ばれること', () => {
        wrapper.setMethods({ handleClose: mock })
        wrapper.find(content('cancel')).trigger('click')
        expect(mock).toBeCalled()
      })

      test('submitボタンをクリックでhandleSubmitが呼ばれること', () => {
        wrapper.setMethods({ handleSubmit: mock })
        wrapper.find(content('submit')).trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('active', () => {
        test('activeの初期値', () => {
          expect(wrapper.props().active).toBeFalsy()
        })

        test('activeに代入', () => {
          wrapper.setProps({ active: true })
          expect(wrapper.props().active).toBeTruthy()
        })
      })

      describe('card', () => {
        test('cardの初期値', () => {
          expect(wrapper.props().card).toBeFalsy()
        })

        test('cardに代入', () => {
          wrapper.setProps({ card: true })
          expect(wrapper.props().card).toBeTruthy()
        })
      })

      describe('title', () => {
        test('titleの初期値', () => {
          expect(wrapper.props().title).toBe('')
        })

        test('titleに代入', () => {
          wrapper.setProps({ title: 'テスト' })
          expect(wrapper.props().title).toBe('テスト')
        })
      })

      describe('width', () => {
        test('widthの初期値', () => {
          expect(wrapper.props().width).toBe(960)
        })

        test('widthに代入', () => {
          wrapper.setProps({ width: 1080 })
          expect(wrapper.props().width).toBe(1080)
        })
      })

      describe('cancel', () => {
        test('cancelの初期値', () => {
          expect(wrapper.props().cancel).toBe('閉じる')
        })

        test('cancelに代入', () => {
          wrapper.setProps({ cancel: 'キャンセル' })
          expect(wrapper.props().cancel).toBe('キャンセル')
        })
      })

      describe('submit', () => {
        test('submitの初期値', () => {
          expect(wrapper.props().submit).toBe('送信する')
        })

        test('submitに代入', () => {
          wrapper.setProps({ submit: '保存する' })
          expect(wrapper.props().submit).toBe('保存する')
        })
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('handleClose', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleClose: mock })
          wrapper.vm.handleClose()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.handleClose()
          expect(wrapper.emitted().close).toBeTruthy()
          done()
        })
      })

      describe('handleSubmit', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleSubmit: mock })
          wrapper.vm.handleSubmit()
          expect(mock).toBeCalled()
        })
      })

      test('emitが正常に実行されること', async done => {
        await wrapper.vm.handleSubmit()
        expect(wrapper.emitted().submit).toBeTruthy()
        done()
      })
    })
  })
})
