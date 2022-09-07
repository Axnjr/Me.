import React, { useState } from 'react'
export default function Skills() {
const [clickstate,setClickstate] = useState(false)
  return (
    <>
        <div id='skillmain'>
            <div id='what'>
                <h1 id='wh1'>My Skills,<br/>
                You name it I got it<p id='wp1' style={{borderBottom:'1px solid #27272a'}}>Just kidding I have a lot to learn still I am confident and experienced enough in what I do :)</p></h1>
                <h4>
                    01 Programming Languages 
                    <p style={{borderBottom:'1px solid #27272a'}}>
                    <h>Javascript</h> | <h>Python</h> | <h>C++</h> | <h>C</h> | <h>JAVA</h> | <h>HTML(5)</h> <br/> <h>CSS(3)</h> | <h>PostgreSQL</h></p></h4>
                <h4>
                    02 Frame works and Libraries
                    <p style={{borderBottom:'1px solid #27272a'}}>
                    <h>Recat JS</h> | <h>Angular</h> | <h>Node</h> <br/> <h>Three JS</h> | <h>Django</h> | <h>Flask</h> <br/> <h>Numpy</h> | <h>Pandas</h> | <h>OpenCV</h> | <h>Material UI</h>..</p></h4>
                <h4>
                    03 Tools
                    <p style={{borderBottom:'1px solid #27272a'}}>
                    <h>VS code</h> | <h>Docs</h> | <h>Github</h> <br/> <h>Google</h> | <h>Teams</h> | <h>Outlook</h> <br/> <h>Discord</h> | <h>Meet</h> | <h>Execel</h> <br/> <h>Windows</h> | <h>Linux</h>..</p></h4>
                <h4>
                    04 Technical
                    <p style={{borderBottom:'1px solid #27272a'}}>
                    <h>Data Structure and Algorithms</h> | <h>Working with API's</h> | <h>Problem Solving</h> | <h>Backend</h> | <h>Frontend</h> | <h>Design</h> | <h>UI UX </h> <br/> <h>Reaserch</h> | <h>Machine Learning</h> |<br/> <h>Artificial Intelligence</h> ..</p></h4>
                <h3 style={{textAlign:'center'}}>
                    Are My Skills Industry Relevant / useful ? <br/><span><button id='yes' style={{backgroundColor:'black',color:'white',padding:'0.5rem',marginInline:'1rem'}}  disabled={clickstate} onClick={()=>{setClickstate(true);let y = document.getElementById('yes');y.style.borderImage='repeating-linear-gradient(135deg,#14dcff 0 10px,#2c02e9 0 20px,#bd15ac 0 30px) 8';y.style.borderWidth="8px";y.innerText="Ok Thanks I appreciate your response"}}>Yes</button></span>
                    <span><button id='no' style={{backgroundColor:'black',color:'white',padding:'0.5rem',marginInline:'1rem',marginTop:'2rem'}} disabled={clickstate} onClick={()=>{setClickstate(true);let y = document.getElementById('no');y.style.borderImage='repeating-linear-gradient(135deg,#14dcff 0 10px,#2c02e9 0 20px,#bd15ac 0 30px) 8';y.style.borderWidth="8px";y.innerText="Oh ! I appreciate your response"}}>No
                    </button>
                    </span>
                </h3>
            </div>
        </div>
        <div>
            <div id='exp'>
                <h1 style={{fontSize:'4rem',textAlign:'center'}}>Experience</h1>
                    <h1>1 ) Google Developer's Student's Club (2021/Dec--Present) - 
                        <p className='e'>
                        Was a member of the Dev club during the time I organized, participated, and also won Hackathons like Bug Squash (A university hackathon).
                            I have also taught junior's about WEB, various programming languages, data structure, and algorithms. Being a part of the web team taught me about collaborative working .
                        </p>
                    </h1>
                    <h1>2 ) Younity.in ( Internship/2021/Dec ) - 
                        <p className='e'>
                        Interned as a frontend dev when it was a startup although I performed a lot of backend stuff like migrating the database from dbsqlite3 to PostgreSQL , worked with the mailing team , and optimized the slow speed of the website by minifying, reviewing, and distributing files. Spent the last few weeks as a code reviewer,
                            and Jr.Mentor. I got a return offer which I rejected because I wanted better opportunities. This internship improved my exception handling and debugging skills.
                        </p>
                    </h1>
            </div>
        </div>
        <div>
            <div id='pro'>
                <h1 style={{fontSize:'5rem',textAlign:'center'}}> A Few Projects</h1>
                <h1>1 ) Chess AI (2018) - 
                    <p>
                    Wrote chess AI bot without using any outside Libraries in Python by using tons of conditions, iterations, and recursion got experience and passion for learning AI.
                    </p>
                </h1>
                <h1>2 ) Hotel Management System (present) - 
                    <p>
                    For the mid-sem project, I developed a managing system using Python Django and PostgreSQL , wrote conditional query statements and effective CRUD functionality to efficiently store a person's important data, room type, check-in, and check-out date, room availability, services included, etc.
                    </p>
                </h1>
                <h1>3 ) Sort and Search Visualizer (2021) - 
                    <p>
                    While understanding algorithms I thought it would be easier and more effective if I could visualize them hence I used React JS to implement important algorithms like Merge, quick and bubble sort, and also a few searching algorithms.
                    </p>
                </h1>
                <h1>4 ) Android TV Web Simulator (present) - 
                    <p>
                    To bring the real Android action I worked with a bunch of APIs like google search, youtube, movies, etc. Also developed a coordinate system for navigating around using a keyboard.
                    </p>
                </h1>
                 <h1 style={{fontSize:'5rem',marginTop:'-2rem'}}>Currently Working On </h1>
                    <h1>1 ) AI T-rex Offline Browser Game (Work in Progress)<br/><br/>  
                    2 ) Windows OS 11 3d Web Sim (comming soon)<br/><br/>
                    3 ) AI Video Editor (comming not anytime soon Lol !) - 
                    <p>
                       I think this project can change the world of content creation .
                    </p>
                </h1>
            </div>
        </div>
    </>
)}
