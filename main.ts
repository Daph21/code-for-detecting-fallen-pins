/**
 * You can't use this block, because the micro:bit would "think" the pin is fallen if the circuit is broken for a little while because the pin is wobbling.
 */
input.onPinReleased(TouchPin.P1, function () {
	
})
let how_long_is_the_circuit_broken_at_P0 = 0
let how_long_is_the_circuit_broken_at_P1 = 0
let how_long_is_the_circuit_broken_at_P2 = 0
radio.setGroup(55)
basic.showLeds(`
    # . # . #
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    `)
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0))) {
        basic.pause(20)
        how_long_is_the_circuit_broken_at_P0 += 20
        if (how_long_is_the_circuit_broken_at_P0 > 1000) {
            radio.sendNumber(1)
            led.plot(0, 2)
            WaitUntilBlocks.waitUntilButtonPressed(Button.A)
        }
    } else {
        how_long_is_the_circuit_broken_at_P0 = 0
    }
})
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P1))) {
        basic.pause(20)
        how_long_is_the_circuit_broken_at_P1 += 20
        if (how_long_is_the_circuit_broken_at_P1 > 1000) {
            radio.sendNumber(2)
            led.plot(2, 2)
            WaitUntilBlocks.waitUntilButtonPressed(Button.A)
        }
    } else {
        how_long_is_the_circuit_broken_at_P1 = 0
    }
})
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P2))) {
        basic.pause(20)
        how_long_is_the_circuit_broken_at_P2 += 20
        if (how_long_is_the_circuit_broken_at_P2 > 1000) {
            radio.sendNumber(3)
            led.plot(4, 2)
            WaitUntilBlocks.waitUntilButtonPressed(Button.A)
        }
    } else {
        how_long_is_the_circuit_broken_at_P2 = 0
    }
})
