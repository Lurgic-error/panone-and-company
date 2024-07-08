<template>
    <nav class="text-sm flex items-center gap-3 py-2 md:py-0">
        <div class="h-14 w-14 bg-red-600 rounded-full">
            <img class="h-full w-full" src="../assets/imgs/logo-1.png" alt="Panone Group">
        </div>
        <h1 class="text-sm md:text-2xl font-bold hidden md:block">Panone &amp; Company Limited</h1>

        <!-- Mobile Navigation -->
        <div class="lg:hidden flex items-center container">
            <button class="ml-auto" @click="toggleMenu">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
        </div>
        <!-- Desktop Navbar -->
        <ul class="ml-auto lg:flex items-center hidden ">
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'HomeView' }">
                    Home
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'AboutView' }">
                    About
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'ServicesView' }">
                    Services
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'CompaniesView' }">
                    Companies
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'CareersView' }">
                    Careers
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'ContactsView' }">
                    Contact Us
                </router-link>
            </li>
        </ul>
    </nav>

    <nav class="text-sm" ref="mobileNav" :class="{ hidden: !showMenu }">
        <!-- Mobile Navbar -->
        <ul class="lg:hidden ">
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'HomeView' }">
                    Home
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'AboutView' }">
                    About
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'ServicesView' }">
                    Services
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'CompaniesView' }">
                    Companies
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'CareersView' }">
                    Careers
                </router-link>
            </li>
            <li>
                <router-link class="p-4 block hover:bg-red-600 hover:text-gray-200" :to="{ name: 'ContactsView' }">
                    Contact Us
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import {
onMounted,
ref,
watch
} from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()
const mobileNav = ref()
const showMenu = ref(false)

onMounted(() => {
    mobileNav.value.classList.add("hidden")
})

const toggleMenu = () => {
        showMenu.value = !showMenu.value
        // Close the mobile menu when it's hidden
        if (!showMenu.value) {
            mobileNav.value.classList.add("hidden")
        }
    }
    // Watch for changes in the showMenu variable
    watch(() => route.path, () => {
        mobileNav.value.classList.add("hidden")
    })
</script>