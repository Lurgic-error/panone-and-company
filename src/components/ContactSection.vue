<template>
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
                        <div class="py-8 sm:py-12 md:py-16  px-4 md:px-8">
                            <h3 class="mb-4 md:mb-6 lg:mb-10 text-3xl md:text-4xl font-bold text-center">Contact Us</h3>
                            <ContactForm></ContactForm>
                        </div>
                    </div>

                </div>
            </div>
        </section>
</template>

<script setup>
import ContactForm from './ContactForm.vue';
</script>