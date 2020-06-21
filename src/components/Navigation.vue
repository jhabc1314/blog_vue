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
      <v-btn text href="/">Home</v-btn>
      <v-btn text href="/posts">Posts</v-btn>
    </div>
    <v-menu offset-y >
      <template  v-slot:activator="{on,attrs}">
        <v-app-bar-nav-icon class="hidden-md-and-up" v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item href="/home">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item href="/posts">
          <v-list-item-title>Posts</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
