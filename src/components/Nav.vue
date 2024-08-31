<script setup>
import { ref } from "vue";

const navLinks = ref([
  { id: "home", name: "Home", href: "#home" },
  { id: "about", name: "About", href: "#about" },
  { id: "contact", name: "Contact", href: "#contact" },
]);
</script>

<template>
  <nav>
    <ul class="flex items-center gap-5">
      <li v-for="navLink in navLinks" :key="navLink.id">
        <a
          class="text-slate-300 hover:text-slate-50"
          :href="navLink.href"
          v-smooth-scroll
          >{{ navLink.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>
