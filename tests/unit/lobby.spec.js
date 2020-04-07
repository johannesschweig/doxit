import { shallowMount } from '@vue/test-utils'
import Lobby from '@/components/Lobby.vue'

describe('Lobby.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Lobby, {
      stubs: ['router-link']
    })

    expect(wrapper.find('button[disabled]').exists()).toBe(true)
    expect(wrapper.find('.players').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toEqual('Doxit')
  })

  it('renders active button', () => {
    const wrapper = shallowMount(Lobby, {
      stubs: ['router-link'],
      data() {
        return {
          gameStatus: 'foo'
        }
      }
    })

    expect(wrapper.find('button:not([disabled])').exists()).toBe(true)
  })
})
