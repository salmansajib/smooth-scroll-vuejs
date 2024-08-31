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
      <h1 class="text-3xl font-medium">SmoothScroll</h1>
      <Nav />
    </header>
    <main>
      <Home />
      <About />
      <Contact />
    </main>
  </div>
</template>
