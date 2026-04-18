<script setup lang="ts">
defineOptions({
  name: 'SidebarPanel',
})

import { ref, watch, nextTick } from 'vue'
import { useChessBoard } from '@/composables/useChessBoard'

const { movePath } = useChessBoard()

const itemRefs = ref<HTMLElement[]>([])

watch(
  () => movePath.value.length,
  async () => {
    await nextTick()

    const last = itemRefs.value[itemRefs.value.length - 1]

    if (!last) return

    last.scrollIntoView({
      behavior: 'smooth',
      inline: 'end',
      block: 'nearest',
    })
  },
)
</script>

<template>
  <aside class="sidebar">
    <Transition name="fade" appear>
      <h2 key="title">
        {{ movePath.length < 1 ? 'Click any square to begin' : undefined }}
      </h2>
    </Transition>
    <transition-group name="fade" tag="ol" class="sidebar__list">
      <li
        v-for="(position, index) in movePath"
        :key="index"
        class="sidebar__item"
        :ref="(el) => (itemRefs[index] = el as HTMLElement)"
      >
        {{ position }}
      </li>
    </transition-group>
  </aside>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as mixins;

.sidebar {
  position: relative;
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

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 100%;
      border-top-left-radius: var(--radius-lg);
      border-bottom-left-radius: var(--radius-lg);
      background: linear-gradient(to right, var(--color-sidebar-bg), transparent);
      pointer-events: none;
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      height: 100%;
      border-top-right-radius: var(--radius-lg);
      border-bottom-right-radius: var(--radius-lg);
      background: linear-gradient(to left, var(--color-sidebar-bg), transparent);
      pointer-events: none;
      z-index: 1;
    }
  }
}

.sidebar__list {
  position: relative;
  overflow-y: auto;
  @include mixins.up(mobile) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1em;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .sidebar__item {
    text-align: left;
    padding-left: 1em;
    padding-bottom: 1em;

    @include mixins.up(mobile) {
      padding-left: 0;
      padding-right: 2em;
      padding-bottom: 0;
    }

    &::marker {
      color: var(--color-marker);
      font-weight: normal;
    }
  }
}
</style>
