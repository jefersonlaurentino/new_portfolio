import { ContextApiSkillProvider } from "@/contexts/ApiSkill";
import { ReactNode } from "react";

export default function Providers({children}:{children:ReactNode}) {
    return(
        <>
            <ContextApiSkillProvider>
                { children }
            </ContextApiSkillProvider>
        </>
    )
}