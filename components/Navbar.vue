<template>
  <nav>
    <v-toolbar>
      <nuxt-link to="/"><v-toolbar-title class="text-uppercase">Nuxt<span class="yellow--text">Projects</span>!</v-toolbar-title></nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="createModal = !createModal">Create Project</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-dialog v-model="createModal" width="768">
      <v-card>
        <v-card-title>
          Create a Project
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-text-field label="Title" v-model="title" required></v-text-field>
          <v-text-field label="Short Description" v-model="desc" required></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="createModal = false">Close</v-btn>
          <v-btn color="primary" @click="createProject">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      createModal: false,
      title: '',
      desc: ''
    }
  },
  methods: {
    createProject () {
      let id = Math.random().toString(36).slice(2);
      this.$store.commit('newProject', {
        id: id,
        title: this.title,
        desc: this.desc,
        tasks: []
      })

      this.createModal = false
      this.title = ''
      this.desc = ''

      this.$router.push('/project/' + id);
    }
  }
}
</script>
