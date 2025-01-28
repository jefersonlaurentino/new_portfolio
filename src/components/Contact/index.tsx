'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import './style.css';
import AnimacaoContact from './animationConatact'
import { enviar } from "./submitMail";
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { XCircle } from "lucide-react";


const schama = z.object({
    name: z.string().min(3, 'minimo 3 caracteres').max(50, 'máximo 50 caracteres'),
    mail: z.string().email({message: 'E-mail Inválido'}),
    fone: z.string().optional().refine((value) => {
        if (!value) return true;
        const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        return phoneRegex.test(value || '');
    }, { message: 'Telefone inválido' }),
    msg: z.string().min(1, 'mensagem obrigatória').max(1000, 'mensagem muito longa')
})

export type Schema = z.infer<typeof schama>


export default function Contact() {
    const [ sendingForm , setSendingFrom ] = useState(false)
    const [ msgSending , setMsgSending ] = useState<{message: string, success: boolean} | null>(null)

    const { register , handleSubmit , reset , setValue, formState:{ errors } } = useForm<Schema>({
        resolver: zodResolver(schama),
    });
    
    const submit = async (data: Schema) =>{
        setSendingFrom(true)
        const resposta = await enviar(data)
        setMsgSending(resposta)
        reset()
        setSendingFrom(false)
    }

    useEffect(()=>{
        if(msgSending != null){
            setTimeout(()=>{
                setMsgSending(null)
            }, 3000)
        }
    },[msgSending])

    return(
        <>
        <section id="contact" className="contact">
            <h4>Fale <span>comigo</span></h4>
            <form onSubmit={handleSubmit(submit)}>
                <div className="campos">
                    <div className="campo">
                        <label htmlFor="name" className="sr-only">Nome</label>
                        <input 
                            type="text" 
                            id="name"
                            {...register('name')}
                            placeholder="Nome"
                        />
                        <p>{errors.name && errors.name.message}</p>
                    </div>
                    <div className="campo">
                        <label htmlFor="fone" className="sr-only">Telefone</label>
                        <input 
                            type="text" 
                            id="fone"
                            {...register('fone')}
                            placeholder="Telefone (Opcional)"
                            maxLength={15}
                            onChange={(value)=>{
                                let phone = value.currentTarget.value.replace(/\D/g,'');
                                phone = phone.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2')
                                setValue('fone', phone)
                            }}
                        />
                        <p>{errors.fone && errors.fone.message }</p>
                    </div>
                </div>
                <div className="campo">
                    <label htmlFor="mail" className="sr-only">Email</label>
                    <input 
                        type="text" 
                        id="mail"
                        {...register('mail')}
                        placeholder="E-mail"
                        />
                    <p>{errors.mail && errors.mail.message}</p>
                </div>
                <div className="campo">
                    <textarea id="" 
                        {...register("msg")} 
                        placeholder="Sua mensagem..."
                    ></textarea>
                    <p>{errors.msg && errors.msg.message}</p>
                </div>
                <div className="flex justify-center">
                    {
                        !sendingForm?
                            <button type="submit">Enviar</button>
                            :
                            <Button disabled className="w-11/12">
                                <Loader2 className="animate-spin" />
                                Enviando...
                            </Button>
                    }
                </div>
            </form>
        </section>

        {/* alerta de envio */}
            {
                msgSending != null && (
                    msgSending.success?
                    <section className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center animation__alert">
                        <article className="bg-white text-black p-4 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center border-green-600 border">
                            <CheckCircle className=" text-green-600"/>
                            <h1>Enviado com sucesso!</h1>
                        </article>
                    </section>
                    :
                    <section className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center animation__alert">
                        <article className="bg-white text-black p-4 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center border-red-600 border">
                            <XCircle className=" text-red-600"/>
                            <h1>Erro ao Enviado!</h1>
                        </article>
                    </section>
                )
            }
        <AnimacaoContact/>
        </>
    )
}