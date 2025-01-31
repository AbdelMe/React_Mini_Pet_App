import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 rounded-4 content text-light" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
