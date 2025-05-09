function INCIRCLE () {
    if (reromicro.LineSensorDetectsLine(LineSensors.Center) && (reromicro.LineSensorDetectsLine(LineSensors.Left) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        reromicro.MoveBackward(50)
        basic.pause(200)
        reromicro.TurnLeft(20)
        basic.pause(200)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.TurnLeft(50)
        basic.pause(100)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.TurnRight(50)
        basic.pause(100)
    } else {
        reromicro.MoveForward(30)
    }
}
input.onButtonPressed(Button.A, function () {
    junction = 0
})
function LINEFOLLOW () {
    if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(50)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.TurnLeft(50)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.TurnRight(50)
    }
}
let junction = 0
basic.showNumber(junction)
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Center) && (reromicro.LineSensorDetectsLine(LineSensors.Left) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        junction += 1
        reromicro.MoveForward(30)
        basic.pause(200)
        reromicro.Brake()
        basic.showNumber(junction)
        basic.pause(500)
    }
    if (junction < 4) {
        LINEFOLLOW()
    } else {
        if (junction == 4) {
            junction += 1
            reromicro.TurnLeft(50)
            basic.pause(200)
            reromicro.Brake()
            reromicro.MoveForward(49)
            basic.pause(200)
        } else {
            INCIRCLE()
        }
    }
})
