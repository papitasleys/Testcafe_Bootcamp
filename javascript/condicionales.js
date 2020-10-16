//operadores condicionales

let masDe18 = false
let edad = 20

if (edad < 18) {
    console.log("No drink")
    masDe18 = false
} else {
    console.log("yes drink")
    masDe18 = true
}

console.log(masDe18)

masDe18 = (edad < 18) ? false : true

console.log(masDe18)