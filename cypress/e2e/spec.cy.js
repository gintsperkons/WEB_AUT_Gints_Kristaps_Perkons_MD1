import BasePage from "../pageObjects/base.page";
import SelectablePage from "../pageObjects/selectable.page";

describe("Selectables", () => {
  beforeEach(() => {
    BasePage.visit();
  });
  it("Scenario-1-Test Grid", () => {
    SelectablePage.visit();
    SelectablePage.GridTab.click();
    SelectablePage.GridItemList.contains("Two").click();
    SelectablePage.GridItemList.contains("Four").click();
    SelectablePage.GridItemList.contains("Six").click();
    SelectablePage.GridItemList.contains("Eight").click();
    SelectablePage.GridItemList.contains("Two").should("have.class", "active");
    SelectablePage.GridItemList.contains("Four").should("have.class", "active");
    SelectablePage.GridItemList.contains("Six").should("have.class", "active");
    SelectablePage.GridItemList.contains("Eight").should(
      "have.class",
      "active"
    );
    SelectablePage.GridItemList.contains("One").should(
      "not.have.class",
      "active"
    );
    SelectablePage.GridItemList.contains("Three").should(
      "not.have.class",
      "active"
    );
    SelectablePage.GridItemList.contains("Five").should(
      "not.have.class",
      "active"
    );
    SelectablePage.GridItemList.contains("Seven").should(
      "not.have.class",
      "active"
    );
    SelectablePage.GridItemList.contains("Nine").should(
      "not.have.class",
      "active"
    );
  });
});
