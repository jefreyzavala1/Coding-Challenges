/* Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0. */

function countRedBeads(n) {
  //p:n representing the number of sets of blue beads which always be a positive integer

  //r:will return the number of sets of reds beads?

  //e: n = 3, bbrrbbrrbb =>4 red
  //   n = 5, bbrrbbrrbbrrbbrrbb => 8reds

  //p: will need to have a blue bead string  of two as well
  // as red bead of length of two

  let blue = "bb";
  let red = "rr";

  let count = -1;
  if (n < 1) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    count++;
  }

  return red.length * count;
}

console.log(countRedBeads(0));//0
console.log(countRedBeads(3));//4
console.log(countRedBeads(5));//8
