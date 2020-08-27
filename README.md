# readingtime

This package calculates the estimated reading time based on Medium's algorithm. 200 words per min plus 12 seconds per image.

The output is a simple react component.

## Installation

```bash
npm i @bowriverstudio/readingtime
```

## Sample Usage

```js
import ReadingTime from "@bowriverstudio/readingtime";
```

```jsx
<ReadingTime theContent={post.content.rendered}></ReadingTime>
```

```jsx
<ReadingTime
  theContent={post.content.rendered}
  wordsPerMinute="100"
></ReadingTime>
```
