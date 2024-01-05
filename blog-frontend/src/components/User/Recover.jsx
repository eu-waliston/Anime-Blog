import React, { useState } from "react";


import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Recover = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClick = () => {
    if (password) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(watch("example"));
  return (
    <div className="Recover__Component">
      <div className="form__cp">
        <h1>Preencha com seu email </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("example")}
            placeholder="Usuário"
            className="input"
            type="email"
            onChange={handleChange}
          />
          {errors.exampleRequired && <p>Este campo é obrigatório</p>}
          <button className="btn" onClick={handleClick}>enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Recover;
