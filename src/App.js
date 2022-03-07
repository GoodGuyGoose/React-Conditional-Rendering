import React, { useState } from 'react'
import './styles.css'




//--------------------------------------------------------------
// CHANGE THE name VARIABLE FROM EMPTY TO FULL STRING TO SEE THE CONTIDITIONALS IN ACTION
//--------------------------------------------------------------
 let name = "Sam"

 function Name() {
   return (
     <>
      <h1>{name}</h1>
     </>
   )
 }

//--------------------------------------------------------------
// CONDITIONAL RENDERING WITH CLASSIC IF/ELSE STATEMENT
//--------------------------------------------------------------

// export default function App() {

//   if(name === "") {
//     return <h3>name is empty string!</h3>
//   }

//   else {
//     return (
//       <div className="App">
//         <Name />
//       </div>
//     )
//   }
// }

//--------------------------------------------------------------
// WE CAN WRITE ALMOST THE EXACT SAME CODE BUT WITH A GUARD CLAUSE TO MAKE IT A BIT CLEANER
//--------------------------------------------------------------
// name = ''

// function App() {
//   if(name === '') return <h3>Guard Clause render -- name is missing</h3>
//   if(name === "Bill") return <h3>This is the render for billiboy</h3>

//   return (
//     <div className="App">
//       <Name />
//       <h3>This becomes default if no gaurd clauses are true</h3>
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// NOTE: we can simplify our coniditional check on line 45, can anyone tell me how?
//--------------------------------------------------------------

//--------------------------------------------------------------
// USE A CONDITIONAL TO SET A VARIABLE TO BE RENDERED LATER
//--------------------------------------------------------------


// function App() {
//   let renderedVar = null

//   name = 'Sam'


//   if(!name) {
//     renderedVar = <h2 style={{color: "red"}}>there was an error </h2>
//   } else {
//     renderedVar = <><Name /><h3>This our our variable to be rendered</h3></>
//   }


//   return (
//     <div className="App">
//       {renderedVar}
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// WE CAN NOT USE IF/ELSE INSIDE OUR JSX (inside the return statement) SO WE NEED TO USE TERNARY OPERAOTRS INSTEAD (X ? Y : Z)
// THE TERNARY RECIEVES A BOOLEAN FROM BEOFRE THE QUESTION MARK, IF TRUE IT WILL EXECUTE THE CODE IN FRONT OF THE : , IF FALSE IT
// WILL EXECUTE THE CODE WHICH COMES AFTER 
//--------------------------------------------------------------

// name = "Sam"

// function App() {
  
//   return (

//     <div className="App">
//       {name ? <Name /> : <h3>No Name</h3> }
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// WE CAN CHAIN THESE TERNARIES TO CHECK MULTIPLE "IF" CONDITIONALS BEFORE HAVING AN "ELSE" CONDITION AT THE END
//--------------------------------------------------------------

// name = ''
// function App() {

//   return (
//     <div className="App">
//       {
//         !name ? 
//         <h2>For god's sake please add a name</h2> : 
//         name === "Gustav" ? 
//         <div><Name /><h1>What a guy!!!</h1></div> :
//         <Name />
//       }
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// HAVING LOTS OF TURNARIES CAN MAKE IT DIFFICULT TO READ OUT JSX, TO FIX THIS WE CAN BUILD SUBCOMPONENTS
// IS IS ALSO VERY USEFUL WHEN RERENDERING A PORTION OF OUR PAGE BUT NOT ALL OF IT
// --------------------------------------------------------------

let userInfo

userInfo = {
  name: 'bill',
  discription: 'Bill was a happy boy cuz bill had a lot of joy'
}

function App() {
  return (
    <div className="App">
      {userInfo ? <NameSection  info={userInfo} /> : <h3>Please log in :)</h3>}
    </div>
  )
}

const NameSection = ({info}) => {
  return (
    <>
      {info.discription ? 
        <>
          <h1>{info.name}</h1>
          <p>{info.discription}</p>
        </> :
        <>
          <h1>{info.name}</h1>
        </>
      }
    </>
  )
}

 export default App;

//--------------------------------------------------------------
// WE CAN ALSO USE IF COMPONENTS THAT ACCEPTS A CONDITIONAL PROP THAT SHOWS IF WE SHOULD RENDER SOMETHING.  WE 
// THEN PASS OUR COMPONENT INTO THIS "IF" COMPONENT TO BE RENDERED IF THE CONDITIONAL IS TRUE
//--------------------------------------------------------------

// const If = ({conditional, children}) => {
//   console.log(conditional)
//   if(conditional) {return children}
//   return null
// }

// name = "Sam the Man"

// function App() {

//   const [dataLoaded, setDataLoaded] = useState(name)

//   return (
//     <>
//       <button onClick={() => setDataLoaded(!dataLoaded)}>Change State</button>

//       <If conditional={dataLoaded}>
//         <Name />
//         <p>This is extra text</p>
//       </If>
//     </>
//   )
// }

// export default App;

//--------------------------------------------------------------
// LASTLY WE CAN USE HIGHER ORDER COMPONENTS (HOC) TO DO CONIDITIONAL RENDERING BUT WE WILL GO OVER THESE LATER :)
//--------------------------------------------------------------
