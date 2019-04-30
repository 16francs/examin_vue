import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import StudentsAnsweredProblemCard from '~/components/students/molecules/StudentsAnsweredProblemCard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsAnsweredProblem', () => {
  let wrapper
  let answeredProblem
  beforeEach(() => {
    answeredProblem = {
      id: 1,
      created_at: '2000-12-31'
    }
    wrapper = mount(StudentsAnsweredProblemCard, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  describe('template', () => {
    test('answered-problemが存在すること', () => {
      expect(wrapper.contains('[data-test="answered-problem"]')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('answeredProblem', () => {
        test('answeredProblemの初期値', () => {
          expect(wrapper.props().answeredProblem).toEqual({
            id: -1,
            created_at: '2000-11-11'
          })
        })
        test('answeredProblemに代入', () => {
          wrapper.setProps({ answeredProblem: answeredProblem })
          expect(wrapper.props().answeredProblem).toEqual(answeredProblem)
        })
      })
    })

    describe('computed', () => {
      describe('formattedTitle', () => {
        test('formattedTitleの戻り値', () => {
          expect(wrapper.vm.formattedTitle).toBe('2000-11-11の記録')
        })
      })
    })

    describe('methods', () => {
      describe('click', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されること', () => {
          wrapper.setMethods({ click: mock })
          wrapper.vm.click()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async done => {
          await wrapper.vm.click()
          expect(wrapper.emitted().click).toBeTruthy()
          done()
        })
      })
    })
  })
})
