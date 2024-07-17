<template>
  <div class="mobile-nav">
    <h1 class="h1">
      <router-link to="/">Zeb Sola</router-link>
    </h1>
    <div class="nav" :class="{open: menuOpen}">
      <span class="menu-button" @click="menuOpen = !menuOpen">
        menu
      </span>
      <nav class="nav-menu">
        <div>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/about">About</router-link>
          <div class="a link-with-menu" @click="openMenu">Work</div>
          <ul id="photoProjects" :class="router.currentRoute.value.fullPath.indexOf('/work') >= 0 ? 'open' : ''">
            <li>
              <router-link to="/work/colors">Colors</router-link>
            </li>
            <li>
              <router-link to="/work/city-of-angels">City of Angels</router-link>
            </li>
            <li>
              <router-link to="/work/personal">Personal</router-link>
            </li>
            <li>
              <router-link to="/work/plant-portraits">Plant Portraits</router-link>
            </li>
          </ul>
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

function openMenu($event: Event) {
  // @ts-ignore
  const menu = $event.target?.nextSibling;
  console.log(menu);
  menu.classList.toggle('open');
}

</script>