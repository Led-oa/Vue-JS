<template>
    <div class="navbar">
        <div class="menu">
            <router-link :to="{ name: 'home' }" class="menu_item">
                Home
            </router-link>
            <router-link :to="{ name: 'light-novels' }" class="menu_item">
                Light Novels
            </router-link>
            <router-link :to="{ name: 'projects' }" class="menu_item">
                Projects
            </router-link>
            <router-link :to="{ name: 'about' }" class="menu_item">
                About Us
            </router-link>
        </div>
    </div>
</template>

<style>

.navbar {
    background-color: rgb(155, 0, 0);
    display: flex;
    justify-content: center;
    padding: 10px 10px 25px 10px;
    position: fixed;
    width: 1346px;
    top: 0px;
    left: 0px;

}

.menu {
    /* border: solid firebrick; */
    text-align: center;
    width: 50%;
    padding-top: 10px;
    display: flex;
    justify-content: center;
}

.menu_item {
    /* border: solid lawngreen; */
    border-radius: 15px;
    padding: 10px 10px 10px 10px;
    margin: 0px 10px 0px 5px;
    text-align: center;
    text-decoration: none;
    color: white;
    width: 15%;
}

.menu_item:hover {
    background-color: rgb(0, 0, 0);
}
</style>