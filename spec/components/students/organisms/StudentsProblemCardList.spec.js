import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsProblemCardList from '~/components/students/organisms/StudentsProblemCardList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/StudentsProblemCardList', () => {
  let wrapper, store, $router
  let problems
  beforeEach(() => {
    problems = [
      { id: 1, title: 'テスト', content: 'テストデータです' },
      { id: 2, title: 'テスト2', content: 'テストデータです' }
    ]

    $router = {
      push: jest.fn()
    }

    store = new Vuex.Store(Module)
    wrapper = shallowMount(StudentsProblemCardList, {
      localVue,
      store,
      mocks: {
        $router
      }
    })

    store.replaceState({
      students: { problems: { problems: problems } }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('store から problems が取得できること', () => {
          expect(wrapper.vm.problems).toEqual(problems)
        })
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('doLearn', () => {
        test('正常に呼び出されること', () => {
          wrapper.vm.doLearn()
          expect(wrapper.vm.$router.push).toBeCalled()
        })
      })
      describe('doTest', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doTest: mock })
          wrapper.vm.doTest()
          expect(mock).toBeCalled()
        })
      })
      describe('showAchievements', () => {
        test('正常に呼び出されること', () => {
          wrapper.vm.showAchievements()
          expect(wrapper.vm.$router.push).toBeCalled()
        })
      })
    })
  })
})
