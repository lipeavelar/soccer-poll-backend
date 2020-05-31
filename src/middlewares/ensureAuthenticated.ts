import { Request, Response, NextFunction } from 'express'
import * as dotenv from 'dotenv'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('Token is missing')
  }
  dotenv.config()
  const [, token] = authHeader.split(' ')

  try {
    const tokenDecoded = verify(token, process.env.APP_SECRET ?? '')

    const { sub } = tokenDecoded as TokenPayload

    req.user = {
      id: parseInt(sub)
    }

    return next()
  } catch {
    throw new Error('Invalid token')
  }
}
