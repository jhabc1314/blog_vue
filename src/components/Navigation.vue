<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title>Jack Dou</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down mx-5">
      <router-link to="/">
        <v-btn text>Home</v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn text>Posts</v-btn>
      </router-link>
    </div>
    <v-menu offset-y>
      <template v-slot:activator="{on,attrs}">
        <v-app-bar-nav-icon class="hidden-md-and-up" v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <router-link to="/">
            <v-list-item-title>Home</v-list-item-title>
          </router-link>
        </v-list-item>

        <v-list-item>
          <router-link to="/about">
            <v-list-item-title>About</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
