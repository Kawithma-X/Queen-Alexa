/* Code by (C) 2022 ChamodKeshan - Queen Alexa.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ChamodKeshan - Alexa Team
*/

function successfullMessage(msg) {
    return "👩‍🦰 *QUEEN ALEXA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🚀 *QUEEN ALEXA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🤖 *QUEEN ALEXA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
