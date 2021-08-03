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
      <h1 class="text-2xl sm:text-xl font-bold">OUR TEAM</h1>
      <p class="mt-4 w-4/5 mx-auto sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        dignissim leo sed
        velit congue semper. Nam eleifend varius lobortis. Aliquam erat volutpat. Maecenas imperdiet fringilla risus
        id ornare. Proin malesuada nunc ex, quis blandit nisi sodales in. Donec blandit ex quis pretium tempus. Sed
        et ultricies sapien.</p>
    </div>
  </div>

  <!--team-->

  <div class="bg-gradient-to-b from-black to-grey-200 h-2/4 py-10">
    <div class="xl:w-4/5 xl:mx-auto">
      <section id="teamSection" class="xl:flex justify-around h-auto mx-auto">
        <div class="bg-gray-100 p-4 m-14 xl:m-0 xl:ml-10 xl:my-14">
          <img class="mx-auto rounded-full h-44 w-44 transition-all transform hover:scale-110 hover:border-black"
               src="../assets/man.png" alt="John">
          <h1 class="text-center text-lg mt-5">John Doe</h1>
          <p class="text-center text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies
            dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
          <button @click="johnButton" id="b1"
                  class="text-xl border border-black w-2/3 mt-6 mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125">
            MORE
          </button>
        </div>
        <div class="bg-gray-100 p-4 m-14 xl:m-0 xl:mx-10 xl:my-14">
          <img class="mx-auto rounded-full h-44 w-44 transition-all transform hover:scale-110 hover:border-black"
               src="../assets/woman.png" alt="Jane">
          <h1 class="text-center text-lg mt-5">Jane Doe</h1>
          <p class="text-center text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies
            dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
          <button @click="janeButton" id="b2"
                  class="text-xl border border-black w-2/3 mt-6 mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125">
            MORE
          </button>
        </div>
        <div class="bg-gray-100 p-4 m-14 xl:m-0 xl:mr-10 xl:my-14">
          <img class="mx-auto rounded-full h-44 w-44 transition-all transform hover:scale-110 hover:border-black"
               src="../assets/man2.png" alt="Mike">
          <h1 class="text-center text-lg mt-5">Mike Doe</h1>
          <p class="text-center text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies
            dolor sed erat pulvinar sodales. Phasellus gravida gravida turpis eu sollicitudin.</p>
          <button @click="mikeButton" id="b3"
                  class="text-xl border border-black w-2/3 mt-6 mx-auto block transform transition-all hover:bg-gray-200 hover:scale-125">
            MORE
          </button>
        </div>
      </section>
    </div>
  </div>

  <!--Modal & Overlay with info about team-->
  <div id="modal"
       class="fixed w-3/5 h-auto sm:text-sm top-1/3 lModal bg-white p-6 border rounded-2xl z-50 mx-4 hidden">
    <div>
      <h1 class="nm text-center">{{ name }}</h1>
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iste praesentium recusandae. Accusamus debitis, error eveniet impedit, iste magnam non porro possimus quidem quod rem repellendus repudiandae soluta tempora vel!</span>
        <br>
        <br>
      </p>
      <p>
        FaceBook: <span class="nm">{{ socialHandle }}</span> <br>
        Instagram: <span class="nm">{{ socialHandle }}</span>
      </p>
    </div>
    <button @click="modalClose" id="modalClose" class="block mx-auto mt-4 sm:mt-4 md:mt-8 border w-1/3 border-black">
      Close
    </button>
  </div>
  <div @click="overlayClose" id="overlay"
       class="fixed w-full h-full left-0 top-0 z-20 bg-black opacity-70 hidden"></div>

  <!--About -->
  <div class="xl:w-4/5 xl:mx-auto">
    <div class="sm:block flex justify-around my-10 mx-10">
      <div class="w-2/4 sm:w-full mr-8">
        <h1 class="text-center font-bold text-2xl sm:text-xl pb-6">ABOUT US</h1>
        <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <br>
          <br>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="w-2/4 sm:w-full">
        <h1 class="text-center font-bold text-2xl sm:text-xl pb-6 sm:py-6">OUR MISSION</h1>
        <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        <div class="my-10">
          <h1 class="text-center font-bold text-2xl sm:text-xl pb-xl:my-14 6">OUR HOURS</h1>
          <div class="mb-4 flex justify-between border-b border-primary">
            <h1>Monday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 16:00</p>
          </div>
          <div class="my-4 flex justify-between border-b border-primary">
            <h1>Tuesday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 16:00</p>
          </div>
          <div class="my-4 flex justify-between border-b border-primary">
            <h1>Wednesday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 16:00</p>
          </div>
          <div class="my-4 flex justify-between border-b border-primary">
            <h1>Thursday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 16:00</p>
          </div>
          <div class="my-4 flex justify-between border-b border-primary">
            <h1>Friday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 16:00</p>
          </div>
          <div class="my-4 flex justify-between border-b border-primary">
            <h1>Saturday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 14:00</p>
          </div>
          <div class="mt-4 flex justify-between border-b border-primary">
            <h1>Sunday</h1>
            <p><img class="inline" src="../assets/clock.png" alt=""> 8:00 - 12:00</p>
          </div>
        </div>
      </div>
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
                class="sm:underline hover:underline" href="http://cl-phpapp.test">Login/Register</a></li>
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
  name: 'About',
  components: {},
  data() {
    return {
      name: null,
      socialHandle: null,
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
        overlay.remove('fadeIn');
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
    johnButton() {
      this.modal('show');
      this.name = 'John Doe';
      this.socialHandle = '@JohnDoe123'
    },
    janeButton() {
      this.modal('show');
      this.name = 'Jane Doe';
      this.socialHandle = '@JaneDoe123'
    },
    mikeButton() {
      this.modal('show');
      this.name = 'Mike Doe';
      this.socialHandle = '@MikeDoe123'
    }
  },
  mounted(){
    var date = new Date();
    this.date = date.getFullYear();
  }
}
</script>