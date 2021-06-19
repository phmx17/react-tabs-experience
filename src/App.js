import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() => {
    setLoading(true)
    try {
      let response = await fetch(url)
      let newJobs = await response.json()
      setJobs(newJobs)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  } 

  // on page load
  useEffect(()=> {
    fetchJobs()
  }, [])  

  if (loading) {
    return <section className="section loading">
      <h1>loading...</h1>
    </section>
  }
  
  const { company, dates, duties, title } = jobs[value]
  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((job, index)=> {
          return <button className={`job-btn ${index == value && 'active-btn' }`} key={job.id} onClick={()=> setValue(index)}>{job.company}</button>
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon"/>
            <p>{duty}</p>
          </div>
        })}
      </article>
    </div>
  </section>








  return <main className="jobs-center">
    <section className="section">
      <div className="btn-container">
        {

        }
   
        <button className="job-btn">Anya</button>
        <button className="job-btn">Taylor</button>
        <button className="job-btn">Joy</button>
      </div>
      <div className="job-info">
        <h3>Full stack</h3>
        <h4>Anya</h4>
          <p className="job-date">December 1</p>
        <div className="job-desc">        
          <FaAngleDoubleRight className="job-icon"/>         
          <div>
            <p>Description</p>
            <p>Description</p>
          </div>
        </div>

      </div>
    </section>
  </main>
}

export default App
