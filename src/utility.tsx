/**
 * @author Deep Sheth <djsdeep@gmail.com>
 *
 * This utility class helps format the sum of all columns
 */

const NUM_LABELS = {
  BILLION: 1000000000,
  MILLION: 1000000,
  THOUSAND: 1000
};

// Number of digits (not decimals) sum field must always display
const FIXED_SUM_DIGITS = 3;

/**
 *  Abbreviates number to a fixed number of digits
 * @param num Any positive or negative integer
 */
export function abbrNum(num: number) {
  // Converts the number to be positive
  const sum = Math.abs(num);
  let res = sum.toString();

  // Divides numbers in order to abbrevate and round their value
  if (sum >= NUM_LABELS.BILLION) {
    res = truncate(sum / NUM_LABELS.BILLION, "B");
  } else if (sum >= NUM_LABELS.MILLION) {
    res = truncate(sum / NUM_LABELS.MILLION, "M");
  } else if (sum >= NUM_LABELS.THOUSAND) {
    res = truncate(sum / NUM_LABELS.THOUSAND, "K");
  } else {
    // Numbers < 1000 have no unit
    res = truncate(sum, "");
  }

  if (num < 0) {
    res = "-" + res;
  }

  return res;
}

/**
 *  Manipulate a float to contain exactly the number of digits specified by FIXED_SUM_DIGITS
 *
 *  For example if FIXED_SUM_DIGITS = 3:
 *  Rounds number to have exactly 2 decimals, resulting in at least a 3 digit number. Although the number needs 3 digits,
 *  the deciaml can increase the string length by one. We truncate the number to exactly 4 characters and remove unecessary decimals
 * @param num Positive integer or decimal
 * @param suffix Value to append to returned value
 */
let truncate = (num: number, suffix: string) => {
  // Appends decimals to ensure its length is >= FIXED_SUM_DIGITS
  const roundTo2Decimals = Number(num).toFixed(FIXED_SUM_DIGITS - 1);
  let numTo3Digits: string;

  // Depending on if the number contains a decimal point or not, the number is manipulated
  // to be exactly equal to FIXED_SUM_DIGITS
  if (
    roundTo2Decimals.charAt(FIXED_SUM_DIGITS) === "." ||
    roundTo2Decimals.split(".")[0].length > 3
  ) {
    numTo3Digits = roundTo2Decimals.slice(0, FIXED_SUM_DIGITS);
  } else {
    numTo3Digits = roundTo2Decimals.slice(0, FIXED_SUM_DIGITS + 1);
  }

  return numTo3Digits + suffix;
};
