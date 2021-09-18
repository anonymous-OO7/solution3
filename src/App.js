import './App.css';
import Dropdown1 from './components/Dropdown';

function App() {

  const arr2 = [

		{name:"gaurav",
		value:1
		},
		{
			name:"mohan",
			value:2
		},
		{
			name:"sohan",
			value:3
		},
		{
			name:"rajesh",
			value:4
		},
		{
			name:"ramesh",
			value:5
		}
	];

  return (
    <div className="App">
      <h1>Question 3</h1>
      <div id="q3">

      </div>
      <Dropdown1 arr2={arr2}/>
    </div>
  );
}

export default App;
