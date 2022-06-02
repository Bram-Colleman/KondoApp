<template>
    <div class="card">
            <div class="loading"></div>
    </div>
</template>

<style scoped>
.loading {
  height: 316px;
  width: 1088px;
  background: url("../assets/loadingSprite.png") no-repeat;
  background-size: cover;
  animation: load 1.5s steps(6);
  animation-fill-mode: forwards;
  transform: translateX(-36%) scale(0.2);
}
.container {
    position: relative;
    left: 50%;
    transform: translateX(-25%);
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
        background-position: 0 -1896px;
    }
}
</style>