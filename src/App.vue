<template>
  <nav>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

export default{
  setup() {
    return {
      AppID : '51773846',
      v : '5.154',
    };
  },
  beforeMount(){
    console.log();
    this.$router.push('/')
    this.init()
    this.login()
  },
  methods:{
    async login() {
      let settings = 1 << 1
      await VK.Auth.login(
        function() {},
        settings
      );
    },
    async init(){
      await VK.init({
        apiId: this.AppID
      });
    },
  }
}

</script>