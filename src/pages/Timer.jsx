import React, { useState, useEffect } from "react";


import "./styles.css";

const COUNTDOWN_TARGET = new Date("2024-10-24T16:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	const Jour="J";
	const Jours=days+Jour;
	const Heur="H";
	const Heurs=hours+Heur;


	const Minute="M";
	const Minutes=minutes+Minute;

	const Second="S";
	const Seconds=seconds+Second;



	
	return { Jours, Heurs, Minutes,Seconds };
};


const Timer = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);



	return (
		<div className="match">
			<div className="fontmatch ">
<div className='countdown'>
			
		
			<div className="overflow-hidden">
		
	  </div>
		  <div className='content'>

			  {Object.entries(timeLeft).map((el) => {
				  const label = el[0];
				  const value = el[1];
				  

				
				  return (
					  <div className='box' key={label}>
						  <div className='value'>
							  <span>{value}</span>
							
						  </div>
						 
					  
					  </div>
				  );
			  })}
			
		  </div>
	  </div>
	
		</div>

		</div>
		
	);
};

export default Timer;