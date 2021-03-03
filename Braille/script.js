let sets = {
  ascii: " A1B'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=",
  dot6: "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿",
};

function converter(character) {
  let sign = undefined;

  for (let i = sets.ascii.length - 1; i >= 0; i--) {
    if (sets.ascii[i] == character) {
      sign = sets.dot6[i];
    }
  }

  return sign;
}

function convert(str) {
  let nstr = ""
  for(let i = 0; i < str.length; i++) {
    nstr += converter(str[i]) || "";
  }
  return nstr;
}

function braille() {
  let today = new Date().toString().slice(16, 24);
  document.getElementById("braille").innerHTML = convert(today);
}
setInterval(braille, 1000);
