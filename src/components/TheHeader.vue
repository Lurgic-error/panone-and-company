<template>
    <header class="">
        <!-- Top bar -->
        <div class="hidden md:block bg-gray-100">
            <div class="flex justify-between text-gray-100 items-center">
                <p class="company__email mb-0 text-gray-900 pl-8">
                    info@panonegroup.co.tz
                </p>
                <button class="px-4 font-medium bg-red-600 py-2">
                    Make Appointment
                </button>
            </div>
        </div>

        <!-- Navigation bar -->
        <nav class="bg-tranparent shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/" class="flex items-center gap-2">
                            <img class="h-8 w-auto" src="../assets/imgs/logo-1.png" alt="Panone Group">
                            <h3 class="">Panone &amp; Company</h3>
                        </a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="-mr-2 flex items-center md:hidden">
                        <button @click="isOpen = !isOpen" type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!-- Heroicon name: menu -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Desktop menu -->
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <div class="flex space-x-4">
                                <router-link 
                                :to="{
                                    name:'AboutView'
                                }"
                                    class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About
                                    Us</router-link>

                                <router-link 
                                :to="{
                                    name:'CompaniesView'
                                }"
                                    class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Companies</router-link>

                                <router-link 
                                :to="{
                                    name:'ServicesView'
                                }"
                                    class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</router-link>

                                    <router-link 
                                    :to="{
                                        name:'ContactView'
                                    }"
                                    class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact
                                    Us</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu -->
            <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <router-link 
                    :to="{
                        name:'AboutView'
                    }"
                        class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About
                        Us</router-link>

                    <router-link 
                    :to="{
                        name:'CompaniesView'
                    }"
                        class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Companies</router-link>

                    <router-link 
                    :to="{
                        name:'ServicesView'
                    }"
                        class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</router-link>

                    <router-link 
                    :to="{
                        name:'ContactView'
                    }"
                        class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact
                        Us</router-link>
                </div>
            </div>
        </nav>

    </header>
</template>
<script setup>
    import {
ref
} from 'vue';

    const isOpen = ref(false)
</script>
<style>
    /* add your styles here */
</style>