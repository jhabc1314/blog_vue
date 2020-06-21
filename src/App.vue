<template>
  <v-app>
    <Navigation />
    <v-main>
      
      <v-container >
      <Carousels url="http://v2.chelun.com/V2/index" />
      <PostsCards />
      </v-container>
      <Footer/>
    </v-main>
    
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Carousels from "./components/Carousels";
import PostsCards from "./components/PostsCards";
import Footer from "./components/Footer";


export default {
  name: "App",

  components: {
    Navigation,
    Carousels,
    PostsCards,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
