<template>
            <!-- Footer -->
            <footer class="bg-slate-900 pt-8 sm:pt-12 md:pt-16 pb-2 sm:pb-4 text-slate-50">
            <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <!-- Footer Columns -->
                <div class="group__columns md:flex md:justify-between">
                    <!-- Company Column -->
                    <div class="company__column mb-8">
                        <h1 class="text-xl mb-4">Panone &amp; Company Limited</h1>

                        <p class="text-gray-100 mb-2">Buguruni Road, Dar es salaam</p>
                        <p class="text-gray-100 mb-2">Email: panone@info.go.tz</p>
                        <p class="text-gray-100 mb-2">Phone: +255784658987</p>

                        <ul class="socials flex items-center gap-4 my-4">
                            <li class="social_item border rounded-lg h-8 w-8 bg-slate-300">
                                <span class="social__icon">i</span>
                            </li>
                            <li class="social_item border rounded-lg h-8 w-8 bg-slate-300 ">
                                <span class="social__icon">i</span>
                            </li>
                            <li class="social_item border rounded-lg h-8 w-8 bg-slate-300 ">
                                <span class="social__icon">i</span>
                            </li>
                            <li class="social_item border rounded-lg h-8 w-8 bg-slate-300 ">
                                <span class="social__icon">i</span>
                            </li>
                        </ul>
                    </div>

                    <!-- About Column -->
                    <div class="about__column mb-8 md:hidden">
                        <h1 class="text-xl mb-4">About Us</h1>
                        <ul>
                            <li class="mb-2"><router-link :to="{ name: 'AboutView'}" class="block capitalize">Histrory</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'AboutView'}" class="block capitalize">Mission</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'AboutView'}" class="block capitalize">Vision</router-link></li>
                        </ul>
                    </div>

                    <!-- Services Column -->
                    <div class="about__column mb-8 ">
                        <h1 class="text-xl mb-4">Services</h1>
                        <ul>
                            <li class="mb-2"><router-link :to="{ name: 'ServicesView'}" class="block capitalize">Trade in Fuel Products</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'ServicesView'}" class="block capitalize">Transportation Business</router-link></li>
                        </ul>
                    </div>

                    <!-- Related Businesses Column -->
                    <div class="companies__column mb-8">
                        <h1 class="text-xl mb-4">Other Related Businesses</h1>
                        <ul>
                            <li class="mb-2"><router-link :to="{ name: 'CompanyOneView'}" class="block capitalize hover:underline">Panone Bulk Oil Importers Ltd</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'CompanyTwoView'}" class="block capitalize hover:underline">Panone Mini Supermarkets</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'CompanyThreeView'}" class="block capitalize hover:underline">Panone Bakeries</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'HotelsView'}" class="block capitalize hover:underline">Panone Hotels</router-link></li>
                            <li class="mb-2"><router-link :to="{ name: 'CompanyFourView'}" class="block capitalize hover:underline">Ngiloi Ulomi Enterprises Ltd</router-link></li>
                        </ul>
                    </div>
                </div>

                <hr class="my-4 border-gray-200">

                <div class="md:flex justify-between">
                    <p class="text-gray-100 text-center md:text-left">&copy; {{ new Date().getFullYear() }} Panone and Company Limited. <span
                            class="hidden">All rights reserved.</span></p>
                    <p class="text-gray text-center mt-4 sm:mt-0">Website developed and maintained by <a
                            href="#">Lurge</a></p>
                </div>
            </div>

        </footer>
</template>

<script setup></script>