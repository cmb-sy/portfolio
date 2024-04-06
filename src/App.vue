<script setup lang="ts">
import Header from "@/components/Header.vue";

const headerItem: string[] = [
  "お問い合わせ",
  "保有資格",
  "保有技術",
  "作品",
  "経歴",
  "トップページ",
];
</script>

<template>
  <Header :header-items="headerItem" />
</template>

<style scoped></style>
