<template>
    <div class="listNovels">
        <h1>This is List of Novels Components</h1>
    </div>
</template>
<style>
.listNovels {
    background-color: aquamarine;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    padding: 15px;
    margin-top: 95px;
}
</style>