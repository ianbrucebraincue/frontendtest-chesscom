<script setup lang="ts">
defineOptions({
  name: 'ChessBoard',
})

import Logo from '@/components/Logo.vue'
import ChessBoardGrid from './ChessBoardGrid.vue'
</script>

<template>
  <div class="layout__columns">
    <Transition name="slide" appear>
      <Logo />
    </Transition>
    <Transition name="slide" appear>
      <ChessBoardGrid />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.layout__columns {
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
</style>
