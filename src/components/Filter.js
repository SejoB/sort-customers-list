import React from 'react'
import data from '../data/clients.json'

export const loadData = () => JSON.parse(JSON.stringify(data))
// console.log(loadData)