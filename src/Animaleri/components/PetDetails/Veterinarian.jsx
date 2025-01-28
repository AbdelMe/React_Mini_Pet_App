import { useSelector } from "react-redux";
import Sidebar from "../../Home";
import phone from '../../Pictures/image-gallery.png'
import email from '../../Pictures/email.png'

export default function Veterinarian() {
  const data = useSelector((state) => state.Compt.DataBase.Veterinarians);
  return (
    <>
      <Sidebar>
        <h1>Available Veterinarians</h1>
        <table border={1} className="container">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Picture</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          {data.map((vet) => {
            return (
              <>
                <tr>
                  <td>{vet.f_name}</td>
                  <td>{vet.l_name}</td>
                  <td>
                    <img
                      src={vet.pic}
                      width={100}
                      alt=""
                      className="rounded-4"
                    />
                  </td>
                  <td>{vet.email}</td>
                  <td>+212 {vet.phone}</td>
                  <td>
                    <a href={`mailto:${vet.email}`}><img src={phone} width={30} alt="" className="mx-1"/></a>
                    <a href={`mailto:${vet.phone}`}><img src={email} width={30} alt="" className="mx-1"/></a>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </Sidebar>
    </>
  );
}
