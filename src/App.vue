<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>
<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';
export default {
  name: "App",

  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
