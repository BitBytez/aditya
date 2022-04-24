import Block from "./Block";
import { useEffect, useState } from "react";

function Session(props){	
	// var x = props.topics;
	// const [outcome_topics, setOutcomeTopics] = useState(x.sort((a,b) => {
	// 		return props.content[b]["outcomes"].length - props.content[a]["outcomes"].length
	// 	}));
	// const [challenge_topics, setChallengeTopics] = useState(x.sort((a,b) => {
	// 		return props.content[b]["challenges"].length - props.content[a]["challenges"].length
	// 	}))
	
	// // console.log("outcome Topics :::", outcome_topics);
	// // outcome_topics.map(item => {console.log(item, props.content[item]["outcomes"].length)});
	// // console.log("Challenges Topics :::", challenge_topics);
	// const [outFreqs, setOutFreqs] = useState(props.topics.map(item => props.content[item].frequency["outcomes"]));
	// const [chalFreqs, setChalFreqs] = useState(props.topics.map(item => props.content[item].frequency["challenges"]));
	
	// useEffect(() => {
	// 	setOutcomeTopics(props.topics.sort((a,b) => {
	// 		return props.content[b]["outcomes"].length - props.content[a]["outcomes"].length
	// 	}));

	// 	setChallengeTopics(props.topics.sort((a,b) => {
	// 		return props.content[b]["challenges"].length - props.content[a]["challenges"].length
	// 	}));
	// }, [props.topics]);
	
	// useEffect(() => {
	// 	setOutFreqs(outcome_topics.map(item => props.content[item].frequency["outcomes"]))
	// 	setChalFreqs(challenge_topics.map(item => props.content[item].frequency["challenges"]))
	// }, [outcome_topics, challenge_topics]);
	
	
	
		return (
			<div>
				{/* {console.log(outcome_topics)}
				{console.log(props.content)} */}
				{/* {outcome_topics.map(item => {console.log(item, props.content[item]["outcomes"].length)})} */}
			<h1> Session {props.sessId}</h1>
			<p> Number of participants : {props.content.__participants}</p>
			
			<Block  name="outcomes" 
							title="Learning Outcomes" 
							content={props.content}
							topics={props.content.outcome_topics}
							freqs={props.content.outcome_topics_freq}
							/>
			
			<Block  name="challenges" 
							title="Challenges" 
							content={props.content}
							topics={props.content.challenge_topics}
							freqs={props.content.challenge_topics_freq}
							/>
		</div>
	)
}

export default Session;