<script setup>
    import ContactForm from '../components/ContactForm.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div class="h-full">
        <!-- Hero Section -->
        <section class="section__hero h-2/4 bg-slate-950">
            <div class="container mx-auto h-full flex justify-center items-center">
                <h1 class="text-2xl md:text-4xl lg:text-6xl text-gray-100">About Us</h1>
            </div>
        </section>

        <!-- History Section -->
        <section class="section__history py-8 sm:py-12  md:py-16 bg-gray-100">
            <div class="container mx-auto ">
                <div class="lg:flex lg:gap-4 lg:items-center">
                    <div class="lg:basis-2/4">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Our History</h3>

                        <p class="leading-loose mb-4">
                            Panone And Company Ltd is a fully fledged limited liability Company, who started its
                            business aiming
                            at covering the retail market, dealing with the sale of petrol, diesel and kerosene as well
                            as
                            transportation of the same products within and outside Tanzania.
                            The key underlying objective for the company is firstly to capture the whole market in
                            Tanzania
                            starting with Arusha, Tanga, Kilimanjaro, Dar es Salaam region and Spread across the
                            regions. Later
                            on, services will be extended to the rest of East Africa Members States.

                        </p>
                    </div>

                    <div class="h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4"></div>
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section class="section__history py-8 sm:py-12  md:p">
            <div class="container mx-auto ">
                <div class="lg:flex lg:items-center">

                    <div class="hidden lg:block h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4"></div>
                    <div class="lg:basis-3/4 lg:order-2 lg:ml-12">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">About Us</h3>

                        <p class="leading-loose mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptates cupiditate
                            atque
                            totam fugiat quisquam minus nam perspiciatis dolore suscipit, provident sint eius aperiam
                            exercitationem dolorum nobis tenetur neque eligendi aut sapiente, minima praesentium, harum
                            tempore
                            quis! Accusamus sit ad sint a nihil, voluptatum inventore facere aspernatur itaque optio
                            dolor porro
                            aliquam veniam expedita sed! Sint culpa doloremque illo nam.
                        </p>

                        <div class="">

                            <div class="about__mission">
                                <h3 class="text-xl mb-1 capitalize">Our mission</h3>
                                <p class="leading-loose mb-4">
                                    The mission of Panone And Company Limited is to become a leading profitable
                                    wholesale and
                                    retail fuel company maintaining good corporate citizenship.
                                </p>
                            </div>

                            <div class="about__vision">
                                <h3 class="text-xl mb-1 capitalize">Our Vision</h3>
                                <p class="leading-loose mb-4">
                                    To become the largest fuel retailer across all regions in Tanzania, through
                                    excellent
                                    services Provision.
                                </p>
                            </div>

                            <div class="about__objectives">
                                <h3 class="text-xl mb-1 capitalize">Our objectives</h3>
                                <p class="leading-loose mb-4">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quas,
                                    asperiores ullam
                                    nam distinctio, ea cumque necessitatibus odio deserunt optio minima.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ownership -->
        <section class="section__ownership py-8 sm:py-12  md:py-16 bg-gray-100">
            <div class="container mx-auto ">
                <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Ownership</h3>

                <p class="leading-loose mb-4">
                    This is a family business such that the shareholders and directors belong in the same family. This
                    relationship is proven invaluable, and has resulted into good governance structure.
                </p>


                <!-- Owners -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-slate-950 rounded-lg"></div>

                        <h3 class="mt-4">Patrick Ngilio - Chief Executive Officer </h3>
                    </div>

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-slate-950 rounded-lg"></div>

                        <h3 class="mt-4">Joel Kirai - General Manager</h3>
                    </div>

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-slate-950 rounded-lg"></div>

                        <h3 class="mt-4">Boniface Muthaura - Operations Manager</h3>
                    </div>

                    <div class="staff__detail mb-4">
                        <div class="h-56 w-full bg-slate-950 rounded-lg"></div>

                        <h3 class="mt-4">Immaculate Peter - Finance Manager</h3>
                    </div>
                </div>
            </div>
        </section>


        <!--  Section CTA -->
        <section class="section__cta  bg-slate-800 py-8 sm:py-12 md:py-16">
            <div class="container mx-auto">
                <h1 class="text-4xl text-gray-100 text-center mb-4"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
                    Call To Action</h1>
                <p class="leading-loose text-center text-gray-100 text-xl"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
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
                        class="location__side flex-1 bg-slate-950 mb-6 sm:mb-0 flex items-center justify-center h-96 lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.573249600677!2d36.657666769775396!3d-3.3762457000000037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d5c5dbeadf3%3A0x265934fd5f3ff9e3!2sPANONE%20AND%20COMPANY%20LTD!5e0!3m2!1sen!2stz!4v1681247780686!5m2!1sen!2stz"
                            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="contact__side flex-1">
                        <div class="py-8 sm:py-12 md:py-16  px-4 md:px-8">
                            <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold text-center">Contact Us</h3>
                            <ContactForm></ContactForm>
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
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/imgs/PANONE-6.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>