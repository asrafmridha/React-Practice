import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
import Counter from './Counter'

function App() {

  const handleSignUpSubmit=(data)=>{
    console.log("Sign Up Data", data);
  }  
  const handleUpdateSubmit=(data)=>{
    console.log("Update Data", data);
  }

  return (
    <>
      {/* <Counter></Counter> */}
      <ReusableForm formTitle={'Sign Up Form'} submitBtnText={'Sign In'} handleSubmit={handleSignUpSubmit}><div>
        <h2>SIgn Up</h2>
        <p>Please Sign Up Right Now</p>
        </div></ReusableForm>
      <ReusableForm formTitle={'Update Form'} submitBtnText={'Update'} handleSubmit={handleUpdateSubmit}>
      <div>
        <h2>Update Now</h2>
        <p>Keep Your Profile Update</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
