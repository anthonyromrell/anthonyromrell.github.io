const lights = {
    ON:"ON",
    OFF:"OFF",
    BRIGHT:"BRIGHT",
    DIM:"DIM"
}

function SwitchLights(light, elem) {
    switch (light) {
        case lights.ON:
            elem.style.opacity = 1;
            break;

        case lights.OFF:
            elem.style.opacity = 0;
            break;

        case lights.BRIGHT:
            elem.style.opacity = .5;
            break;

        case lights.DIM:
            elem.style.opacity = .25;
            break;
    
        default:
            break;
    }
}