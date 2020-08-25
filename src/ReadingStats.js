export default function (text, wordsPerMinute = 200, imagesPerMinute = 5) {
  if (text == undefined) {
    return {
      text: "0 mins",
      minutes: 0,
      time: 0,
      words: 0,
      images: 0,
    };
  }

  let words = 0,
    start = 0,
    end = text.length - 1,
    wordBound,
    i;

  const ansiWordBound = (c) => {
    return " " === c || "\n" === c || "\r" === c || "\t" === c;
  };
  // https://repl.it/repls/CalculatingClearcutRuntimeerror
  const imageCount = (the_content) => {
    const re = /<([img]+)(?=[\s>])(?:[^>=]|='[^']*'|="[^"]*"|=[^'"\s]*)*\s?\/?>/gi;
    let m;
    let hashTable = {};
    do {
      // conduct the match
      m = re.exec(the_content);

      // verify the match was successful
      if (m) {
        // verify the HashTable has an entry for the found tag name
        if (!(m[1] in hashTable)) {
          // no entry was found so we'll add the entry for this tag name and count it as zero
          hashTable[m[1]] = 0;
        } // end if

        // increment the tag name counter
        hashTable[m[1]]++;
      } // end if
    } while (m);

    return hashTable.img;
  };

  // use provided function if available
  wordBound = ansiWordBound;

  // fetch bounds
  while (wordBound(text[start])) start++;
  while (wordBound(text[end])) end--;

  // calculate the number of words
  for (i = start; i <= end; ) {
    for (; i <= end && !wordBound(text[i]); i++);
    words++;
    for (; i <= end && wordBound(text[i]); i++);
  }

  // reading time stats
  const images = imageCount(text);

  const minutes = words / wordsPerMinute + images / imagesPerMinute;
  const time = minutes * 60 * 1000;
  var displayed = Math.ceil(Number(minutes.toFixed(2)));

  return {
    text: displayed + (minutes == 1 ? " min read" : " mins read"),
    minutes,
    time,
    words,
    images,
  };
}
