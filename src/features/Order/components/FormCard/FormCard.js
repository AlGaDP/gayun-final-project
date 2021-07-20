import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    },
  },
}));

const FormCard = ({ handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data, 'data');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fullName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            label="ФИО"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            helperText="Введите ФИО получателя"
          />
        )}
        rules={{ required: 'Введите ФИО' }}
      />
      <Controller
        name="telephon"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            label="Телефон"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            helperText="Номер телефона"
          />
        )}
        rules={{ required: 'Введите номер телефона' }}
      />
      <Controller
        name="adres"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            label="Адрес доставки"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            helperText="Адрес доставки"
          />
        )}
        rules={{ required: 'Введите адрес доставки' }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            label="Email"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
            helperText="Укажите ваш e-mail"
          />
        )}
        rules={{ required: 'Введите Email' }}
      />
      <Controller
        name="notes"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Примечания"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            helperText="Примечания к заказу"
          />
        )}
       // rules={{ required: 'Password required' }}
      />
      <div>
        {/* <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button> */}
        <Button type="submit" variant="contained" color="primary">
        Подтвердить заказ
        </Button>
      </div>
    </form>
  );
};

export default FormCard;