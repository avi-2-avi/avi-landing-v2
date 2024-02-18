<template>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <div class="h-20 bg-background dark:bg-background-dark">Tester page</div>
  <div class="xd bg-background">This is xd</div>
</template>

<style>
.xd {
  margin: 5rem;
}
</style>
