import { verify } from 'jsonwebtoken';
import { serialize } from 'cookie';

export default function logoutHandler(req, res) {
  const { myTokenName } = req.cookies

  if (!myTokenName) return res.status(401).json({ error: 'Token not found' })

  try {
    verify(myTokenName, 'secret')
    const serialized = serialize('myTokenName', null, {
      httpOnly: true,
      segure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-Cookie', serialized)
    return res.json('logout successfully')
  } catch (error) {
    return res.status(401).json({ error: 'invalid token' })
  }

}