<script setup>
import { useCounterStore } from '@stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <!-- Counter Display -->
  <div class="flex items-center">
    <span class="text-xl font-semibold mr-4" id="counter">{{ counterStore.counter }}</span>
  </div>
</template>

<style scoped></style>
