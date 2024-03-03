import { useState } from 'react';
import { v4 } from 'uuid';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import feedbackData from './data/feedbackData';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './component/AboutIconLink';

function App() {
	const [feedbacklist, setFeedbacklist] = useState(feedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = v4();
		console.log(newFeedback);

		setFeedbacklist([newFeedback, ...feedbacklist]);
	};

	const deletefeed = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbacklist(feedbacklist.filter((item) => item.id !== id));
			console.log(id);
		}
	};
	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedbacklist} />
								<FeedbackList feedbacklist={feedbacklist} handleDelete={deletefeed} />
								<AboutIconLink />
							</>
						}
					/>
					<Route exact path='/about' element={<AboutPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
