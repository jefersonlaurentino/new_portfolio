const apiProjects = async() => {
    try {
        const response = await fetch('./Api/data/projects.json')
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Erro ao buscar dados da API ', error);
    }
}

const callApiProjects = async() => {
    const data:ApiProjects[] = await apiProjects();
    return data;
}

export type ApiProjects = {
    id: number;
    title: string;
    lings: string[];
    description: string | description[];
    Highlighted?: boolean;
    complited: boolean; 
    imagem?: string;
    repositorio: string;
    deploy: string;
}

type description = {
    id: number,
    text: string,
    img: string,
}

export default callApiProjects;