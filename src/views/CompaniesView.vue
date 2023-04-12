<script setup>
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
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"  v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-14.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3 capitalize"  v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Bulk Oil Importers </h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button
                        @click="$router.push({ name: 'CompanyOneView' })"
                        v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}"
                            class="bg-red-600 px-4 py-2 sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">Learn
                            More</button>
                    </div>
                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"  v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-76.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3 capitalize"  v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Mini Supermarkets Limited</h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button
                        @click="$router.push({ name: 'CompanyTwoView' })"
                        v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}"
                            class="bg-red-600 px-4 py-2 sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">Learn
                            More</button>
                    </div>
                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"  v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-62.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3 capitalize"  v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Hotels</h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button
                        @click="$router.push({ name: 'HotelsView' })"
                        v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}"
                            class="bg-red-600 px-4 py-2 sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">Learn
                            More</button>
                    </div>

                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"  v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-95.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3 capitalize"  v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Panone Bakeries</h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button
                        @click="$router.push({ name: 'CompanyThreeView' })"
                        v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}"
                            class="bg-red-600 px-4 py-2 sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">Learn
                            More</button>
                    </div>

                    <div class="company__detail mb-4 md:mb-">
                        <div class="md:h-72 md:bg-blue-950 md:mb-4 md:rounded-lg"  v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-3.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3 capitalize"  v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">Ngiloi Ulomi Enterprises Limited</h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas
                            autem sint aperiam? Voluptates architecto quos id blanditiis nobis in vitae
                            molestiae. Sunt vel sed quidem consectetur quisquam necessitatibus dolore. Repellat
                            libero veniam reprehenderit, nobis odio ut corrupti commodi.
                        </p>
                        <button
                        @click="$router.push({ name: 'CompanyFourView' })"
                        v-animate-onscroll.repeat="{down: 'animated animate__slideInUp'}"
                            class="bg-red-600 px-4 py-2 sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">Learn
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
                        <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20  py-8 sm:py-12 md:py-16">
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
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Footer  -->
        <TheFooter></TheFooter>
    </div>
</template>