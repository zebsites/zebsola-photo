<template>
  <div class="gallery">
    <template v-for="image in imageList" :key="image.fullSize">
      <ImageLightbox 
        :src="image.fullSize"
        :thumbnail="image.thumbnail"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onMounted } from 'vue'
import ImageLightbox from '../components/ImageLightbox.vue'
import { ImageListSymbol } from '../components/lightboxSymbol'

interface ImagePair {
  fullSize: string;
  thumbnail: string;
}

// Create a reactive reference for the list of images
const imageList = ref<ImagePair[]>([])

// Get all full-size images and thumbnails
const fullSizeImages = import.meta.glob<string>('../assets/plant-portraits/*.jpg', {
  eager: true,
  import: 'default'
})

const thumbnailImages = import.meta.glob<string>('../assets/plant-portraits/thumbnails/*.jpg', {
  eager: true,
  import: 'default'
})

// Process the images and create the image list
onMounted(() => {
  const fullSizePaths = Object.values(fullSizeImages)
  const thumbnailPaths = new Map(
    Object.values(thumbnailImages).map(path => [
      path.split('/').pop()?.replace('thumbnail-', ''), // Get base filename
      path
    ])
  )

  imageList.value = fullSizePaths
    .map(fullPath => {
      const fileName = fullPath.split('/').pop() || ''
      return {
        fullSize: fullPath,
        // Use thumbnail if available, otherwise use full-size image
        thumbnail: thumbnailPaths.get(fileName) || fullPath
      }
    })
    .sort((a, b) => {
      // Extract numbers from filenames for natural sorting
      const aName = a.fullSize.split('/').pop() || ''
      const bName = b.fullSize.split('/').pop() || ''
      const aNum = parseInt(aName.match(/\d+/)?.[0] || '0')
      const bNum = parseInt(bName.match(/\d+/)?.[0] || '0')
      return aNum - bNum
    })
})

// Provide the image list to child components
provide(ImageListSymbol, imageList)
</script>