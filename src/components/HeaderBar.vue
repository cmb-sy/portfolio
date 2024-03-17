<script script setup></script>
<template>
  <div>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#about')"
      >About</a
    >
    <a href="#" class="nav-button" @click="clickSmoothScroll('#skill')"
      >Skill</a
    >
    <a href="#" class="nav-button" @click="clickSmoothScroll('#work')">Works</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#contact')"
      >Contact</a
    >
  </div>
</template>

<style>
.nav-button {
  position: relative;
  display: inline-block;
  padding: 0.25em 10px;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;
  color: black;
}
</style>
