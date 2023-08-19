import React from 'react';
import './App.css';

const App = () => {
	const [input, setInput] = React.useState('0');
	const calculateResult = (input) => {
		let result = 0;
		try {
			const operators = ['+', '-', '*', '/'];
			let operator = null;
			for (let i = 0; i < input.length; i++) {
				if (operators.includes(input[i])) {
					operator = input[i];
					break;
				}
			}
      if(!operator){
        setInput(parseFloat(input).toString());
        return;
      };
			const [first, second] = input.split(operator).map(parseFloat);
			if (operator === '+') {
				result = Number(first) + Number(second);
			}
			if (operator === '-') {
				result = Number(first) - Number(second);
			}
			if (operator === '*') {
				result = Number(first) * Number(second);
			}
			if (operator === '/') {
				result = Number(first) / Number(second);
			}
			setInput(result.toString());
		} catch (error) {
			setInput('Invalid Expression');
		}
	};

	const handleButtonClick = (value) => {
		if (value === 'C') {
			setInput('0');
		}
		if (value === '<') {
			setInput(input.slice(0, -1) || '0');
		}
		if (value === '%') {
			setInput(input / 100);
		}
		// if(value ==='/'){
		//   setInput(input + '/');
		// }
		// if(value ==='*'){
		//   setInput(input + '*');
		// }
		// if(value ==='-'){
		//   setInput(input + '-');
		// }
		// if(value ==='+'){
		//   setInput(input + '+');
		// }
		if (
			value === '1' ||
			value === '2' ||
			value === '3' ||
			value === '4' ||
			value === '5' ||
			value === '6' ||
			value === '7' ||
			value === '8' ||
			value === '9' ||
			value === '0' ||
			value === '00' ||
			value === '.' ||
			value === '+' ||
			value === '-' ||
			value === '*' ||
			value === '/'
		) {
			setInput(input + value);
		}
		if (value === '=') {
			calculateResult(input);
		}

		if (input[0] === '0' && input.length > 0) {
			setInput(input.slice(1) + value);
		}
	};
	return (
		<>
			<div className='container'>
				<div className='head'>
					<h1 id='heading'>Made By Suyash Mishra</h1>
				</div>
				<div className='calc'>
					<h1 id='input'>{input}</h1>
					<div>
						<button className='key' onClick={() => handleButtonClick('C')}>
							C
						</button>
						<button className='key' onClick={() => handleButtonClick('<')}>
							&lt;
						</button>
						<button className='key' onClick={() => handleButtonClick('%')}>
							%
						</button>
						<button className='key' onClick={() => handleButtonClick('/')}>
							/
						</button>
					</div>
					<div>
						<button className='key' onClick={() => handleButtonClick('7')}>
							7
						</button>
						<button className='key' onClick={() => handleButtonClick('8')}>
							8
						</button>
						<button className='key' onClick={() => handleButtonClick('9')}>
							9
						</button>
						<button className='key' onClick={() => handleButtonClick('*')}>
							*
						</button>
					</div>
					<div>
						<button className='key' onClick={() => handleButtonClick('4')}>
							4
						</button>
						<button className='key' onClick={() => handleButtonClick('5')}>
							5
						</button>
						<button className='key' onClick={() => handleButtonClick('6')}>
							6
						</button>
						<button className='key' onClick={() => handleButtonClick('-')}>
							-
						</button>
					</div>
					<div>
						<button className='key' onClick={() => handleButtonClick('1')}>
							1
						</button>
						<button className='key' onClick={() => handleButtonClick('2')}>
							2
						</button>
						<button className='key' onClick={() => handleButtonClick('3')}>
							3
						</button>
						<button className='key' onClick={() => handleButtonClick('+')}>
							+
						</button>
					</div>
					<div>
						<button className='key' onClick={() => handleButtonClick('0')}>
							0
						</button>
						<button className='key' onClick={() => handleButtonClick('00')}>
							00
						</button>
						<button className='key' onClick={() => handleButtonClick('.')}>
							.
						</button>
						<button className='key' onClick={() => handleButtonClick('=')}>
							=
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
