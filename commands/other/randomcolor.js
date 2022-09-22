module.exports = ({
name: "randomcolor",
code: `$title[Random Color]
$addField[1;Name;$jsonRequest[https://api.popcat.xyz/randomcolor;name;yes]]
$thumbnail[$jsonRequest[https://api.popcat.xyz/randomcolor;image;yes]
$addField[1;Hex Code;#$jsonRequest[https://api.popcat.xyz/randomcolor;hex;an error occurs to fetch data from api]]
$color[$jsonRequest[https://api.popcat.xyz/randomcolor;hex;yes]]`
})
