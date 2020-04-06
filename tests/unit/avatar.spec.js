import { shallowMount } from '@vue/test-utils'
import Avatar from '@/components/Avatar.vue'

describe('Avatar.vue', () => {
  it('renders ghost if no name', () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        name: ''
      }
    })
    expect(wrapper.find('.user.ghost:not(.active)').exists()).toBe(true)
    expect(wrapper.text()).toMatch('Free seat')
  })

  it('renders avatar with name', () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        name: 'foo'
      }
    })
    expect(wrapper.find('.user:not(.active)').exists()).toBe(true)
    expect(wrapper.text()).toMatch('foo')
  })

  it('renders avatar with name', () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        name: 'foo',
        active: true
      }
    })
    expect(wrapper.find('.user.active').exists()).toBe(true)
  })

  it('renders points', () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        name: 'foo',
        points: 10
      }
    })
    expect(wrapper.find('.user').text()).toBe('foo Pt: 10')
  })
})
