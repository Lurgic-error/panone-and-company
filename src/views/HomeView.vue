<template>
    <div class="">
        <el-carousel class="" height="600px" :interval="5000">
            <el-carousel-item v-for="item in carouselItems" :key="item"
                class="bg-cover bg-no-repeat bg-center bg-fixed h-full"
                :style="{ backgroundImage: `url(${item.image})` }">
                <div class="absolute top-0 left-0 z-30 flex items-center justify-center h-full  w-full container ">
                    <div class="py-6 bg-primary-900/40 rounded text-white px-6 w-full">
                        <h1 class="text-xl md:text-2xl lg:text-4xl uppercase font-bold"
                            style="text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">{{ item.title }}
                        </h1>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>

        <section-container>
            <section-title>What We Do</section-title>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                <div class="grid grid-rows-subgrid row-span-3 mb-12 lg:mb-0">
                    <div class="rounded-2xl">
                        <img src="@/assets/imgs/PANONE-12.jpg" alt=""
                            class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                    </div>
                    <h1 class="text-xl sm:text-2xl font-medium">Trade in Fuel Products</h1>
                    <p class='leading-7 text-gray-500'>
                        We operate several well-equipped 24-hour filling stations in various regions of Tanzania,
                        providing services to both corporate and individual customers.
                    </p>
                </div>
                <div class="grid grid-rows-subgrid row-span-3">
                    <div class="rounded-2xl">
                        <img src="@/assets/imgs/PANONE-3.jpg" alt=""
                            class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                    </div>
                    <h1 class="text-xl sm:text-2xl font-medium">Transportation Business</h1>
                    <p class="leading-7 text-gray-500">
                        We offer dependable transportation for bulk petroleum and LPG supplies in Tanzania and
                        neighboring countries, with a fleet of 200 tankers and experienced drivers.
                    </p>
                </div>
            </div>
        </section-container>

        <section-container>
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-x-12 ">
                <div class="lg:col-span-3">
                    <section-title>Who We Are</section-title>
                    <section-body>
                        We are a private limited liability company, registered under laws of the republican of Tanzania
                        that begun in 2002. Today we are one of the leading players in the market of petroleum trading
                        and transportation across Tanzania and our neighboring countries. Our other related businesses
                        include bulk importation of fuel products, Mini Super markets, Hotels & tyres and lubricant
                        outlets. Our company has strived to employ and train high qualified staff in management to keep
                        up with market dynamics.
                    </section-body>
                </div>
                <div class="lg:col-span-2  rounded-2xl">
                    <img src="../assets/imgs/PANONE-12.jpg" alt=""
                        class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                </div>
            </div>
        </section-container>

        <section-container>
            <section-title>Related Business</section-title>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
                <div class="grid grid-rows-subgrid row-span-3 rounded-2xl" v-for="({ name, image }, id) in companies"
                    :key='id'>
                    <img :src="image" alt=""
                        class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                    <router-link :to="{ name: 'CompaniesView' }">
                        <h1 class="text-2xl">{{ name }}</h1>
                    </router-link>
                </div>
            </div>
        </section-container>

        <div class="overflow-hidden bg-black">
            <section-container class="container px-6 lg:flex lg:px-8 ">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">In Loving Memory of
                            <br />
                            Elinaike Ulomi
                        </h2>
                        <p class="mt-6 text-xl leading-8 text-gray-200">Elinaike Ulomi was a beacon of light, a leader
                            whose vision and dedication transformed our company and touched the lives of everyone around
                            her. Her legacy of excellence and compassion will forever be remembered.</p>
                        <p class="mt-6 text-base leading-7 text-gray-200">Her tireless efforts and unwavering commitment
                            to our mission have set a standard for us all. We honor her memory by continuing to strive
                            for the values she instilled in us: integrity, perseverance, and kindness.</p>
                    </div>
                    <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img src="../assets/imgs/IMG_23.jpg" alt=""
                                class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                        </div>
                        <div
                            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img src="../assets/imgs/IMG_8.jpg" alt=""
                                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                            </div>
                            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img src="../assets/imgs/IMG_212.jpg" alt=""
                                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                            </div>
                            <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img src="../assets/imgs/IMG_213.jpg" alt=""
                                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section-container>
        </div>

        <section-container>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
                <div class="rounded">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.573249600677!2d36.657666769775396!3d-3.3762457000000037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d5c5dbeadf3%3A0x265934fd5f3ff9e3!2sPANONE%20AND%20COMPANY%20LTD!5e0!3m2!1sen!2stz!4v1681247780686!5m2!1sen!2stz"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="">
                    <section-title>
                        Contact Us
                    </section-title>
                    <contact-form></contact-form>
                </div>
            </div>
        </section-container>

        <section-container>
            <div class="">
                <section-title>Our Offices</section-title>

                <div
                    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <div>
                        <h3 class="border-l border-red-600 pl-6 font-semibold text-gray-900">Kilimanjaro</h3>
                        <!-- <address class="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>4556 Brendan Ferry</p>
                            <p>Kilimanjaro, CA 90210</p>
                        </address> -->
                    </div>
                    <div>
                        <h3 class="border-l border-red-600 pl-6 font-semibold text-gray-900">Arusha</h3>
                        <!-- <address class="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>886 Walter Street</p>
                            <p>Arusha, NY 12345</p>
                        </address> -->
                    </div>
                    <div>
                        <h3 class="border-l border-red-600 pl-6 font-semibold text-gray-900">Dar es salaam</h3>
                        <!-- <address class="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>Buguruni Road, </p>
                            <p>Dar es salaam</p>
                        </address> -->
                    </div>

                </div>
            </div>
        </section-container>
    </div>
