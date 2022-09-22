import { createStore } from "vuex";
const store = createStore({
  state: {
    user: {
      age: 22,
      name: "seyma",
      lastName: "akcakaya",
      password: 1234,
      tc: 111,
    },
    theme: "dark",
    permissions: [1, 2, 3, 4, 5],
    itemList: [
      { id: 1, title: "elma", type: "meyve" },
      { id: 2, title: "muz", type: "meyve" },
      { id: 3, title: "nar", type: "meyve" },
      { id: 4, title: "havuç", type: "sebze" },
      { id: 5, title: "patates", type: "sebze" },
      { id: 6, title: "soğan", type: "sebze" },
      { id: 7, title: "kıvırcık", type: "yeşillik" },
      { id: 8, title: "fesleğen", type: "yeşillik" },
      { id: 9, title: "nane", type: "yeşillik" },
    ],
  },
  getters: {
    sebzeler: (state) => state.itemList.filter((item) => item.type === "sebze"),
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
