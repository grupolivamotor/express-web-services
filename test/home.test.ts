import request from 'supertest'
import app from '../src/app'

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app).get('/').expect(200, done)
  })

  it('should return 404 OK', (done) => {
    request(app).get('/any').expect(404, done)
  })
})

describe('GET /robots.txt', () => {
  it('should return 200 OK', (done) => {
    request(app).get('/robots.txt').expect(200, done)
  })
})
