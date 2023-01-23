import React from 'react';
import Input from '../Input/Input.component';
import Button from '../Button/Button';

const Forms = () => {
  return (
    <form>
      <div>
        <Input
          label='Adicione um novo estudo'
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='O que você quer estudar'
        />
      </div>
      <div>
        <Input
          label='Tempo'
          type='time'
          name='tempo'
          id='tempo'
          placeholder='O que você quer estudar'
          required
          min='00:00:00'
          max='01:30:00'
        />
      </div>
      <Button text='teste' />
    </form>
  );
};

export default Forms;
