<template>
  <div
    class="bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
  >
    <div
      class="container mx-auto px-20 grid grid-cols-1 lg:grid-cols-2 h-screen"
    >
      <div class="overflow-hidden py-20">
        <h1 class="font-[Hiruko] text-5xl 2xl:text-6xl">Cristina Vidal</h1>
        <h2 class="font-[Hiruko] text-2xl 2xl:text-3xl">Software Developer</h2>
        <svg
          height="10"
          viewBox="0 0 496 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-highlight dark:fill-highlight-dark mt-2 w-[400px] 2xl:w-[496px]"
        >
          <rect y="1" width="450" height="8" rx="4" />
          <rect x="456" y="1" width="24" height="8" rx="4" />
          <circle cx="491" cy="5" r="5" />
        </svg>
      </div>
      <div
        class="bg-red-600 overflow-y-auto scrollbar-hidden scroll-smooth py-20"
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
