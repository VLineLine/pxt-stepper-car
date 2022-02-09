def on_button_pressed_a():
    VenstreHjul.move_clockwise(1, stepUnit.ROTATIONS)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Rett_frem(lengde: number):
    pass

def on_button_pressed_b():
    VenstreHjul.move_anti_clockwise(1, stepUnit.ROTATIONS)
input.on_button_pressed(Button.B, on_button_pressed_b)

VenstreHjul: stepperMotor.Motor = None
VenstreHjul = stepperMotor.create_motor(DigitalPin.P13,
    DigitalPin.P14,
    DigitalPin.P15,
    DigitalPin.P16)
VenstreHjul.set_delay(0.2)

def on_forever():
    pass
basic.forever(on_forever)
