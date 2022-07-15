import { DbService } from "./dbService";
import { renderFilter } from "./filterData";
import { filterData } from "./filterData";
import { addData } from "./addData";
import { editData } from "./editData";
import { removeData } from "./removeData";
import { sortData } from "./sortData";
import { searchData } from "./searchData";
import { resetData } from "./resetData";
import { select } from "./select";
import { exit } from "./exit";
import { popup } from "./popup";


export const homePage = async () => {
  const indexPath = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
  const table = indexPath + '/table.html';

  if (window.location.href === table) {
    window.dbService = new DbService();

    await resetData();
    await searchData();
    await sortData();
    await removeData();
    await editData();
    await addData();
    await filterData();
    await dbService.dataGet()
      .then(data => {
        renderFilter(data);
        select(data);
      });

    exit();
    popup();
  }
};