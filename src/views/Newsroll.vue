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
  <div>
    <div class="xl:w-4/5 xl:mx-auto">
      <div class="text-center my-10 mx-8">
        <h1 class="text-2xl sm:text-xl font-bold">NEWS & PROMOTIONS</h1>
        <p class="mt-4 w-4/5 mx-auto sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          dignissim leo sed
          velit congue semper. Nam eleifend varius lobortis. Aliquam erat volutpat. Maecenas imperdiet fringilla risus
          id ornare. Proin malesuada nunc ex, quis blandit nisi sodales in. Donec blandit ex quis pretium tempus. Sed
          et ultricies sapien.</p>
      </div>
    </div>
    <hr class="my-10 mx-8 border-black">
  </div>

  <!--POSTS -->

  <div v-for="post in posts" :key="post">
    <div class="xl:w-4/5 xl:mx-auto">
      <div class="text-center my-20 mx-8">
        <h1 class="text-2xl sm:text-xl font-bold">{{ post.title }}</h1>
        <h2 class="text-xl sm:text-xl font-bold">{{ post.author }}, {{ post.create_time }}</h2>
        <p class="mt-4 w-4/5 mx-auto sm:text-sm">{{ post.body }}</p>
      </div>
    </div>
  </div>

  <!-- FOOTER -->

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
import axios from 'axios';

export default {
  name: 'Newsroll',
  components: {},
  data() {
    return {
      posts: [],
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
    }
  },
  mounted() {
    axios.get('http://fp-petsafeapp-back.test/api/posts')
        .then(response => {
          this.posts = response.data;
        })
    var date = new Date();
    this.date = date.getFullYear();
  }
}
</script>