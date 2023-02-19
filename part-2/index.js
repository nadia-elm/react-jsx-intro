
const Tweet = (props) => {
  return (
    <div>
      <p> {props.username}</p>
      <p>{props.name}</p>
      <p>{props.message}</p>
      <p>{props.date}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
     
      <Tweet username="nadia@345" message="my first tweet"  name="nadia"  date="01-01-2022"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
