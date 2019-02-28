import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TheHeaderHard from '~/components/common/organisms/TheHeaderHard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/organisms/TheHeaderHard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheHeaderHard, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('color', () => {
        test('colorの初期値', () => {
          expect(wrapper.props().color).toBe('primary')
        })

        test('colorに代入', () => {
          wrapper.setProps({ color: 'info' })
          expect(wrapper.props().color).toBe('info')
        })
      })
    })
  })
})
