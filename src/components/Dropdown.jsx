import React from 'react'



function Dropdown(props) {

	const { arr2 } = props;
	console.log(arr2);

	console.log(props);


	return (
		<div>
			<h1>Dropdown</h1>
			{/* {show} */}
			<select>
				{arr2.map((ele, index) => {
					return (
						<option key={index} value={ele.value} >{ele.name}</option>
					)
				})}
			</select>

		</div>
	)

}

export default Dropdown
