import Course from "./Course";

function Courses({ courses }) {

    return <div>
        <div><h2>Kurslarim</h2></div>
        <div >
            {
                courses.map((course) => {
                    return (<Course key={course.id} {...course} />)
                })
            }
        </div>

    </div>;
}

export default Courses;