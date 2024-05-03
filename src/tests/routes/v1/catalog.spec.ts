import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../../../app' // Import your Express app

// Use chai-http plugin
chai.use(chaiHttp)

describe('HTTP Tests', () => {
  it('should return status 200 for GET /', async () => {
    const res = await chai.request(app).get('/v1/catalog/getProducts')
    expect(res).to.have.status(200)
  })

  it('should return status 404 for GET /nonexistent', async () => {
    const res = await chai.request(app).get('/nonexistent')
    expect(res).to.have.status(404)
  })
})
