import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // store the original implementation
  // original almacena el resultado original del archivo math.js
  const originalAdd = math.add;
  // mock add with the original implementation
  // se declara el mock en jest de la funcion original add
  math.add = jest.fn(originalAdd);
  // spy the calls to add
  //Se verfica que la funcion doAdd de app que es una implementacion funcional de la suma de math.js
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // override the implementation
  // hacemos lo que anteriormente hicimos en jest, pero en mockit
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restore the original implementation
  //Comparacion sin mock, solo con funciones implementadas con vanillla javascript
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});