

const Person = (props) =>{
    let msg;
     if (props.age > 18) {
        msg = 'please go vote !'
     }else{
        msg = 'you must be 18'
     }
     let name ;
     if(props.name.length > 8){
        name = props.name.slice(0,7)
     }else{
        name = props.name
     }
    return (
      <div>
        <p>Learn some information about this person</p>
        <ul>
            <li> name :{ name }</li>
            <li> age :{ props.age }</li>
            <li>{msg}</li>
               
        </ul>
       <p>Hobbies</p>
        <ul>{props.hobbies.map(hobbie => <li>{hobbie}</li>) }</ul>
      </div>
    );

}

const App = () => {
  return (
    <Person name="nadia" age= {10} hobbies={['reading', 'running', 'coding']}/>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));