function App(){
    let message = "Greetings"
    let name = "Paul"
    let age = 24;
  
    return (
      <div>
        <p>{message} My name is: {name} , and I'm {age} years of age.</p>
        <input style={{color: 'green'}} type='number' min={1} max={10}/>
        <input placeholder='hi, there' type='text'/>
        <input type='checkbox'/>
        <textarea maxLength={20} style={{border: '2px solid green', borderRadius: '2rem'}} autoFocus='true'></textarea>
      </div>
    )
  }

  export default App;