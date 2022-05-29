import { Router } from 'express'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { db } from '../../Firebase/__init__.js'
import { DecryptData } from '../../helpers/Crypt/decrypt.js'

const AuthRoutes = Router()

AuthRoutes.post('/me', async (req, res) => {
  try {
    const { handler, password } = req.body

    if (handler === undefined || password === undefined) {
      throw new Error('No user Found')
    }

    const Q = query(
      collection(db, process.env.ROOT_COLLECTION),
      where('handler', '==', handler)
    )

    const querySnapshot = await getDocs(Q)

    if (querySnapshot.empty) {
      throw new Error('')
    }

    let rootId
    let data

    querySnapshot.forEach((doc) => {
      rootId = doc.id
      data = doc.data()
    })

    let DecryptPassword = DecryptData(data.password, process.env.ENCRYPTSECRET)

    if (DecryptPassword !== password) {
      throw new Error('')
    }

    return res.status(200).json({
      status: 200,
      message: 'Welcome Master',
      data: {
        id: rootId,
      },
    })
  } catch (error) {
    console.log(
      'error message from Auth Routes >>',
      error?.message || 'no user found'
    )

    return res.status(400).json({
      status: 400,
      message: 'Unknown user request',
      data: null,
    })
  }
})

export default AuthRoutes
