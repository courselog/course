export function calcFibonacci(n: number): number {

    // n is index (from 1) in fibo series
    // result is the value
    let count = 0;
    let series: number[] = [1, 1]

    // let prevprev =1;
    let prev =1;
    let curr=1;
    
    if(n < 3) {
        return 1;
    }

    for(let i = 3; i<= n; i++) {
        let temp = curr;

        curr = curr+ prev;
        prev = temp;
    }

    return curr;
}

export function fiboRe(n: number) : number{
    let res: number

    if(n< 3) {
        res = 1
    }
    else{
        res = fiboRe(n-1) + fiboRe(n-2);
    
    }
        console.log('return');
    return res;
}