<template>
    <div class="h-full">

        <!-- Section Hero -->
        <section class="h-3/4 sm:h-3/5 md:h-4/5 lg:h-full bg-slate-800 section__hero">
            <div class="container mx-auto h-full flex justify-center items-center">
                <div ref="hero" class="content">
                    <h1 class="text-white text-2xl mb-4 md:text-4xl lg:text-5xl "
                        v-animate-onscroll.repeat="'animated fadeIn'">Panone &amp; Company Limited</h1>
                    <p class="text-white md:leading-loose mb-4"
                        v-animate-onscroll.repeat="{down: 'animated fadeUp', up: 'animated fadeDown' }">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus quis quo incidunt
                        asperiores? Iure quae quia aspernatur suscipit incidunt.
                    </p>

                    <!-- <button
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Place an order
                    </button> -->
                </div>
            </div>
        </section>

        <!-- Section Services -->
        <section class="py-8 sm:py-12  md:py-16 bg-gray-50">
            <div class="container mx-auto">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">Services</h3>

                <div class="md:flex md:gap-4">
                    <div class="service__detail mb-8">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-12.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            Trade in Fuel Products</h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft animate__delay-3s'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas autem
                            sint
                            aperiam? 
                        </p>
                        <!-- <button
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Learn More
                        </button> -->
                        <button type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Learn
                            More</button>
                    </div>

                    <div class="service__detail mb-8">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-14.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            Transportation Business</h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft animate__delay-3s'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas autem
                            sint
                            aperiam? 
                        </p>
                        <button
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lgx text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
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
                    <div class="about__side md:basis-3/5">
                        <h3 class="mb-4 md:mb-6 text-3xl md:text-4xl"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInUp'}">About Us</h3>

                        <p class="mb-4 text-justify" v-animate-onscroll.repeat="{down: 'animated animate__fadeInUp'}">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad veritatis ducimus
                            blanditiis fugit
                            consectetur dolore, dolores accusamus! Voluptas, veritatis? Aperiam eius aspernatur
                            repellendus
                            placeat. Assumenda recusandae accusantium commodi laborum.
                        </p>

                        <button type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button>

                    </div>
                    <!-- Image Side -->
                    <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                        v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                        <img src="../assets/imgs/PANONE-12.jpg" alt=""
                            class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                    </div>
                </div>
            </div>
        </section>

        <!--  Section CTA -->
        <section class="section__cta  bg-slate-800 py-8 sm:py-12 md:py-16">
            <div class="container mx-auto">
                <h1 class="text-2xl text-gray-100 text-center mb-4"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
                    Call To Action</h1>
                <p class="leading-loose text-center text-gray-100"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit debitis quas maiores
                    nihil totam, neque tempora qui optio voluptates.
                </p>
            </div>
        </section>

        <!-- Section Companies -->
        <section class="section__companies py-8 sm:py-12 md:py-16">
            <div class="container mx-auto">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl"
                    v-animate-onscroll.repeat="{down: 'animated animate__slideInDown'}">Companies</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="company__detail mb-4">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-14.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Bulk Oil Importers
                        </h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button @click="$router.push({ name: 'CompanyOneView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button>
                    </div>
                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-76.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Mini Supermarkets
                        </h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button @click="$router.push({ name: 'CompanyTwoView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button>
                    </div>
                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-62.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Hotels</h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button @click="$router.push({ name: 'HotelsView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button>
                    </div>

                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-95.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Bakeries</h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button @click="$router.push({ name: 'CompanyThreeView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button>
                    </div>

                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <img src="../assets/imgs/PANONE-3.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 capitalize"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Ngiloi Ulomi Enterprises
                        </h3>
                        <p class="leading-normal mb-4"
                            v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button @click="$router.push({ name: 'CompanyFourView' })" type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Know
                            More</button>
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
                        <div class="container mx-auto py-8 sm:py-12 md:py-16">
                            <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold text-center">Contact Us</h3>

                            <form class="max-w-lg mx-auto">
                                <div class="mb-6">
                                    <label class="block text-gray-700 font-bold mb-2" for="fullName">Full Name</label>
                                    <input type="text" name="fullName" id="fullName"
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your full name">
                                </div>

                                <div class="mb-6">
                                    <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                                    <input type="email" name="email" id="email"
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your email">
                                </div>

                                <div class="mb-6">
                                    <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="5"
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your message"></textarea>
                                </div>

                                <div class="flex items-center justify-center">
                                    <button type="submit"
                                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>


                        <!-- <div class="container mx-auto  py-8 sm:py-12 md:py-16">
                            <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Contact Us</h3>

                            <form>
                                <label class="mb-2 block" for="fullName">Full Name</label>
                                <input type="text" name="fullName" id="fullName"
                                    class="mb-4 block border border-slate-950 w-full px-4 py-2 placeholder:text-slate-800"
                                    placeholder="Enter your full name">

                                <label class="mb-2 block" for="email">Email</label>
                                <input type="email" name="email" id="email"
                                    class="mb-4 block border border-slate-950 w-full px-4 py-2 placeholder:text-slate-800"
                                    placeholder="Enter your email">

                                <label class="mb-2 block" for="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10"
                                    class="block border border-slate-950 w-full px-4 py-2 placeholder:text-slate-800"
                                    placeholder="Enter your message"></textarea>

                                <button
                                    class="bg-red-600 px-4 py-2  sm:py-3 cursor-pointer text-slate-50 hover:bg-red-800 hover:text-slate-200 mt-4 mb-6 sm:mb-0">
                                    Send Message
                                </button>
                            </form>
                        </div> -->
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

    .content>h1,
    p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }
</style>