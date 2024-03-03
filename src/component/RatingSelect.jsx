import { useState } from 'react'

function RatingSelect({ select }) {
	const [selected, setSelected] = useState(10)
	const handleChange = (e) => {
		select(+e.currentTarget.value)
		setSelected(+e.currentTarget.value)
	}
	return (
		<ul className='rating'>
			<li>
				<input
					id='num1'
					name='rating'
					type='radio'
					value='1'
					onChange={handleChange}
					checked={selected === 1}
				></input>
				<label htmlFor='num1'>1</label>
			</li>
			<li>
				<input
					id='num2'
					name='rating'
					type='radio'
					value='2'
					onChange={handleChange}
					checked={selected === 2}
				></input>
				<label htmlFor='num2'>2</label>
			</li>
			<li>
				<input
					id='num3'
					name='rating'
					type='radio'
					value='3'
					onChange={handleChange}
					checked={selected === 3}
				></input>
				<label htmlFor='num3'>3</label>
			</li>
			<li>
				<input
					id='num4'
					name='rating'
					type='radio'
					value='4'
					onChange={handleChange}
					checked={selected === 4}
				></input>
				<label htmlFor='num4'>4</label>
			</li>
			<li>
				<input
					id='num5'
					name='rating'
					type='radio'
					value='5'
					onChange={handleChange}
					checked={selected === 5}
				></input>
				<label htmlFor='num5'>5</label>
			</li>
			<li>
				<input
					id='num6'
					name='rating'
					type='radio'
					value='6'
					onChange={handleChange}
					checked={selected === 6}
				></input>
				<label htmlFor='num6'>6</label>
			</li>
			<li>
				<input
					id='num7'
					name='rating'
					type='radio'
					value='7'
					onChange={handleChange}
					checked={selected === 7}
				></input>
				<label htmlFor='num7'>7</label>
			</li>
			<li>
				<input
					id='num8'
					name='rating'
					type='radio'
					value='8'
					onChange={handleChange}
					checked={selected === 8}
				></input>
				<label htmlFor='num8'>8</label>
			</li>
			<li>
				<input
					id='num9'
					name='rating'
					type='radio'
					value='9'
					onChange={handleChange}
					checked={selected === 9}
				></input>
				<label htmlFor='num9'>9</label>
			</li>
			<li>
				<input
					id='num10'
					name='rating'
					type='radio'
					value='10'
					onChange={handleChange}
					checked={selected === 10}
				></input>
				<label htmlFor='num10'>10</label>
			</li>
		</ul>
	)
}

export default RatingSelect
