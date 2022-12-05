
/* function Header(){
  return(
    <div>
      <h1>Tish is Header</h1>
    </div>
  )
} */

/* function Main(){
  return(
    <div>
      <p>Tish is Main</p>
    </div>
  )
} */

/* function Footer(){
  return(
    <div>
      <p>Tish is Footer</p>
    </div>
  )
} */

// const Section = <input/>

function Content1(){
  return(
   <div>
    <Block1/>
    <Block2/>
    <p>Tish is Footer</p>
   </div>
  )
}

function Block1(){
  return(
    <div>
      <p>Tish is Footer</p>
    </div>
  )
}

function Block2(){
  return(
    <div>
      <p>Tish is Footer</p>
    </div>
  )
}

function Content2(){
  return(
    <div>
      <p>Content 2!</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <Content1/>
      <Content2/>
      <p></p>
      {/* <Header/> */}
      {/* <button>Push my</button>
      <div>
        {Section}
      </div> */}
      {/* <Main/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
