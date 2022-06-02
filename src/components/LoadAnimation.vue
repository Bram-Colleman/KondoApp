<template>
<div class="loading"></div>
</template>

<style scoped>
.loading {
  height: 316px;
  width: 1088px;
  background: url("../assets/loadingSprite.png") no-repeat;
  background-size: cover;
  animation: load 1.5s steps(6);
  animation-fill-mode: forwards;
  transform: translateX(-45%) scale(0.1);
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