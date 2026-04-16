<template>
  <div class="chessboard__layout">
    <!-- Chessboard squares and pieces will be rendered here -->
    <div class="chessboard__layout__columns">
      <Transition name="slide" appear>
        <div class="chessboard__logo">
          <img :src="logo" alt="ChessKid Logo" />
        </div>
      </Transition>
      <Transition name="slide" appear>
        <div class="chessboard__grid">
          <div v-for="(row, rowIndex) in board" :key="rowIndex" class="chessboard__row" role="row">
            {{ row }}
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import { useChessBoard } from '@/composables/useChessBoard'

const { board } = useChessBoard()
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.chessboard__layout {
  width: 100%;
  height: 100%;
  background-color: #f0d9b5;
  display: flex;
  flex-wrap: wrap;

  &__columns {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
}

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
</style>
