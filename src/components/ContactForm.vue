<template>
    <div class="">

        <div class="">
            <el-form style="font-size: 1rem !important" v-if="message" class="my-6" :hide-required-asterisk="true"
                :rules="rules" label-position="top" ref="messageForm" :model="message">
                <!-- Full Name -->
                <el-form-item class="font-bold" style="font-size: 1rem !important" label="Full Name" prop="fullName">
                    <template #label>
                        <span class="capitalize text-base font-semibold leading-6 text-gray-900">Full Name</span>
                    </template>
                    <el-input size="large" class=" text-base font-normal" style="font-size: 1rem !important"
                        v-model="message.fullName" placeholder="Enter your full name" />
                </el-form-item>

                <!-- Email -->
                <el-form-item class="font-bold" style="font-size: 1rem !important" label="Email" prop="email">
                    <template #label>
                        <span class="capitalize text-base font-semibold leading-6 text-gray-900">Email</span>
                    </template>

                    <el-input size="large" class=" text-base font-normal" style="font-size: 1rem !important"
                        v-model="message.email" placeholder="Enter your email" />
                </el-form-item>

                <!--Phone Number -->
                <el-form-item class="font-bold" style="font-size: 1rem !important" label="Phone Number"
                    prop="phoneNumber">
                    <template #label>
                        <span class="capitalize text-base font-semibold leading-6 text-gray-900">phone number</span>
                    </template>
                    <el-input size="large" class=" text-base font-normal" style="font-size: 1rem !important"
                        v-model.number="message.phoneNumber" placeholder="Enter your phone number" />
                </el-form-item>

                <!-- messge -->
                <el-form-item class="font-bold" style="font-size: 1rem !important" label="Message" prop="message">
                    <template #label>
                        <span class="capitalize text-base font-semibold leading-6 text-gray-900">message</span>
                    </template>
                    <el-input size="large" class=" text-base font-normal" style="font-size: 1rem !important"
                        v-model="message.message" placeholder="Enter your messge" type="textarea" :rows="5" />
                </el-form-item>

                <div class="mt-8 flex justify-end">
                    <button type="button" @click.prevent="sendContactMessage(messageForm)"
                        class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                        Send Message
                    </button>
                </div>

            </el-form>
        </div>
    </div>
</template>

<script setup>
import {
reactive,
ref
} from 'vue';

    const message = reactive({
        fullName:"",
        phoneNumber:"",
        email:"",
        message:""
    })

const messageForm = ref()

const rules = reactive({
    fullName: [{
        required: true,
        trigger: "blur",
        message: "Please enter your full name"
    }],
    email: [{
        required: true,
        trigger: "blur",
        message: "Please enter your email"
    },{
        type:"email",
        message:"Please enter a correct email address",
        trigger: "blur",
    }],
    phoneNumber: [{
            required: true,
            trigger: "blur",
            message: "Please enter your phone number"
        },
        {
            type: 'number',
            message: "Phone number can not be a string"
        }
    ],
    message: [{
        required: true,
        trigger: "blur",
        message: "Please enter your message"
    }]
})
</script>