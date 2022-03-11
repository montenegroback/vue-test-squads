import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import CardBasicItem from '../CardBasicItem.vue'

describe('CardBasicItem.vue', () => {
  it('Renderiza props: [title]', () => {
    const wrapper = mount(CardBasicItem, { props: { title: 'Hi!' } })
    expect(wrapper.text()).toContain('Hi!')
  })
})
