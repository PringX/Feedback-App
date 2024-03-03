import React, { useMemo, useReducer } from 'react';
import { useState } from 'react';

const Boat = () => {
	const [location, setLocation] = useState('pudong');
	// const [state, setState] = useState(initialState)

	// useReducer 也是返回一个数组，
	// 第一个元素是保存的数据 state，
	// 第二个元素用来更新数据的函数 dispatch
	// 调用参数还多了一个reducer
	// const [state, dispatch] = useReducer(reducer, initialState);
	const someExpensiveWork = () => {
		return <div>Good stuff💎</div>;
	};

	const artworks = useMemo(() => someExpensiveWork(), []);
	return (
		<div>
			Boat loaction: {location}
			{artworks}
			<button onClick={() => setLocation('on the sea')}>start</button>
		</div>
	);
};

export default Boat;
