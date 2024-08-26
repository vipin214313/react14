import './App.css';
// import {  useState,createContext } from 'react';
// import ChildComponent from './newcomp/ChildComponent';
// import ChildCompA1 from './newcomp/childA';
// import Items from './newcomp/demoList';
// import MyForm from './newcomp/formdemo';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './route/Home';
import Blogs from './route/Blog';
import Contact from './route/contact';
import Nopage from './route/Nopage';

import Layout from './route/layout';
//it is a constant variable AppContext that holds a context object created using React’s createContext function.
// export const AppContext =createContext();
function App() {
  // const [message,setMessage] = useState ("Hellow from app component?????");
  return (
    <div className="App" >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
             <Route index element={<Home />}></Route>
             <Route path='blogs' element={<Blogs />}></Route>
             <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    /* // <AppContext.Provider value={{message,setMessage}} >
    // <div className="App">
    //   <h1> Parent Component</h1>
      
    //   <ChildCompA1 message={message} setMessage={setMessage}  />
    //   <ChildComponent />
    //   <Items />
    //   <MyForm />
    
    // </div>
    // </AppContext.Provider> */
  );
}
export default App;
