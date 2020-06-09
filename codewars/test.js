function scrabbleScore(str) {
    let res = 0;
    let arr1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];//1
    let arr2 = ["D", "G"];//2
    let arr3 = ["B", "C", "M", "P"];//3
    let arr4 = ["F", "H", "V", "W", "Y"];//4
    let arr6 = ["J", "X"];//8
    let arr5 = ["Q", "Z"];//10
    //K=5
    str = str.split('');
    str.forEach((item, index) => {
        if (item == '') {
            res += 0;
        }
        if (arr1.includes(item.toUpperCase())) {
            res += 1;
        }
        if (arr2.includes(item.toUpperCase())) {
            res += 2;
        }
        if (arr3.includes(item.toUpperCase())) {
            res += 3;
        }
        if (arr4.includes(item.toUpperCase())) {
            res += 4;
        }
        if (arr5.includes(item.toUpperCase())) {
            res += 10;
        }
        if (arr6.includes(item.toUpperCase())) {
            res += 8;
        }
        if (item.toUpperCase() == 'K') {
            res += 5;
        }
    });
    return res;
}

// scrabbleScore('cabbage');
let txt1 =
    'H Z R R Q\n' +
    'D I F C A E A !\n' +
    'G H T E L A E\n' +
    'L M N H P R F\n' +
    'X Z R P E';
let txt2 = "q z J H M z D v H B H A E D G x s C C t H K w y s G K I q L t K D E J w L \n" +
    "K p v r v z C y K M o p D y o y r n \n" +
    "M E w B C p F n M s M J E s u A r J G F L v t r F B H E E D y E x A z F L q s r";
let txt3 = "B p E D y o q F q n C H v x K K D \n" +
    "C r I y o w A n y F t B B q J C u B t z I A F I \n" +
    "F H u s s y H I D n B \n" +
    "L o J u F D F J A I s G s u o x E v \n" +
    "L r x G J K y x o I E n w G H J M M z w F M r G \n" +
    "K";
let txt4 = 'x';

function getDiagonalCode(grid) {
    let arr = grid.split('\n').map((item) => {
        return item.replace(/\s/g, "");
    });
    let txt = '', start = 0, i = 0, bol = true;
    while (arr[start] && arr[start][i]) {
        txt += arr[start][i];
        if (bol) {
            start++;
            if (start == arr.length - 1) {
                bol = false;
            }
        } else {
            start--;
            if (start == 0) {
                bol = true;
            }
        }
        i++;
    }
    return txt;
}

// console.log(getDiagonalCode(txt1));
// console.log(getDiagonalCode(txt2));
// console.log(getDiagonalCode(txt3));
console.log(getDiagonalCode(txt4));
