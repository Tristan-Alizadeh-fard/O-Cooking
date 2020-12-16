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
  var formatedArg1;
  if (arg1 === 'h' || arg1 === '0h' || arg1 === '00h') {
    formatedArg1 = '';
  }
  else {
    formatedArg1 = arg1;
  }
  var formatedArg2;
  if (arg2.length === 3) {
    formatedArg2 = `0${arg2}`;
  }
  if (arg2.length === 2) {
    formatedArg2 = `00${arg2}`;
  }
  if (arg2.length === 4) {
    formatedArg2 = arg2;
  }
  const response = `${formatedArg1}${formatedArg2}`;
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

export const formatSetMeasure = (values) => {
  const result = [];
  values.map((value) => (
    result.push({
      key: value.id,
      text: value.name,
      value: value.name,
    })
  ));
  return result;
};
