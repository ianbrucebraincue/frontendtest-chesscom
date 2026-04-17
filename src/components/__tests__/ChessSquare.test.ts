import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChessSquare from '@/components/ChessSquare.vue'

describe('ChessSquare', () => {
  test('applies active class when selected', () => {
    const wrapper = mount(ChessSquare, {
      props: { square: 'e4', isSelected: true },
    })

    expect(wrapper.classes()).toContain('chess-square--active')
  })

  test('does not apply active class when not selected', () => {
    const wrapper = mount(ChessSquare, {
      props: { square: 'e4', isSelected: false },
    })

    expect(wrapper.classes()).not.toContain('chess-square--active')
  })

  test('emits select event on click', async () => {
    const wrapper = mount(ChessSquare, {
      props: { square: 'e4' },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('select')![0]).toEqual(['e4'])
  })

  test('renders column label when enabled', () => {
    const wrapper = mount(ChessSquare, {
      props: {
        square: 'e4',
        showColumnLabel: true,
      },
    })

    expect(wrapper.find('.chess-square__letter').text()).toBe('e')
  })

  test('renders row label when enabled', () => {
    const wrapper = mount(ChessSquare, {
      props: {
        square: 'e4',
        showRowLabel: true,
      },
    })

    expect(wrapper.find('.chess-square__number').text()).toBe('4')
  })
})
