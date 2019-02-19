import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheCardHard from '~/components/common/atoms/TheCardHard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheCardHard', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = mount(TheCardHard, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('cardが存在するか', () => {
      expect(wrapper.find(content('card'))).toBeTruthy()
    })
  })
})
