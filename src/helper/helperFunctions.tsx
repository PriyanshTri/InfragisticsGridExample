export const checkContainsValue = (data: any, searchValue: string, searchProperty: string) => {
  let result: any = undefined;
  data.find((row: any, index: number) => {
    if (row[searchProperty] === searchValue) result = { row, index };
  });
  return result;
};
