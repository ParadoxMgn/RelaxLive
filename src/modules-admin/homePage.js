import { DbService } from "./dbService";
import { render } from "./render";
import { select } from "./select";
import { filterData } from "./filterData";
import { addData } from "./addData";
import { popup } from "./popup";

export const homePage = async () => {
  const indexPath = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
  const table = indexPath + '/table.html';

  if (window.location.href === table) {
    window.dbService = new DbService();

    await addData();
    await filterData();
    await dbService.dataGet()
      .then(data => {
        render(data);
        select(data);
      });

    popup();
  }
};