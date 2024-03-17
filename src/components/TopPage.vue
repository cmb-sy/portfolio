<script script setup></script>

<template>
  <!-- top -->
  <div class="container top-container">
    <div class="top-title right">
      <h1>Hi, I am John doe.</h1>
      <p>
        I am a web designer <br />
        You can get a nice website.
      </p>
    </div>
    <div class="top-image left">
      <img src="https://avatars.githubusercontent.com/u/63276819?v=4" />
    </div>
  </div>
</template>

<style>
.top-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--gap);
  height: 90vh;
}

.top-image {
  width: 50%;
  height: auto;
  position: relative;
}

.top-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.top-title h1 {
  font-size: 4.2rem;
  font-weight: bold;
}

.top-title p {
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
}
</style>
