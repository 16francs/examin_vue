import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsPanel from '~/components/students/atoms/StudentsPanel'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/atoms/StudentsPanel', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(StudentsPanel, { localVue })
  })
  describe('template', () => {
    test('panelが存在するか', () => {
      expect(wrapper.contains('[data-test="panel"]')).toBeTruthy()
    })
  })
})
