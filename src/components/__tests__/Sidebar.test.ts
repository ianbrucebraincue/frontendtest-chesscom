import { vi } from 'vitest'
import { ref } from 'vue'
import type { Square } from '@/types/chess'

const mockMovePath = ref<Square[]>([])

vi.mock('@/composables/useChessBoard', () => {
  return {
    useChessBoard: () => ({
      movePath: mockMovePath,
    }),
  }
})

import { describe, test, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar', () => {
  beforeEach(() => {
    mockMovePath.value = []
  })

  test('renders move list', () => {
    mockMovePath.value = ['e4', 'e5', 'e5'] as Square[]

    const wrapper = mount(Sidebar)

    const items = wrapper.findAll('.sidebar__item')

    expect(items.length).toBe(3)
    expect(items[0]?.text() ?? '').toBe('e4')
    expect(items[1]?.text() ?? '').toBe('e5')
    expect(items[2]?.text() ?? '').toBe('e5')
  })

  test('renders empty state when no moves', () => {
    mockMovePath.value = []

    const wrapper = mount(Sidebar)

    const items = wrapper.findAll('.sidebar__item')

    expect(items.length).toBe(0)
  })
})
