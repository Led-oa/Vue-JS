<template>
    <div class="listProjects">
        <h1>This is List of Projects Component</h1>
    </div>
</template>

<style>
.listProjects {
    background-color: crimson;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    padding: 15px;
    margin-top: 95px;
}
</style>