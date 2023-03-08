<template>
    <header>  
      <div class="container">
        <div class="logo">
          BOOLFLIX
        </div>  
        <div>
          <input type="text" placeholder="Cerca contenuto" @keyup.enter="setSearch" v-model="currentSearch">
          <button @click="setSearch">Cerca</button>
        </div>
      </div>  
    </header>
  </template>
  
  <script>
    import store from '../store'

    export default {
      data() {
        return  {
          store,
          currentSearch: ''
        }
      },
      methods: {
        setSearch() {
          this.store.search = this.currentSearch
        }
      }
    }
  </script>

<style lang="scss" scoped>
header {
    padding: 30px 0;
    text-transform: uppercase;
    background-color: black;
    color: red;

    .container{
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;

        .logo{
            font-weight: 600;
            font-size: 38px;
        }
        input,
        button{
            padding: 5px 15px;
            border-radius: 10px;
        }       
    
    }
}
</style>