import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TeachersTestForm from '~/components/teachers/molecules/TeachersTestForm'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersTestForm', () => {
  let wrapper
  let testForm
  beforeEach(() => {
    wrapper = mount(TeachersTestForm, { localVue })

    testForm = {
      count: '50'
    }
  })

  describe('script', () => {
    describe('props', () => {
      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toEqual({
            count: '20'
          })
        })

        test('valueに代入', () => {
          wrapper.setProps({ value: testForm })
          expect(wrapper.props().value).toEqual(testForm)
        })
      })
    })

    describe('data', () => {
      test('data', () => {
        expect(wrapper.vm.data).toEqual(['20', '30', '50'])
      })
    })
  })
})
