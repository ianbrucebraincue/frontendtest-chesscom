<script setup lang="ts">
import type { Square } from '@/types/chess'

defineProps<{
  square: Square
  isSelected?: boolean
  showColumnLabel?: boolean
  showRowLabel?: boolean
}>()

defineOptions({
  name: 'ChessSquare',
})

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
    <span v-if="showColumnLabel" class="chess-square__letter">{{ square[0] }}</span>
    <span v-if="showRowLabel" class="chess-square__number">{{ square[1] }}</span>
  </div>
</template>

<style scoped lang="scss">
.chess-square {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}

.chess-square::after {
  transition: opacity 0.3s ease;
}

.chess-square:hover::after,
.chess-square:focus-visible::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 12px solid var(--color-highlight-border);
  z-index: 5;
}

.chess-square--active::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-highlight);
  opacity: 0.7;
  z-index: 5;
}

.chess-square__letter {
  position: absolute;
  bottom: 1px;
  right: var(--spacing-xs);
  font-size: 13px;
  z-index: 10;
}

.chess-square__number {
  position: absolute;
  top: 5px;
  left: var(--spacing-xs);
}
</style>
