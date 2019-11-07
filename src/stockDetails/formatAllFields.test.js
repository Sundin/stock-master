import { formatAllFields } from "./formatAllFields";

it("formatAllFieldsShouldIgnoreNonNumericFields", () => {
  const input = {
    id: "1234",
    year: 2018,
    currency: "USD"
  };

  const expectedResult = {
    id: "1234",
    year: 2018,
    currency: "USD"
  };
  expect(formatAllFields(input)).toEqual(expectedResult);
});

it("formatAllFieldsShouldFormatBillionsCorrectly", () => {
  const input = {
    a: 1000000000,
    b: 2000000000,
    c: 3333000000,
    d: 4444444444,
    e: 5555555555
  };

  const expectedResult = {
    a: "1 miljarder",
    b: "2 miljarder",
    c: "3.33 miljarder",
    d: "4.44 miljarder",
    e: "5.56 miljarder"
  };
  expect(formatAllFields(input)).toEqual(expectedResult);
});

it("formatAllFieldsShouldFormatMillionsCorrectly", () => {
  const input = {
    a: 1000000,
    b: 2000000,
    c: 3333000,
    d: 4444444,
    e: 5555555
  };

  const expectedResult = {
    a: "1 miljoner",
    b: "2 miljoner",
    c: "3.33 miljoner",
    d: "4.44 miljoner",
    e: "5.56 miljoner"
  };
  expect(formatAllFields(input)).toEqual(expectedResult);
});

it("formatAllFieldsShouldFormatThousandsCorrectly", () => {
  const input = {
    a: 1000,
    b: 2000,
    c: 3333,
    d: 4444,
    e: 5555,
    f: 100000,
    g: 1000.0,
    h: 2222.9,
    i: 1111.1,
    j: 111111
  };

  const expectedResult = {
    a: "1 000",
    b: "2 000",
    c: "3 333",
    d: "4 444",
    e: "5 555",
    f: "100 000",
    g: "1 000",
    h: "2 223",
    i: "1 111",
    j: "111 111"
  };
  expect(formatAllFields(input)).toEqual(expectedResult);
});

it("formatAllFieldsShouldFormatSmallNumbersCorrectly", () => {
  const input = {
    a: 999,
    b: 998.9,
    c: 0,
    d: 5,
    e: 5.55555,
    f: 999.9
  };

  const expectedResult = {
    a: "999",
    b: "999",
    c: "0.00",
    d: "5.00",
    e: "5.56",
    f: "1 000"
  };
  expect(formatAllFields(input)).toEqual(expectedResult);
});

it("formatAllFieldsShouldFormatNegativeNumbersCorrectly", () => {
  const input = {
    a: -1000000000,
    b: -2000000000,
    c: -3333000,
    d: -4444,
    e: -555
  };

  const expectedResult = {
    a: "-1 miljarder",
    b: "-2 miljarder",
    c: "-3.33 miljoner",
    d: "-4 444",
    e: "-555"
  };
  expect(formatAllFields(input)).toEqual(expectedResult);
});
