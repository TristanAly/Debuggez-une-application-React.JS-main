/**
 *
 */

import { MONTHS } from ".";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      let date = new Date("2022-01-01T10:10:00Z");
      expect(MONTHS[date.getMonth()]).toEqual(MONTHS[0]);
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      let date = new Date("2022-07-01T10:10:00Z");
      expect(MONTHS[date.getMonth()]).toEqual(MONTHS[6]);
    });
  });
});
