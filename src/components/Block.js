import { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import React from 'react';
import {Bar} from 'react-chartjs-2';


function Block(props){
	// var topics = Object.keys(props.content);
	// topics.shift();	
	var freq = topics.map(item => props.content[item].frequency[props.name]);


	const topicClicked = (item) => {
		setCurrTopic(item);
	}  
	const buttonStyle={
		margin:10, 
	}

	const data = {
		labels: topics,
		datasets: [
			{
				label: 'Frequency',
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 1,
				data: freq
			}
		]
	}
	
	return (
		<div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
			<div>
			<h3> {props.title} </h3>
			{topics.map((item) => {
				return(
					<button style={buttonStyle} key={item} name={item} onClick={() => topicClicked(item)}> {item} </button>
				)
			})}
			<p> {props.topics[0]} </p>
			<ul>
			{	
				props.content[props.topics[0]][props.name].map((item, index) => {
					return <li key={Math.random() * 1000000}> {item} </li>;
				})
			}
			</ul>
			</div>
			<div style={{marginRight: 100, maxWidth: "1000px"}}>
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
		</div>
    )

}

export default Block;