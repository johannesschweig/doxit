import { shallowMount } from '@vue/test-utils'
import Hand from '@/components/Hand.vue'

describe('Hand.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Hand, {
      data() {
        return {
          cards: [1, 2, 3]
        }
      }
    })

    expect(wrapper.findAll('.card').length).toBe(3)
  })
})
