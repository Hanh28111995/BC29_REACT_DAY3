import logo from './logo.svg';
import './App.css';
import RenderingWithConditions from './Components/RenderingWithCondition/RenderingWithConditions';
// import ClassComponent from './Components/DemoComponent/ClassComponent';
// import FunctionComponent from './Components/DemoComponent/FunctionComponent';
// import Home from './Components/BaitapLayout/Home';
// import DataBinding from './Components/DataBinding/DataBinding';
import HandlingEvents from './Components/HandlingEvents/HandlingEvents';
import State from './Components/State/State';
import Styling from './Components/Styling/Styling';
import BaitapXe from './Components/BaitapXe/BaitapXe';
import RenderingWithMap from './Components/RenderingWithMap/RenderingWithMap';
import ParentProp from './Components/Props/ParentProp';
import BaiTapProps from './Components/BaiTapProps/BaiTapProps';
// import BaiTapThucHanhLayout from './Components/BaiTapLayoutComponent/BaiTapThucHanhLayout';


function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvents /> */}
      {/* <State /> */}
      {/* <Styling /> */}
      <BaitapXe />
      <RenderingWithMap />
      <ParentProp />
      <BaiTapProps />
    </div>
  );
}

export default App;
