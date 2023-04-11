function bai2(arr1:number[],arr2:number[],arr3:number[],arr4:number[]){
    let a1:number = arr1.reduce((sum,e)=>sum+e,0)
    let a2:number = arr2.reduce((sum,e)=>sum+e,0)
    let a3:number = arr3.reduce((sum,e)=>sum+e,0)
    let a4:number = arr4.reduce((sum,e)=>sum+e,0)
    let check:number[] = [a1,a2,a3,a4]
    check.sort((a,b)=>b-a)
    if (check[0]===a1) console.log(arr1)
    else if (check[0]===a2) console.log(arr2)
    else if (check[0]===a3) console.log(arr3)
    else if (check[0]===a4) console.log(arr4)
}
let arr1:number[] = [1,2]
let arr2:number[] = [3,4]
let arr3:number[] = [5,6]
let arr4:number[] = [7,8]
bai2(arr1,arr2,arr3,arr4)