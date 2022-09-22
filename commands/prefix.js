
module.exports = ({
    name: "prefix",
    aliases: ['setprefix', 'changeprefix'],
    category: "other",
    description: "Change Bot Prefix",
    code: `
    $setServerVar[prefix;$message]
    $title[Prefix]
    $description[Prefix changed to **$message**]
    $color[1;$getVar[color]]
    $footer[Made by 💖 Japneet]
    $onlyIf[$message!=;Write something!]
    $onlyForIDs[923721183248150588;]`
})