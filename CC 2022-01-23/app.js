/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //p: will it always be a string ? will i have to take into account lower and uppercase()
  //r: will return a string with T being replaced by U
  //GCAT => 'GCAU'
  //p:  can use replaceALL to replace 'T' with 'U?NO i can store string into an array
  //and check each indivual char using forEach() then compare 'T'if true then replace it with 'U
  //use join then return string

  dna = dna.split("");
  dna.forEach((char, index) => {
    if (char == "T") {
      dna[index] = "U";
    }
  });
  return dna.join("");
}
