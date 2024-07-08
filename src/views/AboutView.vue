<template>
    <div class="">
        <section-container>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
                <div class="rounded order-2 lg:order-1">
                    <img src="../assets/imgs/PANONE-11.jpg" alt=""
                        class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                </div>
                <div class="lg:order-2">
                    <section-title>
                        Our History
                    </section-title>
                    <section-body>
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
                    </section-body>
                </div>
            </div>
        </section-container>

        <section-container>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
                <div class="">
                    <section-title>
                        Who We Are
                    </section-title>
                    <section-body>
                        We are a private limited liability company, registered under laws of the republican of
                        Tanzania that begun in 2002. Today we are one of the leading players in the market of
                        petroleum trading and transportation across Tanzania and our neighboring countries. Our
                        other related businesses include bulk importation of fuel products, Mini Super markets,
                        Hotels & tyres and lubricant outlets. Our company has strived to employ and train high
                        qualified staff in management to keep up with market dynamics.
                    </section-body>
                </div>
                <div class="rounded">
                    <img src="../assets/imgs/PANONE-9.jpg" alt=""
                        class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                </div>
            </div>
        </section-container>

        <section-container>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
                <div class="rounded order-2 lg:order-1">
                    <img src="../assets/imgs/PANONE-7.jpg" alt=""
                        class="h-full w-full object-cover object-center rounded-lg bg-blend-darken">
                </div>
                <div class="lg:order-2">
                    <section-title>Our Policy</section-title>
                    <section-body>
                        Panone is committed to protect our employees and stakeholders as a whole from any injury or
                        illness.
                        We are fully compliant with all HSSE laws and industry standards. Our staff receives regular
                        training and
                        are fully aware of their responsibility when it comes to health and safety
                        We conduct environmental impact assessments and audits on a routine basic to ensure full
                        regulatory compliance
                    </section-body>
                </div>
            </div>
        </section-container>
    </div>
</template>

<script setup>

</script>

<style scoped>
.section__hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/imgs/PANONE-6.jpg");
    background-size: cover;
    background-position: center;
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