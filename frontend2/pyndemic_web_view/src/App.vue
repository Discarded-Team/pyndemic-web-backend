require('@/assets/styles/pyndemic_style.css')

<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="register">Register</router-link>
    <router-link to="game">Game</router-link>
    <h1>Pyndemic App</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="@/assets/styles/pyndemic_style.css">
</style>
