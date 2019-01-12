import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Panel from '~/components/students/atoms/Panel'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/atoms/Panel', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Panel, { localVue })
  })
  describe('template', () => {
    test('panelが存在するか', () => {
      expect(wrapper.contains('[data-test="panel"]')).toBeTruthy()
    })
  })
})
