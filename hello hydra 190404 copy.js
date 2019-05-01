H E L L O - H Y D R A


render(o4) // show only o1

render(o3) // show only o1

render(o2) // show only o1


render(o1) // show only o1

render(o0) // show only o0

render() // show all four outputs o0, o1, o2, o3
//////////

src(o0).mult(o3).out(o2)

// show audio fft (fourier transform) analysis using the default microphone
a.show()
// hide audio fft
a.hide()



190425

//EASY
osc(22, 0.25, 0.18)
  .rotate(0.5,  ()=> 0.28 + a.fft[2])
  .scale(0.8,  ()=> 0.18 + a.fft[1])
  .out(o1)


//LINE
shape(2, () => a.fft[2])
  .scale(0.3, ()=> 0.4 + a.fft[1])
  .out(o2)

//TRIANGLE
  shape(3, () => a.fft[1])
    .rotate(0.4,  ()=> 0.28 + a.fft[3])
    .scale(0.3, ()=> 0.4 + a.fft[0])
    .out(o0)





//////////////
hello hydra 190418
///////////

osc(108, 3, 0.3).color(2, 0.1, 2)
.mult(osc(20, 0.1, 40)).repeat(2, 20).rotate(0.5).modulate(o1)
.scale(104, () =>  (a.fft[0]*0.9 + 2)).diff(o2).out(o0)
osc(200, 0.2, 0).color(20, 0.7, 1).mult(osc(40)).modulateRotate(o0, 0.2)
.rotate(0.3).out(o2)



hello hydra 190417
///////////



render(o4) // show only o1

render(o3) // show only o1

render(o2) // show only o1


render(o1) // show only o1

render(o0) // show only o0

render() // show all four outputs o0, o1, o2, o3
//////////

src(o0).mult(o3).out(o2)

// show audio fft (fourier transform) analysis using the default microphone
a.show()
// hide audio fft
a.hide()

//////////

//SHAPE


//LINE
shape(2, () => a.fft[2]).out()
  .scale(0.3, ()=> 0.4 + a.fft[1])
  .out(o2)

//LINE
shape(2, () => a.fft[2]).out()
  .scale(0.3, ()=> 0.4 + a.fft[1])
  .out(o2)


  //LINE 2
  shape(2, () => a.fft[1]).out()
    .scale(0.2, ()=> 1.9 + a.fft[0])
    .out(o2)



    //TRIANGLE
      shape(3, () => a.fft[1]).out(o2)
        .rotate(0.04,  ()=> 0.28 + a.fft[3])
        .scale(0.8, ()=> 0.04 + a.fft[0])
        .out(o0)

//TRIANGLE
  shape(3, () => a.fft[1]).out()
    .rotate(0.04,  ()=> 0.28 + a.fft[3])
    .scale(0.8, ()=> 0.04 + a.fft[0])
    .out(2)


// 1 HALF
shape(1, () => a.fft[2]).out()
  .rotate(0.1,  ()=> 0.028 + a.fft[1])
  .scale(0.2, ()=> 0.8 + a.fft[0])
  .out(2)


//EASY
osc(22, 0.25, 0.18)
  .rotate(0.05,  ()=> 0.028 + a.fft[3])
  .scale(0.8,  ()=> 0.18 + a.fft[0])
  .out(o1)



  //EASY
  osc(22, 5, 28)
    .rotate(0.05,  ()=> 0.028 + a.fft[3])
    .scale(0.8,  ()=> 0.18 + a.fft[0])
    .out(o1)


  //LESS HARD
  osc(20, 0.25, 0.8)
    .rotate(0.2,  ()=> 0.8 + a.fft[2])
    .scale(0.8,  ()=> 0.8 + a.fft[0])
    .out(o1)

//HARD
osc(100, 0.25, 0.18)
  .rotate(0.2,  ()=> 0.028 + a.fft[2])
  .scale(0.8,  ()=> 0.08 + a.fft[0])
  .out(o1)

//HARDER
  osc(120, 18, 2)
    .rotate(0.2,  ()=> 0.028 + a.fft[2])
    .scale(0.8,  ()=> 0.18 + a.fft[0])
    .out(o1)



   src(o0).mult(o1).out(o2) //VROOOM

  src(o1).mult(o2).out(o3) //LINES

  src(o2).modulate(o1).out(o3) //LINES

  src(o2).modulate(o1).out(o3) //

  src(o2).modulate(o1).out(o3) //


  src(o3).modulate(o1).out(o3) //RAIN

  src(o3).modulate(o2).out(o3) //RAIN




  src(o1).blend(o2).out(o3) //lines

