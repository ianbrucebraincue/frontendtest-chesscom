import { ref, computed } from 'vue'
import type { Square } from '@/types/chess'
import { generateBoard } from '@/utils/chessBoardUtils'

export function useChessBoard() {
  const clickedPositions = ref<Square[]>([])
  const selectedSquares = ref<Square[]>([])

  const board = computed(() => generateBoard())

  const selectSquare = (square: Square) => {
    // Only add to clickedPositions if it's not already active
    if (!selectedSquares.value.includes(square)) {
      clickedPositions.value = [...clickedPositions.value, square]
    }

    const index = selectedSquares.value.indexOf(square)

    if (index === -1) {
      selectedSquares.value.push(square)
    } else {
      selectedSquares.value.splice(index, 1)
    }
  }

  return { board, clickedPositions, selectedSquares, selectSquare }
}
