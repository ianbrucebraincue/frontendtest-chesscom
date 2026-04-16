<script setup lang="ts">
defineOptions({
  name: 'ChessBoard',
})

import Logo from '@/components/Logo.vue'
import ChessBoardGrid from './ChessBoardGrid.vue'
import Sidebar from '@/components/Sidebar.vue'

import { useChessBoard } from '@/composables/useChessBoard'

const { movePath } = useChessBoard()
</script>

<template>
  <div class="chessboard__layout">
    <div class="chessboard__layout__columns">
      <Transition name="slide" appear>
        <Logo />
      </Transition>
      <Transition name="slide" appear>
        <ChessBoardGrid />
      </Transition>
    </div>
    <Sidebar :positions="movePath" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.chessboard__layout {
  display: flex;
  gap: var(--spacing-md);
  align-items: start;

  @include mixins.up(mobile) {
    flex-direction: column;
    margin: 0;
  }

  &__columns {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    margin-left: var(--spacing-md);

    @include mixins.up(mobile) {
      margin: 0;
      max-height: unset;
      width: 100vw;
    }
  }
}
</style>
