<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import About from "@/components/About/About.vue";
import { AboutLinks } from "@/components/About/link";
import { headerItems } from "@/components/Header/headerItem";
</script>

<template>
  <Header :headerItems="headerItems" />
  <About :aboutLinks="AboutLinks" />
</template>

<style scoped></style>
