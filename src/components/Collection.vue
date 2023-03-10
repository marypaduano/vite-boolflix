<template>
    <li class="result">
        <h2>{{ element.title ? element.title : element.name }}</h2>
        <h3>{{ element.original_title ? element.original_title : element.original_name }}</h3>
        <img v-if="element.flag" :src="element.flag" width="30" alt="">
        <p v-else>{{ element.original_language }}</p>
        <p>{{ element.vote_average }}</p>
        <ul class="vote">
            <li>
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li>
                <font-awesome-icon icon="fa-regular fa-star" />
            </li>
        </ul>
        
        
        
    </li>
</template>
  
<script>
export default {
    props: {
        element: {
            type: Object,
            required: true
        }

    },
    
}
</script>
  
<style lang="scss" scoped>
.result {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.vote{
    display: flex;
}
</style>