import logo from './logo.svg';
import './App.css';
import funcComp from './Components/funcComp';
import classComp from './Components/classComp';

import MyStateComp from './Components/MyStateComp';
import Counter from './task/counter';
import PerentComp from './Components/PerentComp';
import CondREnComp from './Components/CondREnComp';
import MyCssComp from './Components/MyCssComp';
import MyImageComp from './Components/MyImageComp';
import MyCarousal from './Components/MyCarousal';
import UserComp from './Components/UserComp';
import ErrorBoundaryComp from './Components/ErrorBoundaryComp';


function App() {
  return (
    <div className="App">
      {/* <funcComp empName="Prabhanshu" empPost="Software Engineer" empSalary="100000"/>
      <classComp empName="Prabhanshu" empPost="Software Engineer" empSalary="100000"/> */}
      {/* <MyStateComp /> */}
      {/* <Counter/> */}
      {/* <PerentComp/>
      <hr/>
      <CondREnComp/> */}
   
      {/* <MyCssComp/> */}
      {/* <MyImageComp/> */}
      {/* <MyCarousal/> */}

      <ErrorBoundaryComp>
        <UserComp name="Prabhanshu Lakshakar"/>  // children this is props
      </ErrorBoundaryComp>
       <ErrorBoundaryComp>
        <UserComp name="Mukund"/>
      </ErrorBoundaryComp>
       <ErrorBoundaryComp>
        <UserComp name="Mayur"/>
      </ErrorBoundaryComp>
         <ErrorBoundaryComp>
        <UserComp name="Gopal"/>
      </ErrorBoundaryComp>

    </div>
  );
}

export default App;
