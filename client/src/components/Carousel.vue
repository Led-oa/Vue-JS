<template>
    <div class="one">
        <h1 class="titleOne">Who am I ?</h1>
        <div class="presentationOne">
            <div class="picOne">
                <img class="pdpPic" alt="picture" />
            </div>
            <div class="introOne">
                <p>Introduction</p>
                <div class="textIntro">
                    Hello, I am LEDOA Gaël. <br />
                    Some text about me. Some text about me. I am lorem ipsum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.carousel {
    background-color: rgb(0, 255, 200);
}

/* Style section ONE */
.one {
    grid-column: 1/4;
    grid-row: 1;
    border-top-style: solid;
    border-bottom-style: solid;
    border-radius: 35px;
    text-align: justify;
    padding: 0px 25px 20px 25px;
    color: white;
    /* background-color: rgb(87, 154, 136); */
}

.titleOne {
    text-align: center;
}

.presentationOne {
    display: inline-flex;
    justify-content: space-evenly;
    padding: 10px 10px 10px 10px;
    overflow: hidden;
}

.introOne {
    text-align: center;
    width: 65%;
    /* border: solid forestgreen; */
    padding-right: 25px;
}

.picOne {
    text-align: center;
    width: 35%;
    /* border: solid violet; */
    overflow: hidden;
}

.pdpPic {
    width: 380px;
    height: 520px;
    border-radius: 25px;
}
</style>