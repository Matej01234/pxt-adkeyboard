enum ADKeys {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5
}
//% icon="\uf141" color=#00f000
namespace ADKeyboard {
    //% block="key %k | is pressed on ADKeyboard at pin %p"
    //% weight=99
    //% color=#00f000
    //% block.loc.cs="klávesa $k je stisknuta na ADKeyboard na pinu %p"
    export function ADKeyboard(k: ADKeys, p: AnalogPin): boolean {
        let a: number = pins.analogReadPin(p);
        if (a < 10 && k == 1) {
            return true;
        } else if (a >= 40 && a <= 60 && k == 2) {
            return true;
        } else if (a >= 80 && a <= 110 && k == 3) {
            return true;
        } else if (a >= 130 && a <= 150 && k == 4) {
            return true;
        } else if (a >= 530 && a <= 580 && k == 5) {
            return true;
        } else return false;
    }
}
