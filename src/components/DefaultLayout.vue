<template>
  <div class="">
    <navbar />
    <main>
      <div>
        <router-view />
      </div>
    </main>
    <Footer/>
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "./Footer.vue";
</script>