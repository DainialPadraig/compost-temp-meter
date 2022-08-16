let tempInF = 0
let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = Environment.Ds18b20Temp(DigitalPin.P1, Environment.ValType.DS18B20_temperature_C)
    tempInF = 9 / 5 * temp + 32
    OLED.clear()
    OLED.writeString("Temp: " + tempInF + "F")
    if (tempInF < 135) {
        basic.showIcon(IconNames.Sad)
    } else if (tempInF < 161) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Angry)
    }
    basic.pause(5000)
})
