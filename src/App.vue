<script setup>
import Nav from "./components/Nav.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-50">
    <header
      class="bg-slate-950 w-full fixed top-0 flex gap-[5rem] items-center p-4"
    >
      <a href="#home" v-smooth-scroll class="text-3xl font-medium"
        >SmoothScroll</a
      >
      <Nav />
    </header>
    <main>
      <Home />
      <About />
      <Contact />
    </main>
  </div>
</template>
