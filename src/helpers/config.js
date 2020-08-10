const isDev = process.env.NODE_ENV === "development";

const userAgent =
  "Mozilla/5.0 (Macintosh; ; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36";

const signInURL = "https://piloterr.com/login";

const osPlatform = process.platform;

module.exports = {
  isDev,
  userAgent,
  signInURL,
  osPlatform,
};