src(o1).modulate(o2).out(o3) //

//3
    src(o1).blend(o2).blend(o2).out(o3) //3

    src(o3).blend(o2).blend(o1).out(o3) //3

    src(o1).blend(o2).blend(o1).out(o3) //3

    src(o1).modulate(o2).mult(o2).out(o3) //3


//
      src(o1).modulate(o2).mult(o2).modulate(o2).out(o3) //4 LINE

      src(o1).modulate(o2).mult(o2).blend(o2).out(o3) //4 LINE

src(o3).modulate(o1).out(o3) //RAIN
//

  src(o2).blend(o1).out(o3) //lines HARD

  src(o1).modulate(o1).out(o3) //LINES CRAZY

  src(o1).modulate(o0).out(o3) //LINES GEOMETRY CRAZY

  src(o2).modulate(o2).out(o3) //lines HARD NICE SPIKES

  src(o2).modulate(o0).out(o3) //LINES GEOMETRY SLEAK

  src(o2).modulate(o3).out(o3) //CHROME GEOMETRY CRAZY RAIN

  src(o2).modulate(o0).modulate(o1).out(o3) //lines DOuble MOD

  src(o2).modulate(o2).modulate(o3).blend(o3).out(o3) //lines DOuble MOD  //DARK

  src(o1).modulate(o3).out(o3) //FEEDBACK CRONE MISC JUMPS

    src(o2).blend(o0).out(o3) //lines HARD

  src(o3).blend(o0).out(o3) //lines feedback

  src(o1).blend(o1).out(o3) //lines

render(o3) //SOLO




////////////




hello hydra 190417
///////////


render(o4) // show only o1

render(o3) // show only o1

render(o2) // show only o1


render(o1) // show only o1

render(o0) // show only o0

render() // show all four outputs o0, o1, o2, o3
//////////

src(o0).mult(o3).out(o2)

// show audio fft (fourier transform) analysis using the default microphone
a.show()
// hide audio fft
a.hide()

//////////

//SHAPE


//LINE
shape(2, () => a.fft[2]).out()
  .scale(0.3, ()=> 0.4 + a.fft[0])
  .out(2)


//TRIANGLE
  shape(3, () => a.fft[2]).out()
    .scale(0.3, ()=> 0.4 + a.fft[0])
    .out(2)


// 1 HALF
shape(1, () => a.fft[2]).out()
  .rotate(0.1,  ()=> 0.028 + a.fft[1])
  .scale(0.2, ()=> 0.8 + a.fft[0])
  .out(2)


//EASY
osc(22, 0.25, 0.18)
  .rotate(0.05,  ()=> 0.028 + a.fft[3])
  .scale(0.8,  ()=> 0.18 + a.fft[0])
  .out(o1)


  //LESS HARD
  osc(10, 0.25, 0.8)
    .rotate(0.2,  ()=> 0.8 + a.fft[2])
    .scale(0.8,  ()=> 0.8 + a.fft[0])
    .out(o1)

//HARD
osc(100, 0.25, 0.18)
  .rotate(0.2,  ()=> 0.028 + a.fft[2])
  .scale(0.8,  ()=> 0.08 + a.fft[0])
  .out(o1)

//HARDER
  osc(120, 18, 2)
    .rotate(0.2,  ()=> 0.028 + a.fft[2])
    .scale(0.8,  ()=> 0.18 + a.fft[0])
    .out(o1)



  src(o0).mult(o1).out(o2) //VROOOM

  src(o1).mult(o2).out(o3) //LINES

  src(o2).modulate(o1).outz§(o3) //LINES

  src(o3).modulate(o1).out(o3) //RAIN

  src(o1).blend(o2).out(o3) //lines

  src(o3).blend(o1).out(o3) //lines HARD

src(o1).blend(o1).out(o3) //lines

render(o3) //SOLO



////////////

190405

render(o3) // show only o1

shape(4, () => a.fft[0]).out()
  .scale(0.2, ()=> 0.8 + a.fft[0])
  .out()



+

osc(200, 0.25, 0.18).rotate(0.8).out(o1)
=
src(o0).mult(o1).out(o2)

VROOOM
//////


shape(4, () => a.fft[0])
  .scale(0.6, ()=> 0.8 + a.fft[0])
  .out(o0)

render(o3)

osc(30, 0.15, 0.28).rotate(0.5).out(o1)
// .scale(0.6, ()=> 0.8 + a.fft[2])
// .out(o0)





osc(100, 0.25, 0.8)
.rotate(0.2)
// .scale(0.6, ()=> 0.8 + a.fft[0])
.out(o2)

