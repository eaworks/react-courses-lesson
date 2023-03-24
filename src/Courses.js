import Course from "./Course";

function Courses({ courses, removeCourse }) {

    return <div>
        <div><h2>Kurslarim</h2></div>
        <div >
            {
                courses.map((course) => {
                    return (<Course key={course.id} {...course} removeOneCourse={removeCourse} />)
                })
            }
        </div>

    </div>;
}

export default Courses;