// get all elements with the class of key
const keys = document.querySelectorAll('.key');

// initialise the status of each key to false, store status and audio file in an object
let keyStatus = {
    'a' : {pressed: false, clip: new Howl({src:['audio/C-key.wav']})},
    'w' : {pressed: false, clip: new Howl({src:['audio/Csh-key.wav']})},
    's' : {pressed: false, clip: new Howl({src:['audio/d-key.wav']})},
    'e' : {pressed: false, clip: new Howl({src:['audio/dsh-key.wav']})},
    'd' : {pressed: false, clip: new Howl({src:['audio/e-key.wav']})},
    'f' : {pressed: false, clip: new Howl({src:['audio/f-key.wav']})},
    't' : {pressed: false, clip: new Howl({src:['audio/fsh-key.wav']})},
    'g' : {pressed: false, clip: new Howl({src:['audio/g-key.wav']})},
    'y' : {pressed: false, clip: new Howl({src:['audio/gsh-key.wav']})},
    'h' : {pressed: false, clip: new Howl({src:['audio/a-key.wav']})},
    'u' : {pressed: false, clip: new Howl({src:['audio/ash-key.wav']})},
    'j' : {pressed: false, clip: new Howl({src:['audio/b-key.wav']})},
    'k' : {pressed: false, clip: new Howl({src:['audio/hiC-key.wav']})}
}

// get the length of all keys in the obj
const keysArr = Object.keys(keyStatus);

// const soundsArr = Object.keys(soundList);

// for (let i = 0; i < keysArr.length; i++){
//     keyStatus[keysArr[i]].clip = soundList[soundsArr[i]];
// }

// check for any keydown event
window.addEventListener('keydown', keyDown);

// logic for keydown event 
function keyDown(evt){
    // check if recorded key is within the list of keys in keyStatus object
    if (keyStatus[evt.key]){
        // change pressed status to true if key matches
        keyStatus[evt.key].pressed = true;

        console.log(`keydown, ${evt.key} : ${keyStatus[evt.key].pressed}`);
    }

    // loop over each key stored in keyStatus object
    keysArr.forEach(function(key){
        // console.log(keyStatus[key]);

        // play clip if key matches
        if (keyStatus[key].pressed){
            keyStatus[key].clip.play();
            
            // add the class of active to the key which has been pressed down
            /* !Note:
            keysArr = array of keys from the keyStatus obj
            keysArr.indexOf(key) returns the index of which key is pressed 
            keys is our nodelist of DOM elements with the class of key
            basically keys[index].classList to simplify */
            keys[keysArr.indexOf(key)].classList.add('active');
        }
    });
}

window.addEventListener('keyup', keyUp);

function keyUp(evt){
    if (keyStatus[evt.key]){
        // change status of pressed to false if keyup detected for list of specified keys
        keyStatus[evt.key].pressed = false;
        // remove class of active on keyup event
        keys[keysArr.indexOf(evt.key)].classList.remove('active');
        // console.log(`keup, ${evt.keyCode} : ${keyStatus[evt.keyCode].pressed}`);
    }
}
