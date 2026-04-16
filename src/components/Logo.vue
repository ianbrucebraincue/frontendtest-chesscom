<script setup lang="ts">
import logo from '@/assets/images/logo.svg'

defineOptions({
  name: 'ChessKidLogo',
})
</script>

<template>
  <div class="chessboard__logo">
    <img :src="logo" alt="ChessKid Logo" />
  </div>
</template>

<style scoped lang="scss">
.chessboard__logo {
  margin-top: 15px;
}
</style>
