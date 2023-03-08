<template>
    <li class="result">
      <h2>{{ movie.title }}</h2>
      <h3>{{ movie.original_title }}</h3>
      <p>{{ movie.language }}</p>
      <p>{{ movie.vote_average }}</p>
    </li>
  </template>
  
  <script>
    export default {
      props: {
        movie: {
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
  }
  </style>