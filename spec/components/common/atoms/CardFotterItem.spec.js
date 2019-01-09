import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import CardFooterItem from '~/components/common/atoms/CardFooterItem'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
describe('components/common/atoms/CardFooterItem', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(CardFooterItem, { localVue })
  })
  describe('template', () => {
    describe('a', () => {
      test('footer-itemが存在するか', () => {
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
