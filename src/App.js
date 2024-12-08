import { useContext, useState } from 'react';
import {BrowserRouter,Routes,Route,  Link} from 'react-router-dom'
import Dashbord from './pages/Dashbord/Dashbord';
import Products from './components/dashbord/content/products/Products';
import LoginLayout from './components/login/LoginLayout';
import ViewContext from './context/ViewContext';
import { Toaster } from 'react-hot-toast';
import OperatorSettings from './components/dashbord/content/chatSettings/operator/OperatorSettings';

import AddPlan from './pages/AddPlan/AddPlan';
import AllContent from './components/chat/AllContent';
import DashbordPrivider from './context/DashbordContext';
import { AuthCtx } from './context/AuthContext';
function App() {

  return (
    <div className="App">
      <div><Toaster/></div>
      <ViewContext>
      <DashbordPrivider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>home page | go to <Link to={'/dashbord'}>/dashbord</Link></h1>} />
          <Route path='/login' element={<LoginLayout />} />
          <Route path='/addPlan' element={<AddPlan/>} />
          <Route path='/dashbord' element={<Dashbord/>}>
            <Route path='home' element={<h1>dashbord</h1>}/>
            <Route path='reports' element={<h1>reports</h1>}/>
            <Route path='chat' element={<AllContent />}/>
            <Route path='products' element={<Products/>}/>
            <Route path='commands' element={<h1>commands</h1>}/>
            <Route path='profile' element={<h1>profile</h1>}/>
            <Route path='managmentOperator' element={<OperatorSettings/>}/>
            <Route path='reportsChat' element={<h1>reportsChat</h1>}/>
            <Route path='msgReady' element={<h1>msgReady</h1>}/>
            <Route path='settings' element={<h1>settings</h1>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </DashbordPrivider>
      </ViewContext>
      {/* <script>
{        window.addEventListener("load",(function()
        {const t="673afc0b13162bc30a3eddc4";
          window.chatina={bId:t};
          var e=document.createElement("div");
          e.id="chatina-root";
          document.body.appendChild(e);
          var n=document.createElement("link");
          n.rel="stylesheet";
          n.href="https://cdn.chatina.ai/static/widget.css";
          n.crossOrigin="anonymous";
          document.head.appendChild(n);
          var a=document.createElement("script");
          a.src="https://cdn.chatina.ai/static/widget.js";
          a.crossOrigin="anonymous";
          document.head.appendChild(a)
        }))}
        </script> */}
    </div>
  );
}

export default App;