</template>

<script setup>
import {
reactive
} from "vue";
const carouselItems = reactive([
{
    title: "Welcome to Panone and Company Ltd - Shaping a Brighter Future", // create a CTA about Panone and Company
    image: new URL('@/assets/imgs/PANONE-62.jpg', import.meta.url).href
  },
{
    title: "Panone Bulk Oil Importers - Fueling Tanzania's Growth", // create a CTA about Panone Bulk Oil Importers
    image: new URL('@/assets/imgs/PANONE_Trucks.jpg', import.meta.url).href
  },
{
    title: "Experience Luxury and Comfort at Panone Hotels", // create a CTA about Panone Hotels
    image: new URL('@/assets/imgs/PANONE-9.jpg', import.meta.url).href
  },
  {
    title: "Ngiloi Ulomi Enterprises - Your Trusted Partner for Car Service Supplies", // create a CTA about Ngiloi Ulomi Enterprises
    image: new URL('@/assets/imgs/PANONE-76.jpg', import.meta.url).href
  },
  {
    title: "Panone Bakery - Freshness You Can Taste", // create a CTA about panone bakery 
    image: new URL('@/assets/imgs/Bread.jpg', import.meta.url).href
  },
  {
    title: "Panone Mini Supermarkets - Convenient Shopping for All Your Needs", // create a CTA about panone mini supermarkets
    image: new URL('@/assets/imgs/PANONE-100.jpg', import.meta.url).href
  }
])

const companies = [
    {
        name:"Panone Bulk Oil Importers",
        image: new URL('@/assets/imgs/PANONE_Trucks.jpg', import.meta.url).href
    },
    {
        name:"Panone Mini Supermarkets",
        image: new URL('@/assets/imgs/PANONE-76.jpg', import.meta.url).href
    },
    {
        name:"Panone Hotels",
        image: new URL('@/assets/imgs/PANONE-62.jpg', import.meta.url).href
    },
    {
        name:"Ngiloi Ulomi Enterprises",
        image: new URL('@/assets/imgs/PANONE-100.jpg', import.meta.url).href
    },
    {
        name:"Panone Bakeries",
        image: new URL('@/assets/imgs/PANONE_bakery.jpg', import.meta.url).href
    },
]
</script>