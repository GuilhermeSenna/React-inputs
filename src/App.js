import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const initialFormData = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);

  const changeHandler = (event) => {
    const { id, value } = event.target;

    // Recupera os dados anteriores armazenados no formData por spreading
    // Obtém o novo valor do objeto e altera nele

    // Ex: Formdata = {username: 'abc', password: "123"}
    // Usuário altera o username para 'abcd'
    // Recupera os dados anteriores e altera apenas no username

    // const animalSounds = {cat: 'meow', dog: 'bark'};

    // const animal = 'lion';
    // const sound = 'roar';
    // {...animalSounds, [animal]: sound};

    // Result: {cat: 'meow', dog: 'bark', lion: 'roar'};

    setFormData({ ...formData, [id]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("formData", formData);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <h1>Componente Login </h1>

        <label>Username:</label>
        <input
          type="text"
          id="username"
          onChange={changeHandler}
          value={formData.username}
        />
        <br />
        <br />

        <label>Password:</label>
        <input
          type="password"
          id="password"
          onChange={changeHandler}
          value={formData.password}
        />
        <br />
        <br />

        <button type="submit">Clique aqui!</button>
      </form>
    </React.Fragment>
  );
};

export default App;
