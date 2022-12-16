export const orderPLAsc = (array, setState) => {
  const arrayForSort = [...array];
  const sortArray = arrayForSort.sort((a, b) => {
    if (a.product_line.name < b.product_line.name) {
      return 1;
    }
    if (a.product_line.name > b.product_line.name) {
      return -1;
    }
    return 0;
  });
  setState(sortArray);
};

export const orderGAsc = (array, setState) => {
  const arrayForSort = [...array];
  const sortArray = arrayForSort.sort((a, b) => {
    if (a.product_line.group.name < b.product_line.group.name) {
      return 1;
    }
    if (a.product_line.group.name > b.product_line.group.name) {
      return -1;
    }
    return 0;
  });
  setState(sortArray);
};

export const orderPLDesc = (array, setState) => {
  const arrayForSort = [...array];
  const sortArray = arrayForSort.sort((a, b) => {
    if (a.product_line.name > b.product_line.name) {
      return 1;
    }
    if (a.product_line.name < b.product_line.name) {
      return -1;
    }
    return 0;
  });
  setState(sortArray);
};

export const orderGDesc = (array, setState) => {
  const arrayForSort = [...array];
  const sortArray = arrayForSort.sort((a, b) => {
    if (a.product_line.group.name > b.product_line.group.name) {
      return 1;
    }
    if (a.product_line.group.name < b.product_line.group.name) {
      return -1;
    }
    return 0;
  });

  setState(sortArray);
};
