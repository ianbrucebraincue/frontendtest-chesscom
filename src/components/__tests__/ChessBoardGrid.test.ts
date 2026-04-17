/**
 * ChessBoardGrid component has 3 responsibilities:
 * - Render the grid from board
 * - Pass correct props to ChessSquare
 * - Wire events → selectSquare
 */

import { vi } from 'vitest'
import { ref } from 'vue'

// Mock the useChessBoard composable to provide a controlled test environment
// already tested generateBoard logic in chessBoardUtils.test.ts, so we can just return a simple 2x2 board for testing
const mockSelectSquare = vi.fn()

vi.mock('@/composables/useChessBoard', () => {
  return {
    useChessBoard: () => ({
      board: [
        ['a8', 'b8'],
        ['a7', 'b7'],
      ],
      selectedSquares: ref(['a8']),
      selectSquare: mockSelectSquare,
    }),
  }
})

import { describe, test, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ChessBoardGrid from '@/components/ChessBoardGrid.vue'
import ChessSquare from '@/components/ChessSquare.vue'

describe('ChessBoardGrid', () => {
  beforeEach(() => {
    mockSelectSquare.mockClear()
  })

  test('renders the correct number of rows and squares', () => {
    const wrapper = mount(ChessBoardGrid)

    const rows = wrapper.findAll('.chessboard__row')
    expect(rows).toHaveLength(2) // 2 rows

    const squares = wrapper.findAllComponents(ChessSquare)
    expect(squares).toHaveLength(4) // 2 rows x 2 columns
  })

  test('calls selectSquare when a square emits select', () => {
    const wrapper = mount(ChessBoardGrid)

    const square = wrapper.findComponent(ChessSquare)

    square.vm.$emit('select', 'a8')

    // check that selectSquare function was called with the correct square string
    expect(mockSelectSquare).toHaveBeenCalledWith('a8')
  })
})
