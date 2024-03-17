<script setup>
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/CustomFooter.vue";
import Work from "./components/MyWork";
import About from "./components/CustomAbout.vue";
import Top from "./components/TopPage";
</script>

<template>
  <div id="app">
    <HeaderBar id="headerNav" class="nav" />
  </div>
  <Top />
  <About id="about"></About>
  <!-- <Skill id="skill"></Skill> -->
  <Work id="work"></Work>
  <!-- <Contact id="contact"></Contact> -->
  <Footer></Footer>
</template>

<style>
.test {
  width: 100%;
  height: 500px;
  background-color: yellow;
}
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,300&display=swap");

#app {
  font-family: "Comic Neue", cursive;
  font-style: italic;
  text-align: center;
}

#top {
  position: relative;
  /*background-image: url(./assets/yoru2.jpg);*/
  background-color: #03111a;
  background-size: cover;
  height: 100vh;
}

#main {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.particles {
  z-index: 1;
  height: 100vh;
}

.res {
  display: none;
  background-color: #03111a;
}

.res-title {
  background-color: #03111a;
  padding: 10px;
  margin: 0;
  color: whitesmoke;
}

.vue-typer .custom.char {
  color: aliceblue;
}

.nav-res {
  display: none;
}

.nav-icon {
  font-size: 1.5em;
}

.comment {
  margin: 5px 0;
  font-weight: 500;
  color: whitesmoke;
}

.link-content {
  color: whitesmoke;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}

.top-text {
  color: whitesmoke;
  font-size: 50px;
}

.icon {
  font-size: 0.8em;
}

.text {
  font-weight: 500;
}

.content-title {
  padding: 120px 0 20px 0;
  margin: 50px 20% 100px 20%;
  position: relative;
  font-size: 2em;
  color: #333;
  border-bottom: rgba(12, 50, 78, 0.4) 3px solid;
}

@media screen and (max-width: 1200px) {
  .top-text {
    font-size: 35px;
  }
}

@media screen and (max-width: 768px) {
  .top-text {
    font-size: 25px;
  }
  #header {
    display: none;
  }

  .res {
    display: contents;
    background-color: #03111a;
  }

  .nav-res {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    background-color: #03111a;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .content-title {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 450px) {
  .top-text {
    font-size: 11px;
  }
}
</style>
./components/HeaderBar.vue
