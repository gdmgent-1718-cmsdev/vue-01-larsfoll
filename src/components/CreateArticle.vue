<template>
  <div class="create">
    <h1 class="title">{{ msg }}</h1>

    <form method="POST" @submit.prevent="createArticle">

    <div class="field">
      <label class="label" for="title">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Write the title here" name="title" v-model="article.title">
      </div>
    </div>

    <div class="field">
    <label class="label" for="body">Body</label>
      <div class="control">
        <textarea class="textarea" placeholder="Write the body here" name="body" v-model="article.body"></textarea>
      </div>
    </div>

    <div class="control">
      <button type="submit" class="button is-primary">Submit</button>
    </div>

    </form>

  </div>
</template>

<script>
import {HTTP} from '../db';
import axios from 'axios'

export default {
  name: 'Create',
  data () {
    return {
      msg: "Create an article",
      article: {
        user: 'Lars',
        title: '',
        body: '',
        id: ''
      }
    }
  },
  methods: {
    createArticle () {
      let newArticle =  {
        user: 'Lars',
        title: this.article.title,
        body: this.article.body,
        id: ''
      }
      HTTP.post('articles', newArticle)
      .then(window.location.href='http://localhost:8080/read')
      .catch(function(error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
