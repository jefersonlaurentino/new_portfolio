import { ApiHerdSkill } from "@/services/apiHerdSkill";

// adiciona as imagens das skills que foram usadas no projeto
export const lingUseProject = (project: string[] , arrayApiSkill: ApiHerdSkill[]) => {
    return project.flatMap((ling) => {
        const lowerLing = ling.toLocaleLowerCase();
        return arrayApiSkill?.filter((skill) => skill.title.toLocaleLowerCase().includes(lowerLing));
    });
}