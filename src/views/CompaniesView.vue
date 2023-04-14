<script setup>
    import ContactSection from '../components/ContactSection.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div class="h-full">
        <!-- Hero Section -->
        <section class="section__hero h-2/4 bg-blue-950">
            <div class="container mx-auto h-full flex justify-center items-center">
                <h1 class="text-2xl md:text-4xl lg:text-6xl text-gray-100">Our Companies</h1>
            </div>
        </section>

        <!-- Section Companies -->
        <section class="section__companies py-10 sm:py-16 md:py-20 py">
            <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl" v-animate-onscroll.repeat="{down: 'animated animate__slideInDown'}">Companies</h3>
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

        <!--  Section CTA -->
        <section class="section__cta  bg-slate-800 py-10 sm:py-16 md:py-24">
            <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <h1 class="text-4xl text-gray-100 text-center mb-4" v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">Call To Action</h1>
                <p class="leading-loose text-center text-gray-100" v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit debitis quas maiores
                    nihil totam, neque tempora qui optio voluptates.
                </p>
            </div>
        </section>

        <!-- Section Contact Us -->
<ContactSection></ContactSection>

        <!-- Footer  -->
        <TheFooter></TheFooter>
    </div>
</template>