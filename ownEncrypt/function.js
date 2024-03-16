 // Define your own key mapping
 const encryptionKey = {
    'a': 'kadnjdjf', 'b': 'slqwotuw', 'c': 'oqieurnc', 'd': 'msjfnfer', 'e': 'pmnvrind',
    'f': 'qorujgrl', 'g': 'lksdjfnc', 'h': 'nfdhguwt', 'i': 'jngfhqpr', 'j': 'vfijhewo',
    'k': 'neruitgh', 'l': 'vpowirqd', 'm': 'pwiyrksd', 'n': 'piuhqwem', 'o': 'owuiqner',
    'p': 'wirunmse', 'q': 'wiurhjnv', 'r': 'spiuqern', 's': 'wpwqoinc', 't': 'sdoiufnw',
    'u': 'qowjfnse', 'v': 'xoiqwuem', 'w': 'wiuyqnco', 'x': 'fiudhwen', 'y': 'udniqwet',
    'z': 'pihqenwd', 'A': 'jbnf2D', 'B': 'rjbkTG', 'C': 'uev6gh', 'D': 'aiej3vbn',
    'E': 'JHIVCB9w', 'F': 'PKMfr[bkoe', 'G': 'FWOKn', 'H': '82732RHGUbw', 'I': '87RY13EVG',
    'J': 'Q}GE45Inj', 'K': 'EQO6B23Un', 'L': '7VPO2IRQD', 'M': '}{WFlp546lpvl', 'N': 'EV24lk',
    'O': 'EBA214kmi', 'P': 'VIHb26983', 'Q': 'BBROejin', 'R': 'QbeIN', 'S': 'bJNJE',
    'T': 'egbvD5443NM', 'U': 'uyefvbey', 'V': '}qevu', 'W': 'qyxVBC', 'X': 'j*!ql',
    'Y': 'bvrjwqd9', 'Z': '*fh3FF', ' ': '_',

    '!': '@', '#': '$', '%': '^', '&': '*', '(': ')', ')': '(', '_': '-', '+': '=', '[': '{',
    ']': '}', '{': '[', '}': ']', ':': ';', '"': "'", '<': '>', '>': '<', ',': '.', '.': ',',
    '/': '\\', '?': '`', '~': '|', '@': '!'
};

// Reverse the key to create a decryption key
const decryptionKey = {};
for (let char in encryptionKey) {
    decryptionKey[encryptionKey[char]] = char;
}

function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
        encryptedText += encryptionKey[inputText[i]] || inputText[i];
    }
    document.getElementById("encryptedOutput").innerText = encryptedText;
}

    function decrypt() {
        var encryptedText = document.getElementById("encryptedText").value;
        var decryptedText = "";
        var buffer = ""; 

        for (let i = 0; i < encryptedText.length; i++) {
            buffer += encryptedText[i];
            if (decryptionKey[buffer]) {
                decryptedText += decryptionKey[buffer];
                buffer = ""; 
            }
}
document.getElementById("decryptedOutput").innerText = decryptedText;
}

function clearAllTextareas() {
    var textareaIds = ['inputText', 'encryptedText'];
    textareaIds.forEach(function(id) {
        document.getElementById(id).value = "";
    });
    document.getElementById("encryptedOutput").innerText = "";
    document.getElementById("decryptedOutput").innerText = "";
}
