<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="register">Register</router-link>
    <router-link to="game">Game</router-link>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      msg: 'Register Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
