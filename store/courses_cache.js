export const state = () => ({
  courses: [],
  currentCourse: "",
  languages: ""
});

export const mutations = {
  set_CourseInfo(state, data) {
    state.courses.push(data.course);
    state.currentCourse = data.course;
    state.languages = data.languages;
  }
};

export const actions = {
  async get_COURSE({ commit }, title) {
    let { data } = await this.$axios.get(`/api/courses?title=${title}`);
    commit("set_CourseInfo", data);
  }
};
