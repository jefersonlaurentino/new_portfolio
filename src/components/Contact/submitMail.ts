const enviar = async (data: { name: string; mail: string; fone?: string; msg: string }) => {
    const { name, mail, fone, msg } = data;
    
    const emailData = {
        replyTo: mail,
        subject: 'Contato pelo portfólio',
        html: `<h1>Nome: ${name}</h1><h2>Telefone: ${fone}</h2><p>Mensagem: ${msg}</p>`,
    };
    
    const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
    });
    
    return response.json();
};


export {
    enviar
} 