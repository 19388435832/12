basic.forever(function () {
    if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.UP)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.UP)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -100)
        neZha.setMotorSpeed(neZha.MotorList.M2, -100)
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.LEFT)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.RIGHT)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, -100)
    } else {
        neZha.stopAllMotor()
    }
})
