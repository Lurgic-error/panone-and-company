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
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }"
                 >Our <span class="text-red-600">Expertise</span></h3>

                <div class="md:flex md:gap-4">
                    <div class="service__detail mb-8">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }"
                         >
                            <img src="../assets/imgs/PANONE-12.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 font-semibold text-red-600" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            Trade in Fuel Products</h3>
                        <p class="leading-normal mb-4"
                            v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            Panone has acquired and built a number of high end and fully equipped filling stations
                            locating in the Kilimanjaro, Mbeya, Pwani, Arusha and Manyara regions. Our filling stations
                            operate 24 hours each day of the week, allowing flexibility and availability of products to
                            our Customers. We provide services to corporates as well as individual customers.
                        </p>
                    </div>

                    <div class="service__detail mb-8">
                        <div class="md:h-72 md:w-full md:mb-4 md:rounded-lg md:bg-blue-950" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }"
                         >
                            <img src="../assets/imgs/PANONE-4.jpg" alt="" class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                        </div>
                        <h3 class="text-xl mb-3 font-semibold text-red-600" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            Transportation Business</h3>
                        <p class="leading-normal mb-4"
                            v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            Our company provides reliable transportation solutions in Tanzania and neighboring countries
                            for bulk petroleum & LPG supplies. The company has a fleet of 200 tankers with an experience
                            of over 20 years. We provide extensive training to our already experienced drivers. We are
                            able to provide full protection of our stakeholders’ valuable products by conducting regular
                            maintenance to our fleets.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!--  Section CTA -->
        <section class="section__cta  bg-slate-900 py-8 sm:py-12 md:py-16">
            <div class="container mx-auto">
                <h1 class="text-4xl text-gray-100 text-center mb-4"
                    v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                    Call To Action</h1>
                <p class="leading-loose text-center text-gray-100 text-xl"
                    v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit debitis quas maiores
                    nihil totam, neque tempora qui optio voluptates.
                </p>
            </div>
        </section>


        <!-- About Us Section -->
        <section class="section__history py-8 sm:py-12  md:p">
            <div class="container mx-auto ">
                <div class="lg:flex lg:items-center">

                    <div class="hidden lg:block h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4">
                        <img src="../assets/imgs/PANONE-8.jpg" alt=""
                                class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                    </div>
                    <div class="lg:basis-3/4 lg:order-2 lg:ml-12">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">Why <span class="text-red-600">Choose
                                Us</span></h3>

                        <p class="leading-loose mb-4 text-gray-900" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cum magni aliquam esse
                            maiores. Magnam est amet impedit perspiciatis deleniti.
                        </p>

                        <ul class="" v-on-scroll-animate="{
                    before:'before-enter',
                    enter:'enter'
                }">
                            <li>
                                <p class="text-gray-900 mb-1 flex gap-4 items-center ">
                                    <i class="fa-light fa-square-check text-red-600"></i>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <p class="text-gray-900 mb-1 flex gap-4 items-center ">
                                    <i class="fa-light fa-square-check text-red-600"></i>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <p class="text-gray-900 mb-1 flex gap-4 items-center ">
                                    <i class="fa-light fa-square-check text-red-600"></i>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <p class="text-gray-900 mb-1 flex gap-4 items-center ">
                                    <i class="fa-light fa-square-check text-red-600"></i>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
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
                        <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20  py-8 sm:py-12 md:py-16">
                            <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Contact Us</h3>

                            <form>
                                <label class="mb-2 block" for="fullName">Full Name</label>
                                <input type="text" name="fullName" id="fullName"
                                    class="mb-4 block border border-slate-950 w-full px-4 py-2 placeholder:text-slate-900"
                                    placeholder="Enter your full name">

                                <label class="mb-2 block" for="email">Email</label>
                                <input type="email" name="email" id="email"
                                    class="mb-4 block border border-slate-950 w-full px-4 py-2 placeholder:text-slate-900"
                                    placeholder="Enter your email">

                                <label class="mb-2 block" for="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10"
                                    class="block border border-slate-950 w-full px-4 py-2 placeholder:text-slate-900"
                                    placeholder="Enter your message"></textarea>

                                <button
                                    class="bg-red-600 px-4 py-2  sm:py-3 cursor-pointer text-slate-50 hover:bg-red-900 hover:text-slate-200 mt-4 mb-6 sm:mb-0">
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

<style scoped>

.section__hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/imgs/PANONE-4.jpg");
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
}

.before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0px);
    }
</style>