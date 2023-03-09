<template>
    <li class="result">
      <h2>{{ movie.title ? movie.title : serie.name}}</h2>
      <h3>{{ movie.original_title ? movie.original_title : serie.original_name }}</h3>
      <p>{{ movie.original_language }}</p>
      <p>{{ movie.vote_average }}</p>
    </li>
  </template>
  
  <script>
    export default {
      props: {
        movie: {
          type: Object,
          required: true
        },
        serie: {
          type: Object,
          required: true
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>

  .result{
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  </style>