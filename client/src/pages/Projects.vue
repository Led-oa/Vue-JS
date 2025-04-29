<script setup>
import TableProjects from '../components/TableProjects.vue';
</script>
<template>
    <div class="listProjects">
        <h1 class="titleProjectPage">Listes des Projets</h1>
        <TableProjects />
    </div>
</template>

<style>
.listProjects {
    /* background-color: crimson; */
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

.titleProjectPage {
    border: solid red;
    border-radius: 25px;
    text-align: center;
}
</style>