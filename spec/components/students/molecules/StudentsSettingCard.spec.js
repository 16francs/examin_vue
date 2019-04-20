import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsSettingCard from '~/components/students/molecules/StudentsSettingCard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsSettingCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(StudentsSettingCard, { localVue })
  })

  describe('template', () => {
    describe('card', () => {
      test('カードが存在すること', () => {
        expect(wrapper.contains('[data-test="setting-card"]')).toBeTruthy()
      })
    })
  })

  describe('script', () => {
    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('正常に呼び出されること', () => {
        wrapper.setMethods({ click: mock })
        wrapper.vm.click()
        expect(mock).toBeCalled()
      })
      test('emitが実行されること', async done => {
        await wrapper.vm.click()
        expect(wrapper.emitted().click).toBeTruthy()
        done()
      })
    })
  })
})
