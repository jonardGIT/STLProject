<template>
    <div class="number-generator h-screen p-5 flex items-center">
        <div class="container mx-auto">


            <div class="flex flex-col gap-y-20">
                <div class="flex flex-col gap-y-5">
                    <h1 class="text-center text-4xl font-bold text-white">Pick Your Numbers</h1>
                    <p class="text-center text-white">Can't decide what DC-2 numbers to play next? Don't feel bad. Sometimes, it happens to the best of us. Why not let the DC Lottery website's random number generator give you some ideas?</p>
                </div>

                <div class="flex flex-col gap-y-5">
                    <h3 class="text-center text-xl font-bold text-white">Could these be your winning numbers?</h3>
                    <div>
                        <div class="flex justify-center gap-x-4">
                            <div class="border-2 border-blue-800 rounded-full h-16 w-16 text-center flex justify-center items-center bg-white">
                                <span class="text-blue-800 font-bold"> {{ generatedNum1 }} </span>
                            </div>
                            <div class="border-2 border-blue-800 rounded-full h-16 w-16 text-center flex justify-center items-center bg-white">
                                <span class="text-blue-800 font-bold"> {{ generatedNum2 }} </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="special-button rounded-xl h-16 px-8 shadow-md" @click="generateNumbers">
                            <span class="text-white font-bold">Generate New Numbers</span>
                        </button>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<style scoped>
.number-generator {
    background: rgb(21,100,188);
    background: linear-gradient(180deg, rgba(21,100,188,1) 0%, rgba(96,77,212,1) 71%);
}

.special-button {
    background: rgb(205,22,83);
    background: linear-gradient(270deg, rgba(205,22,83,1) 0%, rgba(147,25,161,1) 71%);
}
</style>

<script>
export default {
    data(){
        return {
            generatedNum1: 0,
            generatedNum2: 0
        }
    },

    methods: {

        generateNumbers: function(){

            this.generatedNum1 = Math.floor(Math.random() * (41 - 1) + 1);
            this.generatedNum2 = Math.floor(Math.random() * (41 - 1) + 1)

        }

    }
}
</script>