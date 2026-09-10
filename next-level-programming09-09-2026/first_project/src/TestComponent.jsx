

// arrow function 
// const TestComponent = () => {
//   return <h1>Hello World</h1>;
// };

// export default TestComponent;

// export default function TestComponent(){
//     return <h1>Hello World</h1>;
// }

function TestComponent({name}){
    return <>
    <h1>Hello World</h1>
    <p>Love You {name}</p>
    
    </>;
}

export default TestComponent;