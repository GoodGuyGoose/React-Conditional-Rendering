import React, { useState } from 'react'


// CHANGE THE NAME CONST FROM EMPTY TO FULL STRING TO SEE THE CONTIDITIONALS IN ACTION
//--------------------------------------------------------------
 let name = ""


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

// function App() {
//   if(name === "") {return <h3>Other conditional render</h3>}
//   return (
//     <div className="App">
//       <Name />
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// USE A CONDITIONAL TO SET A VARIABLE TO BE RENDERED LATER
//--------------------------------------------------------------


// function App() {
//   let renderedVar = null

//   if(name === "") {
//     renderedVar = <p style={{color: "red"}}>there was an error </p>
//   } else {
//     renderedVar = <Name />
//   }

//   return (
//     <div className="App">
//       {renderedVar}
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// WE CAN NOT USE IF/ELSE INSIDE OUR JSX SO WE NEED TO USE TERNARY OPERAOTRS INSTEAD (X ? Y : Z)
// THE TERNARY RECIEVES A BOOLEAN FROM BEOFRE THE QUESTION MARK, IF TRUE IT WILL EXECUTE THE CODE IN FRONT OF THE : , IF FALSE IT
// WILL EXECUTE THE CODE WHICH COMES AFTER 
//--------------------------------------------------------------

// name = ''

// function App() {
//   return (
//     <div className="App">
//       {name === "" ? <h3>No Name</h3> : <Name />}
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// WE CAN CHAIN THESE TERNARIES TO CHECK MULTIPLE "IF" CONDITIONALS BEFORE HAVING AN "ELSE" CONDITION AT THE END
//--------------------------------------------------------------
// name = ""
// function App() {
//   return (
//     <div className="App">
//       {name === "" ? <h3>For god's sake please add a name</h3> : 
//        name === "Gustav" ? <div><Name /><h1>What a guy!!!</h1></div> :
//        <Name />}
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------
// HAVING LOTS OF TURNARIES CAN MAKE IT DIFFICULT TO READ OUT JSX, TO FIX THIS WE CAN BUILD SUBCOMPONENTS
// IS IS ALSO VERY USEFUL WHEN RERENDERING A PORTION OF OUR PAGE BUT NOT ALL OF IT
//--------------------------------------------------------------

// name="Sam"

// function App() {
//   return (
//     <div className="App">
//       {name !== "" ? <NameSection  name={name}/> : <h3>This is getting ridiculous</h3>}
//     </div>
//   )
// }

// const NameSection = ({name}) => {
//   return (
//     <>
//       {name === "Oystien" ? 
//         <div>
//           <Name />
//           <h1>What a guy!!!</h1>
//           <p>Decide to want nothing to do with my owner today purrr purr littel cat, 
//           little cat purr purr, and licks paws and jump around on couch, 
//           meow constantly until given food, . Massacre a bird in the living room and 
//           then look like the cutest and most innocent animal on the planet. Walk on 
//           keyboard run up and down stairs so prow?? ew dog you drink from the toilet, 
//           yum yum warm milk hotter pls, ouch too hot sit and stare for eat prawns 
//           daintily with a claw then lick paws clean wash down prawns with a lap of 
//           carnation milk then retire to the warmest spot on the couch to claw at the 
//           fabric before taking a catnap so i is not fat, i is fluffy for what the 
//           heck just happened, something feels fishy.  </p>
//           <p>lorem</p>
//         </div> :
//         <div>
//           <Name />
//           <h3>He's okay I guess</h3>
//         </div>
//       }
//     </>
//   )
// }

//  export default App;

//--------------------------------------------------------------
// WE CAN ALSO USE IF COMPONENTS THAT ACCEPTS A CONDITIONAL PROP THAT SHOWS IF WE SHOULD RENDER SOMETHING.  WE 
// THEN PASS OUR COMPONENT INTO THIS "IF" COMPONENT TO BE RENDERED IF THE CONDITIONAL IS TRUE
//--------------------------------------------------------------

name = "Sam the man"

const If = ({conditional, children}) => {
  if(conditional) {return children}
  return null
}

function App() {
  const [renderCheck, setRenderCheck] = useState(name)
  console.log(renderCheck)
  return (
    <>
      <button onClick={() => setRenderCheck(!renderCheck)}>Change State</button>
      <If conditional={renderCheck}>
        <Name />
        <p>lksadflj</p>
      </If>
    </>
  )
}

export default App;

//--------------------------------------------------------------
// LASTLY WE CAN USE HIGHER ORDER COMPONENTS (HOC) TO DO CONIDITIONAL RENDERING BUT WE WILL GO OVER THESE LATER :)
//--------------------------------------------------------------
