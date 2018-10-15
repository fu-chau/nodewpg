let f1 =- 1;
let f2 = 1;
let f = f1 + f2;
let counter = 1;
let howManyNumbers = 100;


while (counter <= howManyNumbers) {
    f= f1 + f2
    f1 = f2
    f2 = f
    console.log (`f${counter}=${f}`);
    f++;
    counter++;
}


// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	 F18  F19
// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597 2584 4181

// f10 = (f10-1) + (f10-2)


// too understand this i use this websites 
// https://www.p-programowanie.pl/matura-z-informatyki/ciag-liczby-fibonacciego/
// https://pl.wikipedia.org/wiki/Ci%C4%85g_Fibonacciego



