import React, { useEffect, useState } from "react";
import { getData } from "../services/request";
import CashForce from "../images/CashForce.png";
import "../css/invoices.css";
import hands from "../images/hands.svg";
import { changeValue, orderStatus } from "../utils/functions";

function Invoices() {
  const [notas, setNotas] = useState([]);

  const saveInvoices = async () => {
    const api = await getData();
    setNotas(api);
  };

  useEffect(() => {
    saveInvoices();
  }, []);

  if (!notas.length) return <h3>Carregando...</h3>;

  return (
    <>
      <div className="siderbar-financiador">
        <div className="siderbar-fornecedor">
          <img src={CashForce} alt="logo cashforce" />
          <ul className="siderbar-fornecedor">
            <li>
              <img src={hands} alt="Hand SVG" />
              Notas Fiscais
            </li>
          </ul>
        </div>
      </div>
      <div className="conteudo">
        <header className="headerSistema" />
        <div className="introducaoConteudo">
          <div className="hand">
            <img src={hands} alt="Hand SVG"></img>
            <p>Notas fiscais</p>
          </div>
          <br />
          <p className="subTexto">Visualize as notas fiscais que você tem.</p>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>NOTA FISCAL</th>
                <th>SACADO</th>
                <th>CEDENTE</th>
                <th>EMISSÃO</th>
                <th>VALOR</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((item) => (
                <tr key={item.id}>
                  <td>{item.orderNumber}</td>
                  <td>{item.buyers.name}</td>
                  <td>{item.providers.name}</td>
                  <td>
                    {`${new Date(item.emissionDate).toLocaleDateString(
                      "pt-br"
                    )}`}
                  </td>
                  <td className="valor">{changeValue(item.value)}</td>
                  <td>{orderStatus(item.orderStatusBuyer)}</td>
                  <td>
                    <button
                      className="dadosCedente"
                      type="button"
                      data-testid={"dadosCedente"}
                      onClick={() => {}}
                    >
                      Dados do cedente
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Invoices;
