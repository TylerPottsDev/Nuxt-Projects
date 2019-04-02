<template>
  <v-layout row wrap>
    <v-flex pa-1 xs4 v-for="project in $store.state.projects" :key="project.id">
      <v-card>
        <v-card-title class="headline text-uppercase">{{ project.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>
            <strong>Description</strong>: {{ project.desc }}
          </p>
          <p>
            <strong>Active tasks</strong>: {{ project.tasks.filter(task => !task.done).length }} <br>
            <strong>Completed tasks</strong> {{ project.tasks.filter(task => task.done).length }}
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <nuxt-link :to="'/project/' + project.id"><v-btn flat>Open</v-btn></nuxt-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
