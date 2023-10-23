import './App.css';
import CreateOne from './CreateOne/CreateOne';
import CreateTwo from './CreateTwo/CreateTwo';
import FunctionalProps from './FunctionalProps/FunctionalProps';
import ClassProps from './ClassProps/ClassProps';
import Login from './Login/Login';
import ProdQuatity from './ProdQuantity/ProdQuantity';
import ContextOne from './ContextData/ContextOne/ContextOne';
import { UserProvider } from './ContextData/ContextData';
import Products from './Products/Products';
import GetPosts from './GetPosts/GetPosts';
import PostListPosts from './PostListPosts/PostListPosts';
import FormWrapper from './UserForm/SwichBetween';

function App() {
  const bio = {
    fname: "Hamed",
    sname:"Ahmed",
    age: 24,
    city: "marsa matrouh",
  };
  const courses = ["nodejs", "Reactjs"];

  return (
    <div className='App'>
      {/* *******lab 1******* */}
      {/* <CreateOne/>
      <CreateTwo/> */}
      {/* *******lab 2******* */}
      {/* Q-one */}
      {/* <FunctionalProps bio={bio}>
        <h4>this is functional props</h4>
      </FunctionalProps> */}
      {/* Q-two */}
      {/* <ClassProps courses={courses}>
        <h4>this is Class Props </h4>
      </ClassProps> */}
      {/* Q-three */}
      {/* <Login/> */}
      {/* Q-four */}
      {/* <ProdQuatity/> */}
      {/* *******lab 3******* */}
      {/* Q-one */}
      {/* <Products /> */}
      {/* Q-Two */}
      <FormWrapper/>
      {/* Q-three */}
      {/* <UserProvider value="hello hamed from Context">
        <ContextOne/>
      </UserProvider> */}
      {/* Q-four */}
      {/* <GetPosts /> */}
      {/* <PostListPosts/> */}

    </div>
    
    
  );
}

export default App;
