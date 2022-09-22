module.exports = {
name:"serverinfo",
aliases: ["ser","s"],
category: "other",
description: "Check your server info",
code: `$author[1;$serverName[$guildID];$serverIcon]
$description[1;$addField[1;> Server Icon;[Click here]($serverIcon);yes]
$addField[1;> Members;\`$membersCount\`;yes]
$addField[1;> Roles;\`$roleCount\`;yes]  
$addField[1;> Emojis;\`$emojiCount[$guildID]\`;yes]
$addField[1;> Voice Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_VOICE").size;yes]\`;yes]
$addField[1;> Text Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;yes]\`
;yes]
$addField[1;> Server ID;\`$guildID\`;yes]
$addField[1;> Creation date;\`$creationDate[$guildID;date]\`;yes]
$addField[1;> Owner;<@!$ownerID>;yes]
]
$addTimestamp[1]
$footer[1;Requested by $userTag]
$color[1;$getVar[color]]`
}