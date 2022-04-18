<template>
 <div class="controller grid justify-center">
    <div
      class="controller-buttons grid grid-cols-8 grid-rows-8 gap-4 p-8 place-content-center"
    >
      <Ch5button id="101" class="text-gray-300 col-start-2 row-start-3 justify-self-center">
        <Icon class="btn2" icon="cil:caret-top" width="7rem" />
      </Ch5button>
      <Ch5button id="102" class="text-gray-300 col-start-3 row-start-4 justify-self-center">
        <Icon class="btn2" icon="cil:caret-right" width="7rem" />
      </Ch5button>
      <Ch5button id="103" class="text-gray-300 col-start-2 row-start-5 justify-self-center">
        <Icon class="btn2" icon="cil:caret-bottom" width="7rem" />
      </Ch5button>
      <Ch5button id="104" class="text-gray-300 col-start-1 row-start-4 justify-self-center">
        <Icon class="btn2" icon="cil:caret-left" width="7rem" />
      </Ch5button>
      <Ch5button id="105" class="text-gray-300 col-start-2 row-start-4 justify-self-center">
        <Icon class="btn2" width="6rem" icon="akar-icons:circle" />
      </Ch5button>
      <Ch5button
        id="106"
        class="btn2 grid place-items-center row-start-2 col-start-1 col-end-3 text-7xl border-4"
      >
        Guide
      </Ch5button>
      <Ch5button
        id="107"
        class="btn2 grid place-items-center row-start-2 col-start-4 col-end-6 text-7xl border-4"
      >
        Menu
      </Ch5button>
      <Ch5button
        id="108"
        class="btn2 grid place-items-center row-start-2 col-start-7 col-end-9 text-7xl border-4"
      >
        Fav
      </Ch5button>

      <Ch5slider
        id="99"
        class=" col-start-7 col-end-9 row-start-1 row-end-1 text-3xl justify-self-center"
      />

      <!-- <span class="shadow text-gray-300  row-start-1 col-start-5 ml-20 text-3xl">Volume</span> -->
      <Ch5button id="109" class="text-gray-300  col-start-1 row-start-6 justify-self-center">
        <Icon class="btn2" width="7rem" icon="cil:info" />
      </Ch5button>
      <Ch5button
        id="110"
        class="text-gray-300 col-start-3 row-start-6 justify-self-center"
      >
        <Icon class="btn2" width="7rem" icon="fluent:video-play-pause-24-regular" />
      </Ch5button>
      <Ch5button id="111" class=" text-gray-300 col-start-7 row-start-4 justify-self-center">
        <Icon class="btn2" width="6rem" icon="cil:arrow-thick-top" />
      </Ch5button>
      <Ch5button id="111" class=" text-gray-300 col-start-8 row-start-4 justify-self-center">
        <Icon class="btn2" width="6rem" icon="cil:arrow-thick-top" />
      </Ch5button>
      <span
        class="text-gray-300 text-2xl col-start-8 row-start-3 row-end-3  grid justify-self-center items-end mt-10"
        >Volume</span
      >
      <span
        class="text-2xl text-gray-300 col-start-7 row-start-3 row-end-3 grid justify-self-center items-end mt-10"
        >Channel</span
      >
      <Ch5button id="112" class=" text-gray-300 col-start-7 row-start-5 justify-self-center">
        <Icon class="btn2" width="6rem" icon="cil:arrow-thick-bottom" />
      </Ch5button>
      <Ch5button id="112" class=" text-gray-300 col-start-8 row-start-5 justify-self-center">
        <Icon class="btn2" width="6rem" icon="cil:arrow-thick-bottom" />
      </Ch5button>
      <Ch5button
        id="113"
        class="btn2 grid place-items-center text-7xl col-start-4 row-start-3 border-4 rounded-xl "
      >
        1
      </Ch5button>
      <Ch5button
        id="114"
        class="btn2 grid place-items-center text-7xl col-start-5 row-start-3 border-4 rounded-xl"
      >
        2
      </Ch5button>
      <Ch5button
        id="115"
        class="btn2 grid place-items-center text-7xl col-start-6 row-start-3 border-4 rounded-xl"
      >
        3
      </Ch5button>
      <Ch5button
        id="116"
        class="btn2 grid place-items-center text-7xl col-start-4 row-start-4 border-4 rounded-xl"
      >
        4
      </Ch5button>
      <Ch5button
        id="117"
        class="btn2 grid place-items-center text-7xl col-start-5 row-start-4 border-4 rounded-xl"
      >
        5
      </Ch5button>
      <Ch5button
        id="117"
        class="btn2 grid place-items-center text-7xl col-start-6 row-start-4 border-4 rounded-xl"
      >
        6
      </Ch5button>
      <Ch5button
        id="118"
        class="btn2 grid place-items-center text-7xl col-start-4 row-start-5 border-4 rounded-xl"
      >
        7
      </Ch5button>
      <Ch5button
        id="119"
        class="btn2 grid place-items-center text-7xl col-start-5 row-start-5 border-4 rounded-xl"
      >
        8
      </Ch5button>
      <Ch5button
        id="120"
        class="btn2 grid place-items-center text-7xl col-start-6 row-start-5 border-4 rounded-xl"
      >
        9
      </Ch5button>
      <Ch5button
        id="121"
        class="btn2 grid place-items-center text-7xl col-start-4 row-start-6 border-4 rounded-xl"
      >
        _
      </Ch5button>
      <Ch5button
        id="122"
        class="btn2 grid place-items-center text-7xl col-start-6 row-start-6 border-4 rounded-xl"
      >
        ent
      </Ch5button>
    </div>
  </div>
</template>

<script>
import Ch5button from '../components/Ch5button.vue'
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
  }
}

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