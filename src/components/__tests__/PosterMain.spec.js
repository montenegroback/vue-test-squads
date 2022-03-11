import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PosterMain from '../PosterMain.vue'

describe('PosterMain.vue', () => {
  it('Renders slot default', () => {
    const message = '<p>Welcome</p>';

    const wrapper = mount(PosterMain, { 
      slots: {
        default: message
      }
     })
    expect(wrapper.html()).toMatch(message)
  })
})