+
// src(o0)
//   .blend(o2,0.9)
//   .modulate(o1,0.1)
//   .out(o3)

  // src(o0)
  //   // .blend(o2,0.9)
  //   .modulate(o1,() => a.fft[0]).0.05())
  //   // .add(osc(2).modulateScale(2,10))
  //   .out(o3)



TOPLAP PARIS


src(o0).mult(o1).out(o2) //VROOOM

src(o2).multi(o3).out(o3)

src(o2).modulate(o1).out(o3)

src(o2).blend(o3).out(o3)













//
// osc(100, 0.25, 0.18).rotate(0.8).out(o1)
//   .modulate(osc(() => mouse.y)).out(o1)


//
// .rotate(0.5)
//   .modulate(osc(() => mouse.y))
//   .out()

//////////



// use audio as a parameter in hydra.
shape(4, () => a.fft[0]).out()
  .scale(0.9,

//////////

// Real time audio analysis using system

a.show()

// hide audio fft
a.hide()

a.show()
// use audio as a parameter in hydra.
shape(4, () => a.fft[0]).out()
  .scale(0.9, ()=> 0.8 + a.fft[0])
  .out()

////////////////

osc(100, 0.25, 0.18).rotate(0.8).out()
  .scale(0.9, ()=> 0.2 + a.fft[2])
  .out()


  osc(40, 0.008, 0.8).rotate(16).pixelate(20, 30).out()
      .scale(0.9, ()=> 0.8 + a.fft[2])
      .out()


////////

osc(40, 0.008, 0.8).rotate(16).pixelate(200, 30).out()

/////////////




// The number in brackets [0] corresponds to which frequency band to use. 0 corresponds to low frequency and higher numbers
// correspond to higher frequency bands.
shape(4, () => a.fft[2]).out()

shape(5, () => 0.5 + a.fft[0])
  .scale(0.5, ()=> 0.5 + a.fft[2])
  .out()



// change the cutoff for the first frequency band(low sounds)
a.settings[0].cutoff = 8

// change the scale for the first frequency bin
a.settings[0].scale = 10

// to do: add beat detection code



OSC
//////////


// To start, follow the instructions in README.md

// shift + enter runs a line of code
// ctrl + enter runs a block of code

osc(20, 0.1, 0.8).out()

// render an oscillator with parameters frequency, sync, and rgb offset.
// change the numbers and run ctrl + enter again to update the visuals
osc(22, 0.1, 0.8).out()

// rotate the oscillator 0.8 radians:

osc(100, 0.25, 0.18).rotate(0.8).out()

// osc(100, 0.25, 0.18), () => a.fft[0]).out()
//   .scale(0.5, ()=> 0.25 + a.fft[2])
//   .out()

osc(40, 0.008, 0.8).rotate(16).pixelate(200, 30).out()


// pixelate the output of the above function:
// osc(20, 0.1, 0.8).rotate(0.8).pixelate(20, 30).out()
osc(40, 0.008, 0.8).rotate(16).pixelate(200, 30).out()
// osc(40, 0.008, 0.8).rotate(8).pixelate(200, 30).out()
// osc(40, 0.008, 0.8).rotate(8).pixelate(200, 30).out()

s0.initScreen(0)

// show webcam output:
s0.initCam(0) // initialize a webcam in source buffer s0
src(s0).out() // render source buffer s0

// If you have more than one camera connected, you can select the camera using an index:
s0.initCam(1) // initialize a webcam in source buffer s0

// webcam kaleidoscope:
s0.initCam() // initialize a webcam in source buffer s0
src(s0).kaleid(4).out() // render the webcam to a kaleidoscope

// change hue
s0.initCam() // initialize a webcam in source buffer s0
src(s0).rotate(0, 0.1).hue().saturate(5).out() // render the webcam to a kaleidoscope

// You can also use the screen or any open window as an input to hydra. When using the desktop or atom as an input,  this
// can create feedback within the visuals. See the feedback.js file for more examples.
s1.initScreen(0)
src(s1).out()

src(s0).rotate(0.1).out()

// Changing the number in 'initScreen' lets you choose which window becomes the input
s0.initScreen(2)
src(s0).out()

// Go to black
solid().out()




190109
//////////

osc().out()

osc(20, 0.1, 0.6).out(o1)

osc(520, 0.03, 0.125).out(o3)


// to show all render buffers at once:
render()

// If no output is specified in out(), the graphics are rendered to buffer o0.
s0.initCam()
src(s0).out() // src(s0).out() is the same as saying src(s0).out(o0)

// to render an oscillator to output buffer o1:
osc(10, 0.4, 0.96).out(o1)

osc(25, 0.04, 0.6).out(o0)

osc(520, 0.03, 0.125).out(o3)

render(o4) // show only

render(o3) // show only o1

render(o2) // show only o2

render(o1) // show only o1

render(o0) // show only o0

render() // show all four outputs o0, o1, o2, o3

src(o0).mult(o3).out(o2)

src(o0).mult(o1).out(o2)



src(o0).add(o3).out(o2)
src(o3).diff(o1).out(o2)
src(o0).diff(o2).out(o2)
src(o0).mask(o1).out(o2)

src(o0).modulate(o1).out(o2)

src(o0).modulateScale(o1).out(o2)

osc(10, 0.1, 0.6).color(1.2, 0.4, 1).out(o1)
osc(12, 0.1, 0.6).color(0, 0.31, 0.6).out(o1)
osc(20, 0.1, 0.6).color(0, 0.3, 0.26).out(o1)
osc(20, 0.1, 0.6).out(o1)

osc(520, 0.03, 0.125).color(0.2, 0.4, 1).out(o3)


src(o3).modulateRotate(o1).out(o2)
src(o1).modulatePixelate(o1).out(o2)

src(o).modulatePixelate(o1).out(o2)
//
// // composite operations can also be added onto each other within the same
// // chain of functions
// src(s0).mult(osc(20, 0.1, 0.8).rotate(0, 0.2)).out(o3)

// // This can also be written as follows. (ctrl + enter to evaluate a block)
// src(s0)
//   .mult(osc(20, 0.1, 0.8).rotate(0, 0.4))
//   .out(o3)
// render()

// more examples
osc(10, 0.1, 0.8)
  .color(1.0, 0.2, -1.0)
  .rotate(0.51, 0.1)
  .modulate(osc(40, -0.1), 0.1)
  .out(o1)

  osc(2000, 0.8, 0.2)
    .thresh()
    .rotate(1.71)
    .color(0.05, 0.2, 1.4)
    .modulateRotate(osc(2, -0.7), 2)
    .out(o0)

    osc(120, 0.01, 0.38)
      .thresh()
      .rotate(1.71)
      .modulateRotate(osc(2, -0.1), 2)
      .out(o0)

      osc(120, 0.01, 0.38)
        .thresh()
        .rotate(1.71)
        .modulateRotate(osc(2, -0.1), 2)
        .out(o0)

    osc(60, 0.04, 0.008)
      .thresh()
      .rotate(0.005, () => a.fft[1]).out()
          .modulateRotate(osc(0.2, -0.1), 0.6)
    .out(o0)









190108
//////////

// create an html5 video element
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
// get path to video using getPaths() representing current directory in atom
vid.src = atom.project.getPaths()[0]+'/Volumes/Macintosh HD/ZAB MHD/AUDIO/eerieear/e_e/IMAGEN/MOSHED-2018-8-11-15-57-35.webm'

// use video within hydra
s0.init({src: vid})
src(s0)
  .rotate(0, 0.2)
  .repeat(5, 3, 0.5)
  .saturate(3.0)
//  .color(1.0, 0.7, -1)
  .scrollX(0, -0.1)
  .diff(osc(2, 0.3, 2))
//  .kaleid(3)
  .diff(src(s0).saturate().hue(0.2))
  .out()


////////


shape(250, () => a.fft[2]).out()


shape(28, () => 0.5 + a.fft[0])
  .scale(0.5, ()=> 0.5 + a.fft[2])
  .out()

/////////

  src(o0).modulate(o1).out(o2)

  src(o1).modulateScale(o1).out(o2)

  osc(20, 0.1, 0.6).color(1, 0, 0).out(o1)
  osc(20, 0.1, 0.6).color(0, 1, 0).out(o1)
  osc(20, 0.1, 0.6).out(o1)



///////////




CUT





// change number of repetitions if fft above 0.4, otherwise repeat once
  shape(5)
    .repeat(
      () => {
        if(a.fft[0] > 0.4) return 5
        return 1
      },
      1
    )
    .out()

//  smooth the fft values (make more or less sensitive to rapid changes)
// a.setSmooth(0.96)
a.setSmooth(0.1)

// Values are between 0 and 1. 0 is most senstive 1 is most smooth
a.setSmooth(0.3)

a.setSmooth(0.94)

// change cutoff for sound detection
a.setCutoff(1)

// The blue lines in the audio visualizer correspond to values between 0 and 1.
// changing the cutoff value changes the minimum value detected.
a.setCutoff(5)

// change the range of values detected
a.setScale(3)

// set number of frequency ranges to detect
a.setBins(6)

// You can also individually change the cutoff and scale of each frequency range
