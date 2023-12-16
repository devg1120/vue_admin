<script setup lang="ts">
type Props = {
  name?: string;
};

const { name = '' } = defineProps<Props>();
</script>

<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
  </div>
</template>

<style scoped></style>
