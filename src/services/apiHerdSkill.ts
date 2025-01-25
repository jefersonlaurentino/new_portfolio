const apiSkills = async () => {
    try {
        const response = await fetch('./Api/data/herdSkill.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Erro ao buscar dados da API ', error);
    }
}

const callApiSkills = async () => {
    const data:ApiHerdSkill[] = await apiSkills();
    return data;
};

export type ApiHerdSkill = {
    id: number;
    title: string;
    imagem: string;
}

export default callApiSkills;