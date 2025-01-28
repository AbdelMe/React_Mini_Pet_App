import { useSelector } from "react-redux";
import Sidebar from "../../Home";
import phone from '../../Pictures/phone.png';
import email from '../../Pictures/email.png';

export default function Veterinarian() {
  const data = useSelector((state) => state.Compt.DataBase.Veterinarians);

  return (
    <>
      <Sidebar>
        <div className="container mt-4">
          <h1 className="mb-4 text-center">Available Veterinarians</h1>
          <table className="table table-bordered table-hover table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Picture</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-dark">
              {data.map((vet, index) => (
                <tr key={index} style={{ height: '50px' }}>
                  <td>{vet.f_name}</td>
                  <td>{vet.l_name}</td>
                  <td>
                    <img
                      src={vet.pic}
                      width={80}
                      alt="Veterinarian"
                      className="rounded-4"
                    />
                  </td>
                  <td>{vet.email}</td>
                  <td>+212 {vet.phone}</td>
                  <td>
                    <a
                      href={`mailto:${vet.email}`}
                      className="btn btn-sm"
                    >
                      <img src={email} width={30} alt="Email" />
                    </a>
                    <a
                      href={`tel:${vet.phone}`}
                      className="btn btn-sm"
                    >
                      <img src={phone} width={30} alt="Phone" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Sidebar>
    </>
  );
}
