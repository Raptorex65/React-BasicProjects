import { useEffect, useState } from "react";

const GetData = () => {
  const [form, setForm] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData= async () => {
    const response = await fetch("http://174.138.103.233/api/employees")
    const data= await response.json();
    setForm(data);
    console.log(data);
}

return (
    <div className="leftPart">
      <table striped bordered hover>
        <caption style={{fontSize:18, color: "red", fontWeight: "Bold"}}>USERLIST</caption>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>E-Mail</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {form.map((user)=>{
            return (
                    <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.birthday}</td>
                    <td>{user.email}</td>
                    <td>{user.about}</td>
                  </tr>
                  );
          })}
        </tbody>
      </table>
    </div>
  )}
export default GetData;

