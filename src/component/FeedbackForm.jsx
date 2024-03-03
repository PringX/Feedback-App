import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
	const [text, setText] = useState('')
	const [message, setMessage] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [rating, setRating] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text !== '' && text.trim().length > 10) {
			const newfeedback = { text, rating }
			handleAdd(newfeedback)
		}
		setText('')
	}

	const handleChanged = (e) => {
		if (text === '') {
			setMessage(null)
			setBtnDisabled(true)
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us? </h2>
				{/* @todo -rating select component */}
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleChanged}
						type='text'
						placeholder='Write a review'
						value={text}
					></input>
					<Button
						type='submit'
						version='secondary'
						isDisabled={btnDisabled}
					>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
