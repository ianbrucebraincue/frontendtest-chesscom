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

.chessboard {
  &__grid {
    width: min(calc(100vw - 200px - 60px), calc(100vh - 120px));
    min-width: 264px;
    min-height: 264px;
    aspect-ratio: 1;

    border-radius: var(--radius-sm);
    overflow: hidden;

    @include mixins.up(mobile) {
      width: min(calc(100vw - 20px), calc(100vh - 85px));
    }
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    // Light squares
    &:nth-child(odd) :deep(.chess-square:nth-child(odd)),
    &:nth-child(even) :deep(.chess-square:nth-child(even)) {
      background: var(--color-square-light);
      color: var(--color-square-dark);
    }

    // Dark squares
    &:nth-child(odd) :deep(.chess-square:nth-child(even)),
    &:nth-child(even) :deep(.chess-square:nth-child(odd)) {
      background: var(--color-square-dark);
      color: var(--color-square-light);
    }
  }
}
</style>
