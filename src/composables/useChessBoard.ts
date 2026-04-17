import { ref } from 'vue'
import type { Square } from '@/types/chess'
import { generateBoard } from '@/utils/chessBoardUtils'

// shared states
const selectedSquares = ref<Square[]>([])
const movePath = ref<Square[]>([])
const board = generateBoard()

const selectSquare = (square: Square) => {
  const index = selectedSquares.value.indexOf(square) // returns -1 if not found, otherwise returns the index

  if (index === -1) {
    // Only add to movePath if it's not already in selectedSquares
    movePath.value.push(square)
    selectedSquares.value.push(square)
  } else {
    // if square is already selected, remove it
    selectedSquares.value.splice(index, 1)
  }
}

// composable just returns shared refs
export function useChessBoard() {
  return {
    board,
    movePath,
    selectedSquares,
    selectSquare,
  }
}

// helper function to reset the state of the chess board for testing purposes
export function __resetChessBoard() {
  selectedSquares.value = []
  movePath.value = []
}
