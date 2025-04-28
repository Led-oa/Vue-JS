<script setup>
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';
import Carousel from '../components/Carousel.vue';
</script>
<template>
    <div class="section">
        <h1>This is Home Page Components</h1>
    </div>
</template>

<style>
.section {
    background-color: yellow;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    padding: 15px;
    margin-top: 95px;
}
</style>