<template>
    <main class="main">
      <div class="container">
        <Collection @onSearch="fetchFilms" />
      </div>
      <div class="container">
        <div>
          {{ store.search }}
        </div>
      </div> 
      <div class="container">
        <ul v-if="films.length > 0">
          <Collection v-for="element in films" :key="element.id" :film="element" />
  
        </ul>
        <div v-else>
          Nessun risultato
        </div>
      </div>
    </main>
  </template>


<script>
  import axios from 'axios'
  import store from '../store'
  import Collection from './Collection.vue'
  import Filters from './Filters.vue'

  export default {
    components: {
      Collection,
      Filters,
    },
    data() {
      return {
        films: [],
        store,
      }
    },
    computed: {
      films() {
        return this.store.films
      },
    },
    watch: {
      films() {
        console.log('films changed')
      }
    },
    methods: {
      fetchFilms() {
        const search = this.store.search
        const apiKey = this.store.apiKey
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
          .then((res) => {
            this.store.films = res.data.results
            console.log(this.store)
          }).catch((error) => {
            console.log(error)
            this.store.films = []
          })
      },
    },
    created() {
      console.log('store',this.store)
      this.fetchFilms()
    },
  }
</script>