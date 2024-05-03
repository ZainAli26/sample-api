import { expect } from 'chai'
import { addProductQuery } from '../../../db/postgres/postgresql-queries'
import { type Product } from '../../../persistance/product'

describe('HTTP Tests', () => {
  it('should build the add product query correctly /', () => {
    const product: Product = {
        id: 1,
        name: "ABC",
        price: 10,
        description: "Any",
        available: true
    }
    const expectedQuery = `INSERT INTO "catalog" (id, name, price, description, available)
    VALUES (1, 'ABC', 10, 'Any', true)`
    const query = addProductQuery(product)
    expect(query).to.equal(expectedQuery)
  })
})
