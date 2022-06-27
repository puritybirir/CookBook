/**
 * You want to insert an extended Unicode character that has a 4-byte encoding,
 * like an emoji or certain types of accented non-English letters.
 *
 * */


 const hamburger = '🍔';
 const hamburgerStory = 'I like hamburgers ' + hamburger;
 const hamburgerStory2 = 'I like hamburgers ' + String.fromCodePoint(0x1F354);

 console.log(hamburgerStory);
 console.log(hamburgerStory2);


