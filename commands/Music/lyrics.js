module.exports = {
name: "lyrics",
code: `$argsCheck[>2;you must provide a proper song name]
$author[1;$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;artist;could]]
$thumbnail[$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;image;could]]
$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;error;could]
$title[$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;title;could]]
$description[>>> $jsonRequest[https://api.popcat.xyz/lyrics?song=$message;lyrics;could not find correct lyrics]]
$color[$getVar[color]]
$suppressErrors[An error occur error while making request from api or this lyrics not available in database.]`
}