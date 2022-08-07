import { useState } from "react"
import axios from 'axios'

function DashboardPage() {
  const [user, setUser] = useState({
    email: '',
    username: '',
  })

  const getProfile = async () => {
    const response = await axios.get('/api/profile')
    setUser(response.data)
  }

  return (
    <div>
      <h1>Dashborad</h1>

      <pre>{JSON.stringify(user, null, 4)}</pre>

      <button onClick={() => getProfile()}>Get Profile</button>
    </div>
  )
}

export default DashboardPage