bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    DATA = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
})
let sensors = ""
let DATA = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    sensors = "" + input.temperature() + ":" + sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    bluetooth.uartWriteString(sensors)
    if (DATA == "f") {
    	
    } else if (DATA == "b") {
    	
    } else if (DATA == "r") {
    	
    } else if (DATA == "l") {
    	
    } else if (DATA == "A") {
    	
    } else if (DATA == "B") {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Backward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Forward, 255)
    } else {
        motionbit.brakeMotor(MotionBitMotorChannel.All)
    }
})
