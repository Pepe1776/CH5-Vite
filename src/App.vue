<template>
 <div class="controller grid justify-center">
   <DtvRemote />
  </div>
</template>
<script>
import DtvRemote from './components/DtvRemote.vue'


export default {
  components: {
    DtvRemote
  },
  
}

</script>
<style>
* {
background: rgb(241, 240, 240);
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
  .btn:hover, .btn2:hover,  .btn2:active {
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
  .btn3 {
   border: 1px solid rgba(255, 255, 255, 0.459);

     font-size: 28px;
     color: #fff;
    padding: 15px;
    margin: 10px;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  10px 10px 19px #b5b5b5,
             -10px -10px 19px #ffffff;
  }
  .shadow {
       text-shadow: 2px 2px 8px #e91414;
  }
</style>