import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
    
  var name ="Fahim Ahmed Shakib";

  var style={

    color :'yellow'
  }
  var ara=['Falak','Salak','Malak'];

  const products=[{name:'photoshop',price:'$9.3'},
   {
     name:'Camera',price:'$200'
   }];

   var nayoks=['fahim','ahmed','nasim','karim','razzak','Rifat','Shakib','Akib']

   var friends=['fahim','ahmed','nasim','karim','razzak','Rifat','Shakib','Akib']


  return (
    <div className="App">
      <header className="App-header">
      
      <p>i am a react person</p>

      <Counter></Counter>

     <ul>

        {
        nayoks.map(nayoks=> <li>{nayoks}</li>)

      
}
{products.map(product=><div><li>{product.name}</li>
                    
                        <h3>{product.price}</h3></div>)}
  


     </ul>

     
     {
       products.map(pd=><Product product={pd}></Product>)
     }

     {
       friends.map(name=><Friend Name={name} ></Friend>)
     }

   
     
     <Person name={ara[2]}></Person>
  

      

    
      </header>
    </div>
  );

  
}



function Friend(props)
{
  const friendStyle=
  {
    border : '1px solid gray',

    borderRadius:'5px',

    backgroundColor:'red',

    color:'black',

    height:'200px',

    width:'200px',

    float:'left'
  }

  return (
        
      <li style={friendStyle}>{props.Name}</li>
  )

}
function Product(props)
{
    const productStyle=
    {
      border : '1px solid gray',

      borderRadius:'5px',

      backgroundColor:'lightgray',

      height:'200px',

      width:'200px',

      float:'left'
    }

    //console.log(props);

    return (
      
      <div style={productStyle}>

    <h2>{props.product.name}</h2>

        <h1>{props.product.price}</h1>

        <button>Buy Now</button>
      </div>
    )

}

function Counter()
{

  const [count,setCount]=useState(10);

  const hand=() => setCount(count+1);
  
    

  return (

    <div>

  <h1>Count : {count}</h1>

   <button onClick={hand}>Increase</button>

   <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Person(props){

  var name='Fahim'

  const personStyle={
    
    color : 'red',

    border : '2px solid red',

    margin : '10px'
  }
  console.log(props);
  return (
    
    <div style={personStyle}>
      
  <h1>{props.name}</h1>

      <h3 style={{color : 'yellow'}}>Name of {name}</h3>
    
    </div>
  )

}

export default App;
