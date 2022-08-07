import { useState } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'

function DashboardPage() {
  const [user, setUser] = useState({
    email: '',
    username: '',
  })
  const router = useRouter()

  const getProfile = async () => {
    try {
      const response = await axios.get('/api/profile')
      setUser(response.data)
    } catch (error) {
      console.error(error)
      router.push('/login')
    }
  }

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout')
      router.push('/login')
    } catch (error) {
      console.error(error)
      router.push('/login')
    }
  }

  return (
    <div>
      <h1>Dashborad</h1>

      <pre>{JSON.stringify(user, null, 4)}</pre>

      <button onClick={() => getProfile()}>Get Profile</button>

      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default DashboardPage