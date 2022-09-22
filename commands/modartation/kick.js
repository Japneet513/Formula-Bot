module.exports = ({
    name: "kick",
    code: `
    $title[User has been kicked]
    $description[> $kick[$mentioned[1];$Server$guildID; Reasons to Kick: $noMentionMessage`]
})