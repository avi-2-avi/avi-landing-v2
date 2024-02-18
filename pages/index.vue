<template>
  <div
    class="bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
  >
    <div class="container mx-auto px-20 grid grid-cols-2 h-screen">
      <div class="overflow-hidden">
        <p class="h-screen py-10">Left side</p>
      </div>
      <div
        class="bg-red-600 overflow-y-auto scrollbar-hidden scroll-smooth py-10"
      >
        <p>Right side</p>
      </div>
    </div>
  </div>
</template>

<style>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* For Firefox */
.scrollbar-hidden {
  scrollbar-width: none;
}

body {
  overflow-y: hidden; /* Avoid showing vertical scrollbar*/
}
</style>
