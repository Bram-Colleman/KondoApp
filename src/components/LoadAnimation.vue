<template>
    <div class="card">
            <div class="loading"></div>
    </div>
</template>

<style scoped>
.loading {
  height: 63.2px;
  width: 217.6px;
  background: url("../assets/loadingSprite.png") no-repeat;
  background-size: cover;
  animation: load 1.5s steps(6);
  animation-fill-mode: forwards;
}
.card {
    padding-top: 60%;
    padding-bottom: 60%;
}
@keyframes load {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 0 -379.2px;
    }
}
</style>