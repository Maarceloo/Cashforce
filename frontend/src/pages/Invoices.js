import React, { useEffect, useState } from "react";
import { getData } from "../services/request";
import "../css/invoices.css";

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
    <div className="">
      <div className="conteudo">
        {notas.map((iten) => (
          <p key={iten.id}>{iten.orderNumber}</p>
        ))}
      </div>
    </div>
  );
}

export default Invoices;
