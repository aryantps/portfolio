//-----------pwd----------//
var fs = {
    'projects': {
        'baz.txt': 'Hello this is file baz.txt',
        'quux.txt': "Lorem Ispum (quux.txt)",
        'foo.txt': "Hello, World!",
        'bar.txt': "Wellcome to the bar",
        "terminal": {
            "foo": {
                "bar.txt": "hello bar",
                "baz.txt": "baz content"
            }
        }
    }
  };
  var path = [];
  var pwd = fs;
  

//-----------pwd----------//


//-----------ls----------//

//-----------ls----------//


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

//-----------BUTTONS----------//


$(document).ready(function () {
  green();
  yellow();
  red();
  
    
});