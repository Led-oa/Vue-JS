<template>
    <div class="aboutUs">
        <h1>This is About Component</h1>
    </div>
</template>
<style>
.aboutUs {
    background-color: darksalmon;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    padding: 15px;
    margin-top: 95px;
}
</style>