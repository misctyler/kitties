
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function headColor(color,code) {
    $('#body, .ear').css('background', '#' + color) 
    $('#headcode').html('code: '+code) 
    $('#dnabody').html(code) 
}

function earColor(color,code) {
    $('.shade').css('background', '#' + color) 
    $('#earcode').html('code: '+code) 
    $('#dnaears').html(code) 
}

function eyeColor(color,code) {
    $('.eye').css('background', '#' + color) 
    $('#eyecode').html('code: '+code) 
    $('#dnaeyes').html(code) 
}

function noseColor(color,code) {
    $('.nose').css('background', '#' + color) 
    $('#nosecode').html('code: '+code) 
    $('#dnanose').html(code) 
}


// EYES VARIATIONS

function eyeVariation(num) {
    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')            
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Down')
            return eyesType1()            
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Up')
            return eyesType2()            
            break
    }
}

function normalEyes() {
    $('.eye').css('border', 'none')
}

function eyesType1() {
    $('.eye').css('border-top', '8px solid')
}

function eyesType2() {
    $('.eye').css('border-bottom', '15px solid')
}

// EYE TYPE VARIATIONS 

function eyesVariation(num) {
    $('#dnatype').html(num)
    switch (num) {
        case 1:
            normalShape()
            $('#eyeShape').html('Basic')           
            break
        case 2:
            normalShape()
            $('#eyeShape').html('Side')
            return eyesShape1()            
            break
        case 3:
            normalShape()
            $('#eyeShape').html('Huge')
            return eyesShape2()            
            break
    }
}

function normalShape(){
    $('.pupils').css('transform', 'none')
}
function eyesShape1(){
    $('.pupils').css('transform', 'rotate(273deg)')
}
function eyesShape2(){
    $('.pupils').css('transform', 'none')
    $('.pupils').css('border-bottom', '15px solid')
}



function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.eye').css('border', 'none')
}

async function normalShape() {
    await $('.pu').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
