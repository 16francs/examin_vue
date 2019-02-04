import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheCardFooterItem from '~/components/common/atoms/TheCardFooterItem'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
describe('components/common/atoms/TheCardFooterItem', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheCardFooterItem, { localVue })
  })
  describe('template', () => {
    describe('a', () => {
      test('footer-itemが存在するか', () => {
        expect(wrapper.contains('[data-test="card-footer-item"]')).toBeTruthy()
      })
    })
  })
  describe('script', () => {
    describe('methods', () => {
      describe('onClick', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ onClick: mock })
          wrapper.vm.onClick()
          expect(mock).toBeCalled()
        })
        test('emitが実行されること', async done => {
          await wrapper.vm.onClick()
          expect(wrapper.emitted('click')).toBeTruthy()
          done()
        })
      })
    })
  })
})
