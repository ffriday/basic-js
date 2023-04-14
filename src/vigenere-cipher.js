const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(m = true){
    this.l = 26;
    this.ABC = Array.from(Array(this.l))
               .map((e, i) => i + 65)
               .map((x) => String.fromCharCode(x));
    m ? this.mode = m : this.mode = false;
  }

  encrypt(str, code) {
    let acc = '';
    if(!str || !code){
      throw new Error('Incorrect arguments!');
    }
    str = this.prepareStr(str);
    code = this.prepareCode(code, str.length);

    let i = 0, j = 0;
    while(i < str.length){
      if(this.ABC.includes(str[i])){
        acc += this.encChar(str[i], code[j])
        i++; j++;
      } else {
        acc += str[i];
        i++;
      }
    }
    return acc;
  }
  decrypt(str, code) {
    let acc = '';
    if(!str || !code){
      throw new Error('Incorrect arguments!');
    }
    str = this.prepareStr(str);
    code = this.prepareCode(code, str.length);

    let i = 0, j = 0;
    while(i < str.length){
      if(this.ABC.includes(str[i])){
        acc += this.decChar(str[i], code[j])
        i++; j++;
      } else {
        acc += str[i];
        i++;
      }
    }
    return acc;
  }

  prepareStr(str){
    str = str.toUpperCase();
    !this.mode ? str = str.split('').reverse().join(''): '';
    return str;
  }

  prepareCode(code, len){
    code = code.toUpperCase();
    while(code.length < len){
      code += code
    }
    return code.slice(0, len);
  }

  encChar(valCh, codeCh) {
    let r = (this.ABC.indexOf(valCh) + this.ABC.indexOf(codeCh))%this.l;
    r = this.ABC[r];
    return r;
  }

  decChar(valCh, codeCh) {
    let r = (this.ABC.indexOf(valCh) - this.ABC.indexOf(codeCh))%this.l;
    r < 0 ? r = r + this.l : '';
    r = this.ABC[r];
    return r;
  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
//console.log(directMachine.encrypt());