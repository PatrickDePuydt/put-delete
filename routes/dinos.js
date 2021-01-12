const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
  let dinos = fs.readFileSync('./dinos.json');
  let dinoData = JSON.parse(dinos); // parse to do, strigify to send

  res.render('dinos/index', {   
    dinos: dinoData
  });
});

router.get('/new', (req, res) => {
  res.render('dinos/new');
});

router.post('/', (req, res) => {
  // Add dinos to dino.json
  let dinos = fs.readFileSync('./dinos.json'); // Read or turn dinos.json into a mutable array
  dinosArray = JSON.parse(dinos); // turn it into readable JSON
  dinosArray.push(req.body); // Add new dino from req.body to the array
  let dinoJSON = JSON.stringify(dinosArray); // Turn dino array into JSON
  fs.writeFileSync('./dinos.json', dinoJSON); // write to dinos.json
  res.redirect('/dinos'); // Redirect
});

router.get('/:idx', (req, res) => { //express show route for dinosaurs (lists one dinosaur)
  let dinosaurs = fs.readFileSync('./dinos.json'); // get dinosaurs
  let dinoData = JSON.parse(dinosaurs);
  let dinoIndex = parseInt(req.params.idx); //get array index from url parameter
  
  console.log(`⚠️ dinoData[dinoIndex] `, dinoData[dinoIndex]);

  res.render('dinos/show', {
    dino: dinoData[dinoIndex]
  }); //render page with data of the specified animal
  
});

module.exports = router;