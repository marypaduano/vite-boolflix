<template>
    <main>
      <div class="container">
        <ul class="main-content">
          <Collection v-for="movie in movies" :key="movie.id" :movie="movie" />
          <Collection v-for="serie in series" :key="serie.id" :serie="serie" />
        </ul>
      </div>
    </main>
  </template>
  
  <script>
    import store from '../store'
    import Collection from './Collection.vue'

    export default {
      components: {
        Collection
      },
      data() {
        return {
          store
        }
      },
      computed: {
        movies() {
          return this.store.movies
        },
        series(){
            return this.store.series
        }
        
      } 
    }
  </script>
  
  <style lang="scss" scoped>
  .main-content {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
    padding: 50px 0;
  }
  </style>