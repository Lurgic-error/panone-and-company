<!-- Panone Mini Supermarkets View -->
<template>
    <div class="h-full">
                <!-- Section Hero -->
                <section  class="h-3/4 sm:h-3/5 md:h-4/5 lg:h-full bg-slate-800 section__hero">
            <div class="container mx-auto h-full flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20">
                <div ref="hero" class="content">
                    <h1 style="text-shadow: 1px 1px 3px rgba(0,0,0,0.2);" class="text-white text-2xl mb-4 md:text-4xl lg:text-5xl font-bold" v-animate-onscroll.repeat="'animated fadeIn'">Panone <span class="text-red-600">Mini Supermarkets</span> Limited</h1>
                    <p style="text-shadow: 1px 1px 3px rgba(0,0,0,0.2);" class="text-white md:leading-loose mb-4 font-semibold text-xl" v-animate-onscroll.repeat="{down: 'animated fadeUp', up: 'animated fadeDown' }">
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
        <TheFooter></TheFooter>
    </div>
</template>

<script setup>
import TheFooter from '../components/TheFooter.vue';

</script>

<style scoped>

.section__hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/imgs/PANONE-14.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
}
</style>