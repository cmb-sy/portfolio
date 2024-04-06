<script setup lang="ts">
defineProps<{
  headerItems: string[];
}>();
</script>

<template>
  <header>
    <div class="wrapper">
      <p><a href="#">kunst portfolio</a></p>
      <nav>
        <ul v-for="(item, index) in headerItems" :key="index">
          <li>
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
}
header {
  width: 100%;
}
.wrapper {
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  /* max-width: 1000px; */
  border-bottom: 1px solid #cccccc;
}

p {
  float: left;
  margin: 22px 0 0;
  font-size: 1.4rem;
  font-weight: 700;
}

ul {
  float: right;
  margin: 28px 0;
  font-size: 0.9rem;
  font-weight: 500;
}
ul li {
  float: left;
  margin-right: 40px;
  list-style: none;
}
ul li:last-child {
  margin-right: 0;
}
</style>
