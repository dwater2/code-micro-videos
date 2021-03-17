// @flow
import React from "react";
import { Box, Button, ButtonProps, Checkbox, makeStyles, TextField, Theme } from "@material-ui/core";
import categoryHttp from "../../util/http/category-http";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1)
    }
  }
});

export const Form = () => {

  const classes = useStyles();
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "outlined",
  }

  const {register, handleSubmit} = useForm({
      defaultValues: {
          is_active: true
      }
  });

  function onSubmit(formData) {
      categoryHttp
        .create(formData)
        .then((response) => console.log(response));
  }

  return (
    <form onSubmit = { handleSubmit(onSubmit) }>
      <TextField
        name={"name"}
        label={"Nome"}
        variant={"outlined"}
        fullWidth
        InputLabelProps={{ shrink: true }}
        inputRef={register}
      />
      <TextField
        name={"description"}
        label={"Descrição"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
        InputLabelProps={{ shrink: true }}
        multiline
        rows="4"
        inputRef={register}
      />
      <Checkbox
        name={"is_active"}
        color={"primary"}
        inputRef={register}
        defaultChecked
      />
      Ativo?
      <Box dir={"rtl"}>
          <Button {...buttonProps}>Salvar</Button>
          <Button {...buttonProps} type="submit">Salvar e continuar editando</Button>
      </Box>
    </form>
  );
};
