/**
 * React / Frontity dependencies
 */
import PropTypes from "prop-types";
import React from "react";

/**
 * Internal dependencies
 */
import readingStats from "./ReadingStats";

/**
 * Estimates the Reading Time
 *
 * According to Medium, people read about 200 words per minute. Medium also adds 12 seconds for each inline image.
 *
 * Reference: https://medium.com/@nadeem4uwebtech/how-to-add-reading-time-in-wordpress-without-using-plugin-d2e8af7b1239
 */
const ReadingTime = ({
  theContent,
  wordsPerMinute = 200,
  imagesPerMinute = 5,
  className,
}) => {
  //   const stats = readingTime(theContent, options);
  const stats = readingStats(theContent, wordsPerMinute, imagesPerMinute);
  return <span className={className}>{`${stats.text}`}</span>;
};

ReadingTime.propTypes = {
  /**
   *  the_content of the WordPress Post.
   */
  theContent: PropTypes.string.isRequired,

  /**
   *  Words Per Minute read
   */
  wordsPerMinute: PropTypes.number,

  /**
   * Images per min viewed
   */
  imagesPerMinute: PropTypes.number,

  /**
   * Optional className for css
   */
  className: PropTypes.string,
};

export default ReadingTime;
