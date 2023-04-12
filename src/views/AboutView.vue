<script setup>
    import TheFooter from '../components/TheFooterr.vue';
</script>

<template>
    <div class="h-full">
        <!-- Hero Section -->
        <section class="section__hero h-2/4 bg-blue-950">
            <div class="container mx-auto h-full flex justify-center items-center">
                <h1 class="text-2xl md:text-4xl lg:text-6xl text-gray-100">About Us</h1>
            </div>
        </section>

        <!-- History Section -->
        <section class="section__history py-8 sm:py-12  md:py-16 bg-slate-200">
            <div class="container mx-auto ">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Our History</h3>

                <p class="mb-4">
                    Panone And Company Ltd is a fully fledged limited liability Company, who started its business aiming
                    at covering the retail market, dealing with the sale of petrol, diesel and kerosene as well as
                    transportation of the same products within and outside Tanzania.
                    The key underlying objective for the company is firstly to capture the whole market in Tanzania
                    starting with Arusha, Tanga, Kilimanjaro, Dar es Salaam region and Spread across the regions. Later
                    on, services will be extended to the rest of East Africa Members States.

                </p>
            </div>
        </section>

        <!-- About Us Section -->
        <section class="section__history py-8 sm:py-12  md:p">
            <div class="container mx-auto ">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">About Us</h3>

                <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptates cupiditate atque
                    totam fugiat quisquam minus nam perspiciatis dolore suscipit, provident sint eius aperiam
                    exercitationem dolorum nobis tenetur neque eligendi aut sapiente, minima praesentium, harum tempore
                    quis! Accusamus sit ad sint a nihil, voluptatum inventore facere aspernatur itaque optio dolor porro
                    aliquam veniam expedita sed! Sint culpa doloremque illo nam.
                </p>

                <div class="">

                    <div class="about__mission">
                        <h3 class="text-xl mb-1 capitalize">Our mission</h3>
                        <p class="mb-4">
                            The mission of Panone And Company Limited is to become a leading profitable wholesale and
                            retail fuel company maintaining good corporate citizenship.
                        </p>
                    </div>

                    <div class="about__vision">
                        <h3 class="text-xl mb-1 capitalize">Our Vision</h3>
                        <p class="mb-4">
                            To become the largest fuel retailer across all regions in Tanzania, through excellent
                            services Provision.
                        </p>
                    </div>

                    <div class="about__objectives">
                        <h3 class="text-xl mb-1 capitalize">Our objectives</h3>
                        <p class="mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quas, asperiores ullam
                            nam distinctio, ea cumque necessitatibus odio deserunt optio minima.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ownership -->
        <section class="section__ownership py-8 sm:py-12  md:py-16 bg-slate-200">
            <div class="container mx-auto ">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Ownership</h3>

                <p class="mb-4">
                    This is a family business such that the shareholders and directors belong in the same family. This
                    relationship is proven invaluable, and has resulted into good governance structure.
                </p>


                <!-- Owners -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-blue-950"></div>

                        <h3 class="mt-4">Patrick Ngilio - Chief Executive Officer </h3>
                    </div>

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-blue-950"></div>

                        <h3 class="mt-4">Joel Kirai - General Manager</h3>
                    </div>

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-blue-950"></div>

                        <h3 class="mt-4">Boniface Muthaura - Operations Manager</h3>
                    </div>

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-blue-950"></div>

                        <h3 class="mt-4">Immaculate Peter - Finance Manager</h3>
                    </div>
                </div>
            </div>
        </section>


        <section class="bg-white dark:bg-gray-900">
    <div class=" container py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's find more that brings us together.</h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="#" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                </a>
                <a href="#" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>  
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
                        <div class="container mx-auto   py-8 sm:py-12 md:py-16">
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