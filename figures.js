function hourglass(x) {
    let s = ''
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            if(i === 0 || i === x - 1) s += '-'
            else {
                if(i === j) s += '\\'
                else if(j === x - i - 1) s += '/'
                else s += ' '
            }
        }
        s += '\n'
    }
    console.log(s);
}
// hourglass(18)

function hourglassX(x) {
    let s = ''
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <= x; j++) {
            if(i == 1 || i == x || i == j || j == x - i + 1) s += '*'
            else s += ' '
        }
        s += '\n'
    }
    console.log(s)
}


function reverseHourglass(x) {
    let s = ''
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <= x; j++) {
            if( (j <= i && j >= 1 && j <= x - i + 1) || (j <= x && j >= x - i + 1 && j >= i) ) s += '*'
            else s+= ' '
        }
        s += '\n'
    }
    console.log(s)
}
// reverseHourglass(17)

function triangle(x) {
    let s = ''
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            if(j === 0) s = s.concat('|')
            else if(i === x - 1) s = s.concat('-')
            else if(i === j) s = s.concat('\\')
            else s = s.concat(' ')
            // s = s.concat(i === j || i === x - 1 || j === 0 ? '*' : ' ')
        }
        console.log(s)
        s = ''
    }
    console.log("\n");
}
// triangle(13)

function rectangle(x) {
    let s = ''
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            s = s.concat(i === 0 || i === x - 1 || j === 0 || j === x - 1 ? '*' : ' ')
        }
        console.log(s)
        s = ''
    }
    console.log("\n");
}
// rectangle(13)

function pyramid(x) {
    let s = '', 
        h = Math.floor(x / 2) + (x % 2 == 0 ? 0 : 1)
    for(let i = 1; i <= h; i++) {
        for(let j = 1; j <= x; j++) {
            if(h - i + 1 <= j && h + i - 1 >= j) s += '*'
            else s+= ' '
        }
        s += '\n'
    }
    console.log(s)
}
// pyramid(9)


function reversePyramid(x) {
    let s = '',
        h = Math.floor(x / 2) + 1
    for(let i = h; i >= 1; i--) {
        for(let j = 1; j <= x; j++) {
            if(j >= h - i + 1 && j <= h + i - 1) s += '*'
            else s += ' '
        }
        s += '\n'
    }
    console.log(s)
}
// reversePyramid(9)


function romb(x) {
    let s = '',
        h = Math.floor(x / 2) + 1
    for(let i = 1, k = x; i <= x, k >= 1; i++, k--) {
        for(let j = 1; j <= x; j++) {
            if(j >= h - i + 1 && j <= h + i - 1 && i <= h) {
                s += '*'
            }
            else if(j >= h - k + 1 && j <= h + k - 1 && i > h) s += '*'
            else s += ' '
        }
        s += '\n'
    }
    console.log(s)
}
// romb(13)


/*
      *
     ***
    *****
     ***
      *
*/


function general(x) {
    let s = ''
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            s = s.concat(i === 0 || i === x - 1 || j === 0 || j === x - 1 || i === j || j === x - i - 1 || i === Math.floor(x / 2) || j === Math.floor(x / 2) ? '*' : ' ')
        }
        console.log(s)
        s = ''
    }
    console.log("\n");
}

// general(20)



function cube(x) {
    if(x % 2 === 0) x = x + 1
    if(x % 2 !== 0 && x > 5) {
        let s = '', half = Math.floor(x / 2)
        for(let i = 0, t = 0; i < x + half; i++, t++) {
            for(let j = 0; j < x + half; j++) {
                if(i === x) t = 1

                if(i >= 0 && i <= half) {
                    if( ((i === 0 || i === x - 1) && j >= half) || ((i === half || i === x - 1 + half) && j >= 0 && j <= x - 1) ) s += '*'
                    else if(j === half - t || j === half || j === x - 1 + half - t || j === x - 1 + half) s += '*'
                    else s += ' '
                }
                else if(i > half && i < x - 1) {
                    if(j === 0 || j === half || j === x - 1 || j === x - 1 + half) s += '*'
                    else s += ' '
                }
                else if(i >= x - 1 && i <= x - 1 + half) {
                    if( ((i === 0 || i === x - 1) && j >= half) || ((i === half || i === x - 1 + half) && j >= 0 && j <= x - 1) ) s += '*'
                    else if(j === 0 || j === half - t || j === x - 1 || j === x - 1 + half - t) s += '*'
                    else s += ' '
                }
            }
            s += '\n'
        }
        console.log(s);
    }
}

// cube(8)


function cube1(x) {
    let box = document.querySelector('.box')
    box.querySelectorAll('span').forEach(sp => {
        sp.remove()
    })
    box.querySelectorAll('br').forEach(br => {
        br.remove()
    })

    if(x % 2 === 0) x = x + 1
    if(x % 2 !== 0 && x > 5) {
        let half = Math.floor(x / 2)
        for(let i = 0, t = 0; i < x + half; i++, t++) {
            for(let j = 0; j < x + half; j++) {
                if(i === x) t = 1

                if(i >= 0 && i <= half) {
                    if( ((i === 0 || i === x - 1) && j >= half) || ((i === half || i === x - 1 + half) && j >= 0 && j <= x - 1) ) box.insertAdjacentHTML('beforeend', `<span class="bl">*</span>`)
                    else if(j === half - t || j === half || j === x - 1 + half - t || j === x - 1 + half) box.insertAdjacentHTML('beforeend', `<span class="bl">*</span>`)
                    else box.insertAdjacentHTML('beforeend', `<span class="wh">*</span>`)
                }
                else if(i > half && i < x - 1) {
                    if(j === 0 || j === half || j === x - 1 || j === x - 1 + half) box.insertAdjacentHTML('beforeend', `<span class="bl">*</span>`)
                    else box.insertAdjacentHTML('beforeend', `<span class="wh">*</span>`)
                }
                else if(i >= x - 1 && i <= x - 1 + half) {
                    if( ((i === 0 || i === x - 1) && j >= half) || ((i === half || i === x - 1 + half) && j >= 0 && j <= x - 1) ) box.insertAdjacentHTML('beforeend', `<span class="bl">*</span>`)
                    else if(j === 0 || j === half - t || j === x - 1 || j === x - 1 + half - t) box.insertAdjacentHTML('beforeend', `<span class="bl">*</span>`)
                    else box.insertAdjacentHTML('beforeend', `<span class="wh">*</span>`)
                }
            }
            box.insertAdjacentHTML('beforeend', `<br>`)
        }
    }
}

// document.getElementById('btn').addEventListener('click', () => cube1(+document.querySelector('input').value))
// document.getElementById('btn').onclick = () => cube1(+document.querySelector('input').value)

// document.querySelector('input').addEventListener('change', e => cube1(+e.target.value))
document.querySelector('input').onchange = e => cube1(+e.target.value)