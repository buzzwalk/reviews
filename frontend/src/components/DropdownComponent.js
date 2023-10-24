import React from 'react'
import "./DropdownComponent.css"
import { useState } from 'react'
// import Classes from "./classes.json"

const DropdownComponent = () => {
    const [collegeData, setCollegeData] = useState(null);
    {/* const [classData, setClassData] = useState(null); */}
    console.log(collegeData)
return(
        <>
        <div id="divone">
            <h2 id="addreview">Add Review</h2>
        </div>
        
        <div className='name'>
            <form>
                        <div>
                            <label className="name" htmlFor="department">Department</label>
                            <select name="department"
                            id="departments"
                            
                            onChange={(e)=>setCollegeData(e.target.value)}>
                                <option value="computing">College of Computing</option>
                                <option value="sciences">College of Sciences</option>
                                <option value="engineering">College of Engineering</option>
                                <option value="business">College of Business</option>
                                <option value="design">College of Design</option>
                                <option value="liberalarts">Ivan Allen College of Liberal Arts</option>
                            </select>
                            <br></br>

                            {/* CLASS */}

                            {collegeData == "computing" && <div><label className="name" htmlFor="class">Class</label>
                            <select name="class" id="classes">
                                <option value="one">College of Computing Class 1</option>
                                <option value="two">College of Computing Class 2</option>
                            </select> </div>}
                            {collegeData == "sciences" && <div><label className="name" htmlFor="class">Class</label>
                            <select name="class" id="classes">
                                <option value="one">College of Sciences Class 1</option>
                                <option value="two">College of Sciences Class 2</option>
                            </select> </div>}
                            {collegeData == "engineering" && <div><label className="name" htmlFor="class">Class</label>
                            <select name="class" id="classes">
                                <option value="one">College of Engineering Class 1</option>
                                <option value="two">College of Engineering Class 2</option>
                            </select> </div>}
                            {collegeData == "business" && <div><label className="name" htmlFor="class">Class</label>
                            <select name="class" id="classes">
                                <option value="one">College of Business Class 1</option>
                                <option value="two">College of Business Class 2</option>
                            </select> </div>}
                            {collegeData == "design" && <div><label className="name" htmlFor="class">Class</label>
                            <select name="class" id="classes">
                                <option value="one">College of Design Class 1</option>
                                <option value="two">College of Design Class 2</option>
                            </select> </div>}
                            {collegeData == "liberalarts" && <div><label className="name" htmlFor="class">Class</label>
                            <select name="class" id="classes">
                                <option value="one">College of Liberal Arts Class 1</option>
                                <option value="two">College of Liberal Arts Class 2</option>
                            </select> </div>}
                            
                            
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
                    
                
            </form>
        </div>
        </>
)
}

export default DropdownComponent
