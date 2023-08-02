import {useForm} from 'react-hook-form'

function ReviewFormPage() {

  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Restaurant' {...register("restaurant")} autoFocus />

        <textarea rows="3" placeholder='Introduce una reseña o comentario' {...register("reseña")} ></textarea>

        <button>Guardar</button>
      </form>

    </div>
  )
}

export default ReviewFormPage