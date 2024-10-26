const zod = require("zod");

const todoZod = zod.object({
    title:zod.string(),
    description:zod.string(),
    isComplete:zod.boolean(),
})

module.exports = todoZod;