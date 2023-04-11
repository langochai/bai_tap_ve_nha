function bai1(arr:number[],n:number){
    let result = []
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i,i+n))
    }
    console.log(result)
}

let arr: number[] = [1,2,3,4,5,6,7,8,9]
let n: number = 2
bai1(arr,n)