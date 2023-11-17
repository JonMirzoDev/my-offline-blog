'use client'
import { useState } from 'react'
import { account, databases, ID } from './appwrite'

type User = {
  name: string
  // other user properties
}

const LoginPage = () => {
  const [test, setTest] = useState<any>('')
  const promise = databases.listDocuments('blogs-id-29', 'blog-posts-29')

  promise.then(
    function (response) {
      console.log(response)
      setTest(response)
    },
    function (error) {
      console.log(error)
    }
  )

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')

  const login = async (email: string, password: string) => {
    await account.createEmailSession(email, password)
    setLoggedInUser(await account.get())
  }

  const register = async () => {
    await account.create(ID.unique(), email, password, name)
    await login(email, password)
  }

  const logout = async () => {
    await account.deleteSession('current')
    setLoggedInUser(null)
  }

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        {test && test?.documents[0]?.title}
        <button type='button' onClick={logout}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div>
      <p>Not logged in</p>
      {test && test?.documents[0]?.title}
      <form>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='button' onClick={() => login(email, password)}>
          Login
        </button>
        <button type='button' onClick={register}>
          Register
        </button>
      </form>
    </div>
  )
}

export default LoginPage
