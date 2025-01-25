'use client'

import callApiSkills, { ApiHerdSkill } from "@/services/apiHerdSkill";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type propsApiSkills = {
    ApiSkills: ApiHerdSkill[] | null,
    setApiSkills: (value:ApiHerdSkill[])=> void,
}

const ContextApiSkills = createContext<propsApiSkills | null>(null)

const ContextApiSkillProvider = ({children}:{children:ReactNode}) => {
    const [ ApiSkills , setApiSkills ] = useState<ApiHerdSkill[] | null>(null)

    // faz o gsap receber as informações das medidas dos elementos para fazer as animações.
    
    const getApiSkills = async () => {
        const data = await callApiSkills()
        setApiSkills(data)
    }

    useEffect(()=>{
        getApiSkills()
    },[])

    return (
        <>
        <ContextApiSkills.Provider value={{ApiSkills , setApiSkills}}>
            { children }
        </ContextApiSkills.Provider>
        </>
    )
}

const useContextApiSkill = () => {
    const context = useContext(ContextApiSkills)
    if (!context) {
        throw new Error('Erro no context do dark-Mode')
    }
    return context;
}

export {
    ContextApiSkills,
    ContextApiSkillProvider,
    useContextApiSkill
}