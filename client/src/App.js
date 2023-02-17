import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, DELETE_POST } from "./GraphQL/Mutation";
import { getALL } from "./GraphQL/Query";
import { useState } from "react";
function App() {
  const { loading, error, data } = useQuery(getALL);
  const [createPost, { err }] = useMutation(CREATE_POST);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  if (loading) return "Loading";
  const addPost = () => {
    createPost({
      variables: {
        title: title,
        description: description,
      },
    });
  };
  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
  };

  return (
    <div className="App">
      {data.getAll.map((data) => (
        <div >
          <p key={data.title}>
            {data.title}----{data.description}
         
          <button className="btn" onClick={() => removePost(data.id)}> Delete it </button>
          </p>
        </div>
      ))}

      <br />
      
      <table >
      <b>Title: </b><input  placeholder="Write title name : " onChange={(e) => setTitle(e.target.value)} />
      <br />
      
     <b>Description: </b><input placeholder="Write description : " onChange={(e) => setDescription(e.target.value)} />
      <br />
      <button onClick={() => addPost()}>Add Post</button>
      </table>
</div>


  );
}

export default App;