import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import CardFotterItem from '~/components/common/atoms/CardFotterItem'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
describe('components/common/atoms/CardFotterItem', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(CardFotterItem, { localVue })
  })
  describe('template', () => {
    describe('a', () => {
      test('fotter-itemが存在するか', () => {
        const a = wrapper.findAll('a').at(0)
        expect(a.classes()).toContain('card-footer-item')
      })
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('text', () => {
        test('textの初期値', () => {
          expect(wrapper.props().text).toBe('テスト')
        })
        test('textに代入', () => {
          wrapper.setProps({ text: '変更テスト' })
          expect(wrapper.props().text).toBe('変更テスト')
        })
      })
    })
    describe('methods', () => {
      describe('onClick', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
          wrapper.setMethods({ onClick: mock })
        })
        test('正常に呼び出されること', () => {
          wrapper.vm.onClick()
          expect(mock).toBeCalled()
        })
      })
    })
  })
})
