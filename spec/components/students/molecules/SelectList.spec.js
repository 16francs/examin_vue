import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import SelectList from '~/components/students/molecules/SelectList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/SelectList', () => {
  let wrapper
  let answers
  beforeEach(() => {
    answers = ['read', 'write']
    wrapper = mount(SelectList, { localVue })
  })

  describe('template', () => {
    test('panelが存在するか', () => {
      expect(wrapper.contains('[data-test="panel"]')).toBeTruthy()
    })

    test('panel-blockが存在するか', () => {
      wrapper.setProps({ answers: answers })
      expect(wrapper.contains('[data-test="panel-block"]')).toBeTruthy()
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('answers', () => {
        test('answersの初期値', () => {
          expect(wrapper.props().answers).toEqual([])
        })

        test('answersに代入', () => {
          wrapper.setProps({ answers: answers })
          expect(wrapper.props().answers).toEqual(answers)
        })
      })
    })

    describe('methods', () => {
      describe('select', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されること', () => {
          wrapper.setMethods({ select: mock })
          wrapper.vm.select()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async done => {
          await wrapper.vm.select()
          expect(wrapper.emitted().select).toBeTruthy()
          done()
        })
      })
    })
  })
})
