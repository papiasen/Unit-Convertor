let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let resultEl1 = document.getElementById("result1-el")
let resultEl2 = document.getElementById("result2-el")
let resultEl3 = document.getElementById("result3-el")

// inputEl.value = 0

// convertBtn.addEventListener("click", function () {
//     if (inputEl > 0) {
//         const metertoFeet = inputEl.value * 3.281
//         let result = `${inputEl.value} meters = ${metertoFeet} feet`
//         resultEl1.textContent = result
//     } else {
//         console.log("Incorrect format. Please enter a number.")
//     }
// })

convertBtn.addEventListener("click", function () {

    const metertoFeet = inputEl.value * 3.281
    const feettometer = inputEl.value / 3.281
    let result1 = `${inputEl.value} meters = ${metertoFeet.toFixed(2)} feet ¦ ${inputEl.value} feet = ${feettometer.toFixed(2)} meters`
    resultEl1.textContent = result1

    const litrestogallons = inputEl.value * 0.264
    const gallonstolitres = inputEl.value / 0.264
    let result2 = `${inputEl.value} litres = ${litrestogallons.toFixed(2)} gallons ¦ ${inputEl.value} gallons = ${gallonstolitres.toFixed(2)} litres`
    resultEl2.textContent = result2

    const kilotopounds = inputEl.value * 2.204
    const poundstokilo = inputEl.value / 2.204
    let result3 = `${inputEl.value} kilos = ${kilotopounds.toFixed(2)} pounds ¦ ${inputEl.value} pounds = ${poundstokilo.toFixed(2)} kilos`
    resultEl3.textContent = result3

})