<template>
    <div class="h-full">

        <!-- Section Hero -->
        <section class="h-3/4 sm:h-3/5 md:h-4/5 lg:h-full bg-slate-800 section__hero">
            <div class="container mx-auto h-full flex  items-center">
                <div ref="hero" class="hero__content">
                    <h1 class="text-gray-100 text-4xl mb-6 md:text-4xl lg:text-6xl font-bold"><span
                            class="text-red-600">Panone</span> &amp; Company
                        Limited</h1>
                    <p class="text-gray-100 leading-normal mb-4 lg:text-4xl capitalize font-semibold text-2xl">
                        We bring <span class="text-red-600"> perfection</span> with care
                    </p>

                    <!-- <button
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Place an order
                    </button> -->
                </div>
            </div>
        </section>

        <!-- Section Services -->
        <section class="py-8 sm:py-12  md:py-16 bg-gray-50">
            <div class="container mx-auto">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl text-gray-900 font-bold" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">What <span class="text-red-600">We Do</span></h3>

                <div class="md:flex md:gap-4 ">
                    <div class="service__detail mb-8 md:flex-1" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950">
                            <img src="../assets/imgs/PANONE-12.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 text-red-600 font-semibold mt-4">
                            Trade in Fuel Products</h3>
                        <p class="leading-loose mb-4 text-gray-900">
                            We operate several well-equipped 24-hour filling stations in various regions of
                            Tanzania, providing services to both corporate and individual customers.
                        </p>
                        <button type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="$router.push({ name: 'ServicesView'})">Learn
                            More</button>
                    </div>

                    <div class="service__detail mb-8 md:flex-1" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950">
                            <img src="../assets/imgs/PANONE-14.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 text-red-600 font-semibold mt-4">
                            Transportation Business</h3>
                        <p class="leading-loose mb-4 text-gray-900">
                            We offer dependable transportation for bulk petroleum and LPG supplies in Tanzania
                            and neighboring countries, with a fleet of 200 tankers and experienced drivers.
                        </p>
                        <button
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="$router.push({ name: 'ServicesView'})">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>


        <!-- Section About -->
        <section class="py-8 sm:py-12  md:py-16 ">
            <div class="container mx-auto">
                <div class="about__container md:flex md:items-center md:gap-4">
                    <div class="about__side md:basis-3/5 lg:mr-10">
                        <h3 class="mb-4 md:mb-6 text-3xl md:text-4xl text-gray-900 font-bold" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">Who <span class="text-red-600">We Are</span></h3>
                        <div class="" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <p class="mb-1 leading-loose text-gray-900">
                                We are a private limited liability company, registered under laws of the republican of
                                Tanzania that begun in 2002. Today we are one of the leading players in the market of
                                petroleum trading and transportation across Tanzania and our neighboring countries. Our
                                other related businesses include bulk importation of fuel products, Mini Super markets,
                                Hotels & tyres and lubricant outlets. Our company has strived to employ and train high
                                qualified staff in management to keep up with market dynamics.
                            </p>

                            <button
                                class="bg-white border  border-red-600 px-4 py-2  sm:py-3 cursor-pointer text-red-600 hover:bg-red-600 hover:text-white mt-4 mb-6 sm:mb-0 capitalize tracking-wider">
                                Know More
                            </button>
                        </div>


                    </div>
                    <!-- Image Side -->
                    <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                        v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                        <img src="../assets/imgs/PANONE-12.jpg" alt=""
                            class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                    </div>
                </div>
            </div>
        </section>

        <!--  Section CTA -->
        <section class="section__cta  bg-slate-800 py-8 sm:py-12 md:py-16">
            <div class="container mx-auto">
                <h1 class="text-center  mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl text-gray-100 font-bold">
                    Call To Action</h1>
                <p class="leading-loose text-center text-gray-100">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit debitis quas maiores
                    nihil totam, neque tempora qui optio voluptates.
                </p>
            </div>
        </section>

        <!-- Section Companies -->
        <section class="section__companies py-8 sm:py-12 md:py-16 bg-gray-50">
            <div class="container mx-auto">


                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }" class="company__detail md:mb-4  flex items-center">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-6xl font-bold" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">Other <br class="hidden md:block"><span class="text-red-600">Related Businesses</span></h3>
                    </div>

                    <div v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }" class="company__detail mb-4 ">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg mb-4">
                            <img src="../assets/imgs/PANONE-3.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize font-semibold ">
                            <router-link :to="{ name: 'CompanyOneView' } ">
                                Panone Bulk Oil Importers
                            </router-link>
                        </h3>

                        <!-- <p class="leading-loose text-gray-900 mb-4">
                            Panone Bulk oil Importers is a Tanzanian company that offers importation, warehousing, and
                            distribution of Petroleum Products. The company is based in Miembe Saba Pwani and aims to
                            provide quality, efficiency, and customer satisfaction. They prioritize customer
                            satisfaction and offer fuel delivery services to customers.
                        </p> -->
                        <!-- <button @click="$router.push({ name: 'CompanyOneView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button> -->
                    </div>

                    <div v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }" class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg mb-4">
                            <img src="../assets/imgs/PANONE-76.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize font-semibold ">
                            <router-link :to="{ name: 'CompanyTwoView' } ">
                                Panone Mini Supermarkets
                            </router-link>
                        </h3>
                        <!-- <p class="leading-loose text-gray-900 mb-4">
                            Panone Mini Supermarkets operates a chain of 16 retail supermarkets in Northern Mainland
                            Tanzania and the coast, alongside main roads for easy accessibility. We also have a baking
                            facility for both B2B and B2C. Our goal is to provide high-level professionalism, diligence,
                            and care to ensure they are the most preferable shopping center in the East African Region.
                        </p> -->
                        <!-- <button @click="$router.push({ name: 'CompanyTwoView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button> -->
                    </div>

                    <div v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }" class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg mb-4">
                            <img src="../assets/imgs/PANONE-62.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize font-semibold ">
                            <router-link :to="{ name: 'HotelsView' } ">
                                Panone Hotels
                            </router-link>
                        </h3>
                        <!-- <p class="leading-loose text-gray-900 mb-4">
                            Panone Hotels Ltd operates a chain of hotels in the Kilimanjaro, Arusha, and Manyara regions
                            offering a variety of services such as dining, conference halls, accommodation, airport
                            transfers, and tourist packages. They also provide rooftop and indoor bars, massage, and
                            sauna rooms. Their hotels offer a tranquil environment and unique experiences for their
                            guests to enjoy.
                        </p> -->
                        <!-- <button @click="$router.push({ name: 'HotelsView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button> -->
                    </div>

                    <div v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }" class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg mb-4">
                            <img src="../assets/imgs/PANONE-3.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize font-semibold ">
                            <router-link :to="{ name: 'CompanyFourView' } ">
                                Ngiloi Ulomi Enterprises
                            </router-link>
                        </h3>
                        <!-- <p class="leading-loose text-gray-900 mb-4">
                            Ngiloi Ulomi Enterprises Ltd is a company providing car service supplies, lubricants, and
                            tire outlets. It prioritizes customer satisfaction and works with top producers and
                            suppliers of high-quality products. It is owned by Panone and Company Ltd and operates 18
                            outlets on each of its filling stations.
                        </p> -->
                        <!-- <button @click="$router.push({ name: 'CompanyFourView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-4 py-2  sm:py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button> -->
                    </div>

                </div>
            </div>
        </section>

        <!-- Social Responsibility -->
        <section class="section__community py-8 sm:py-12 md:py-16">
            <div class="container mx-auto">
                <div class="about__container md:flex md:items-center md:gap-4">
                    <div class="about__side md:basis-2/5 lg:mr-10">
                        <h3 class="mb-4 md:mb-6 text-3xl md:text-4xl text-gray-900 font-bold" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">Social <span class="text-red-600">Responsibility</span></h3>
                        <div class="" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <p class="mb-1 leading-loose text-gray-900">
                                We strive to invest in people and our communities to unlock great potential and
                                changes in Africa. Our Key focus includes health, education, community &amp;
                                conservation of the
                                environment.
                            </p>

                            <button
                                class="bg-white border  border-red-600 px-4 py-2  sm:py-3 cursor-pointer text-red-600 hover:bg-red-600 hover:text-white mt-4 mb-6 sm:mb-0 capitalize tracking-wider">
                                Know More
                            </button>
                        </div>


                    </div>
                    <!-- Image Side -->

                    <div class="md:basis-3/5 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                            v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <img src="../assets/imgs/social-3.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                            v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <img src="../assets/imgs/social-8.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                            v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <img src="../assets/imgs/social-1.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                            v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <img src="../assets/imgs/social-9.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- Section Contact Us -->
        <section class=" bg-gray-100">
            <div class="">
                <div class="block lg:flex lg:gap-4">
                    <div
                        class="location__side flex-1 bg-blue-950 mb-6 sm:mb-0 flex items-center justify-center h-96 lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.573249600677!2d36.657666769775396!3d-3.3762457000000037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d5c5dbeadf3%3A0x265934fd5f3ff9e3!2sPANONE%20AND%20COMPANY%20LTD!5e0!3m2!1sen!2stz!4v1681247780686!5m2!1sen!2stz"
                            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="contact__side flex-1">
                        <div class="py-8 sm:py-12 md:py-16 px-4 md:px-8">
                            <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold text-center">Contact Us</h3>
                            <ContactForm></ContactForm>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Footer -->
        <TheFooter></TheFooter>
    </div>
</template>

<script setup>
    import {
onMounted,
ref
} from 'vue';
import ContactForm from '../components/ContactForm.vue';
import TheFooter from '../components/TheFooter.vue';


    const hero = ref()

    onMounted(() => {
        hero.value.classList.add('animate__animated', 'animate__fadeIn');
    })
</script>


<style scoped>
    section.section__hero {
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/imgs/PANONE-11.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .hero__content>h1,
    p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }

    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0px);
    }
</style>