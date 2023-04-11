<!-- Ngiloi Ulomi View -->
<template>
    <div class="h-full">
                <!-- Section Hero -->
                <section  class="h-3/4 sm:h-3/5 md:h-4/5 lg:h-full bg-slate-800 section__hero">
            <div class="container mx-auto h-full flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20">
                <div ref="hero" class="content">
                    <h1 class="text-white text-2xl mb-4 md:text-4xl lg:text-5xl" v-animate-onscroll.repeat="'animated fadeIn'">Ngiloi Ulomi Enterprises Limited</h1>
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
    </div>
</template>

<script setup></script>

<style scoped></style>