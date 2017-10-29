<template>

  <div class="read">

    <h1 class="title">{{ msg }}</h1>

    <table class="table is-striped">

      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="article in articles" >
          <td v-text="article.title"></td>
          <td v-text="article.body"></td>
        </tr>
      </tbody>

    </table>

  </div>

</template>

<script>
import {HTTP} from '../db'

export default {
  name: 'Read',
  data() {
    return {
      msg: 'Read articles',
      articles: [],
      errors: []
    }
  },

  created() {
    HTTP.get('articles')
    .then(response => {
      this.articles = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
