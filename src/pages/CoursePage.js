import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';




export default function CoursePage() {

	const [ allCourses, setAllCourses ] = useState([])

	const fetchData = () => {
		fetch('https://seito-booking-app.herokuapp.com/courses/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			//storing all the data to our useState allCourses
			setAllCourses(data)
		})
	}

	//it renders the function fetchData() => it gets the updated data coming from the fecth
	useEffect(() => {
		fetchData()
	}, [])
	//if the useEffect has no variable, it will only render one time
	
	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Courses</h1>

			{(user.isAdmin === true) ?

				<AdminView coursesData={allCourses} fetchData={fetchData} />

				:

				<UserView coursesData={allCourses} />
			}
		
		</>


		)
}