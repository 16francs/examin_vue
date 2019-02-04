import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsResultPanel from '~/components/students/molecules/StudentsResultPanel'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsResultPanel', () => {
  let wrapper
  let results
  beforeEach(() => {
    results = {
      results: {
        question_id: 1,
        result: true
      }
    }
    wrapper = mount(StudentsResultPanel, { localVue })
  })

  describe('template', () => {
    test('panelが存在するか', () => {
      expect(wrapper.contains('[data-test="panel"]')).toBeTruthy()
    })

    test('panel-hard-blockが存在するか', () => {
      wrapper.setProps({ results: results })
      expect(wrapper.contains('[data-test="panel-hard-block"]')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('results', () => {
        test('resultsの初期値', () => {
          expect(wrapper.props().results).toEqual([])
        })

        test('resultsに代入', () => {
          wrapper.setProps({ results: results })
          expect(wrapper.props().results).toEqual(results)
        })
      })
    })
  })
})
