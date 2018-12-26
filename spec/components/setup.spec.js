import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Logo from '~/components/Logo'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/Logo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Logo, { localVue })
  })

  test('setup', () => {
    expect(wrapper.contains('.VueToNuxtLogo')).toBeTruthy()
  })
})
