<template>
  <v-row>
    <!-- <v-col cols="12">
      <v-card color="#385F73" dark min-height="200">
        <v-card-title class="headline">Unlimited music now</v-card-title>

        <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

        <v-card-actions>
          <v-btn text>Listen Now</v-btn>
        </v-card-actions>
      </v-card>
    </v-col> -->

    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-card color="#1F7087" dark min-height="200">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="item.article_title"></v-card-title>

            <v-card-subtitle v-text="item.sub_title"></v-card-subtitle>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
          </v-avatar>
        </div>
        <v-card-actions>
          <v-btn text :href="`http://blog.jackdou.top/${item.id}/show`">查 看</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-pagination @input="getPosts" v-model="page" :length="length" circle></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import axios from  'axios';

export default {
  data: () => ({
    page: 1,
    length: 1, //多少页
    limit: 10, //每页几条数据
    url: process.env.VUE_APP_DOMAIN + "/api/home/posts",
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ]
  }),
  mounted: function() {
    this.getPosts();
  },
  methods: {
    getPosts: function(page = null) {
      let p = page === null ? this.page : page;
      console.log(this.url);
      let vm = this;
      axios
        .get(this.url + `?page=${p}&limit=${this.limit}`)
        .then(res => {
          console.log(res.data);
          let list = res.data.list;
          let count = parseInt(res.data.count);
          vm.length = Math.ceil(count / vm.limit);
          vm.items = list;
          
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>
