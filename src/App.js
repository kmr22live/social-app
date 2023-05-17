import { useReducer, useState } from "react";
import NavBar from "./components/Header";
import Main from "./components/Main";
import { PostContext } from "./contexts/Context";
import { INITIAL_STATE, PostReducer } from "./contexts/postReducer";

function App() {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </PostContext.Provider>
  );
}

export default App;
