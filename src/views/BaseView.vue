<template>
    <div class="flex flex-col h-svh">
        <TheHeader></TheHeader>

        <main class="  flex-grow">
            <router-view></router-view>
        </main>

        <TheFooter class="mt-auto"></TheFooter>
    </div>
</template>

<script setup></script>