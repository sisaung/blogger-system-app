<template>
  <header>
      <h1>Blogger System</h1>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{name:'CreatePost'}">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    margin:20px 0px 0px 30px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  header h1 {
    color: #757575;
  }

  header a {
    color: #757575;
    padding: 15px;
    font-weight: bold;
    text-decoration: none;
    font-size: 17px;
  }
  .router-link-active {
    color: #424242;
  }
</style>