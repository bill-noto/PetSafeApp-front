<template>

  <!--Header-->

  <header class="sticky top-0 z-50">
    <div id="head" class="flex h-24 justify-around bg-black bg-white border-b border-primary z-50">
      <div id="logo" class="flex flex-col justify-center block w-1/4">
        <h1 class="text-3xl">
          <router-link class="inline-block" to="/"><strong>Pet</strong>Safe</router-link>
        </h1>
        <h1 class="text-2xl ml-2">
          <router-link class="inline-block" to="/">Services</router-link>
        </h1>
      </div>
      <nav class="w-3/5 xl:w-2/5 sm:flex sm:items-center sm:justify-end">
        <ul class="flex xl:justify-around justify-end items-center h-full w-full sm:hidden">
          <router-link class="top bg-transparent p-2" to="/">
            <li>HOME</li>
          </router-link>
          <router-link class="top bg-transparent p-2" to="/news">
            <li>NEWS</li>
          </router-link>
          <router-link class="top bg-transparent p-2" to="/about">
            <li>ABOUT</li>
          </router-link>
          <a class="top bg-transparent p-2" href="http://fp-petsafeapp-back.test">
            <li>LOGIN/REGISTER</li>
          </a>
        </ul>
        <img @click="burgerMenu" src="../assets/menu.png" width="20" height="20"
             class="cursor-pointer hidden sm:inline-block">
      </nav>
    </div>

    <!--Small screen burger menu-->

    <ul ref="bmenu" class="bg-white text-center h-full w-full hidden border-b border-primary">
      <li class="hover:underline bg-transparent p-2">
        <router-link class="w-full" to="/">HOME</router-link>
      </li>
      <li class="hover:underline bg-transparent p-2">
        <router-link class="w-full" to="/news">NEWS</router-link>
      </li>
      <li class="hover:underline bg-transparent p-2">
        <router-link class="w-full" to="/about">ABOUT</router-link>
      </li>
      <li class="hover:underline bg-transparent p-2"><a class="w-full" href="http://fp-petsafeapp-back.test">LOGIN/REGISTER</a></li>
    </ul>
  </header>

  <!--Hero-->
  <div class="xl:w-4/5 xl:mx-auto">
    <div class="text-center my-10 mx-8">
      <h1 class="text-2xl sm:text-xl font-bold">WELCOME TO PETSAFE</h1>
      <p class="mt-4 w-4/5 mx-auto sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        dignissim leo sed
        velit congue semper. Nam eleifend varius lobortis. Aliquam erat volutpat. Maecenas imperdiet fringilla risus
        id ornare. Proin malesuada nunc ex, quis blandit nisi sodales in. Donec blandit ex quis pretium tempus. Sed
        et ultricies sapien.</p>
    </div>
  </div>

  <!--Cards-->

  <section class="xl:flex justify-around xl:w-4/5 h-auto xl:mx-auto">
    <div class="bg-gray-100 p-4 m-14 xl:m-0 xl:ml-10 xl:my-14">
      <img class="mx-auto" src="../assets/pawprint.svg" width="151" height="146" alt="Pawprint">
      <h1 class="text-center text-lg mt-11">DOG WALKING</h1>
      <p class="text-center text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
        dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
      <button @click="scrollTo"
              class="text-xl border border-black w-2/3 mt-6 mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125">
        MORE
      </button>
    </div>
    <div class="bg-gray-100 p-4 m-14 xl:m-0 xl:mx-10 xl:my-14">
      <img class="mx-auto" src="../assets/raindrops.svg" width="151" height="146" alt="Pawprint">
      <h1 class="text-center text-lg mt-11">DOG GROOMING</h1>
      <p class="text-center text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
        dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
      <button @click="scrollTo"
              class="text-xl border border-black w-2/3 mt-6 mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125">
        MORE
      </button>
    </div>
    <div class="bg-gray-100 p-4 m-14 xl:m-0 xl:mr-10 xl:my-14">
      <img class="mx-auto" src="../assets/home.svg" width="151" height="146" alt="Pawprint">
      <h1 class="text-center text-lg mt-11">DOG BOARDING</h1>
      <p class="text-center text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
        dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
      <button @click="scrollTo"
              class="text-xl border border-black w-2/3 mt-6 mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125">
        MORE
      </button>
    </div>
  </section>

  <!--Prices Description-->

  <div class="text-center my-10 mx-8">
    <hr class="my-10 mx-8 border-black">
    <h1 class="text-2xl sm:text-xl font-bold">PRICES</h1>
    <p class="mt-4 xl:w-4/5 xl:mx-auto sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      dignissim
      leo sed
      velit congue semper. Nam eleifend varius lobortis. Aliquam erat volutpat. Maecenas imperdiet fringilla risus
      id ornare. Proin malesuada nunc ex, quis blandit nisi sodales in. Donec blandit ex quis pretium tempus. Sed
      et ultricies sapien.</p>
  </div>

  <!--JS price calculator-->

  <div id="serviceDescription" class="bg-gradient-to-b from-black to-grey-200 h-2/4 py-10">
    <div class="w-4/5 lg:w-3/5 xl:w-3/5 bg-white border border-primary mx-auto p-4">
      <h1 class="text-center text-2xl pb-4">PRICE CALCULATOR</h1>
      <div class="block text-center">
        <form class="mx-auto inline-block text-sm" action="">
          <input v-model="calculator.params.dogWeight" class="px-1.5 mx-2.5 sm:block mb-3" type="number" id="weight"
                 name="weight"
                 placeholder="Dog Weight (In KG)">
          <input v-model="calculator.params.dogAge" class="px-1.5 mx-2.5 sm:block mb-3" type="number" id="age"
                 name="age"
                 placeholder="Dog Age (In Years)">
          <div class="inline md:block md:pt-2 lg:block lg:pt-2">
            <label for="less">Less Than 1 Year </label>
            <input v-model="calculator.params.dogIsPuppy" class="" type="checkbox" id="less" value="noRun" name="less">
          </div>
          <div class="py-4">
            <button @click="calculate" id="calculate" type="button"
                    class="mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125 text-xl border border-black w-1/3 sm:w-full">
              CALCULATE
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!--Modal & Overlay with results of calculator-->

  <div ref="modal" id="modal"
       class="fixed w-3/5 h-auto top-1/3 lModal bg-white p-6 border rounded-2xl z-50 mx-4 hidden">
    <div class="lg:flex xl:flex items-center justify-around text-center ">
      <div class="sm:w-full md:w-full w-1/3">
        <h1>Dog Walking</h1>
        <p id="dw" class="py-4 text-xl">{{calculator.results.dw}}</p>
      </div>
      <div class="sm:w-full md:w-full w-1/3">
        <h1 class="pb-1.5">Grooming</h1>
        <div class="flex justify-around">
          <div>
            <h2 class="text-sm">Simple</h2>
            <p id="gs" class="py-4 text-xl">{{calculator.results.gs}}</p>
          </div>
          <div>
            <h2 class="text-sm">Full</h2>
            <p id="gf" class="py-4 text-xl">{{calculator.results.gf}}</p></div>
          <div>
            <h2 class="text-sm">Medium</h2>
            <p id="gm" class="py-4 text-xl">{{calculator.results.gm}}</p>
          </div>
        </div>
      </div>
      <div class="sm:w-full md:w-full w-1/3">
        <h1>Dog Boarding</h1>
        <p id="db" class="py-4 text-xl">{{calculator.results.db}}</p>
      </div>
    </div>
    <button @click="modalClose" class="block mx-auto mt-4 sm:mt-8 md:mt-8 border w-1/3 border-black">Close</button>
  </div>
  <div id="overlay" ref="overlay" @click="overlayClose"
       class="fixed w-full h-full left-0 top-0 z-20 bg-black opacity-70 hidden"></div>

  <!--About-->
  <div class="xl:w-4/5 xl:mx-auto">
    <div class="sm:block flex justify-around my-10 mx-6">
      <div class="w-2/4 sm:w-full mr-8">
        <h1 class="text-center font-bold text-2xl sm:text-xl pb-6">ABOUT THE SERVICES</h1>
        <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          <br>
          <br>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,sed dignissim
          turpis justo ac lectus. Fusce pretium dignissim lectus, mattis fermentum turpis.
          <br>
          <br>
          Curabitur euismod congue diam, id sollicitudin dolor viverra quis. Quisque quis mauris ultrices,
          convallis orci nec, tristique erat.Morbi at enim tempor, rutrum velit convallis, molestie justo.</p>
      </div>
      <div class="w-2/4 sm:w-full sm:mt-12">
        <h1 class="text-center font-bold text-2xl sm:text-xl pb-6">WHAT TO EXPECT</h1>
        <dl class="w-full text-center">
          <dt class="border-primary border mb-1 p-1.5 cursor-pointer font-semibold">DOG WALKING</dt>
          <dd class="p-1.5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam odit
            aliquid, non qui animi quis. Neque eveniet nihil optio debitis, officia, nemo molestias,
            necessitatibus saepe dicta ullam hic perspiciatis!
          </dd>
          <dt class="border-primary border my-1 p-1.5 cursor-pointer font-semibold">GROOMING</dt>
          <dd class="p-1.5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam odit
            aliquid, non qui animi quis. Neque eveniet nihil optio debitis, officia, nemo molestias,
            necessitatibus saepe dicta ullam hic perspiciatis!
          </dd>
          <dt class="border-primary border mt-1 p-1.5 cursor-pointer font-semibold">DOG BOARDING</dt>
          <dd class="p-1.5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam odit
            aliquid, non qui animi quis. Neque eveniet nihil optio debitis, officia, nemo molestias,
            necessitatibus saepe dicta ullam hic perspiciatis!
          </dd>
        </dl>
      </div>
    </div>
    <div class="my-12">
      <a href="http://fp-petsafeapp-back.test">
        <button
            class="mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125 text-4xl font-bold border-2 border-black p-5 w-1/3 sm:w-3/5">
          BOOK NOW
        </button>
      </a>
    </div>
  </div>

  <!--Footer-->

  <footer>
    <div class="xl:w-4/5 xl:mx-auto">
      <div class="md:flex lg:flex xl:flex justify-around sm:p-4">
        <div class="w-1/3 sm:w-full my-4 sm:mb-6 ml-0 md:ml-12 lg:ml-12">
          <h1 class="text-center text-sm xl:text-base font-bold pb-5 sm:w-full">A Bit About Us</h1>
          <p class="text-xs xl:text-sm sm:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut
            ultricies
            dolor sed
            erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
        </div>
        <div class="w-1/3 sm:w-full my-4 sm:my-6">
          <h1 class="text-center text-sm xl:text-base font-bold pb-5">Useful</h1>
          <ul class="text-xs xl:text-sm md:pl-4 lg:pl-8 xl:pl-16">
            <li class="pb-1.5 sm:pb-2.5 sm:text-center">
              <router-link
                  class="sm:underline hover:underline" to="/">Home
              </router-link>
            </li>
            <li class="py-1.5 sm:py-2.5 sm:text-center">
              <router-link
                  class="sm:underline hover:underline" to="/news">News
              </router-link>
            </li>
            <li class="py-1.5 sm:py-2.5 sm:text-center">
              <router-link
                  class="sm:underline hover:underline" to="/about">About Us
              </router-link>
            </li>
            <li class="pt-1.5 sm:pt-2.5 sm:text-center"><a
                class="sm:underline hover:underline" href="http://fp-petsafeapp-back.test">Login/Register</a></li>
          </ul>
        </div>
        <div class="w-1/3 sm:w-full my-4 sm:my-6 md:mr-12 lg:mr-12">
          <h1 class="text-center text-sm xl:text-base font-bold pb-5 sm:w-full">Easy Contact</h1>
          <p class="text-xs xl:text-sm sm:w-full pb-1.5">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut
            ultricies
            dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
          <p class="sm:text-sm md:text-sm">Mail: <a class="underline text-sm xl:text-base"
                                                    href="mailto: contact@petsafe.com">contact@petsafe.com</a>
            <br>
            Tel: <a class="underline text-sm xl:text-base" href="tel:123-456-7890">(123) 456 - 7890</a></p>
        </div>
      </div>
      <hr class="w-full mx-auto">
      <p class="text-center text-sm xl:text-base py-4">® Copyright {{date}}. All Rights Reserved. </p>
    </div>
  </footer>
