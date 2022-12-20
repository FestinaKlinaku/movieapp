<template>
    <header>
      <router-link to="/">
        <h1> {{ title }} </h1>
      </router-link>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: String
    }
}
</script>

<style scoped>
  header {
    background-color: #111;
    text-align: center;
    color: white;
    padding: 20px 0;
    margin-bottom: 40px;
  }
  h1 {
    margin: 0;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #0d6efd;
  }
</style>
