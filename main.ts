input.onButtonPressed(Button.A, function () {
    Rett_frem(0.1)
})
function Rett_frem (lengde: number) {
    for (let index = 0; index < lengde * 3000; index++) {
        HøyreHjul.moveAntiClockwise(5, stepUnit.Steps)
        VenstreHjul.moveAntiClockwise(5, stepUnit.Steps)
    }
}
let VenstreHjul: stepperMotor.Motor = null
let HøyreHjul: stepperMotor.Motor = null
let hjulradie = 0.04
HøyreHjul = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P8,
DigitalPin.P2
)
VenstreHjul = stepperMotor.createMotor(
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16
)
VenstreHjul.setDelay(2)
HøyreHjul.setDelay(2)
basic.forever(function () {
	
})
