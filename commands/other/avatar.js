module.exports = [{
  name: "avatar",
  usage: "avatar <user>",
  category: "other",
  description: "Displays the avatar",
  aliases: ["av", "pfp"],
  code: `
$title[1;$user]
$color[1;$getVar[color]]
$addField[1;Download Link;
$replaceText[$replaceText[$checkContains[$get[av];.gif];true;[GIF]($get[av])];false;[PNG]($replaceText[$replaceText[$get[av];.jpg;.png];.webp;.png]) | [JPG]($replaceText[$replaceText[$get[av];.png;.jpg];.webp;.jpg]) | [WEBP]($replaceText[$replaceText[$get[av];.jpg;.webp];.png;.webp])]
$image[1;$get[av]]
$footer[1;$userTag[$findUser[$message;yes]];$get[av]]
$onlyIf[$checkContains[$get[av];https://cdn.discordapp.com/embed/avatars/]==false;{newEmbed: {description:❌ **$userTag[$findUser[$message;yes]]** don't have avatar}{color:$getVar[errorcolor]}{title:Bruh}{thumbnail:$get[av]}}]
$let[av;$userAvatar[$findUser[$message;yes]]]
`
}]