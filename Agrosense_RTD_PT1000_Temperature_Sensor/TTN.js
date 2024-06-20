function decodeUplink(input) {

    var num = input.bytes[0] * 256 + input.bytes[1]
    var bat = input.bytes[2] / 10.0
    var temp = (input.bytes[3] * 256 + input.bytes[4]) / 10.0

    return {
        data: {
            field1: num,
            field2: bat,
            field3: temp,
        },

    };
}