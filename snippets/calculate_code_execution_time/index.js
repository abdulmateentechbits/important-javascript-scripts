// Ins this code snippet we can calculate the function runtime use performance.now()


let start_time = performance.now();

function calculateFunctionRuntime(){
    for(let i=0; i<10000; i++){
        for(let j=0; j< 2;j++){
            console.log('Hello world...')
        }
    }
}

calculateFunctionRuntime();

let end_time = performance.now()

let total_time = end_time - start_time;

console.log('Total time: ' + total_time + 'ms')

