<!-- Panone Bulk Oil Importers View -->
<template>
    <div class="h-full">
                <!-- Section Hero -->
                <section  class="h-3/4 sm:h-3/5 md:h-4/5 lg:h-full bg-slate-800 section__hero">
            <div class="container mx-auto h-full flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20">
                <div ref="hero" class="content">
                    <h1 class="text-white text-2xl mb-4 md:text-4xl lg:text-5xl" v-animate-onscroll.repeat="'animated fadeIn'">Panone Bulk Oil Importers Limited</h1>
                    <p class="text-white md:leading-loose mb-4" v-animate-onscroll.repeat="{down: 'animated fadeUp', up: 'animated fadeDown' }">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus quis quo incidunt
                        asperiores? Iure quae quia aspernatur suscipit incidunt.
                    </p>

                    <!-- <button
                        class="bg-red-600 px-4 py-2  sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">
                        Place an order
                    </button> -->
                </div>
            </div>
        </section>


<!--  About Section -->
        <section class="py-8 sm:py-12  md:py-16 ">
            <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <div class="about__container md:flex md:items-center md:gap-8">
                    <!-- Image Side -->
                        <div class="image__side md:h-72 md:w-full md:rounded-lg md:bg-blue-950  md:basis-2/5"
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-12.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>

                        <div class="about__side md:basis-3/5">
                        <h3 class="text-xl mb-2md :mb-4 "
                            v-animate-onscroll.repeat="{down: 'animated animate__fadeInUp'}">Who We Are</h3>

                            <h1 class="mb-4 text-4xl text-red-600 font-semibold" v-animate-onscroll.repeat="{down: 'animated animate__fadeInUp'}">Some Head Caption</h1>
                        <p class="mb-4 text-justify" v-animate-onscroll.repeat="{down: 'animated animate__fadeInUp'}">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad veritatis ducimus
                            blanditiis fugit
                            consectetur dolore, dolores accusamus! Voluptas, veritatis? Aperiam eius aspernatur
                            repellendus
                            placeat. Assumenda recusandae accusantium commodi laborum.
                        </p>

                      </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup></script>

<style scoped></style>