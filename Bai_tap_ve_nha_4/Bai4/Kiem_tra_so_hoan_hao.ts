function bai4(n:number){
    let factor:number[]=[]
    for (let i = 1; i < n; i++) {
        if(n%i===0){
            factor.push(i)
        }
    }
    let check:number = factor.reduce((sum,e)=>sum+e,0)
    if(check === n){
        console.log(n+' is a perfect number')
    } else {
        console.log(n+' is NOT a perfect number')
    }
}
let n = 6
bai4(n)