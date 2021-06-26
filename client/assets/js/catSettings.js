
var colors = Object.values(allColors())

function defaultCat(){
  renderCat(defaultDNA)
}

function randomDNA(){
  var dnaStr = String(Math.floor(Math.random()*1E16))
  //Colors
  var dna = { 
  "headcolor" : dnaStr.substring(0, 2),
  "nosecolor" : dnaStr.substring(2, 4),
  "eyecolor" : dnaStr.substring(4, 6),
  "earcolor" : dnaStr.substring(6, 8),
  "shape" : dnaStr.substring(8,9) % 3 + 1,
  "type" : dnaStr.substring(9, 10)  % 3 + 1,
  "decorationMidcolor" : dnaStr.substring(10, 12),
  "decorationSidescolor" : dnaStr.substring(12, 14),
  "animation" :  dnaStr.substring(14, 15) % 6 + 1,
  "lastNum" :  dnaStr.substring(15, 16)
  }
  return dna
}

//Random cat DNA
function randomCat(){
var dna = randomDNA()   
  //Rendering Cat
 renderCat(dna)
}

var defaultDNA = {
    "headcolor" : 13,
    "earcolor" : 20,
    "eyecolor" : 7,
    "nosecolor" : 19,
    //Cattributes
    "shape" : 1,
    "type" : 2,
    "decorationMidcolor" : 77,
    "decorationSidescolor" : 77,
    "animation" :  1,
    "lastNum" :  1
    }


$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyeColor);
  $('#dnanose').html(defaultDNA.earsColor);  
  $('#dnashape').html(defaultDNA.shape);
  $('#dnatype').html(defaultDNA.type);
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor);
  $('#dnaanimation').html(defaultDNA.animation);
  $('#dnaspecial').html(defaultDNA.lastNum);

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnanose').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnatype').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    $('#earcolor').val(dna.earcolor)
    earColor(colors[dna.earcolor],dna.earcolor)
    $('#eyecolor').val(dna.eyecolor)
    eyeColor(colors[dna.eyecolor],dna.eyecolor)
    $('#nosecolor').val(dna.nosecolor)
    noseColor(colors[dna.nosecolor],dna.earcolor)
    $('#bodycolor').val(dna.headcolor)
    headColor(colors[dna.headcolor],dna.headcolor)

    eyeVariation(dna.shape)
    $('#shape').val(dna.shape)
    eyesVariation(dna.type)
    $("#shaped").val(dna.type)
}

// Listen for changes

$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earColor(colors[colorVal],colorVal)
})

$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})

$('#nosecolor').change(()=>{
  var colorVal = $('#nosecolor').val()
  noseColor(colors[colorVal],colorVal)
})

$('#shape').change(()=>{
  var shape = parseInt($('#shape').val())    
  eyeVariation(shape)   
})

$('#shaped').change(()=>{
  var shaped = parseInt($('#shaped').val())    
  eyesVariation(shaped)   
})

$('#animation').change(()=>{
  var animation = parseInt($('#animation').val())    
  animationVariation(animation)    
})
