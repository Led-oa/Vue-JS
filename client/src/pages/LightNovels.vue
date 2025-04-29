<script setup>
import TableNovels from '../components/TableNovels.vue';
</script>
<template>
    <div class="listNovels">
        <h1 class="titleNovelsPage">Listes des Livres</h1>
        <TableNovels />
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