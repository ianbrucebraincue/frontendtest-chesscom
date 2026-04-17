import { expect, test } from 'vitest'
import { generateBoard } from '../../utils/chessBoardUtils'
import type { Board } from '@/types/chess'

test('generateBoard should create an 8x8 chess board with correct square names', () => {
  const board: Board = generateBoard()

  // Check if the board has 8 rows
  expect(board.length).toBe(8)

  // Check if each row has 8 columns and correct square names
  const expectedFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const expectedRanks = ['8', '7', '6', '5', '4', '3', '2', '1']

  board.forEach((row, rowIndex) => {
    expect(row.length).toBe(8)
    row.forEach((square, colIndex) => {
      const expectedSquare = `${expectedFiles[colIndex]}${expectedRanks[rowIndex]}`
      expect(square).toBe(expectedSquare)
    })
  })
})
