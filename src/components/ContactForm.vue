<template>
    <form>
        <label class="mb-2 block" for="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName"
            class="mb-4 block border  border-slate-400 w-full px-4 py-2 placeholder:text-slate-800 focus:border-red-600 active:border-red-600"
            placeholder="Enter your full name">

        <label class="mb-2 block" for="email">Email</label>
        <input type="email" name="email" id="email"
            class="mb-4 block border  border-slate-400 w-full px-4 py-2 placeholder:text-slate-800"
            placeholder="Enter your email">

        <label class="mb-2 block" for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"
            class="mb-4 block border  border-slate-400 w-full px-4 py-2 placeholder:text-slate-800"
            placeholder="Enter your message"></textarea>

        <button
            class="bg-slate-100 border  border-red-600 px-4 py-2  sm:py-3 cursor-pointer text-red-600 hover:bg-red-600 hover:text-gray-100 mt-4 mb-6 sm:mb-0 uppercase tracking-wider">
            Send
        </button>
    </form>
</template>

<script setup></script>