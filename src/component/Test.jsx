import React, { Children, useState } from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
import TestHeader from './TestHeader';
import Boat from './Boat';

const Test = () => {
	const [who, setWho] = useState('Justin');

	const [draft, setDraft] = useState(0);

	// _jsx has two parameters, first parameter is element type, second is Object of all attribute of the element
	// Children is special attribute in jsx return back a result to div
	// return _jsx('div', { children: _jsx('div', { children: _jsx('h1', { children: ['👍', draft, '🤝'] }) }) });
	// return _jsx('div', { className: 'container', children: [_jsx('div', { className: 'mr-wall', children: ['🤲', draft, '👍'] }), _jsx('button', { children: 'Hello' })] });

	// const result = _jsx('input', {});

	// // _jsx func return a Js Object
	// // React element: Object { type: 'input', key: null, ref: null, props: Object, _Owner: null}
	// console.log(result);

	// return result;

	// let content = <div>KaCha</div>;
	// // setDraft(<input />);
	// return console.log(content);

	// const wallActions = ['静候', '变身', '吞咽', '静候'];
	// const alanReactions = ['卖萌', '惊恐', '挣扎', '受困'];
	// console.log('new one');
	// const [timeline, setTimeLine] = useState(0);
	// return (
	// 	<div>
	// 		<div>take phote wall: {wallActions[timeline]}</div>
	// 		<div>alan: {alanReactions[timeline]}</div>
	// 		<button
	// 			onClick={() => {
	// 				setTimeLine(timeline + 1);
	// 				if (timeline >= 3) {
	// 					let timeline_repeat = 0;
	// 					setTimeLine(timeline_repeat);
	// 				}
	// 			}}
	// 		>
	// 			Next Action
	// 		</button>
	// 	</div>
	// );

	// Array immutable - if wanna change, need create a new Object
	const [snacks, setSnacks] = useState(['123 ', '234234']);
	// add new array element, use ... (spread operator) to spread your array
	const newSnacks = [...snacks.slice(0, 1), 'Hello ', ...snacks.slice(1)];

	// Object immutable - if wanna change, need create a new Object
	const [house, setHouse] = useState({ windowColor: 'blue', floors: 2 });
	const otherHouse = {
		windowColor: 'yellow',
		floors: 9,
	};
	// change house Object attribute windowColor
	const newHouse = { ...house, windowColor: 'white' }; // change house windowColor
	const newHouse2 = { ...house, ...otherHouse }; // change all house props according to otherHouse
	const newHouse3 = { ...house, otherHouse }; // Add Object to house
	const newSnacks1 = 'Mango ';
	return (
		<div>
			<h1>{newSnacks}</h1>
			<h2>{newSnacks1}</h2>
			<h3>newHouse: {newHouse.windowColor}</h3>
			<h3>newHouse2: {newHouse2.windowColor}</h3>
			<h3>newHouse3: {newHouse3.otherHouse.windowColor}</h3>
			<h3>housefloors: {house.floors}</h3>
			<Boat />
			<TestHeader />
		</div>
	);
};

export default Test;
