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
      <h2 class="sidebar__title" key="title">
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
  width: 200px;
  padding: 0 5px;
  margin: var(--spacing-sm) 0;
  flex-shrink: 0;

  height: calc(100vh - var(--spacing-sm) * 2);
  max-height: 100%;
  overflow-y: scroll;

  background-color: var(--color-sidebar-bg);
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);

  @include mixins.up(mobile) {
    width: calc(100vw - 20px);
    max-width: 100%;
    margin: 10px auto;
    padding: 10px;

    height: 75px;
    max-height: none;
    overflow-y: visible;

    border-radius: var(--radius-lg);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 50px;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    &::before {
      left: 0;
      border-radius: var(--radius-lg) 0 0 var(--radius-lg);
      background: linear-gradient(to right, var(--color-sidebar-bg), transparent);
    }

    &::after {
      right: 0;
      border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
      background: linear-gradient(to left, var(--color-sidebar-bg), transparent);
    }
  }

  &__title {
    font-size: 1.25em;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text);
  }

  &__list {
    position: relative;
    overflow-y: auto;

    @include mixins.up(mobile) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 1em;

      overflow-x: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__item {
    text-align: left;
    line-height: 1.4;
    padding: 0 0 1em 1em;

    @include mixins.up(mobile) {
      padding: 0 2em 0 0;
    }

    &::marker {
      color: var(--color-marker);
      font-weight: normal;
    }
  }
}
</style>