</template>

<script>


export default {
  name: 'Home',
  components: {},
  data() {
    return {
      calculator:
          {
            params: {
              dogWeight: null,
              dogAge: null,
              dogIsPuppy: null
            },
            results: {
              dw: null,
              gs: null,
              gm: null,
              gf: null,
              db: null
            }
          },
          date: null
    }
  },
  methods: {
    burgerMenu() {
      var content = this.$refs.bmenu;
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    },
    modal(action) {
      var modal = document.getElementById('modal').classList;
      var overlay = document.getElementById('overlay').classList;
      if (action === 'show') {
        modal.remove('fadeOut');
        overlay.remove('fadeOut');
        modal.remove('hidden');
        overlay.remove('hidden');
        modal.add('fadeIn');
        overlay.add('fadeIn');
      } else if (action === 'hide') {
        modal.remove('fadeIn');
        overlay.remove('fadeIn ');
        modal.add('fadeOut');
        overlay.add('fadeOut');
        modal.add('hidden');
        overlay.add('hidden');
      }
    }, modalClose() {
      this.modal('hide')
    },
    overlayClose() {
      this.modal('hide')
    },
    scrollTo() {
      var element = document.getElementById('serviceDescription');
      element.scrollIntoView({behavior: 'smooth'});
    },
    calculate() {
      this.modal('show');

      var w = this.calculator.params.dogWeight
      var a = this.calculator.params.dogAge
      var l = this.calculator.params.dogIsPuppy
      w = Number(w);
      a = Number(a);
      const smallDoggo = (n) => {
        if (n >= 1 && n <= 10) {
          this.calculator.results.dw = '$8 per hour';
          this.calculator.results.gs = '$15';
          this.calculator.results.gf = '$40';
          this.calculator.results.gm = '$30';
          this.calculator.results.db = '$12 per day';
        } else if (n > 10) {
          this.calculator.results.dw = '$7 per hour';
          this.calculator.results.gs = '$14';
          this.calculator.results.gf = '$38';
          this.calculator.results.gm = '$28';
          this.calculator.results.db = '$11 per day';
        }
      }
      if (w >= 2 && w < 5) {
        smallDoggo(a);
      }
      const mediumDoggo = (n) => {
        if (n >= 1 && n <= 10) {
          this.calculator.results.dw = '$10 per hour';
          this.calculator.results.gs = '$20';
          this.calculator.results.gf = '$50';
          this.calculator.results.gm = '$35';
          this.calculator.results.db = '$14 per day';
        } else if (n > 10) {
          this.calculator.results.dw = '$9 per hour';
          this.calculator.results.gs = '$17';
          this.calculator.results.gf = '$45';
          this.calculator.results.gm = '$32';
          this.calculator.results.db = '$13 per day';
        }
      }
      if (w >= 5 && w < 24) {
        mediumDoggo(a);
      }
      const bigDoggo = (n) => {
        if (n >= 1 && n <= 10) {
          this.calculator.results.dw = '$12 per hour';
          this.calculator.results.gs = '$30';
          this.calculator.results.gf = '$60';
          this.calculator.results.gm = '$40';
          this.calculator.results.db = '$15 per day';
        } else if (n > 10) {
          this.calculator.results.dw = '$11 per hour';
          this.calculator.results.gs = '$28';
          this.calculator.results.gf = '$55';
          this.calculator.results.gm = '$37';
          this.calculator.results.db = '$14 per day';
        }
      }
      if (w >= 24) {
        bigDoggo(a);
      }
      if (w <= 1 || l === true) {
        this.calculator.results.dw = '$6 per hour';
        this.calculator.results.gs = '$10';
        this.calculator.results.gf = '$30';
        this.calculator.results.gm = '$20';
        this.calculator.results.db = '$10 per day';
      }
    }
  },
  mounted() {
    var date = new Date();
    this.date = date.getFullYear();
  }
}
</script>