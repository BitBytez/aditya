import Block from "./Block";

function Session(props){	
	return (
		<div>
			<h1> Session {props.sessId}</h1>
			<p> Number of participants : {props.content.__participants}</p>

			<Block  name="outcomes" 
							title="Learning Outcomes" 
							content={props.content}
							topics={props.topics}
							/>
			{/*
			<Block  name="challenges" 
							title="Challenges" 
							content={props.content}
							/> */}
		</div>
	)
}

export default Session;