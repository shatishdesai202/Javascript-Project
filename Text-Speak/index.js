// const synth = window.speechSynthesis;

// // let text = document.getElementById('text')
// // console.log(text)
// // let rateValue = document.getElementById('rate-value')
// // console.log(rateValue)
// // let rate = document.getElementById('rate')
// // console.log(rate)
// // let pitchValue = document.getElementById('pitch-value')
// // console.log(pitchValue)
// // let pitch = document.getElementById('pitch')
// // console.log(pitch)
// // let voiceSelect = document.getElementById('voice-select')
// // console.log(voiceSelect)
// // let submit = document.getElementById('submit')
// // // console.log(submit)

// const textForm = document.querySelector('form');
// const textInput = document.querySelector('#text-input');
// const voiceSelect = document.querySelector('#voice-select');
// const rate = document.querySelector('#rate');
// const rateValue = document.querySelector('#rate-value');
// const pitch = document.querySelector('#pitch');
// const pitchValue = document.querySelector('#pitch-value');
// const body = document.querySelector('body');

// // console.log(submit.getAttribute('id'))
// let voices = []

// const getVoices = () => {

//     voices = synth.getVoices()
//     voices.forEach(voice => {
//         const option = document.createElement('option')
//         option.textContent = voice.name + '(' + voice.lang + ')';

//         // set Needed option Attributes

//         option.setAttribute('data-lang', voice.lang)
//         option.setAttribute('data-name', voice.name)

//         voiceSelect.appendChild(option)
        
//     })

// }

// if (synth.onvoiceschanged !== undefined) {
//     synth.onvoiceschanged = getVoices
// }

// const speak = () =>{
//     if(synth.speaking){
//         console.error('already speaking')
//     }

//     if(textInput.value !== ''){
//         // Get speaking 
//         const speakText =  new SpeechSynthesisUtterance(textInput.value)

//         // speak End
//         speakText.onend = e =>{
//             console.log('End speaking')
//         }

//         speakText.onerror = e =>{
//             console.log('some Error occured')
//         }

//         //selected Voice
//         let selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')
        
//         voices.forEach(voice => {
//             if(voice.name == selectedVoice){
//                 speakText.voice = voices
//             }
//         });

//         // speakText.voice = 'Google Deutsch'

//         // set Pitch And Rate
//         speakText.rate = rate.value
//         speakText.pitch = pitch.value
//         synth.speak(speakText)
//     }
// }

// // submit.addEventListener('click', e =>{
// //     e.preventDefault()
// //     speak()
// //     text.blur()
// // })
// textForm.addEventListener('submit', e => {
//     e.preventDefault();
//     speak();
//     textInput.blur();
//   });

// // Rate value change
// rate.addEventListener('change', e => (rateValue.textContent = rate.value));

// // Pitch value change
// pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

// // Voice select change
// voiceSelect.addEventListener('change', e => speak());


                            // this is original code

// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

// Init voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  // Loop through voices and create an option for each one
  voices.forEach(voice => {
    // Create option element
    const option = document.createElement('option');
    // Fill option with voice and language
    option.textContent = voice.name + '(' + voice.lang + ')';

    // Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput.value !== '') {
    // Add background animation
    body.style.background = '#141414 url(img/wave.gif)';
    body.style.backgroundRepeat = 'repeat-x';
    body.style.backgroundSize = '100% 100%';

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakText.onend = e => {
      console.log('Done speaking...');
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      'data-name'
    );

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    // Speak
    synth.speak(speakText);
  }
};

// EVENT LISTENERS

// Text form submit
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

// Rate value change
rate.addEventListener('change', e => (rateValue.textContent = rate.value));

// Pitch value change
pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelect.addEventListener('change', e => speak());
