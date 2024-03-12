<template>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <h1>This is my title</h1>
  <h2 class="font-[Hiruko]">Another one</h2>
  <div
    class="h-20 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
  >
    Tester page
    <NavigationList></NavigationList>
  </div>
  <div class="xd bg-background">This is xd</div>
  <div>
    <div class="flex flex-col">
      <button @click="selectItem('home')">Home</button>
      <button @click="selectItem('about')">About</button>
      <button @click="selectItem('services')">Services</button>
    </div>
    <div>
      <p class="text-red-700">
        Selected Item: {{ navigationStore.selectedItem }}
      </p>
    </div>
  </div>
</template>

<style>
.xd {
  margin: 5rem;
}
</style>

<script lang="ts" setup>
const navigationStore = useNavigationStore();

const selectItem = (item: string) => {
  navigationStore.selectItem(item);
  navigateTo("/test#" + item);
};
</script>
