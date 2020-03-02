export const state = () => ({
  auth: "",
  links: [
    {
      title: "ԳԼԽԱՎՈՐ",
      to: "/"
    },
    {
      title: "ԴԱՍԸՆԹԱՑՆԵՐ",
      to: "/courses"
    },
    {
      title: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ",
      to: "/services",
      dropdown: [
        {
          title: "ԽԱՂԵՐԻ ՊԱՏՐԱՍՏՈՒՄ",
          to: "/game-creation"
        },
        {
          title: "ՖԻԼՄԵՐԻ ՊԱՏՐԱՍՏՈՒՄ",
          to: "/film-creation"
        },
        {
          title: "ԱՐՀԵՍՏԱԿԱՆ ԻՆՏԵԼԵԿՏ",
          to: "/AI"
        }
      ]
    },
    {
      title: "ԹԵՍՏԵՐ",
      to: "/tests"
    },
    {
      title: "ԿԱՊ",
      to: "/contact"
    }
  ],
  active_lang: 0,
  dropdown_lang: ["En", "Ru", "Arm"],

  courses: [],

  drawer: false
});

export const mutations = {
  toggle(state) {
    state.drawer = !state.drawer;
  },
  SET_TOKEN(state, data) {
    state.auth = data;
  }
};
