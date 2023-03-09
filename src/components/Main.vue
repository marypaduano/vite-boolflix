<template>
    <main>
      <div class="container">
        <ul class="main-content">
          <Collection v-for="element in movies" :key="element.id" :element="element" />
          <Collection v-for="element in series" :key="element.id" :element="element" />
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