// You want to see if two strings match, while treating uppercase and lowercase letters as the same.

const a = "hello";
const b = "HELLO";

if(a.localeCompare(b, undefined, {sensitivity:"accent"}) === 0){
  console.log("We ended up here because the case sensitive strings match")
}
