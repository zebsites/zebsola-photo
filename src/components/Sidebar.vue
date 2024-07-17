<template>
  <div class="sidebar">
    <header class="header">
      <h1 class="h1">
        <router-link to="/">zeb sola</router-link>
      </h1>
    </header>
    <nav class="nav">
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <div class="a link-with-menu" @click="openMenu">Work</div>
      <ul id="photoProjects">
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

    </nav>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Footer from "./Footer.vue";

function openMenu($event: Event) {
  const menu = $event.target?.nextSibling;
  console.log(menu);
  menu.classList.toggle('open');
}

</script>