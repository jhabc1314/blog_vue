<template>
  <v-row>
    <v-col cols="12">
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide.content }}</div>
            </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    slides: []
  }),
  name: "Carousels",
  props: {
    //获取banner图片的url
    url: String
  },

  mounted: function() {
    console.log(this.url);
    let src = require('../assets/22695.jpg');
    this.slides = [
      {
        src: src,
        content: "jackdou"
      },
      {
        src: src,
        content: "jackdou"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
        content: "milly"
      }
    ];
  }
};
</script>
