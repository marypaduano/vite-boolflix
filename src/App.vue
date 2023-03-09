<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import store from './store'
import axios from 'axios'

export default {
  components: {
    Main,
    Header
  },
  data() {
    return {
      store: store
    }
  },
  computed: {
    search() {
      return this.store.search
    },
  },
  watch: {
    search(newVal, oldVal) {
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      this.fetchMovies()
      this.fetchSeries()
    },
    fetchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.store.apiKey,
          query: this.store.search,
          language: 'it-IT'
        }
      }).then(res => {
        const results = res.data.results
        this.store.movies = results
      }).catch(() => {
        this.store.movies = []
      })
    },
    fetchSeries() {
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: this.store.apiKey,
          query: this.store.search,
          language: 'it-IT'
        }
      }).then(res => {
        const results = res.data.results
        this.store.series = results
      }).catch(() => {
        this.store.series = []
      })
    }
  }
}

</script>

<style lang="scss" >
@use './style/general.scss';
</style>
