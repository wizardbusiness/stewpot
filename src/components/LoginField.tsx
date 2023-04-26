import React, {useState, useEffect} from 'react';
import './LoginField.css';

type loginFieldPropTypes = { inputLabel: string, inputType: string}

export default function LoginField({inputType, inputLabel } : loginFieldPropTypes) {
  // header nav

  return (
    <div className='login-field'>
      <input type={inputType} placeholder={inputLabel} className='input-field' id={`${inputType}-field`} />
    </div>
  )
}