import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblemCardContent from '~/components/teachers/molecules/TeachersProblemCardContent'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersProblemCardContent', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblemCardContent, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題集概要が存在すること', () => {
      expect(wrapper.find(content('description'))).toBeTruthy()
    })

    test('問題集更新者名が存在すること', () => {
      expect(wrapper.find(content('teacher-name'))).toBeTruthy()
    })

    test('問題集更新日時が存在すること', () => {
      expect(wrapper.find(content('updated-at'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('content', () => {
        test('contentの初期値', () => {
          expect(wrapper.props().content).toBe('')
        })

        test('contentに代入', () => {
          wrapper.setProps({ content: '問題集内容' })
          expect(wrapper.props().content).toBe('問題集内容')
        })
      })

      describe('teacherName', () => {
        test('teacherNameの初期値', () => {
          expect(wrapper.props().teacherName).toBe('None')
        })

        test('teacherNameに代入', () => {
          wrapper.setProps({ teacherName: '講師名' })
          expect(wrapper.props().teacherName).toBe('講師名')
        })
      })

      describe('updatedAt', () => {
        test('updatedAtの初期値', () => {
          expect(wrapper.props().updatedAt).toBe('')
        })

        test('updatedAtに代入', () => {
          wrapper.setProps({ updatedAt: '2019-01-01 00:00:00' })
          expect(wrapper.props().updatedAt).toBe('2019-01-01 00:00:00')
        })
      })
    })
  })
})
