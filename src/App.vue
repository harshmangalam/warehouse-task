<template>
  <div class="app">
    <Navbar />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch("fetchWarehouses");
  }
};
</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container{
  max-width: 700px;
  margin: auto;

  margin-top: 70px;
}
</style>
