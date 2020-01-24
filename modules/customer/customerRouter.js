const express = require('express')
const router = express.Router()
const path = require('path')
const asm = require('../../utils/asyncMiddleware')
router.use(express.json())

const customerModel = require('./customerModel')

router.post(
    '/',
    asm(async (req, res) => {
        console.log('**Create new Customer**')
        const customer = await customerModel.create(req.body)
        res.status(200).json(customer)
    })
)
router.get(
    '/',
    asm(async (req, res) => {
        const customers = await customerModel.find({})
        res.status(200).json(customers)
    })
)
router.get(
    '/:id',
    asm(async (req, res) => {
        console.log(req, res)
        const customer = await customerModel.findById({ _id: req.params.id })
        console.log(customer)
        // if (!customer) return res.status(404).send('No customer found')
        res.status(200).json(customer)
    })
)
router.delete(
    '/:id',
    asm(async (req, res) => {
        const customer = await customerModel.findByIdAndRemove(req.params.id)
        res.status(200).json(customer)
    })
)
router.put(
    '/:id',
    asm(async (req, res) => {
        const customer = await customerModel.findByIdAndUpdate(req.params.id, req.body, { new: true, upsert: true })
        res.status(200).json(customer)
    })
)
module.exports = router
