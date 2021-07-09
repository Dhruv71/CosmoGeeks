import React from 'react'
import Jobs from './Jobs'
import {engineers,scientist, hAnds} from './jobsData'
import './jobList.css'

const  JobList = () => {
    return (
         <div className="job-sections">
          {window.scroll(0,0)}
          <div className="job-catagory">
          <h2 className="job-domain">Engineers</h2>
          <p className="job-descriptions">Description - Engineers design systems and spacecraft using their scientific and technical knowledge.</p>
          <p className="job-education">`Education - B.E or B.Tech in relevant engineering =&gt; M.E (2 years) =&gt; P.hd (require for research level work)`</p>
          <hr/>
          <div className="job-list">
            {engineers.map( job => <Jobs key={job.title} title={job.title} role={job.role} 
                                    salary={job.salary} company={job.company} />)}
          </div>
          </div>

          <div className="job-catagory">
          <h2 className="job-domain">Scientists</h2>
          <p className="job-descriptions">Description - Scientists in the space sector ask questions, conduct research, and use science to better understand how and why things happen in our universe. Their goal is to advance knowledge so that it can be applied to technology development in many fields.</p>
          <p className="job-education">Education - Bachelor's degree – Three to four years of study =&gt; Master's degree (2 additional years of study) =&gt; Ph.D. (3 to 5 years of study following a master's degree) =&gt; Postdoctoral fellowship (2 years of activity following a Ph.D.)</p>
          <hr/>
          <div className="job-list">
            {scientist.map( job => <Jobs key={job.title} title={job.title} role={job.role} 
                                    salary={job.salary} company={job.company} />)}
          </div>
          </div>

          <div className="job-catagory">
          <h2 className="job-domain">Health science experts</h2>
          <p className="job-descriptions">Description - In order to further human space exploration, health science experts are hard at work to understand how humans can safely spend more time in space.Their research also benefits people on Earth, because the effects of long-duration space flight are similar to health challenges caused by aging, isolation and a sedentary lifestyle.</p>
          <p className="job-education">Education: <br></br> 1) Bachelor's degree (in biology, nutrition, psychology, etc.) =&gt; Master's degree (2 additional years of study) =&gt; Ph.D. (3 to 5 years of study following a master's degree) =&gt; Postdoctoral fellowship (2 years of activity following a Ph.D.)
          <br/><br></br> 2) Doctor of Medicine (MD) – Four to five years of study =&gt; Specialization – Two to eight additional years of study =&gt; Residency – Three to five years of activity</p>
          <hr/>
          <div className="job-list">
            {hAnds.map( job => <Jobs key={job.title} title={job.title} role={job.role} 
                                    salary={job.salary} company={job.company} />)}
          </div>
          </div>
        </div>
    )
}

export default JobList;