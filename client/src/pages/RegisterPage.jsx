import React, { useEffect } from "react";
import {useForm} from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";




function RegisterPage() {
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  const {signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/reviews');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit( async (values)=> {
    signup(values);
  
  });

    return (
    <div className='bg-zinc-800 max-w w-full p-10 rounded-md flex h-[calc(100vh-100px)] items-center justify-center'>
       {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        
        <form onSubmit={onSubmit}>
            <input type="text" {...register('username', {required:true})} 
            className='w-full bg-zinc-700 text-orange-400 px-4 py-2 rounded-md my-2' placeholder="Nombre de usuario"/>
            {errors.username && (
                <p className="text-red-500">Se requiere el nombre de usuario</p>
            )}
            <input type="email" {...register('email', {required:true})} 
            className='w-full bg-zinc-700 text-orange-400 px-4 py-2 rounded-md my-2' placeholder="Correo electrónico"/>
             {errors.username && (
                <p className="text-red-500">Se requiere el correo electrónico</p>
            )}
            <input type="password" {...register('password', {required:true})} 
            className='w-full bg-zinc-700 text-orange-400 px-4 py-2 rounded-md my-2' placeholder="Contraseña"/>
             {errors.username && (
                <p className="text-red-500">Se requiere la contraseña</p>
            )}
            <button type='submit'> Registrarse </button>
        </form>

    </div>
  );
}

export default RegisterPage;