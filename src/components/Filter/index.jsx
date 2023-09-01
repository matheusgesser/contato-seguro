/* eslint-disable react/prop-types */
import { Wrapper, Search, Select, Option } from "./styles";

export function Filter({ changeInput, changeSelect, options }) {
  return (
    <Wrapper>
      Buscar por
      <Select onChange={changeSelect}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <Search onChange={changeInput} placeholder="Buscar..." />
    </Wrapper>
  );
}
