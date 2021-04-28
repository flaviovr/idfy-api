// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    console.log(req.method);
    if (req.method == "POST")
        return res.status(405).json({
            ok: false,
            data: false,
            error: {
                message: "Método invalido para essa URL",
                validation: false,
            },
        });
    res.status(200).json({
        ok: true,
        data: {
            description: "teste de descrição",
        },
    });
};
