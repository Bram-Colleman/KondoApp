<script setup>
import {ref} from "vue";

let favorite = ref(false);

</script>  

<template>
<div class="container">
    <div class="card">
        <div class="flex">
            <i class="fa-solid fa-location-dot"></i>
            <span>Stationstraat 18a</span>
        </div>
        <div class="flex">
            <i class="fa-solid fa-user"></i>
            <span>Anneleen</span>
        </div>
        <div class="flex">
            <i class="fa-solid fa-circle-info"></i>
            <span>1 slaapkamer, 81m&sup2;</span>
        </div>
        <div class="flexrow">
            <div>
                <i class="fa-regular fa-star" v-if="favorite == false" @click="favorite = !favorite"></i>
                <i class="fa-solid fa-star" v-if="favorite" @click="favorite = !favorite"></i>
            </div>
            <Routerlink to="/details" class="btn">Meer info</Routerlink>
        </div>
    </div>
</div>

</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: .5rem;
}
i {
    font-size: 1.5rem;
    margin: .5rem;
    color: #5AB522;
}
.flex {
    display: flex;
    align-items: center;
}
.flexrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
}
.btn {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

</style>