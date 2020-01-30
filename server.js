require( 'dotenv' ).config()

const express = require( 'express' )
const morgan = require( 'morgan' )
const path = require( 'path' )
const db = require( './db/mongoose.connection' )
const testRouter = require( './modules/test/testRouter' )
const customerRouter = require( './modules/customer/customerRouter' )

const { NODE_ENV, API_PORT, API_HOST } = process.env
const app = express()

app.use( morgan( 'dev' ) )
app.use( express.json() )

app.get( '/api', ( req, res, next ) => {
    res.status( 200 ).json( { espress: 'Express REST api available!!' } )
} )

app.use( '/api/test', testRouter )
app.use( '/customers', customerRouter )

app.use( ( err, req, res, next ) => {
    console.error( err )
    if ( NODE_ENV === 'production' ) res.status( 500 ).json( { error: 'internal server error' } )
    else res.status( 500 ).json( { error: err.message, stack: err.stack } )
} )
app.use( '/*', ( req, res, next ) => {
    res.setHeader( 'Last-Modified', new Date().toUTCString() )
    res.status( 404 ).json( { [ req.url ]: 'not found' } )
    next()
} )

const distFolder = path.join( __dirname, './client/build' )
app.use( express.static( distFolder ) )

db.connect()
app.listen( API_PORT, API_HOST, () => {
    console.log( `server is alive  http://${ API_HOST }:${ API_PORT }` )
} )
