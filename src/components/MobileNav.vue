<template>
  <div class="mobile-nav">
    <h1 class="h1">
      <router-link to="/">ZS</router-link>
    </h1>
    <div class="nav" :class="{open: menuOpen}">
      <span class="menu-button" @click="menuOpen = !menuOpen">
        menu
      </span>
      <nav class="nav-menu">
        <div>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/work">Photo</router-link>
        </div>
        <Footer/>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from 'vue';
import Footer from "./Footer.vue";
import router from "../router";

const menuOpen = ref(false);

watch(() => router.currentRoute.value.path, () => {
  menuOpen.value = false;
})

</script>