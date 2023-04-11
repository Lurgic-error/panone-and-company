<!-- Contact Us View -->
<script setup>
    import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div class="h-full">
        <!-- Hero Section -->
        <section class="section__hero h-2/4 bg-blue-950">
            <div class="container mx-auto h-full flex justify-center items-center">
                <h1 class="text-2xl md:text-4xl lg:text-6xl text-gray-100">Reach Out To Us</h1>
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

                            <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                                <div class="max-w-md w-full space-y-8">
                                    <div>
                                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                            Contact Us
                                        </h2>
                                    </div>
                                    <form class="mt-8 space-y-6" action="#" method="POST">
                                        <input type="hidden" name="remember" value="true">
                                        <div class="rounded-md shadow-sm -space-y-px">
                                            <div>
                                                <label for="name" class="sr-only">Name</label>
                                                <input id="name" name="name" type="text" autocomplete="name" required
                                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Name">
                                            </div>
                                            <div>
                                                <label for="email-address" class="sr-only">Email address</label>
                                                <input id="email-address" name="email" type="email" autocomplete="email"
                                                    required
                                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Email address">
                                            </div>
                                            <div>
                                                <label for="phone" class="sr-only">Phone</label>
                                                <input id="phone" name="phone" type="text" autocomplete="phone"
                                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Phone (optional)">
                                            </div>
                                            <div>
                                                <label for="message" class="sr-only">Message</label>
                                                <textarea id="message" name="message" rows="4"
                                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit"
                                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    <!-- Heroicon name: solid/lock-closed -->
                                                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M15.28 7.72a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656 0zm1.414 2.828a6 6 0 1 0-8.486 0l2.828 2.828a2 2 0 0 0 2.828 0l2.828-2.828z" />
                                                    </svg>
                                                </span>
                                                Submit
                                            </button>

                                        </div>

                                    </form>

                                </div>

                                <!-- <form>
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
                            </form> -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- Footer  -->
        <TheFooter></TheFooter>
    </div>
</template>