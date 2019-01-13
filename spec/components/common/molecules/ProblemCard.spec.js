import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import ProblemCard from '~/components/common/molecules/ProblemCard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/molecules/ProblemCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(ProblemCard, { localVue })
  })

  describe('template', () => {
    test('cardが存在すること', () => {
      expect(wrapper.contains('[data-test="card"]')).toBeTruthy()
    })

    test('footer-itemが存在すること', () => {
      expect(wrapper.contains('[data-test="footer-item-learn"]')).toBeTruthy()
      expect(wrapper.contains('[data-test="footer-item-test"]')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('title', () => {
        test('titleの初期値', () => {
          expect(wrapper.props().title).toBe('タイトル')
        })

        test('titleに代入', () => {
          wrapper.setProps({ title: '変更テスト' })
          expect(wrapper.props().title).toBe('変更テスト')
        })
      })

      describe('content', () => {
        test('contentの初期値', () => {
          expect(wrapper.props().content).toBe('コンテンツ')
        })

        test('contentに代入', () => {
          wrapper.setProps({ content: '変更テスト' })
          expect(wrapper.props().content).toBe('変更テスト')
        })
      })
    })

    describe('methods', () => {
      describe('doLearn', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されるか', () => {
          wrapper.setMethods({ doLearn: mock })
          wrapper.vm.doLearn()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async done => {
          await wrapper.vm.doLearn()
          expect(wrapper.emitted().doLearn).toBeTruthy()
          done()
        })
      })

      describe('doTest', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されるか', () => {
          wrapper.setMethods({ doTest: mock })
          wrapper.vm.doTest()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async done => {
          await wrapper.vm.doTest()
          expect(wrapper.emitted().doTest).toBeTruthy()
          done()
        })
      })
    })
  })
})
