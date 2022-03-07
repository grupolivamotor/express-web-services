import request from 'supertest'
import app from '../../src/app'

describe('Test api v1 Walcu routes for sales', () => {
  it('POST /sales without data, should return 400', (done) => {
    request(app).post('/api/v1/walcu/sales').expect(400, done)
  })

  it('POST /sales with data, should return 403', (done) => {
    request(app)
      .post('/api/v1/walcu/sales')
      .send({ name: 'Test name' })
      .expect(403, done)
  })

  it('POST /sales with valid request, should return 200 OK', (done) => {
    request(app)
      .post('/api/v1/walcu/sales')
      .set(
        'x-walcu-webhook-signature',
        'f4ONkpSzQg8Ul5pzAvf+ywDnDDtdHJdte3h5wSvCXgM='
      )
      .send({
        nombre: 'GERARD ÁLVAREZ',
        telefono: ['+34689137955'],
        email: ['test@test.com'],
      })
      .expect(200, done)
  })
})

describe('Test api v1 Walcu routes for appraisals', () => {
  it('POST /appraisals without data, should return 400', (done) => {
    request(app).post('/api/v1/walcu/appraisals').expect(400, done)
  })

  it('POST /appraisals with data, should return 403', (done) => {
    request(app)
      .post('/api/v1/walcu/appraisals')
      .send({ name: 'Test name' })
      .expect(403, done)
  })

  it('POST /appraisals with valid request, should return 200 OK', (done) => {
    request(app)
      .post('/api/v1/walcu/appraisals')
      .set(
        'x-walcu-webhook-signature',
        'WhJk4L/7/gLvLpS0Uw716jtx9iwTDmiZ3zgp0GGZtjU='
      )
      .send({
        nombre: 'GERARD ÁLVAREZ',
        telefono: ['+34689137955'],
        email: ['test@test.com'],
      })
      .expect(200, done)
  })
})
