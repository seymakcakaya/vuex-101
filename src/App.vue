<template>
  <div>
    <p>
      {{ $store.state.person }}
      {{ $store.state.permissions }}
    </p>
    <ul v-for="permission in $store.state.permissions" :key="permission">
      <li>
        {{ permission }}
      </li>
    </ul>
    <ul v-for="item in $store.state.itemList" :key="item.id">
      <li>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$store);

    console.log("sebzeler", this.$store.getters.sebzeler);
    console.log("user", this.$store.getters.activeUser);
  },

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
