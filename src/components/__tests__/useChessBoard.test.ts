import { describe, test, expect, beforeEach } from 'vitest'
import { useChessBoard, __resetChessBoard } from '@/composables/useChessBoard'

describe('useChessBoard', () => {
  beforeEach(() => {
    __resetChessBoard()
  })

  test('initializes with empty state', () => {
    const { selectedSquares, movePath } = useChessBoard()

    expect(selectedSquares.value).toEqual([])
    expect(movePath.value).toEqual([])
  })

  test('adds a square when not already selected', () => {
    const { selectedSquares, movePath, selectSquare } = useChessBoard()

    selectSquare('e4')

    expect(selectedSquares.value).toContain('e4')
    expect(movePath.value).toContain('e4')
  })

  test('removes a square if already selected', () => {
    const { selectedSquares, selectSquare } = useChessBoard()

    selectSquare('e4')
    selectSquare('e4') // toggle off

    expect(selectedSquares.value).not.toContain('e4')
  })

  test('records square again in movePath when re-selected after deselection', () => {
    const { movePath, selectSquare } = useChessBoard()

    selectSquare('e4')
    selectSquare('e4') // remove
    selectSquare('e4') // add again

    expect(movePath.value).toEqual(['e4', 'e4'])
  })
})
