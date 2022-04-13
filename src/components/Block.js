import { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import React from 'react';
import {Bar} from 'react-chartjs-2';


function Block(props){
	// var topics = Object.keys(props.content);
	// topics.shift();	

	const [currTopic, setCurrTopic] = useState(props.topics[0]);
	useEffect(() => {
		if(!props.topics.includes(currTopic))
			setCurrTopic(props.topics[0]);
	}, [props.topics]);

	const buttonStyle={
		margin:10, 
	}

	const data = {
		labels: props.topics,
		datasets: [
			{
				label: 'Frequency',
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 1,
				data: props.topics.map(item => props.content[item].frequency[props.name])
			}
		]
	}
	const renderList = (props, currTopic) => {
		if(props.content[currTopic]){
		return (
			<ul>
			{	
				props.content[currTopic][props.name].map((item, index) => {
					return <li key={Math.random() * 1000000}> {item} </li>;
				})
			}
			</ul>
			)
		}
		else{
			return <div></div>;
		}
	}

	const renderChart = () => {
		return (
			<div style={{marginRight: 100, width:500}}>
				<h5> This is a Chart</h5>
				<Bar
			data={data}
			options={{
            title:{
				display:true,
				fontSize:20
            },
            legend:{
				display:true,
				position:'right'
            },
						scales: {
							yAxes: {
								scaleLabel: {
									display: true,
									fontColor: 'white',
									fontSize: 25,
									labelString: 'Faction Points',
								},
								ticks: {
									beginAtZero: true,
								},
							},
						},
			}}
        />
			</div>
		)
	}

	return (
		<div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
			<div>
			<h3> {props.title} </h3>
			{props.topics.map((item) => {
				// console.log(props.content[item][props.name].length , props.content[item][props.name].length  === 0);
				return(
					<button style={buttonStyle} key={item} name={item} onClick={() => setCurrTopic(item)} disabled={props.content[item][props.name].length  === 0}> {item} </button>
				)
			})}
			<h4> {currTopic} </h4>
			{renderList(props, currTopic)}
			</div>
			{renderChart()}
		</div>
    )

}

export default Block;