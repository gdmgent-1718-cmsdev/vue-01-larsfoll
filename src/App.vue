<template>
  <div id="app">
    <header>
      <nav class="navbar is-primary">

        <router-link to="/read" tag="a" class="navbar-item">Read</router-link>
        <router-link to="/create" tag="a" class="navbar-item">Create</router-link>

      </nav>
    </header>
    <main>
      <section class="section">
        <div class="container">
          <router-view></router-view>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
export default {
  name: 'app'
}
</script>

<style>

</style>
