function bai3(str:string){
    let arr:string[] = str.split('')
    arr.reverse()
    console.log(arr.join(''))
}
let str = 'noideawhatsgoingon'
bai3(str)