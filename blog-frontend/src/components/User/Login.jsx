import React, { useState } from "react";
import "./user.css";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    <div className="Login__Component">
      <div className="form__cp">
        <h1>Olá Seja bem-vindo(a)</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>usuário</p>
          <input
            {...register("example")}
            placeholder="Usuário"
            className="input"
          />
          <p>senha</p>
          <input
            {...register("exampleRequired", { required: true })}
            placeholder="Password"
            className="input"
            onChange={handleChange}
          />
          {errors.exampleRequired && <p>Este campo é obrigatório</p>}

          <button className="btn" onClick={handleClick}>
            entrar
          </button>

          <p>
            Ainda não é usuário? <Link to={"/register"}>cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
