import React ,{useState}from 'react'

function AddContact({addcontact}) {
    const[ContactData,setContactData]=useState({name:"", email:""});
    const handleChange=(e)=>{
        if(e.target.name==='name'){
            setContactData({...ContactData, name:e.target.value})
        }
        else{
            setContactData({...ContactData, email:e.target.value})
        }
    }
    const handleAdd=()=>{
        if(ContactData.name==="" || ContactData.email===""){
            alert("Please fill all the details")
            return 
        }
        addcontact(ContactData)
        setContactData({name:"",email:""})
       
    }
  return (
    <div className='formHeader'>
       <div className='add-contact'>Add Contact
        <form>
            <lable>Name</lable><br/>
            <input type='text' placeholder='Enter your name' name='name' value={ContactData.name}
            onChange={handleChange}/><br/>
            <lable>Email</lable><br/>
            <input type='email' placeholder='Enter your email' name='email' value={ContactData.email} 
            onChange={handleChange}/>
        </form>
        <button className='btn' onClick={handleAdd}>Add Contact</button>
       </div>
    </div>
  )
}

export default AddContact