const obfuscator = (function() {

    function publicDecryptString(str, salt) {
        const saltLen = salt.length;
        const middleIndex = Math.floor((str.length - saltLen) / 2);
        let decryptedStr = '';
      
        for (let i = saltLen; i < str.length - saltLen; i++) {
          const charCode = str.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
            // uppercase letters
            decryptedStr += String.fromCharCode(((charCode - 65 - 5 + 26) % 26) + 65);
          } else if (charCode >= 97 && charCode <= 122) {
            // lowercase letters
            decryptedStr += String.fromCharCode(((charCode - 97 - 5 + 26) % 26) + 97);
          } else {
            // non-alphabetic characters
            decryptedStr += str.charAt(i);
          }
          if (i === middleIndex) {
            i += saltLen;
          }
        }
      
        return decryptedStr;
    }

    // Expose public variables and functions
    return {
        decryptString: publicDecryptString
    };

})();