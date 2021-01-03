let sicaklik = 0
let durum = false
basic.forever(function () {
    sicaklik = input.temperature()
    if (sicaklik >= 15 && sicaklik <= 23) {
        durum = true
    } else {
        durum = false
    }
    if (durum == true) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(200)
    }
})
