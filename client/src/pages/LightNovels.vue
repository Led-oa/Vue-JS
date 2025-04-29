<script setup>
import Tables from '../components/Tables.vue';
</script>
<template>
    <div class="listNovels">
        <h1 class="titleNovelsPage">List of Novels</h1>
        <Tables />
    </div>
</template>
<style>
.listNovels {
    /* background-color: aquamarine; */
    display: grid;
    grid-template-columns: repeat(1, 75%);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    padding: 15px;
    margin-top: 95px;
    border: solid red;
    border-radius: 25px;
    justify-content: center;
}

.titleNovelsPage {
    border: solid red;
    border-radius: 25px;
    text-align: center;
}
</style>