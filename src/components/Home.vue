<template>
    <section class="home">
        <HomeHero/>
    </section>
</template>

<script>
import HomeHero from './HomeHero.vue'
export default{
    name:"Home",
    components:{
        HomeHero
    }
}
</script>

<style>
.home{
    padding-bottom: 50px;
}
</style>