<template>
    <section class="home-hero">
        <v-container :fluid="true" class="home-hero__content">
            <v-row>
                <v-col class="d-flex flex-column justify-center home-hero__content-text">
                    <p>Welcome to my website.</p>
                    <p>I'm a enginner apprentice.</p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style lang="css">
.home-hero__content{
    background: url(../assets/home-hero.jpg);
    background-size: cover;
    background-position: center bottom;
    width: 100%;
    height: 50vh;
}
.home-hero__content-text{
    width: 100%;
    height: 50vh;
    color:white;
    text-align: center;
    margin: auto;
    font-size: 40px;
    font-weight: bold;
}
@media only screen and (max-width:1024px) {
    .home-hero__content-text{
    font-size: 28px;
}
}

</style>