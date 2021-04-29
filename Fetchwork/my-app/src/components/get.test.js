import React from 'react'
import GetData from './get'
import { render, screen ,act } from '@testing-library/react'

//Once asagidaki Mock olusturuluyor
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve(
        {value:"ObjectData"}),
  })
);
//Mock ile async function datasi karsilikli test ediliyor
//Componentin statinin test renderinde degismemesi icin act metodunu kullaniyoruz
describe("GetData", () => {
  it("loads the person data", async () => {
    await act(async () => render(<GetData />));
    expect(screen.getByText("ObjectData")).toBeInTheDocument();
  });
})


//K:https://www.youtube.com/watch?v=yTZ-txdrHdY
