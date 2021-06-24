// components
import Section from "./Form.styles";

//context
import { GlobalContext } from "../../Contexts/GlobalStorage";
import { useContext } from "react";

const Form = () => {
  const global = useContext(GlobalContext);

  return (
    <Section>
      <input
        type="text"
        placeholder="Pesquise pelo titulo"
        onChange={(e) => {
          global.setSearchTerm(e.target.value);
        }}
      />

      <select
        id="category"
        onChange={(event) => {
          global.setOption(event.target.value);
        }}
        placeholder="Status"
      >
        <option value="">Status</option>
        <option value="created">Solicitada</option>
        <option value="processing">Processando</option>
        <option value="processed">Concluída</option>
      </select>
    </Section>
  );
};

export default Form;
