import axios from "axios";
const api_url = "http://localhost:5000";

// add new project api
export const addProject = async (projectData) => {
  console.log(projectData);
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/createProject`,
      data: projectData
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// on delete project api
export const onDeleteProject = async(id) =>{
  console.log(id);
  try {
    const response = await axios({
      method: "DELETE",
      url: `${api_url}/deleteProject/${id}`,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// 
// export const updateTodo = async(id, todoData) =>{
//   try {
//       const response = await axios({
//         method: "PATCH",
//         url: `${api_url}/update-todo/${id}`,
//       //   headers: {
//       //     "access-token": localStorage.getItem("token"),
//       //     'accept': "application/json",
//       //     "Content-Type": "application/json"
//       //   },
//         data: {...todoData}
//       });
//       return response;
//     } catch (err) {
//       console.log(err);
//       return err;
//     }
// }