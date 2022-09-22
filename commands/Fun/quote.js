module.exports = {
  name: "quote",
  aliases: ["quote,Qu"],
  category: "fun",
  code: `$title[Here your quote:]
$description[$jsonRequest[https://api.popcat.xyz/quote;quote;could not find quote]]
$footer[Upvotes = $jsonRequest[https://api.popcat.xyz/quote;upvotes;could not find quote]]
$color[$getVar[color]]`
}
