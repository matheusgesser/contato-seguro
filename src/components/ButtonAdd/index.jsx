/* eslint-disable react/prop-types */
import { AddIcon } from "../Icons/AddIcon";
import { Button } from "./styles";

export function ButtonAdd({ buttonClicked }) {
  return (
    <Button onClick={buttonClicked}>
      <AddIcon />
      Novo
    </Button>
  );
}
