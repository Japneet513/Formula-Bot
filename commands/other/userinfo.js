module.exports = {
  name: "userinfo",
  aliases: "whois",
  category: "other",
  description: "Use this for user info",
  code: `  $color[1;$userRoleColor[$findUser[$message;yes]]]
  $author[1;$userTag[$findUser[$message]];$userAvatar[$findUser[$message]]]
  $thumbnail[1;$userAvatar[$findUser[$message;yes]]]
  $addTimestamp[1]
  $description[1;
  $addField[1;Server information;> **Nickname:** $if[$nickname[$findUser[$message;yes]]!=;$nickname[$findUser[$message;yes]];None]\n> **Joined:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message;yes];$guildID;ms];1000]]> (<t:$truncate[$divide[$memberJoinedDate[$findUser[$message;yes];$guildID;ms];1000]]:R>)\n> **Roles \[$sub[$userRolesCount[$findUser[$message]];1]\]:**$splitText[1]\n> **Permissions:** $if[$hasPerms[$guildID;$findUser[$message;yes];admin];Administrator;\`$userPerms[$findUser[$message;yes];, ]\`];no]
  $if[$charCount[$userRoles[$findUser[$message;yes];$guildID;mention;]]<1000;$textSplit[$userRoles[$findUser[$message;yes];$guildID;mention;];@everyone];$textSplit[Too many roles to show, ;, ]]
  $addField[1;Activity information;> **Status:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message]];dnd;Do Not Disturb;1];online;Online;1];invisible;Invisible;1];idle;Idle;1];offline;Offline;1]\n> **Custom status:** $replaceText[$getCustomStatus[$findUser[$message];$guildID;state];none;None;1]\n> **Current activity:** $if[$activity[$guildID;$findUser[$message;yes]]!=none;$activity[$guildID;$findUser[$message;yes]];None];yes]
  $addField[1;General information   ;> **Tag:** $userTag[$findUser[$message;yes]]\n> **Avatar:** [Click here!]($userAvatar[$findUser[$message]] 'Avatar')\n> **Created:** <t:$truncate[$divide[$creationDate[$findUser[$message;yes];ms];1000]]> (<t:$truncate[$divide[$creationDate[$findUser[$message;yes];ms];1000]]:R>);yes]
  <@!$findUser[$message;yes]>]
  $footer[1;ID: $findUser[$message;yes]]`
}