<script setup>
import Header from "./components/CustomHeader.vue";
import Footer from "./components/CustomFooter.vue";
import About from "./components/CustomAbout.vue";
import Top from "./components/TopPage";
</script>

<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="res">
      <h1 class="res-title" @click="clickSmoothScroll('#app')">
        Shoma's Profile
      </h1>
    </div>
    <div class="nav-res">
      <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
        <font-awesome-icon icon="image" class="nav-icon" />
        <p class="comment">Top</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
        <font-awesome-icon icon="user-circle" class="nav-icon" />
        <p class="comment">About</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
        <font-awesome-icon icon="code" class="nav-icon" />
        <p class="comment">Skill</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
        <font-awesome-icon icon="hammer" class="nav-icon" />
        <p class="comment">Works</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
        <font-awesome-icon icon="handshake" class="nav-icon" />
        <p class="comment">Contact</p>
      </a>
    </div>
  </div>
  <Top />
  <div class="context">
    <kinesis-container>
      <kinesis-element :strength="20">
        <VueTyper
          :text="['テキスト1', 'テキスト2', 'テキスト3']"
          type-delay="10"
        ></VueTyper>
      </kinesis-element>
    </kinesis-container>
  </div>

  <About id="about"></About>
  <!-- <Skill id="skill"></Skill> -->
  <!-- <Work id="work"></Work> -->
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
