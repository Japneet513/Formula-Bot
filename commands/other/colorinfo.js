module.exports = ({
name: "colorinfo",
code: `$title[Color Info]
$addField[1;Brightened;$jsonRequest[https://api.popcat.xyz/color/$message;brightened;yes]
$addField[1;Name;$jsonRequest[https://api.popcat.xyz/color/$message;name;yes]]
$thumbnail[$jsonRequest[https://api.popcat.xyz/color/$message;color_image;yes]
$addField[1;Rgb;$jsonRequest[https://api.popcat.xyz/color/$message;rgb;yes]]
$addField[1;Hex Code;$jsonRequest[https://api.popcat.xyz/color/$message;hex;an error occurs to fetch data from api]]
$color[$jsonRequest[https://api.popcat.xyz/color/$message;hex;yes]]`
})
