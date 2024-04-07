<script setup lang="ts">
import { type AboutLinkType } from "@/components/About/link";
import { headerItems } from "@/components/Header/headerItem";

const aboutMeItem = headerItems.find((item) => item.value === "私について");
defineProps<{
  aboutLinks: AboutLinkType[];
}>();
</script>
<template>
  <div>
    <h1>{{ aboutMeItem?.value }}</h1>
    <div class="aboutFileld">
      <img
        class="customImg"
        src="https://avatars.githubusercontent.com/u/63276819?v=4"
      />
      <div v-for="(item, index) in aboutLinks" :key="index" class="text">
        {{ item.value }}
        <a :href="item.url">
          {{ item.key }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customImg {
  width: 100%;
  border-radius: 50%;
  width: 250px;
  height: auto;
}

.aboutFileld {
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}
.text {
  margin-left: 16px;
}
</style>
