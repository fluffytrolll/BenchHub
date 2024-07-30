<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <main id="main">
    <TheHeader />
    <section class="content">
      <RouterView />
    </section>
    <TheFooter />
  </main>
</template>

<style scoped lang="scss">
#main {
  display: flex;
  flex-flow: row nowrap;
  gap: 32px;
  width: 100%;
  height: 100%;
}
</style>
