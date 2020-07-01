//-----------pwd----------//
const errorList = {
  unrecogCommand: 'Error: command not recognized'
};

const responses = {
  whoami: 'This is aryant',
  help: 'help',
  repo: 'repositries',
  about: 'about me',
  projects: 'my projects',
  skills: 'my skills',
  contact: 'contact',
  resume: 'cv/resume'

};

var commands = {};
var commands = {
  whoami: function () {
    return (responses.whoami)
  },
  help: function () {
    return (responses.help);
  },

  repo: function () {
    return (responses.repo);
  },

  about: function () {
    return (responses.about);
  },

  projects: function () {
    return (responses.projects);
  },

  skills: function () {
    return (responses.skills);
  },

  contact: function () {
    return (responses.contact);
  },

  resume: function () {
    downloadURI(
      "Curriculum Vitae (web).pdf",
      "Curriculum Vitae.pdf"
    );
  },

};
//-----------pwd----------//


//-----------ls----------//

//-----------ls----------//
var newlinePrompt = function (param) {
  const newPrompt = param.parentNode.cloneNode(true);
  param.setAttribute('contenteditable', false);

  if (this.param) {
    newPrompt.querySelector('.prompt').textContent = this.param;
  }

  document.getElementById('terminal').appendChild(newPrompt);
  newPrompt.querySelector('.input').innerHTML = '';
  newPrompt.querySelector('.input').focus();
};

var runCommand = function (cmd, args) {
  if (args) {
    var command = `${cmd} ${args}`
  } else {
    var command = cmd
  }
  const output = commands[cmd](args);
  if (output) {
    document.getElementById('terminal').innerHTML += output;
  }
};
var clearall = function () {

  $('#terminal').html(
    `<p class="hidden">
        <span class="prompt">
          <span class="root">root</span>
          <span class="tick">$</span>
        </span>
        <span contenteditable="true" class="input"></span>
      </p>`,
  );

  $('.input').focus();
};

//-----------help----------//

//-----------help----------//


//-----------BUTTONS----------//

var green = function () {
  $('.button.green').click(() => {
    $('.terminal-window').toggleClass('fullscreen');
  });
};


var yellow = function () {
  $('.button.yellow').click(() => {
    $('.terminal-window').toggleClass('minimized');
  });
};

var red = function () {
  $('.button.red').click(() => {
    //$('.terminal-window').toggleClass('fullscreen');
  });
};

var glow = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

//-----------BUTTONS----------//


$(document).ready(function () {
  green();
  yellow();
  red();
  $('#terminal').mouseup(() => $('.input').last().focus());
  $('.input').focus();
  document.getElementById('terminal').addEventListener('keypress', (evt) => {


    if (evt.keyCode === 13) {
      const prompt_input = evt.target;
      const input = prompt_input.textContent.trim().split(' ');
      const cmd = input[0].toLowerCase();
      const args = input[1];

      if (cmd === 'clear') {
        document.getElementById('terminal').innerHTML += 'command recognized'
        clearall();
      } else if (cmd in commands) {
        runCommand(cmd, args);
        newlinePrompt(prompt_input);
      } else {
        document.getElementById('terminal').innerHTML += glow(errorList.unrecogCommand);
        newlinePrompt(prompt_input);
      }

    }
  });

});