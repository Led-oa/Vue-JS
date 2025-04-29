<script setup>
defineProps({
    novels: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Illustration</th>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Volumes</th>
                <th>Liens</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="novel in novels" :key="novel.id">
                <td>{{ novel.id }}</td>
                <td><img :src="novel.illustration" alt="Illustration" width="60" /></td>
                <td>{{ novel.titre }}</td>
                <td>{{ novel.auteur }}</td>
                <td>{{ novel.volumes }}</td>
                <td><a :href="novel.liens" target="_blank">Voir</a></td>
            </tr>
        </tbody>
    </table>
</template>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    /* border: solid black; */
    border: 1px solid black;
    width: 100%;
}

th,
td {
    border: 1px solid black;
    /* border: solid black; */
    text-align: center;
}
</style>