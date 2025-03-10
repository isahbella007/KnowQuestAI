import express from "express"

export default () => { 
    const router = express()

    router.get('/health', (req, res) => {
        console.log('Server is healthy ')
        res.send('Server is healthy')
    })


    return router
}
