<script setup lang="ts">
defineOptions({
  name: 'SidebarPanel',
})

import { useChessBoard } from '@/composables/useChessBoard'

const { movePath } = useChessBoard()
</script>

<template>
  <aside class="sidebar">
    <Transition name="fade" appear>
      <h2 key="title">
        {{ movePath.length < 1 ? 'Click any square to begin' : `Click ${movePath.length + 1}...` }}
      </h2>
    </Transition>
    <ol>
      <transition-group name="fade" tag="ol">
        <li v-for="(position, index) in movePath" :key="index" class="sidebar__item">
          {{ position }}
        </li>
      </transition-group>
    </ol>
  </aside>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.sidebar {
  padding: 0 5px;
  margin: var(--spacing-sm) 0;
  width: 200px;
  flex-shrink: 0;
  height: calc(100vh - var(--spacing-sm) * 2);
  max-height: 100%;
  background-color: var(--color-sidebar-bg);
  border-top-left-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
  overflow-y: scroll;

  @include mixins.up(mobile) {
    width: calc(100vw - 20px);
    max-width: 100%;
    padding: 10px;
    margin: 10px auto;
    min-height: auto;
    border-radius: var(--radius-lg);
    height: auto;
    max-height: auto;
    overflow-y: visible;
  }
}

ol {
  padding-left: 1em;
}
ol li::marker {
  color: var(--color-marker);
  font-weight: normal;
}
.sidebar__item {
  text-align: left;
  padding-left: 1em;
  margin-bottom: 0.5em;
}
</style>
