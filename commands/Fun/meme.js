module.exports = {
  name: "meme",
  category: "fun",
  code: `$title[$jsonRequest[https://api.popcat.xyz/meme;title;error]]
$description[$image[$jsonRequest[https://api.popcat.xyz/meme;image;null]]]
$footer[Upvotes = $jsonRequest[https://api.popcat.xyz/meme;upvotes;error]]
$color[$getVar[color]]
`
}
