<template>
    <div class="w-full relative md:h-screen">
        <div class="w-full absolute top-0 left-0">
            <div class="max-w-7xl mx-auto flex justify-between px-4 py-5 items-center extra_md:px-0">
                <a href="#" class="text-xl font-extrabold font-poppin md:text-2xl">Agency</a>
                <div class="hidden md:block">
                    <ul class="flex font-openSans font-medium">
                        <li class="px-3"><a href="#home">Home</a></li>
                        <li class="px-3"><a href="#about">About</a></li>
                        <li class="px-3"><a href="#service">Service</a></li>
                        <li class="px-3"><a href="#blog">Blog</a></li>
                        <li class="px-3"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <button class="bg-green-400 px-5 py-2 text-white rounded-full font-openSans hidden md:block">Hire
                    us</button>
                <div class="block text-2xl md:hidden">
                    <ion-icon name="grid-outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="max-w-7xl m-auto flex flex-col px-4 md:h-full md:items-center md:flex-row extra_md:px-0">
            <div class="w-full pt-28 pb-10 font-poppin text-center md:text-left md:py-0 md:w-1/2">
                <h1 class="text-3xl font-extrabold md:text-6xl">Best Digital <br> Product Design <br>
                    Agency</h1>
                <p class="py-5 text-xs sm:text-sm md:text-base">Want to grow up your business & boost up your sale
                    <br>with our
                    professional work team
                </p>
                <div class="flex w-fit mx-auto my-5 md:my-0 md:mx-0">
                    <button class="mr-3 py-2 px-5 bg-green-400 text-white flex items-center text-sm md:text-base">
                        <span class="pr-2">Get started</span>
                        <ion-icon name="return-up-forward-outline"></ion-icon>
                    </button>
                    <button class="py-2 px-5 text-green-400 flex items-center text-sm md:text-base">
                        <span class="pr-2">See live demo</span>
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div class="flex w-full md:w-1/2 justify-center">
                <img src="./img/home.svg" alt="">
            </div>
        </div>
    </div>
</template>