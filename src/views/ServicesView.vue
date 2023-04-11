<script setup>
    import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div class="h-full">
        <!-- Hero Section -->
        <section class="section__hero h-2/4 bg-blue-950">
            <div class="container mx-auto h-full flex justify-center items-center">
                <h1 class="text-2xl md:text-4xl lg:text-6xl text-gray-100">Our Services</h1>
            </div>
        </section>

        <!-- Section Services -->
        <section class="py-8 sm:py-12  md:py-16 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">We Offer</h3>

                <div class="md:flex md:gap-4">
                    <div class="service__detail mb-8">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-12.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">Trade in Fuel Products</h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft animate__delay-3s'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas autem
                            sint
                            aperiam? Voluptates architecto quos id blanditiis nobis in vitae molestiae. Sunt vel sed
                            quidem
                            consectetur quisquam necessitatibus dolore. Repellat libero veniam reprehenderit, nobis odio
                            ut
                            corrupti commodi.
                        </p>
                        <button
                            class="bg-red-600 px-4 py-2  sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">
                            Learn More
                        </button>
                    </div>

                    <div class="service__detail mb-8">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">
                            <!-- <img src="../assets/imgs/PANONE-14.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken"> -->
                        </div>
                        <h3 class="text-xl mb-3" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft'}">Transportation Business</h3>
                        <p class="leading-normal mb-4" v-animate-onscroll.repeat="{down: 'animated animate__fadeInLeft animate__delay-3s'}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore doloremque voluptas autem
                            sint
                            aperiam? Voluptates architecto quos id blanditiis nobis in vitae molestiae. Sunt vel sed
                            quidem
                            consectetur quisquam necessitatibus dolore. Repellat libero veniam reprehenderit, nobis odio
                            ut
                            corrupti commodi.
                        </p>
                        <button
                            class="bg-red-600 px-4 py-2  sm:py-3 cursor-pointer text-white hover:bg-red-800 hover:text-slate-200">
                            Learn More
                        </button>
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
                        <h1 class="text-gray-100 text-center">Map Goes here</h1>
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