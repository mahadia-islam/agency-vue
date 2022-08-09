<template>
    <div class="md:py-10 font-poppin">
        <div class="max-w-7xl mx-auto flex flex-col md:items-center md:flex-row">
            <div class="w-full md:w-1/2">
                <img src="./img/contact.svg" alt="">
            </div>
            <div class="w-full py-10 flex flex-col items-center px-6 md:px-0 md:py-0 md:w-1/2">
                <div class="w-full">
                    <p class="text-green-500 pb-2">GET A QUOTE</p>
                    <h1 class="text-3xl pb-5 font-semibold md:text-5xl">Send Us A Message</h1>
                </div>
                <form action="">
                    <input
                        class="border-b border-green-500 py-3 outline-none w-full my-3 placeholder:text-green-500 text-sm md:text-base"
                        type="text" placeholder="Name">
                    <input
                        class="border-b border-green-500 py-3 outline-none w-full my-3 placeholder:text-green-500 text-sm md:text-base"
                        type="email" placeholder="Email">
                    <input
                        class="border-b border-green-500 py-3 outline-none w-full my-3 placeholder:text-green-500 text-sm md:text-base"
                        type="text" placeholder="Phone">
                    <textarea
                        class="border-b border-green-500 outline-none w-full my-3 placeholder:text-green-500 text-sm md:text-base"
                        name="" id="" placeholder="Message"></textarea>
                    <button
                        class="px-5 py-2 bg-green-500 rounded-full my-3 text-white cursor-pointer text-sm md:text-base">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>