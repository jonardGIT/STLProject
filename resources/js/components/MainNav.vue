<template>
    <nav>
        <div class="container mx-auto">

            <!-- Hidden Menu -->
            <!-- If toggleMenu is true then show -->
            <div class="mobile-menu w-96 right-0 p-4 fixed h-screen z-10" v-show="toggleMenu">
                <div>
                    <div class="flex justify-end">
                        <button @click="toggleMenu = !toggleMenu" class="w-12 h-12 bg-white text-red-600 rounded-full flex flex-col justify-center items-center gap-y-1 font-bold">X</button>
                    </div>
                </div>
            </div>


            <!-- MAIN NAV -->
            <div class="flex justify-between items-center p-4 top-0">
                <a href="" class="">LOGO</a>
                
                <button @click="toggleMenu = !toggleMenu" class="burger-btn w-12 h-12 rounded-full flex flex-col justify-center items-center gap-y-1">
                    <div class="h-1 w-6 bg-white rounded"></div>
                    <div class="h-1 w-6 bg-white rounded"></div>
                    <div class="h-1 w-6 bg-white rounded"></div>
                </button>
            </div>


        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            toggleMenu: false
        }
    }
}
</script>

<style scoped>
.mobile-menu {
    background: rgb(0,107,182);
    background: linear-gradient(160deg, rgba(0,107,182,1) 0%, rgba(8,20,118,1) 71%);
}

.burger-btn {
    background: rgb(18,146,213);
    background: linear-gradient(135deg, rgba(18,146,213,1) 0%, rgba(83,53,219,1) 71%);
}

</style>