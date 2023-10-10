import React from 'react'
import "./DropdownComponent.css"

const DropdownComponent = () => {
    return (
        <>
        <div id="divone">
            <h2 id="addreview">Add Review</h2>
        </div>
        
        <div className='name'>
                <label className="name" htmlFor="department">Department</label>
                <select name="department" id="departments">
                    <option value="computing">College of Computing</option>
                    <option value="artsandsciences">College of Arts and Sciences</option>
                    <option value="engineering">College of Engineering</option>
                    <option value="business">College of Business</option>
                </select>
                <br></br>

                {/* CLASS */}

                <label className="name" htmlFor="class">Class</label>
                <select name="class" id="classes">
                    <option value="one">Sample Class 1</option>
                    <option value="two">Sample Class 2</option>
                </select>
                <br></br>

                {/* PROFESSOR */}

                <label className="name" htmlFor="professor">Professor</label>
                <select name="professor" id="professors">
                    <option value="a">Dr. A</option>
                    <option value="b">Professor B</option>
                    <option value="c">Professor C</option>
                </select>
                <br></br>

                {/* YEAR TAKEN */}

                <label className="name" htmlFor="year">Year Taken</label>
                <select name="year" id="years">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <br></br>
                
                {/* SEMESTER TAKEN */}

                <label className="name" htmlFor="semester">Semester Taken</label>
                <select name="semester" id="semesters">
                    <option value="fall">Fall</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                </select>
                <br></br>

                {/* GRADE RECIEVED */}

                <label className="name" htmlFor="grade">Grade Recieved</label>
                <select name="grade" id="grades">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    <option value="f">F</option>
                    <option value="pass">Pass</option>
                    <option value="fail">Fail</option>
                    <option value="n/a">N/A</option>
                </select>
                <br></br>
            
        </div>

        </>

            
    );
}

export default DropdownComponent