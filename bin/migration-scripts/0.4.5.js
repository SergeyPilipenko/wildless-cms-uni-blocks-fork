import { renameProp, deleteEmptyProps } from '../utils.js';
export const description = 'v0.4.5';
export default (unitPath, content) => {
  if (!content?.blocks) {
    return;
  }

  // NavigatorTabs переделываем в Tabs
  content.blocks = content?.blocks.map((block) => {
    if (block.type === 'NavigatorTabs') {
      block.type = 'Tabs';
      const blockContent = block.content;
      renameProp(blockContent, 'navigatorTabs', 'tabs');

      block.content?.tabs.forEach((item) => {
        item.type = 'link';
        delete item.label;
      });
    }

    return block;
  });

  // GroupBlock переделываем в Tabs
  // Страницы в которых есть GroupBlock credit-cards / debet-cards / deposits / loans / vse-vidy-strahovaniya1
  content.blocks = content.blocks.map((block) => {
    if (block.type === 'GroupBlock') {
      const blockContent = block.content;
      block.type = 'Tabs';
      renameProp(blockContent, 'tabs', 'labels');
      renameProp(blockContent, 'isShowCounter', 'showCounter');

      blockContent.labels.forEach((item) => {
        renameProp(item, 'tag', 'ref');
        item.type = 'group';
        delete item.index;
      });

      delete blockContent?.blocks;
      delete blockContent?.groupBlocks;
    }

    return block;
  });

  // Добавить тип в ячейку компонента TariffsTable
  function addCellType(cell) {
    if (cell?.label || cell?.description) {
      cell.tableCellType = 'LabelDescription';
    }
    if (cell?.buttons) {
      cell.tableCellType = 'Buttons';
    }
    if (cell?.list) {
      cell.tableCellType = 'List';
    }
  }

  content.blocks = content.blocks.map((block) => {
    if (block.type === 'TariffsTable') {
      const blockContent = block.content;
      if (blockContent?.tariffsColumns) {
        return;
      }
      renameProp(blockContent, 'columns', 'tariffsColumns');
      blockContent.tariffsColumns.map((column) => {
        return column.data.map((columnInner) => {
          columnInner.forEach((cell, index) => {
            deleteEmptyProps(cell);
            if (Object.keys(cell).length === 2 && cell?.label && cell.description) {
              addCellType(cell);
            } else if (Object.keys(cell).length < 2) {
              addCellType(cell);
            } else {
              // Если типов два и более и это не labels и description то разносим по разным ячейкам
              let newArr = [];
              Object.entries(cell).forEach(([key, value]) => {
                let newObj = { [key]: value };
                addCellType(newObj);
                newArr.push(newObj);
              });
              columnInner.splice(index, 1, ...newArr);
            }
          });
        });
      });
    }

    return block;
  });

  return content;
};
