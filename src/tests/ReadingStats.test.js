/**
 * Internal dependencies
 */
import readingStats from "../ReadingStats";

import html23 from "./data/23";
// import html42 from "./data/42";
// import html60 from "./data/60";

describe("My Test Suite", () => {
  it("Test Blog Frontity 23", () => {
    const stats = readingStats(html23.rendered);
    console.log(stats);
    expect(stats.words).toEqual(422);
    expect(stats.images).toEqual(2);
  });
});
