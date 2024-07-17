<template>
  <div>
    <!--    <swiper-container navigation-next-el=".custom-next-button"-->
    <!--                      navigation-prev-el=".custom-prev-button">-->
    <swiper-container
        slides-per-view="auto"
        space-between="10"
        free-mode="true"
        :mousewheel="true"
        direction="horizontal"
    >
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-01.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-02.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-03.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-04.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-05.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-06.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-07.jpg"/></swiper-slide>
      <swiper-slide><img src="/photos/plant-portraits/plant-portrait-08.jpg"/></swiper-slide>
    </swiper-container>
    <!--    <div class="swiper-nav">
          <span class="custom-prev-button">&lt; prev</span>
          <span class="custom-next-button">next &gt;</span>
        </div>-->

  </div>
</template>
<script setup lang="ts">
</script>