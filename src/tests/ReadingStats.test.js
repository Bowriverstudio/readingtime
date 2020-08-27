/**
 * Internal dependencies
 */
import readingStats from "../ReadingStats";

import html23 from "./data/23";
import html42 from "./data/42";
// import html60 from "./data/60";

describe("My Test Suite", () => {
  it("Test Blog Frontity 23", () => {
    const stats = readingStats(html23.rendered);
    expect(stats.words).toEqual(422);
    expect(stats.images).toEqual(2);
  });

  it("Test Blog Frontity 42", () => {
    const stats = readingStats(html42.rendered);
    console.log(stats);

    // var img_sources = jsdom.env(html42.rendered, function (errors, window) {
    //   var imgs = window.document.getElementsByTagName("img");
    //   for (var i = 0; i < imgs.length; i++) {
    //     var src = imgs[i].getAttribute("src");
    //     if (src) console.log(src);
    //   }
    // });

    expect(stats.words).toEqual(260);
    expect(stats.images).toEqual(2);
  });

  it("Test Blog Frontity 42", () => {
    const stats = readingStats(null);
    console.log(stats);

    // var img_sources = jsdom.env(html42.rendered, function (errors, window) {
    //   var imgs = window.document.getElementsByTagName("img");
    //   for (var i = 0; i < imgs.length; i++) {
    //     var src = imgs[i].getAttribute("src");
    //     if (src) console.log(src);
    //   }
    // });

    expect(stats.words).toEqual(0);
    expect(stats.images).toEqual(0);
  });
});
