import React, { useState } from "react";
import "./user.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
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

  console.log(watch("example"));

  const handleClick = () => {
    if (password) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Register__Component">
      <div className="form__cp">
        <h1>Hora do cadastro 🔥</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Nome</p>
          <input
            {...register("example")}
            placeholder="Usuário"
            className="input"
            type="text"
          />

          <p>email</p>
          <input
            {...register("example")}
            placeholder="Usuário"
            className="input"
            type="email"
          />
          {errors.exampleRequired && <p>Este campo é obrigatório</p>}

          <p>senha</p>
          <input
            {...register("exampleRequired", { required: true })}
            placeholder="Password"
            className="input"
            type="password"
            onChange={handleChange}
          />
          {errors.exampleRequired && <p>Este campo é obrigatório</p>}

          <p>aniversário</p>
          <input
            {...register("example")}
            placeholder="Usuário"
            className="input"
            type="date"
          />

          <button className="btn" onClick={handleClick}>
            cadastrar
          </button>
          <p></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
