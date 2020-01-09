import React from 'react';

import '../componentsStyle/form.css'

const Form = props => (
    <form className="form-block" onSubmit={props.weatherMethod}>
        <input className="form-input" type="text" name="city"/>
        <button className="form-button">Получить погоду</button>
    </form>
)

export default Form;