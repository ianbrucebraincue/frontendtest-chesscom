import { ref } from 'vue'
import type { Square } from '@/types/chess'
import { generateBoard } from '@/utils/chessBoardUtils'

// shared states
const selectedSquares = ref<Square[]>([])
const movePath = ref<Square[]>([])
const board = generateBoard()

const selectSquare = (square: Square) => {
  const index = selectedSquares.value.indexOf(square)

  if (index === -1) {
    // Only add to movePath if it's not already active
    movePath.value.push(square)
    selectedSquares.value.push(square)
  } else {
    selectedSquares.value.splice(index, 1)
  }
}

// ✅ composable just returns shared refs
export function useChessBoard() {
  return {
    board,
    movePath,
    selectedSquares,
    selectSquare,
  }
}
