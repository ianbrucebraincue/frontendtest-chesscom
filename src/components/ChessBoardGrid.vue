<script lang="ts" setup>
defineOptions({
  name: 'ChessBoardGrid',
})

import ChessSquare from '@/components/ChessSquare.vue'

import { useChessBoard } from '@/composables/useChessBoard'

const { board, selectedSquares, selectSquare } = useChessBoard()
</script>

<template>
  <div class="chessboard__grid">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="chessboard__row" role="row">
      <ChessSquare
        v-for="(square, colIndex) in row"
        :key="square"
        :square="square"
        :isSelected="selectedSquares.includes(square)"
        :showColumnLabel="rowIndex === board.length - 1"
        :showRowLabel="colIndex === 0"
        @select="selectSquare"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.chessboard__grid {
  width: min(calc(100vw - 200px - 60px), calc(100vh - 120px));
  border-radius: var(--radius-sm);
  overflow: hidden;

  aspect-ratio: 1;
  min-width: 264px;
  min-height: 264px;

  @include mixins.up(mobile) {
    width: min(calc(100vw - 20px), calc(100vh - 85px));
  }
}

.chessboard__row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

/* Light square */
.chessboard__row:nth-child(odd) :deep(.chess-square:nth-child(odd)),
.chessboard__row:nth-child(even) :deep(.chess-square:nth-child(even)) {
  background: var(--color-square-light);
  color: var(--color-square-dark);
}

/* Dark square */
.chessboard__row:nth-child(odd) :deep(.chess-square:nth-child(even)),
.chessboard__row:nth-child(even) :deep(.chess-square:nth-child(odd)) {
  background: var(--color-square-dark);
  color: var(--color-square-light);
}
</style>
