import { shallowMount } from '@vue/test-utils'
import Lobby from '@/components/Lobby.vue'

describe('Lobby.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Lobby, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
