//import Message from './Message';
//import BudgetData from './BudgetData';
//import ListGroup from './components/ListGroup';
import SideMenu from './components/SideMenu';
import Budget from './components/Budget.tsx';
//import Chart from './components/Chart.tsx';


//import Form from './components/Form';


function App(){
  //return <div> <ListGroup/></div>
  return (
    <>
        <body>
          <SideMenu/>
          <Budget/>
        </body>
    </>

  )
  
}

/*
<div className="menu-div">
                <SideMenu/>
            </div>

            <div className="page-div">
                <Budget/>
            </div>
*/
export default App;
