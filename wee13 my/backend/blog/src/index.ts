import { Hono } from 'hono'

const app = new Hono()
app.use('/api/v1',)
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/v1/signup',(c)=>{
  const body = c.req.query
  return c.text("s");
})
app.post('/api/v1/sigin',(c)=>{
  const body = c.req.query
  return c.text("s");
})
app.post('/api/v1/blog',(c)=>{
  const body = c.req.query
  return c.text("s");
})
app.put('/api/v1/blog',(c)=>{
  const body = c.req.query
  return c.text("s");
})
app.get('/api/v1/blog/:id',(c)=>{
  const body = c.req.query
  return c.text("s");
})
export default app
