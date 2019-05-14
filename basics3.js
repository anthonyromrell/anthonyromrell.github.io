let data = 1000;
let light = false
let number = 0;
let lighting = ["On", "Off", "Bright", "Dim"]

const lights = {
    ON:"ON",
    OFF:"OFF",
    BRIGHT:"BRIGHT",
    DIM:"DIM",
    BLACK:"BLACK",
    NEON:"NEON"
}

function BestLightSwitch(lightQuality) {
    switch (lightQuality) {
        case lights.ON:
            alert("The light is on")
            break;

        case lights.OFF:
            alert("The light is off")
            break;

        case lights.BRIGHT:
            alert("The light is bright")
            break;

        case lights.DIM:
            alert("The light is dim")
            break;
        case lights.BLACK:
            alert("It's Halloween!")
        default:
            break;
    }
}

BestLightSwitch(lights.BLACK);

function CheckData(params) {
    for (let i = 0; i < users.length; i++) {
        alert(users[i])
    }
}

function SwitchingLightingStrings(lightQuality) {
    switch (lightQuality) {
        case "On":
            alert("On")
            break;

        case "Off":
            alert("Off")
            break;
    
        case "Bright":
            alert("Bright")
            break;

        case "Dim":
            alert("Dim")
            break;

        default:
            alert("No Lights")
            break;
    }
}

function SwitchLightingArray(light) {
    switch (light) {
        case lighting[0]:
            alert(lighting[0] + " is the lighting")
            break;
        
        case lighting[1]:
            alert(lighting[1] + " is the lighting")
            break;

        case lighting[2]:
            alert(lighting[2] + " is the lighting")
            break;
            
        case lighting[3]:
            alert(lighting[3] + " is the lighting")
            break;
    
        default:
            break;
    }
}
