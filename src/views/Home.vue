<template>
  <v-container>
    <Carousels url="http://vip-test.chelun.com/V2/index" />
    <PostsCards />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Carousels from "@/components/Carousels";
import PostsCards from "@/components/PostsCards";

export default {
  name: "Home",

  components: {
    Carousels,
    PostsCards,
  },

  data: () => ({
    //
  })
};
</script>
