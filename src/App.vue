<template>
  <div class="main">
    <Ch5button class="btn">1</Ch5button>
    <Ch5button class="btn">2</Ch5button>
    <Ch5button class="btn">3</Ch5button>
    <Ch5button class="btn">4</Ch5button>
    <Ch5button class="btn2">5</Ch5button>
    <Ch5button class="btn2">6</Ch5button>
    <Ch5button class="btn2">7</Ch5button>
    <Ch5button class="btn2">8</Ch5button>
  </div>
</template>
<script setup>
import Ch5button from './components/Ch5button.vue'
</script>
<style>
* {
background: rgb(240, 235, 235);
}
  .btn {
    font-size: 28px;
    color: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    background: #e0e0e0;
    border: 1px linear-gradient(to right, #e0e0e0, #fff);
    box-shadow: inset 10px 10px 19px #b5b5b5,
            inset -10px -10px 19px #ffffff;
            text-shadow: 1px 1px 1px #b5b5b5;
  }
  .btn:hover, .btn2:hover,  btn2:active {
    box-shadow: inset 10px 10px 19px #b5b5b5,
            inset -10px -10px 19px #ffffff,
            inset -10px -10px 19px #b5b5b5,
            inset 10px 10px 19px #ffffff;
  }

  .btn2 {
        border: 1px solid rgba(255, 255, 255, 0.459);

     font-size: 28px;
     color: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    border-radius: 50px;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  10px 10px 19px #b5b5b5,
             -10px -10px 19px #ffffff;
  }
  .btn:active {
     background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  10px 10px 19px #b5b5b5,
             -10px -10px 19px #ffffff;
  }
</style>