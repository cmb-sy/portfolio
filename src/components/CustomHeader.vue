<script script setup>
import navigationBar from "/src/components/NavigationBar";
</script>

<template>
  <div class="header">
    <div class="header-inner">
      <h1 class="title" @click="clickSmoothScroll('#app')">Shoma's Profile</h1>
      <navigationBar class="nav" />
    </div>
  </div>
</template>

<style>
.header {
  background-color: #03111a;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}

.header-inner {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}
.title {
  padding: 20px 0px;
  margin: unset;
  cursor: pointer;
}
.nav {
  margin: auto;
  margin-right: 0;
  padding: auto;
}
</style>
