const asm = require('../../utils/asyncMiddleware')
const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.json())

const testModel = require('./testModel')

router.post(
    '/',
    asm(async (req, res) => {
        console.log('create a user:')
        const test = await testModel.create(req.body)
        res.status(200).json(test)
    })
)

module.exports = router
