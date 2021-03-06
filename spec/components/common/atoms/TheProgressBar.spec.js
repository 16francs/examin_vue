import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheProgressBar from '~/components/common/atoms/TheProgressBar'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheProgressBar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheProgressBar, { localVue })
  })
  describe('template', () => {
    test('ProgressBarが存在するか', () => {
      expect(wrapper.contains('[data-test="progress-bar"]')).toBeTruthy()
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
      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toBe(30)
        })
        test('valueに代入', () => {
          wrapper.setProps({ value: 50 })
          expect(wrapper.props().value).toBe(50)
        })
      })
      describe('maxValue', () => {
        test('maxValueの初期値', () => {
          expect(wrapper.props().maxValue).toBe(100)
        })
        test('maxValueに代入', () => {
          wrapper.setProps({ maxValue: 80 })
          expect(wrapper.props().maxValue).toBe(80)
        })
      })
    })
    describe('computed', () => {
      describe('barColor', () => {
        test('colorがデフォルトのとき', () => {
          expect(wrapper.vm.barColor).toBe('is-primary')
        })
        test('color == null', () => {
          wrapper.setProps({ color: '' })
          expect(wrapper.vm.barColor).toBe('')
        })
        test('color != null', () => {
          wrapper.setProps({ color: 'info' })
          expect(wrapper.vm.barColor).toBe('is-info')
        })
      })
    })
  })
})
