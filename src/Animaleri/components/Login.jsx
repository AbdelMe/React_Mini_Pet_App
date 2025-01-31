import { useNavigate } from 'react-router-dom'

export default function Login() {
  const Nav = useNavigate('')

  const Connect = ()=>{
    Nav('/')
  }

  return (
    <div>
        <label htmlFor="">Email </label><input type="email" required/>
        <label htmlFor="">Password </label><input type="text" name="" id="" required/>
        <button onClick={Connect}>Connextion</button>
    </div>
  )
}
