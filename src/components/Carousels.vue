<template>
    <v-row>
      <v-col cols="12">
          
        <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" :style="slide.backgroundImg">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide.content }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      slides: []
    };
  },
  name: "Carousels",
  props: {
    //获取banner图片的url
    url: String
  },

  mounted: function() {
    console.log(this.url);
    this.slides = [
      {
        backgroundImg:
          "background-image: url('https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png');",
        content: "jackdou"
      },
      {
        backgroundImg:
          "background-image: url('https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png');",
        content: "milly"
      }
    ];
  }
};
</script>

<style scoped>
.bg_img {
}
</style>
