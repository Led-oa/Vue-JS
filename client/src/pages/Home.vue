<script setup>
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';
import Carousel from '../components/Carousel.vue';
</script>
<template>
    <div class="home">
        <!-- <h1>This is Home Page Components</h1> -->
        <h3 class="title">Vue App Book</h3>
        <div class="presentation">
            <p>
                Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis reprehenderit odio,
                debitis eaque at possimus deserunt, labore officiis sint architecto quaerat corrupti tempore
                exercitationem, repellat ullam? Aliquam, ut saepe.
            </p>
        </div>
    </div>
</template>

<style>
.home {
    /* background-color: yellow; */
    color: black;
    display: grid;
    grid-template-columns: repeat(1, 50%);
    gap: 10px;
    row-gap: 50px;
    grid-auto-rows: minmax(100px, auto);
    padding: 5px;
    margin-top: 155px;
    /* border: solid red; */
    border-radius: 25px;
    justify-content: center;

}

.title {
    /* background-color: teal; */
    /* border: solid red; */
    border-radius: 25px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
}

.presentation{
    /* border: solid red; */
    border-radius: 25px;
    text-align: center;

}
</style>