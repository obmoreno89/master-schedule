export const orderPLAsc = (array, setState, type) => {
  const arrayForSort = [...array];
  let sortArray;

  if (type === "capabilities") {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.product_line.name.toLowerCase() < b.product_line.name.toLowerCase()) {
        return 1;
      }
      if (a.product_line.name.toLowerCase() > b.product_line.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
  setState(sortArray);
};

export const orderPLDesc = (array, setState, type) => {
  const arrayForSort = [...array];
  let sortArray;

  if (type === "capabilities") {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.product_line.name.toLowerCase() > b.product_line.name.toLowerCase()) {
        return 1;
      }
      if (a.product_line.name.toLowerCase() < b.product_line.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
  setState(sortArray);
};

export const orderGAsc = (array, setState, type) => {
  const arrayForSort = [...array];
  let sortArray;

  if (type === "capabilities") {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.product_line.group.name.toLowerCase() < b.product_line.group.name.toLowerCase()) {
        return 1;
      }
      if (a.product_line.group.name.toLowerCase() > b.product_line.group.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else if (type === "productLine") {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.group.name.toLowerCase() < b.group.name.toLowerCase()) {
        return 1;
      }
      if (a.group.name.toLowerCase() > b.group.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.group.toLowerCase() < b.group.toLowerCase()) {
        return 1;
      }
      if (a.group.toLowerCase() > b.group.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
  setState(sortArray);
};

export const orderGDesc = (array, setState, type) => {
  const arrayForSort = [...array];
  let sortArray;

  if (type === "capabilities") {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.product_line.group.name.toLowerCase() > b.product_line.group.name.toLowerCase()) {
        return 1;
      }
      if (a.product_line.group.name.toLowerCase() < b.product_line.group.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else if (type === "productLine") {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.group.name.toLowerCase() > b.group.name.toLowerCase()) {
        return 1;
      }
      if (a.group.name.toLowerCase() < b.group.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else {
    sortArray = arrayForSort.sort((a, b) => {
      if (a.group.toLowerCase() > b.group.toLowerCase()) {
        return 1;
      }
      if (a.group.toLowerCase() < b.group.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
  setState(sortArray);
};

export const orderUserAsc = (array, setState, attr) => {
  const arrayForSort = [...array];

  const sortArray = arrayForSort.sort((a, b) => {
    if (a[attr].toLowerCase() < b[attr].toLowerCase()) {
      return 1;
    }
    if (a[attr].toLowerCase() > b[attr].toLowerCase()) {
      return -1;
    }
    return 0;
  });

  setState(sortArray);
};

export const orderUserDesc = (array, setState, attr) => {
  const arrayForSort = [...array];

  const sortArray = arrayForSort.sort((a, b) => {
    if (a[attr].toLowerCase() > b[attr].toLowerCase()) {
      return 1;
    }
    if (a[attr].toLowerCase() < b[attr].toLowerCase()) {
      return -1;
    }
    return 0;
  });

  setState(sortArray);
};
