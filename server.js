const express = require('express')
const app = express()
app.use(express.json())

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Adventure Sandals'

app.get('/', (request, response) => {
  response.send('Is it really an adventure without a pair of Adventure Sandals?')
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`)
})

app.locals.sandals = [
  {
    id: 1, 
    name: 'Bedrock Cairn',
    weight: '8.5 oz.',
    price: 105,
    hasArchSupport: false,
    image: 'https://cdn.shopify.com/s/files/1/1132/3434/products/BEDROCK_CAIRN_Maroon_400x.jpg?v=1595966700',
    description: 'Minimalist, lightweight sandals with superior footbed traction and a unique carriage hug your foot in mucky and slick conditions when you want top-notch security and a feeling of freedom.'
  },
  {
    id: 2, 
    name: 'Chaco Mega Z/Cloud',
    weight: '1 lb. 5 oz.',
    price: 115,
    hasArchSupport: true,
    image: 'https://a248.e.akamai.net/f/248/9086/10h/wolverine-o.scene7.com/is/image/WolverineWorldWide/CHAW-JCH107758-050919-S20-000?wid=584&hei=484&op_usm=0.5,1&qlt=70&fmt=png-alpha',
    description: 'Ample arch support and a durable midsole make the Mega Z/Cloud the only sandal in the test built for high-mileage pursuits and heavy packs. Built like a tank and if you live in Colorado, owning a pair of these is literally required.'
  },
  {
    id: 3, 
    name: 'Teva Original Universal',
    weight: '13.5 oz.',
    price: 50,
    hasArchSupport: true,
    image: 'https://www.teva.com/dw/image/v2/AAFF_PRD/on/demandware.static/-/Sites-masterCatalogTeva/default/dw8acd592e/images/grey/1004006-RTML_1.jpg?sw=1020&sh=1020&sm=fit',
    description: 'From a Grand Canyon raft in 1984 to docks, stoops, and sidewalks around the world, one of Teva’s very first sandal stands as a testament to timeless comfort and utilitarian style. Teva pretty much invented the adventure sandal with this revolution in footwear.'
  }
]

app.get('/sandals', (request, response) => {
  const sandals = app.locals.sandals
  response.json({ sandals })
})