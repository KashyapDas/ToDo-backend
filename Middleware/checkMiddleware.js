const todoZod = require("../AuthCheck/zod");

function correctTyped(req,res,next)
{
    const rawData = req.body;
    const response = todoZod.safeParse(rawData);
    if(!response.success)
    {
        res.json({
            msg:"Wrong Input",
            result:false,
        })
    }
    next();
}

module.exports = correctTyped;