import React, { useEffect, useState } from 'react'
import '../style/home.css';
import { success } from '../Toast';
import { addProject, onDeleteProject } from '../Utils/projectApi';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()
  const [allProjectData, setAllProjectData] = useState([])
  const [loading, setLoding] = useState(true)
  const [projectData, setProjectData] = useState({
    title: "",
    description: ""
  });

  const onHandleEvent = (event) => {
    setProjectData({ ...projectData, [event.target.name]: event.target.value, [event.target.name]: event.target.value })
  }

  // add new project
  const onAddProject = async () => {
    console.log("Project");
    console.log(projectData);
    const apiResponce = await addProject(projectData)
    if (apiResponce.status === 200) {
      success(apiResponce.data.message)
      console.log("responcemessage", apiResponce.data.message);
    } else {
      // success(apiResponce.data.message)
      console.log("error", apiResponce);
    }
  }

  // on delete project
  const onDeteteProject = async (id) => {
    console.log(id);
    const apiResponce = await onDeleteProject(id)
    if (apiResponce.status === 200) {
      success(apiResponce.data.message)
      console.log("responcemessage", apiResponce.data.message);
    } else {
      // success(apiResponce.data.message)
      console.log("error", apiResponce);
    }
  }

  // show report
  const onShowReport =(id)=>{
    localStorage.setItem('reportId', id)
    navigate('/report')
  }

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/getProjects`)
      const data = await res.json()
      console.log(data);
      setAllProjectData(data.project)
      setLoding(false)
    })()
  }, [allProjectData])

  return (
    <div className='bg'>
      <div class="sidebar-home">
        <a class="active fs-4 heading-text" href="#home">ADD PROJECT</a>

        <div>
          <form className="">
            <input
              type='text'
              name='title'
              placeholder='Enter project title'
              onChange={(e) => onHandleEvent(e)}
            />

            <textarea
              rows={4}
              cols={30}
              type="text"
              name="description"
              placeholder="Write discription here..."
              onChange={(e) => onHandleEvent(e)}
            />
          </form>
        </div>

        <div><button className='add-btn' onClick={() => onAddProject()}><h5>Add</h5></button></div>

      </div>

      <div class="content-home">
        <div><h3 className='m-3 heading-text'>PROJECT </h3></div>
        {allProjectData.length === 0
          ? <h3 className='text-danger'><i>No any project available...</i></h3>
          : <div className='container'>
            <div className='margin'>
              <div className='row mt-3 ms-3'>
              <div className='col-1 fs-3 title-text'>S.No</div>
                <div className='col-2 fs-3 title-text'>Project</div>
                <div className='col-3 title-text fs-3 '>Description</div>
                <div className='col-1 title-text fs-3 '>Edit</div>
                <div className='col-2 title-text fs-3 '>Delete</div>
                <div className='col-1 title-text fs-3 '>Share</div>
                <div className='col-2 title-text fs-3 '>Report</div>
              </div>
            </div>

            <div className='margin'>
              {loading
                ? (<p>Loading....</p>)
                : (allProjectData.map((item,index) => (
                  <div className='row mt-3 ms-3' key={item._id}>
                    <div className='col-1 fs-4 project-text'>{index+1}</div>
                    <div className='col-2 fs-4 project-text'>{item.title}</div>
                    <div className='col-3 fs-4 project-text'>{item.description}</div>
                    <div className='col-1 '><i className="text-warning fa-solid ms-3 fa-pen-to-square fs-5"></i></div>
                    <div className='col-2 '><i onClick={() => onDeteteProject(item._id)} className="text-danger fa-solid fa-trash-can fs-5"></i></div>
                    <div className='col-1 '>
                    <Popup trigger={<i className="text-success fs-5 fa-sharp fa-solid fa-paper-plane"></i>} position="top center">
                      <div>
                        <input 
                          type='text'
                          placeholder='Enter user emailId/Id'
                          className='p-1 w-100 bg-light'
                        />
                        <button className='w-100 bg-success text-warning border rounded'>
                          <h3>Share</h3>
                        </button>
                      </div>
                    </Popup>
                    </div>
                    <div className='col-2'><i onClick={()=> onShowReport(item._id)} className='fa-solid fa-calendar-check fs-5 text-info'></i></div>
                    
                  </div>
                )))}

            </div>
          </div>}
      </div>
    </div>
  )
}

export default Home

// onClick={() => onDeteteTodo(item._id)}