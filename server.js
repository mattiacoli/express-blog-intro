// import express modules
const express = require('express')
// invoqe express() function
const app = express()
// add port for local server
const port = 3001

// initialize server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);

})

// add basic route
app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

// create array of objects for blog post
const posts = [
  {
    id: 1,
    title: 'Ciambellone',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eius harum dignissimos dicta dolor possimus earum doloremque recusandae veniam sapiente iusto nisi in aliquid vel! Adipisci nesciunt earum numquam exercitationem aspernatur, obcaecati facilis sequi eligendi soluta a repellendus quasi, non minima cupiditate! Quas commodi pariatur fugiat omnis excepturi, dolor esse?",
    img : "/images/ciambellone.jpeg",
    tags : [ 'dolce', 'ciambella', 'ricetta', 'tradizionale']

  },
  {
    id: 2,
    title: 'Cracker alla Barbabietola',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eius harum dignissimos dicta dolor possimus earum doloremque recusandae veniam sapiente iusto nisi in aliquid vel! Adipisci nesciunt earum numquam exercitationem aspernatur, obcaecati facilis sequi eligendi soluta a repellendus quasi, non minima cupiditate! Quas commodi pariatur fugiat omnis excepturi, dolor esse?",
    img : "/images/cracker_barbabietola.jpeg",
    tags : [ 'salato', 'aperitivo', 'ricetta', 'vegano', 'light', 'barbabietola']
  },
  {
    id: 3,
    title: 'Pane fritto dolce',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eius harum dignissimos dicta dolor possimus earum doloremque recusandae veniam sapiente iusto nisi in aliquid vel! Adipisci nesciunt earum numquam exercitationem aspernatur, obcaecati facilis sequi eligendi soluta a repellendus quasi, non minima cupiditate! Quas commodi pariatur fugiat omnis excepturi, dolor esse?",
    img : "/images/pane_fritto_dolce.jpeg",
    tags : [ 'dolce', 'pane', 'ricetta', 'vegano']
  },
  {
    id: 4,
    title: 'Pasta alla barbabietola',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eius harum dignissimos dicta dolor possimus earum doloremque recusandae veniam sapiente iusto nisi in aliquid vel! Adipisci nesciunt earum numquam exercitationem aspernatur, obcaecati facilis sequi eligendi soluta a repellendus quasi, non minima cupiditate! Quas commodi pariatur fugiat omnis excepturi, dolor esse?",
    img : "/images/pasta_barbabietola.jpeg",
    tags : [ 'salato', 'pasta', 'ricetta', 'primi', 'barbabietola' ]
  },
  {
    id: 5,
    title: 'Torta Paesana',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eius harum dignissimos dicta dolor possimus earum doloremque recusandae veniam sapiente iusto nisi in aliquid vel! Adipisci nesciunt earum numquam exercitationem aspernatur, obcaecati facilis sequi eligendi soluta a repellendus quasi, non minima cupiditate! Quas commodi pariatur fugiat omnis excepturi, dolor esse?",
    img : "/images/torta_paesana.jpeg",
    tags : [ 'salato', 'torta', 'ricetta', 'tradizionale']
  },

]

