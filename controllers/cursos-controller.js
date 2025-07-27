const cursos = ['FullStack', 'DevGames', 'FrontMaster'];

export const exibirTodos = (req, res) => {
    return res.json(cursos)
}

export const exibirUnico = (req, res) => {
    const { id } = req.params;

    return res.json(cursos[id])
}

export const criar = (req, res) => {
    const { name } = req.body; 
    cursos.push(name);

    return res.json(cursos);
}

export const atualiza = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    cursos[id] = name;
    return res.json(cursos);
}

export const deleta = (req, res) =>{ 
    const { id } = req.params;

    cursos.splice(id, 1);
    return res.json({ message: "O curso foi deletado" });
}