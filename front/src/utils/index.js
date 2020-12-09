// eslint-disable-next-line import/prefer-default-export
export const formatIG = (ig) => {
  const response = [];
  ig.map((i) => (
    response.push(
      {
        quantity: `${i.quantity} ${i.measure} de ${i.name}`,
        measure: { name: i.measure },
        ingredient: { name: i.name },
      },
    )
  ));
  return response;
};

export const formatTime = (arg1, arg2) => {
  const response = `${arg1}${arg2}`;
  return response;
};

export const formatStep = (arr) => {
  const response = [];
  arr.map((item, index) => (
    response.push(
      {
        nbStep: index,
        description: item.description,
      },
    )
  ));
  return response;
};
