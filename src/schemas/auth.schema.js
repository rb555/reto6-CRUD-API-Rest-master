import { z } from "zod";

export const registerSchema = z.object({
    userName: z.string({
        required_error: 'Username requerido'
    }),
    email: z.string({required_error:'Email requerido'}).email({message:'Correo inválido'}),
    password: z.string({required_error: 'Contraseña requerida'}).min(8,{
        message: 'Se requieren al menos 8 caracteres'
    }),
});

export const loginSchema = z.object({
    email: z.string({required_error:'Email incorrecto'}).email({message:'Correo inválido'}),
    password: z.string({required_error: 'Contraseña incorrecta'}).min(8,{
        message: 'Se requieren al menos 8 caracteres'
    }),
});