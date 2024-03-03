import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbacklist, handleDelete }) {
	if (!feedbacklist || feedbacklist.length === 0) {
		return <div>No feedback yet</div>
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedbacklist.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							item={item}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)

	// return (
	// 	<div className='feedback-list'>
	// 		{feedbacklist.map((item) => (
	// 			<FeedbackItem
	// 				item={item}
	// 				handleDelete={handleDelete}
	// 			/>
	// 		))}
	// 	</div>
	// )
}

FeedbackList.propTypes = {
	feedbacklist: PropTypes.arrayOf(
		PropTypes.shape({
			num: PropTypes.string.isRequired,
			rate: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
}

export default FeedbackList
