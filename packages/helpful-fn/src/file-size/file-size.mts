const BYTES_PER_KIBIBYTE = BigInt("1024");
const BYTES_PER_MEBIBYTE = BigInt("1048576"); // 1024 ^ 2
const BYTES_PER_GIBIBYTE = BigInt("1073741824"); // 1024 ^ 3
const BYTES_PER_TEBIBYTE = BigInt("1099511627776"); // 1024 ^ 4
const BYTES_PER_PEBIBYTE = BigInt("1125899906842624"); // 1024 ^ 5

type BigNumber = number | bigint | string;

function bytes(bytesPerUnit: bigint, amount: BigNumber) {
  return bytesPerUnit * BigInt(amount);
}

/**
 * Returns the total number of bytes for the wanted amount of kibibytes.
 *
 * A kibibyte is 1024 bytes.
 *
 * @param amount -
 *        The total number of kibibytes to convert to bytes.
 *
 * @returns
 *        The total number of bytes in the given amount of kibibytes.
 */
export const kibibytes: (amount: BigNumber) => bigint = bytes.bind(
  null,
  BYTES_PER_KIBIBYTE,
);
/**
 * @see {@link kibibytes}
 */
export const kib = kibibytes;

/**
 * Returns the total number of bytes for the wanted number of mebibytes.
 *
 * A mebibyte is 1024 kibibytes.
 *
 * @param amount -
 *        The total amount of mebibytes to convert to bytes.
 *
 * @returns
 *        The total number of bytes in the given amount of mebibytes.
 */
export const mebibytes: (amount: BigNumber) => bigint = bytes.bind(
  null,
  BYTES_PER_MEBIBYTE,
);
/**
 * @see {@link mebibytes}
 */
export const mib = mebibytes;

/**
 * Returns the total number of bytes for the wanted number of gibibytes.
 *
 * A gibibyte is 1024 mebibytes.
 *
 * @param amount -
 *        The total amount of gibibytes to convert to bytes.
 *
 * @returns
 *        The total number of bytes in the given amount of gibibytes.
 */
export const gibibytes: (amount: BigNumber) => bigint = bytes.bind(
  null,
  BYTES_PER_GIBIBYTE,
);
/**
 * @see {@link gibibytes}
 */
export const gib = gibibytes;

/**
 * Returns the total number of bytes for the wanted number of tebibytes.
 *
 * A tebibyte is 1024 gibibytes.
 *
 * @param amount -
 *        The total amount of tebibytes to convert to bytes.
 *
 * @returns
 *        The total number of bytes in the given amount of tebibytes.
 */
export const tebibytes: (amount: BigNumber) => bigint = bytes.bind(
  null,
  BYTES_PER_TEBIBYTE,
);
/**
 * @see {@link tebibytes}
 */
export const tib = tebibytes;

/**
 * Returns the total number of bytes for the wanted number of pebibytes.
 *
 * A pebibytes is 1024 tebibytes.
 *
 * @param amount -
 *        The total amount of pebibytes to convert to bytes.
 *
 * @returns
 *        The total number of bytes in the given amount of pebibytes.
 */
export const pebibytes: (amount: BigNumber) => bigint = bytes.bind(
  null,
  BYTES_PER_PEBIBYTE,
);
/**
 * @see {@link pebibytes}
 */
export const pib = pebibytes;
