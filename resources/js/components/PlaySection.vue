<template>
    <div class="play-section h-screen p-5 flex items-center">
        <div class="container mx-auto">
            <h1 class="text-center text-4xl font-bold text-white mb-2">Enter 2 Numbers (1-40)</h1>
            <div class="flex justify-center items-end gap-x-4 mb-10">
                <div class="flex gap-x-2">
                    <input type="number" class="rounded-full h-16 w-16 text-center" min="0" max="40" maxlength="1">
                    <input type="number" class="rounded-full h-16 w-16 text-center" min="0" max="40" maxlength="1">
                </div>
                <div class="flex flex-col items-center">
                    <label for="bet-type" class="bg-white rounded-t text-center text-blue-600 font-bold px-2">BET TYPE:</label>
                    <select name="" id="bet-type" class="rounded-full h-16 w-40 px-4">
                        <option value="">R</option>
                        <option value="">R</option>
                        <option value="">R</option>
                        <option value="">R</option>
                    </select>
                </div>  
            </div>

            <div class="flex justify-center gap-x-2 md:gap-x-6 items-center mb-10">
                <div class="flex">
                    <p class="bg-white rounded-l-full h-16 px-4 flex items-center">
                        <span class="font-bold">&#8369;</span>
                    </p>
                    <input type="number" class="rounded-r-full h-16 w-40 px-2" placeholder="Amount">
                </div>

                <div class="flex flex-col items-start bg-white text-gray-800 p-4 rounded-lg">
                    <label for="bet-type" class="text-center font-bold mb-2">BET RANGE</label>
                    <div class="flex gap-x-3">
                        <input type="checkbox" id="amdraw" name="betrange" value="am" class="h-5 w-5 border border-gray-300 rounded-md">
                        <label for="amdraw">A.M Draw</label><br>
                    </div>
                    <div class="flex gap-x-3">
                        <input type="checkbox" id="pmdraw" name="betrange" value="pm" class="h-5 w-5 border border-gray-300 rounded-md">
                        <label for="pmdraw">P.M Draw</label><br>
                    </div>
                    <div class="flex gap-x-3">
                        <input type="checkbox" id="nightdraw" name="betrange" value="night" class="h-5 w-5 border border-gray-300 rounded-md">
                        <label for="nightdraw">Night Draw</label><br>
                    </div>
                </div> 
            </div>

            <div class="flex justify-center">
                <button class="special-button rounded-xl h-16 px-8 shadow-md">
                    <span class="text-white font-bold">BET AND WIN</span>
                </button>
            </div>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.play-section {
    background: rgb(18,101,187);
    background: linear-gradient(180deg, rgba(18,101,187,1) 0%, rgba(100,75,213,1) 71%);
}

.special-button {
    background: rgb(205,22,83);
    background: linear-gradient(270deg, rgba(205,22,83,1) 0%, rgba(147,25,161,1) 71%);
}

input:focus {
    outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>