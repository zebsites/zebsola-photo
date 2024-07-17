<template>
  <!--  <div id="leftDecoration" class="frame"></div>-->
  <!--  <div id="rightDecoration" class="frame"></div>-->
  <!--  <div id="topDecoration" class="frame"></div>-->
  <!--  <div id="bottomDecoration" class="frame"></div>-->
  <div id="content">
    <MobileNav/>
    <Sidebar/>

    <main id="main" class="main">
      <!-- {/*<BlogPosts posts={posts}/>*/} -->
      <section class="content" :class="router.currentRoute.value.fullPath.indexOf('/work') >= 0 ? 'work' : ''">
        <!-- {content} -->
        <div class="inner">
          <router-view></router-view>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import MobileNav from "./components/MobileNav.vue";
import router from "./router";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.content:has(swiper-container) {
  padding: 0;
}
</style>
