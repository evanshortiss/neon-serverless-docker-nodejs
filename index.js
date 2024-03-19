'use strict'

const { neon } = require('@neondatabase/serverless')
const { get } = require('env-var')

const DATABASE_URL = get('DATABASE_URL').required().asUrlString()
const sql = neon(DATABASE_URL)

async function main () {
  const rows = await sql('SELECT version()')

  console.log(rows[0])
}

main()
