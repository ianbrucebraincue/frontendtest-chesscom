<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <main>
    <div class="layout">
      <ChessBoard />
      <Sidebar />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.layout {
  display: flex;
  gap: var(--spacing-md);
  align-items: start;

  @include mixins.up(mobile) {
    flex-direction: column;
    margin: 0;
  }
}
</style>
