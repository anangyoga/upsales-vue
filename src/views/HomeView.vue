<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section class="relative pb-[50px] bg-dark max-h-[955px]">
    <nav
      class="container flex flex-col pt-4 lg:flex-row lg:items-center lg:justify-between lg:pt-10"
    >
      <div class="flex items-center justify-between mb-6 lg:mb-0">
        <a href="/">
          <img src="@/assets/svg/app-logo.svg" class="w-full" alt="" />
        </a>

        <a href="javascript:void(0)" class="w-6 h-6 mobile-tablet" id="navbarToggler">
          <img src="@/assets/svg/ic-hamburger.svg" alt="" />
        </a>
      </div>

      <div class="hidden w-full lg:block" id="navigationMenu">
        <div
          class="flex flex-col justify-between w-full gap-4 lg:mx-auto lg:flex-row lg:items-center"
        >
          <div class="flex flex-col lg:mx-auto lg:items-center lg:flex-row gap-x-10 gap-y-4">
            <a href="#" class="nav-link active"> Home </a>
            <a href="#" class="nav-link"> Features </a>
            <a href="#" class="nav-link"> Pricing </a>
            <a href="#" class="nav-link"> Case study </a>
            <a href="#" class="nav-link"> About </a>
          </div>
          <div class="flex flex-col lg:items-center lg:flex-row gap-x-5 gap-y-4">
            <a href="#" class="btn-white"> My Account </a>
          </div>
        </div>
      </div>
    </nav>

    <header class="container flex flex-col items-center mt-[70px] relative z-20">
      <h1
        class="text-center text-light font-bold text-4xl md:text-[55px] leading-tight md:leading-[80px] mb-6"
      >
        Your Sales Go <br class="mobile-only" />
        <span class="italic text-primary">Up</span> & <span class="italic text-primary"> Up</span>
        <br />
        With Our Robust Ecosystem
      </h1>
      <ul class="flex sm:flex-row flex-col sm:items-center gap-4 md:gap-[30px] mb-[50px]">
        <li class="flex items-center gap-2 text-base text-light">
          <img src="@/assets/svg/ic-check.svg" class="w-6 h-6" alt="" />
          No credit card required
        </li>
        <li class="flex items-center gap-2 text-base text-light">
          <img src="@/assets/svg/ic-check.svg" class="w-6 h-6" alt="" />
          Live support 24/7
        </li>
        <li class="flex items-center gap-2 text-base text-light">
          <img src="@/assets/svg/ic-check.svg" class="w-6 h-6" alt="" />
          Trusted by 39K companies
        </li>
      </ul>
      <div class="flex gap-4 md:flex-row flex-col justify-center w-full mb-[60px]">
        <a href="auth/sign-up.html" class="btn-primary">Get Started</a>
        <a href="#" class="btn-white">Ask Demo</a>
      </div>

      <img
        src="@/assets/images/showcase-project.png"
        class="max-w-[895px] h-auto w-full object-cover rounded-3xl shadow-[12px_12px_60px_rgba(197,202,227,0.25)] z-50"
        alt=""
      />
    </header>

    <!-- Ornament Option 1 -->
    <!-- <img src="@/assets/svg/dark-background.svg" class="absolute inset-x-0 top-0 w-full -z-10" alt=""> -->

    <!-- Ornament Option 2 -->
    <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
    <div class="right-triangle"></div>
  </section>

  <section id="brandPartners" class="py-[50px] md:pt-[265px] md:pb-[50px] container">
    <h5 class="text-center font-bold text-[22px] leading-[27px] text-dark mb-[30px]">
      Loved by thousand big brands around the world
    </h5>
    <div
      class="flex items-center justify-evenly md:justify-center gap-x-[70px] gap-y-[35px] flex-wrap"
    >
      <img src="@/assets/svg/logo-apple.svg" class="h-[30px]" alt="" />
      <img src="@/assets/svg/logo-slack.svg" class="h-[30px]" alt="" />
      <img src="@/assets/svg/logo-spotify.svg" class="h-[30px]" alt="" />
      <img src="@/assets/svg/logo-microsoft.svg" class="h-[30px]" alt="" />
      <img src="@/assets/svg/logo-fedex.svg" class="h-[30px]" alt="" />
      <img src="@/assets/svg/logo-zoom.svg" class="h-[30px]" alt="" />
    </div>
  </section>

  <section id="features" class="py-[50px] container">
    <h2 class="text-center font-bold text-[32px] leading-[48px] text-dark mb-[40px]">
      Features That You Need <br class="desktop-only" />
      Grow Your Business
    </h2>

    <div class="grid justify-around grid-cols-2 md:grid-cols-3 md:gap-[50px] gap-6">
      <div class="group max-w-[205px] w-full mx-auto">
        <div
          class="rounded-full pt-4 pb-[15px] pr-[15px] pl-4 bg-lightGrey group-hover:bg-primary w-max transition-all"
        >
          <img
            src="@/assets/svg/ic-book.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold text-dark">For Beginners</p>
        <p class="text-base leading-7">Lorem dolor business thriving around big world</p>
      </div>
      <div class="group max-w-[205px] w-full mx-auto">
        <div
          class="rounded-full pt-4 pb-[15px] pr-[15px] pl-4 bg-lightGrey group-hover:bg-primary w-max transition-all"
        >
          <img
            src="@/assets/svg/ic-chart.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold text-dark">Complete Report</p>
        <p class="text-base leading-7">Read the report to analyze the trend of your product</p>
      </div>
      <div class="group max-w-[205px] w-full mx-auto">
        <div
          class="rounded-full pt-4 pb-[15px] pr-[15px] pl-4 bg-lightGrey group-hover:bg-primary w-max transition-all"
        >
          <img
            src="@/assets/svg/ic-briefcase.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold text-dark">Suitable</p>
        <p class="text-base leading-7">Easy to be implemented in any platform you want</p>
      </div>
      <div class="group max-w-[205px] w-full mx-auto">
        <div
          class="rounded-full pt-4 pb-[15px] pr-[15px] pl-4 bg-lightGrey group-hover:bg-primary w-max transition-all"
        >
          <img
            src="@/assets/svg/ic-code.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold text-dark">No-Code</p>
        <p class="text-base leading-7">Quick installation without have to become geek</p>
      </div>
      <div class="group max-w-[205px] w-full mx-auto">
        <div
          class="rounded-full pt-4 pb-[15px] pr-[15px] pl-4 bg-lightGrey group-hover:bg-primary w-max transition-all"
        >
          <img
            src="@/assets/svg/ic-buildings.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold text-dark">Scaling Up</p>
        <p class="text-base leading-7">Scale your business as big as you needed</p>
      </div>
      <div class="group max-w-[205px] w-full mx-auto">
        <div
          class="rounded-full pt-4 pb-[15px] pr-[15px] pl-4 bg-lightGrey group-hover:bg-primary w-max transition-all"
        >
          <img
            src="@/assets/svg/ic-cards.svg"
            class="w-6 h-6 transition-all group-hover:filter-white"
            alt=""
          />
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold text-dark">80+ Payments</p>
        <p class="text-base leading-7">Receive money from any merchant in the world</p>
      </div>
    </div>
  </section>

  <section id="scaleBusiness" class="py-[50px] container">
    <div class="grid md:grid-cols-2 items-center gap-[55px] justify-around">
      <div class="max-w-[430px]">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
          <img src="@/assets/svg/ic-crown.svg" class="w-5 h-5 filter-primary" alt="" />
          <p class="text-xs font-bold text-primary">190K+ business has joined</p>
        </div>
        <h2 class="text-start font-bold text-[32px] leading-[48px] text-dark my-4">
          Scale Your Business <br class="desktop-only" />
          From The Ground
        </h2>
        <p class="mb-[30px] text-lg leading-8 text-dark">
          Scaling can be hard lorem ipsum due lack of resources and automated system for the company
        </p>
        <div class="flex flex-col gap-4 md:flex-row">
          <a href="auth/sign-up.html" class="btn-primary !px-10"> Get Started </a>
          <a href="#" class="border btn-white border-borderLight !px-8"> Ask Demo </a>
        </div>
      </div>
      <div>
        <img src="@/assets/images/business-illustration.png" alt="" />
      </div>
    </div>
  </section>
</template>
