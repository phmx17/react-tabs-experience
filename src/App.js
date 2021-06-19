import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() => {
    setLoading(true)
    try {
      let response = await fetch(url)
      let newJobs = await response.json()
      setData(newJobs)
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

  // let obj = data[0]
  // console.log(obj[0])

  if (loading) {
    return <section className="section loading">
      <h1>loading...</h1>
    </section>
  }
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
