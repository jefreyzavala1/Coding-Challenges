/* There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

For some reason people choose a chair in the following way

Find a place as far from other people as possible
Find a place as close to exit as possible
All chairs must be occupied before the first person will be served

So it looks like this for 10 chairs and 10 patients

Chairs	1	2	3	4	5	6	7	8	9	10
Patients	1	7	5	8	3	9	4	6	10	2
Your task is to find last patient's chair's number.

Input: number of chairs N, an integer greater than 2.
Output: a positive integer, the last patient's chair number. */

function lastChair(N) {
  //p:numbers 1-10?numbers represent patients chair position

  //r: last'patients chair's number

  //e:10==9 is the chair number

  //p:for each elemet i have to track the max distance between each other when found insert element math.floor(max/2)
  //need to variable begging paetient and last patient then calculate whose farther
  //first will insert first and last patients in array;

  return N - 1;
}
