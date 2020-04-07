import { shallowMount } from '@vue/test-utils'
import Board from '@/components/Board.vue'

describe('Board.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Board, {
      propsData: {
        name: ''
      }
    })

    expect(wrapper.find('h1').text()).toEqual('Board')
    expect(wrapper.find('.players').exists()).toBe(true)
    expect(wrapper.find('#status').exists()).toBe(true)
    expect(wrapper.find('#hand').exists()).toBe(true)
  })
})
