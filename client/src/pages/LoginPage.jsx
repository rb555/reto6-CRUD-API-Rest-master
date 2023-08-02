import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../../src/schemas/auth.schema';


function LoginPage() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const {signin, errors: signinErrors} = useAuth();

  const onSubmit = handleSubmit((data) => {
    handleSubmit(data);
  });
  
  return (
    
      <div className='bg-zinc-800 max-w- w-full p-10 rounded-md flex h-[calc(100vh-100px)] items-center justify-center' >
        {signinErrors.map((error,i) => (
                <div className="bg-red-500 p-2" >
                    <Message message={error} key={i}/>
                </div>
            ))
        }
       <form onSubmit={onSubmit}>
            
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
            <button type='submit'>Logearse </button>
            <p className=' w-full  py-2 rounded-md my-2'>Aún no tienes tu cuenta? 
                <Link to="/register" className='text-sky-500 w-full rounded-md px-6 py-2 my-2'>Sign Up</Link>
             </p>
        </form>
      </div>
    
  );

};
export default LoginPage;