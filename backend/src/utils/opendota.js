const request = require('request');
const openDotaUrl = require('./constants').openDotaUrl;

/**
 * Get match details using match ID.
 * @param {string} id Match ID.
 * @return {object} Match details.
 */
function getMatchDetails(id) {
  const getMatchUrl = `${openDotaUrl}/matches/${id}`;
  let responseBody;
  request(getMatchUrl, function(error, response, body) {
    if (body !== null) {
      responseBody = body;
    }
    console.error('error:', error);
    console.error('response:', body);
    console.log('statusCode:', response && response.statusCode);
  });
  return responseBody;
}

/**
 * Adds two numbers together.
 * @param {string} id Match ID.
 * @return {object} Match details.
 */
function getLeagueDetails(id) {
  const getMatchUrl = `${openDotaUrl}/leagues/${id}`;
  request(getMatchUrl, function(error, response, body) {
    console.error('error:', error);
    // console.log('body', body);
    console.log('statusCode:', response && response.statusCode);
    return body;
  });
}

module.exports = {
  getMatchDetails,
  getLeagueDetails,
};
