<template>
  <div class="p-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="86"
      height="4"
      viewBox="0 0 86 4"
      class="transition-all duration-300 ease-in-out transform-gpu fill-highlight dark:fill-highlight-dark hover:w-full"
      @mouseover="handleHover"
      @mouseleave="handleLeave"
    >
      <rect :width="rectWidth" height="4" rx="2" />
      <circle :cx="circleCx" cy="2" r="2" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const rectWidth = ref<number>(40);
const circleCx = ref<number>(44);

// Change the width of the rect and position of the circle on hover
const handleHover = () => {
  rectWidth.value = 80;
  circleCx.value = 84;
};

// Reset the width of the rect and position of the circle when not hovering
const handleLeave = () => {
  rectWidth.value = 40;
  circleCx.value = 44;
};
</script>

<style scoped>
/* Transition width property */
.hover\:w-full {
  width: 86px;
}

/* Adjust width of the rect */
rect {
  transition: width 0.3s ease-in-out;
}

/* Adjust position of the circle */
circle {
  transition: cx 0.3s ease-in-out;
}
</style>
