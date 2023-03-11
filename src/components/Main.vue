<template>
    <main>
      <div class="container">
        <ul class="main-content">
          <Collection v-for="element in items" :key="element.id" :item="element" />
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
          store,
          flags: {
          it: '/it.png',
          en: '/en.png'
        }
        }
      },
      computed: {
        items() {
        const { movies , series } = this.store
        const items = [...movies,...series]
        return items.map((item) => {
          return {
            title: item.title ? item.title : item.name,
            originalTitle: item.original_title ? item.original_title : item.original_name,
            convertedStars: this.convertInStar(item.vote_average),
            flag: this.flags[item.original_language],
            src: item.poster_path ? 'https://image.tmdb.org/t/p/w342'+ item.poster_path : '/not-img.jpg',
          }
        })
      }
    },
    methods: {
      convertInStar(vote) {
        return Math.round( vote / 2 )
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