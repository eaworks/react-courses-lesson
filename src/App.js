
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Courses from './Courses';


function App() {
  const [courses, setCourses] = useState()
  const fetchCourses = async () => {
    const response = await axios.get('http://localhost:3000/courses');
    setCourses(response.data)
    debugger;
  }
  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <div className="App">
      <Courses courses={courses} />
    </div>
  );
}

export default App;
