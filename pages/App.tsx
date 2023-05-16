// App.jsx
import React from "react";
import { useGet } from "restful-react";

const App = () => {
  const { data } = useGet({
    // Inferred from RestfulProvider in index.js
    path: "Movie/GetAllAsnyc",
  });
  if(!data)
  {
    return <div>Loading...</div>
  }
  const movies= data.result;

  return (
    <>
    {
      <table>
        <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.duration}</td>
                            <td>{movie.starring}</td>
                            <td>{movie.categoryName}</td>
                        </tr>
                    ))}
                </tbody>
      </table>

    }
    </>
  )
};

export default App;