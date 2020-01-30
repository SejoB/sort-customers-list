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
router.get(
    '/',
    asm(async (req, res) => {
        const customers = await testModel.find({})
        res.status(200).json(customers)
    })
)
router.get(
    '/:id',
    asm(async (req, res) => {
        const customer = await testModel.findById({ id: req.params.id })
        console.log(customer)
        // if (!customer) return res.status(404).send('No customer found')
        res.status(200).json(customer)
    })
)

module.exports = router
