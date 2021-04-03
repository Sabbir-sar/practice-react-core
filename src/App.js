import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const person ={
  //   name : 'dr.kabila',
  //   job:'actor'
  // }
  // const person2= {
  //   name:'eva rahman',
  //   job:'singer actor'
  // }
  // var style ={
  //   color: 'orange',
  //   backgroundColor: 'white'
  // }

  const nayoks = ['Anwar','Jafor','Alogmir','Aomgir','Salman']
  const products =[
    {name:'photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$99.88'},
    {name:'Pdf reader',price:'$34'},
    {name:'Premiere element',price:'$34'}
  ]
  // const nayokNames = nayoks.map(nayok=>nayok);
  // console.log(nayokNames)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>

        {/* //pass dynamic object */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product product={products[0]}></Product>
        <Product product ={products[1]}></Product> */}
        {/* //pass dynamic data and pd is dynamic value and props pass the product element */}
        {
          products.map(pd=><Product product={pd}></Product>)
        }

        {/* //pass the dynamic data by props in nayok array */}
        <Person name="Munna" job="Actor"></Person>
        <Person name="Manna" job="Singer"></Person>
        <Person></Person>

       {/* //create dynamic data */}
       {/* <Person name='Rubel' nayika='moushumi'></Person>
       <Person name='Jasim' nayika='sabana'></Person>
       <Person name='BappaRaz' nayika='cheka'></Person> */}

        {/* <p>My first app</p>
        <h4 className="" style ={style}>His heading : { person.name + " " + person.job}</h4>
        <h5>Singer:{person2.name + " " + person2.job }</h5> */}
      </header>
    </div>
  );
}
function Counter(){
  const[count, setCount] = useState(10);
  // const handleIncrease =()=>console.log('clicked');
  const handleIncrease =()=>setCount(count+1);

  return(
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      {/* <button onClick={()=>setCount(count+1)}>Increase</button> */}
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  //create state
  const[users,setUsers] = useState([]);
 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data =>setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      {/* {console.log(users)} */}
        <ul>
          {
           users.map(user=><li>{user.email}</li>) 
          }
        </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px ',
    backgroundColor: 'green',
    height: '200px',
    width: '200px',
    float:'left'
  }
  // console.log(props);
  const {name,price} = props.product;
  console.log(name,price)
  return(
    <div style={productStyle}>
      {/* <h3>Name:{props.product.name}</h3>
      <h4>Price:{props.product.price}</h4> */}
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy now:</button>
    </div>
  )
}

function Person(props){
  const style ={
    border:'2px solid orange',
    margin: '10px'
  }
  return(
    <div style={style}>
      <h1>his name:{props.name}</h1>
      <p>his Profession:{props.job}</p>
    </div>
  )
}


//component
// function Person(props){
//   const PersonStyle={
//     border:'2px solid yellow',
//     margin:'10px'
//   }
//   return(
//     <div style={PersonStyle}>
//       <h3>Nayok:{props.name}</h3>
//       <h5>Hero of {props.nayika}</h5>
//     </div>
//   )
// }

export default App;
