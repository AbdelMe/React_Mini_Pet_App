import { useSelector } from 'react-redux';
import Sidebar from '../../Home'

export default function Veterinarian() {
  const data = useSelector((state) => state.Compt.DataBase.Veterinarians);
  return (
    <>
      <Sidebar>
        <h1>Available Veterinarians</h1>
        <table border={1} className='container'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Picture</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
            {data.map(vet=>{
              return <>
          <tr>
                <td>{vet.f_name}</td>
                <td>{vet.l_name}</td>
                <td><img src={vet.pic} width={100} alt=""  className='rounded-4'/></td>
                <td>{vet.email}</td>
                <td>{vet.phone}</td>
                <td><a href={`mailto:${vet.email}`}>Call</a> <a href={`mailto:${vet.phone}`}>Email</a></td>
          </tr>
              </>
            })}
        </table>
      </Sidebar>
    </>
  )
}
