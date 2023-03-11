<template>
    <li class="result">
        <img class="image" :src="item.src" alt="image">
        <h2>{{ item.title }}</h2>
        <h3>{{ item.original_title }}</h3>
        <img class="flag" v-if="item.flag" :src="item.flag" width="30" alt="">
        <span v-else>{{ item.original_language }}</span>
        <span>{{ item.convertedStars }}</span>
        <ul class="vote">
            <li v-for="num in 5" :key="num">
                <font-awesome-icon v-if="num <= item.convertedStars" icon="fa-solid fa-star" />
                <font-awesome-icon v-else icon="fa-regular fa-star" />
            </li>
        </ul>
    </li>
</template>
  
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

}
</script>
  
<style lang="scss" scoped>
.result {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px;
    background-color: rgba(156, 155, 155, 0.756);

    .image {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.flag{
    width: 32px;
    padding: 20px 0;
}

.vote {
    display: flex;
}
</style>