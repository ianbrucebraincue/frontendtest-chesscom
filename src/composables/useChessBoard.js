import { ref, computed } from 'vue'
import { generateBoard } from '@/utils/chessBoardUtils'

export function useChessBoard() {
  const clickedPositions = ref([])
  const selectedSquares = ref([])

  const board = computed(() => generateBoard())

  const selectSquare = (square) => {
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
