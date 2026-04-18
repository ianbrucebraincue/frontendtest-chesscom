<script setup lang="ts">
import type { Square } from '@/types/chess'
import { computed } from 'vue'

defineOptions({
  name: 'ChessSquare',
})

const props = defineProps<{
  square: Square
  isSelected?: boolean
  showColumnLabel?: boolean
  showRowLabel?: boolean
}>()

const file = computed(() => props.square[0])
const rank = computed(() => props.square[1])

const emit = defineEmits<{
  (e: 'select', square: Square): void
}>()
</script>

<template>
  <div
    :class="['chess-square', { 'chess-square--active': isSelected }]"
    role="gridcell"
    tabindex="0"
    :aria-label="square"
    :aria-selected="Boolean(isSelected)"
    @click="emit('select', square)"
    @keydown.enter.prevent="emit('select', square)"
    @keydown.space.prevent="emit('select', square)"
  >
    <span v-if="showColumnLabel" class="chess-square__letter">{{ file }}</span>
    <span v-if="showRowLabel" class="chess-square__number">{{ rank }}</span>
  </div>
</template>

<style scoped lang="scss">
.chess-square {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  aspect-ratio: 1;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 5;
    transition: opacity 0.3s ease;
    content: '';
  }

  &:hover::after,
  &:focus-visible::after {
    border: clamp(2px, 1.2cqw, 12px) solid var(--color-highlight-border);
  }

  &--active::after {
    background: var(--color-highlight);
    opacity: 0.7;
  }

  &__letter,
  &__number {
    position: absolute;
  }

  &__letter {
    bottom: 1px;
    right: var(--spacing-xs);
    font-size: 13px;
    z-index: 10;
  }

  &__number {
    top: 5px;
    left: var(--spacing-xs);
  }
}
</style>
