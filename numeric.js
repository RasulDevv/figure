function numTriangle1(x) {
    let s = '', z = 1
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <= x; j++) {
            if(j <= i) {
                s += `${z}`
                z++
            }
            else s += ' '
        }
        s += '\n'
    }
    console.log(s)
}
// numTriangle1(4)

function numTriangle2(x) {
    if(x < 10 && x > 0) {
        let s = '', z = 1
        for(let i = 1; i <= x; i++) {
            z = 1
            for(let j = 1; j <= x; j++) {
                if(j <= i) {
                    s += `${z} `
                    z++
                }
                else s += ' '
            }
            s += '\n'
        }
        console.log(s)
    }else numTriangle2(+prompt('0 < x < 10'))
}
// numTriangle2(+prompt())


function numPyramid1(x) {
    let s = '',
        h = Math.floor(x / 2) + 1,
        z = -1
    for(let i = 1; i <= h; i++) {
        z = i - 1
        for(let j = 1; j <= x; j++) {
            if(j >= h - i + 1 && j <= h + i - 1) {
                s += z
                z = j >= h ? z + 1 : z - 1
            }
            else s += ' '
        }
        s += '\n'
    }
    console.log(s)
}
// numPyramid1(9)


function numRomb1(x) {
    let s = '',
        h = Math.floor(x / 2) + 1,
        z = -1
    for(let i = 1, k = x; i <= x, k >= 1; i++, k--) {
        z = i <= h ? i - 1 : k - 1
        for(let j = 1; j <= x; j++) {
            if( (j >= h - i + 1 && j <= h + i - 1 && i <= h) || (j >= h - k + 1 && j <= h + k - 1 && i > h) ) {
                s += z
                if(j < h) z--
                else z++
            }
            else s += ' '
        }
        s += '\n'
    }
    console.log(s)
}
// numRomb1(13)

/* 
        0
       101
      21012
     3210123
      21012
       101
        0
*/