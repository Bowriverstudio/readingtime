/**
 * Internal dependencies
 */
import readingStats from "../ReadingStats";
import html23 from "./data/23";
import html42 from "./data/42";
import html60 from "./data/60";

describe("My Test Suite", () => {
  it("Test Blog Frontity 23", () => {
    const stats = readingStats(html23.rendered);
    expect(stats.words).toEqual(422);
    expect(stats.images).toEqual(2);
  });

  it("Test Blog Frontity 42", () => {
    const stats = readingStats(html42.rendered);
    expect(stats.words).toEqual(260);
    expect(stats.images).toEqual(2);
  });

  it("Test Blog Frontity Null", () => {
    const stats = readingStats(null);
    expect(stats.words).toEqual(0);
    expect(stats.images).toEqual(0);
  });

  it("Test Blog Frontity 60", () => {
    const stats = readingStats(html60.rendered);
    expect(stats.words).toEqual(352);
    expect(stats.images).toEqual(1);
  });

  it("Test Images speed", () => {
    const stats = readingStats(html60.rendered, 200, 1);
    expect(stats.words).toEqual(352);
    expect(stats.images).toEqual(1);

    //352/200 = 1.76 + 1 (image) = 2.76
    expect(stats.minutes).toEqual(2.76);
    console.log(stats);
  });

  it("Test Reading speed", () => {
    const stats = readingStats(html60.rendered, 352, 1);
    expect(stats.words).toEqual(352);
    expect(stats.images).toEqual(1);

    //352/352 = 1 + 1 (image) = 2
    expect(stats.minutes).toEqual(2);
  });
});
