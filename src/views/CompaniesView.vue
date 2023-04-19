<script setup>
    import ContactSection from '../components/ContactSection.vue';
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
 <section class="section__history py-8 sm:py-12  md:py-16 bg-gray-100">
            <div class="container mx-auto ">
                <div class="lg:flex lg:gap-8 lg:items-center">
                    <div class="lg:basis-2/4">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Panone Bulk Oil Importers</h3>

                        <p class="leading-loose mb-4">
                            This is a registered company offering importation, warehousing and distribution of Petroleum Products across Tanzania. Panone Bulk oil Importers began operations in Dar es Salaam Tanzania with its Headquarters in Miembe Saba Pwani. Our main goal for our company is quality, efficiency and customer satisfaction. We believe customer satisfaction will bring customer loyalty. Moreover we provide “fuel anywhere & anytime at your doorstep.
                        </p>
                    </div>

                    <div class="h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4"></div>
                </div>
            </div>
        </section>

        <section class="section__history py-8 sm:py-12  md:py-16 bg-gray-100">
            <div class="container mx-auto ">
                <div class="lg:flex lg:gap-8 lg:items-center">
                    <div class="h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4"></div>
                    
                    <div class="lg:basis-2/4">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Panone Mini Supermarkets</h3>

                        <p class="leading-loose mb-4">
With an enormous proven efficiency, Panone has demonstrated a continuous and glowing capacity to operate a chain of supermarkets in the Northern regions of Mainland Tanzania as well as the coast. Panone has a total of 16 retail supermarkets that operates 24/7. Panone remains uncontroverted for almost two decades. Our shops are easily accessible as they are all alongside main roads and thus friendly to passengers and the surrounding community. We also operate a baking facility that is accessible to both B2B and B2C. We are dedicated to serve out customer will high level of professionalism diligence and care. We strive to ensure we are the most preferable shopping center across the East African Region.
                        </p>
                    </div>
                </div>
            </div>
        </section> 
    
            <section class="section__history py-8 sm:py-12  md:py-16 bg-gray-100">
            <div class="container mx-auto ">
                <div class="lg:flex lg:gap-8 lg:items-center">
                    <div class="lg:basis-2/4">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Panone Hotels</h3>

                        <p class="leading-loose mb-4">
Welcome to Panone Hotels Ltd, a chain of five beautiful hotels located in the Kilimanjaro, Arusha, and Manyara regions. Our hotels provide a unique experience and inviting hospitality, surrounded by the iconic features of Kilimanjaro and Mount Meru. Panone Hotels is owned by Panone and Company Ltd, offering a range of services including indoor and outdoor dining, conference halls, accommodation units, airport transfers, tourist packages, takeaway and lunch box packages, rooftop and indoor bars, as well as massage and sauna rooms.
                        </p>
                    </div>

                    <div class="h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4"></div>
                </div>
            </div>
        </section>
    

                    <section class="section__history py-8 sm:py-12  md:py-16 bg-gray-100">
            <div class="container mx-auto ">
                <div class="lg:flex lg:gap-8 lg:items-center">

                    <div class="h-96 w-full bg-slate-950 rounded-lg lg:basis-2/4"></div>

                    <div class="lg:basis-2/4">
                        <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl">Ngiloi Ulomi Enterprises Ltd</h3>

                        <p class="leading-loose mb-4">
Ngiloi Ulomi Enterprises Ltd was incorporated in 2007 and is a company that provides car service supplies, lubricants, and tire outlets. With over 15 years of experience, the company prioritizes customer satisfaction and works with top producers and suppliers of high-quality products locally and internationally. It is owned by Panone and Company Ltd and operates 18 outlets on each of its filling stations, providing door-to-door services when required.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <!-- 

At Panone and Company, we are committed to protecting the health and safety of our employees and stakeholders. We adhere to all HSSE laws and industry standards and provide regular training to our staff to ensure they are fully aware of their responsibilities. In addition, we conduct routine environmental impact assessments and audits to ensure full regulatory compliance. Our policies prioritize the wellbeing of our people and the environment, and we strive to make a positive impact in everything we do.

         -->

        
        <!--  Section CTA -->
        <section class="section__cta  bg-slate-800 py-10 sm:py-16 md:py-24">
            <div class="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <h1 class="text-4xl text-gray-100 text-center mb-4"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
                    Call To Action</h1>
                <p class="leading-loose text-center text-gray-100"
                    v-animate-onscroll.repeat="{down: 'animated animate__fadeInDown', up: 'animated animate__fadeInUp'}">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit debitis quas maiores
                    nihil totam, neque tempora qui optio voluptates.
                </p>
            </div>
        </section>

        <!-- Section Contact Us -->
        <ContactSection></ContactSection>

        <!-- Footer  -->
        <TheFooter></TheFooter>
    </div>
</template>