const orderStatus = (order) => {
  const status = [
    "Pendente de confirmação",
    "Pedido confirmado",
    "Não reconhece o pedido",
    "Mercadoria não recebida",
    "Recebida com avaria",
    "Devolvida",
    "Recebida com devolução parcial",
    "Recebida e confirmada",
    "Pagamento Autorizado",
  ];
  return status[Number(order)];
};

const changeValue = (value) => {
    const valor = Number(value)
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

export { orderStatus, changeValue };
