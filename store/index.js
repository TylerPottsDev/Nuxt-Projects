export const state = () => ({
  projects: []
})

export const mutations =  {
  newProject (state, project) {
    state.projects.push(project);
  },
  newTask (state, payload) {
    console.log("New Task");
  }
}