/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Sep 2025
 * This program will accept an imput for temperature
*/

// our variables
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showString('Temperature is: ' + temperature.toString() + ' degrees C. ')
})