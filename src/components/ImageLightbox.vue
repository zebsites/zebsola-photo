<template>
  <div class="image-container" @click="showLightbox">
    <img :src="props.thumbnail || props.src" :alt="alt"/>
  </div>
  <Teleport to="body">
    <div v-if="isOpen" class="lightbox" @click.self="closeLightbox" @keydown="handleKeydown" tabindex="0">
      <div class="lightbox-content" @click.stop>
        <img :src="currentImage" :alt="alt"/>
        <button class="close-button" @click="closeLightbox">&times;</button>
        <button class="nav-button prev" @click="showPrevious" v-if="hasPrevious">&lt;</button>
        <button class="nav-button next" @click="showNext" v-if="hasNext">&gt;</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {ref, inject, onMounted, computed, type Ref} from 'vue'
import {ImageListSymbol} from './lightboxSymbol'

interface ImagePair {
  fullSize: string;
  thumbnail: string;
}

const props = defineProps<{
  src: string
  thumbnail?: string
  alt?: string
}>()

// Try to inject existing image list
const sharedImageList = inject<Ref<ImagePair[]>>(ImageListSymbol)
if (!sharedImageList) {
  throw new Error('ImageLightbox must be used within a component that provides ImageListSymbol')
}

// Current image index
const currentIndex = ref(0)

const isOpen = ref(false)

// Compute current image source for lightbox
const currentImage = computed(() => {
  return sharedImageList.value[currentIndex.value].fullSize
})

// Navigation state
const hasNext = computed(() => currentIndex.value < sharedImageList.value.length - 1)
const hasPrevious = computed(() => currentIndex.value > 0)

function showLightbox() {
  if (sharedImageList) {
    currentIndex.value = sharedImageList.value.findIndex(img => img.fullSize === props.src)
    isOpen.value = true
    document.body.style.overflow = 'hidden'
    // Set focus on lightbox for keyboard events
    setTimeout(() => {
      const lightbox = document.querySelector('.lightbox')
      if (lightbox) {
        ;(lightbox as HTMLElement).focus()
      }
    }, 0)
  } else {
    return;
  }
}

function closeLightbox() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function showNext() {
  if (hasNext.value) {
    currentIndex.value++
  }
}

function showPrevious() {
  if (hasPrevious.value) {
    currentIndex.value--
  }
}

// Handle keyboard navigation
function handleKeydown(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowRight':
      showNext()
      break
    case 'ArrowLeft':
      showPrevious()
      break
    case 'Escape':
      closeLightbox()
      break
  }
}

// Touch handling
let touchStartX = 0
let touchEndX = 0

function handleTouchStart(event: Event) {
  const touchEvent = event as TouchEvent
  touchStartX = touchEvent.changedTouches[0].screenX
}

function handleTouchEnd(event: Event) {
  const touchEvent = event as TouchEvent
  touchEndX = touchEvent.changedTouches[0].screenX
  const difference = touchStartX - touchEndX

  // Require a minimum swipe distance to trigger navigation
  if (Math.abs(difference) > 50) {
    if (difference > 0) {
      showNext()
    } else {
      showPrevious()
    }
  }
}

// Add touch event listeners when component is mounted
onMounted(() => {
  const lightbox = document.querySelector('.lightbox')
  if (lightbox) {
    lightbox.addEventListener('touchstart', handleTouchStart as EventListener)
    lightbox.addEventListener('touchend', handleTouchEnd as EventListener)
  }
})
</script>

<style scoped lang="scss">
.image-container {
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  outline: none; // Remove focus outline while keeping it focusable

  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    user-select: none; // Prevent image dragging

    img {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      pointer-events: none; // Prevent image dragging
    }
  }

  .close-button {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    padding: 5px;
    line-height: 1;

    &:hover {
      opacity: 0.8;
    }
  }

  .nav-button {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    padding: 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    border-radius: 4px;
    z-index: 1001;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &.prev {
      left: 20px;
    }

    &.next {
      right: 20px;
    }

    @media (max-width: 768px) {
      padding: 15px;
      font-size: 20px;

      &.prev {
        left: 10px;
      }

      &.next {
        right: 10px;
      }
    }
  }
}
</style>
