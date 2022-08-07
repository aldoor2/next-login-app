import { useState } from "react"
import * as axios from 'axios'
import { useRouter } from 'next/router'

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const router = useRouter()

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/auth/login', credentials)

    if (response.status === 200) return router.push('/dashboard')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default LoginPage