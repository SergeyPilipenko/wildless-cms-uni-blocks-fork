import { deleteEmptyProps, renameProp } from '../utils.js';

export const description = 'v0.4.5';

export const migrate = (unitPath, content) => {
  if (!content?.blocks) {
    return content;
  }

  for (const block of content.blocks) {
    adjustNavigatorTabsBlock(block);
    adjustGroupBlock(block);
    adjustTariffsTableBlock(block);
  }

  return content;
};

function adjustNavigatorTabsBlock(block) {
  if (block.type !== 'NavigatorTabs') {
    return;
  }

  block.type = 'Tabs';

  if (block.content) {
    renameProp(block.content, 'navigatorTabs', 'tabs');

    for (const item in block.content.tabs) {
      item.type = 'link';
      Reflect.deleteProperty(item, 'label');
    }
  }
}

function adjustGroupBlock(block) {
  if (block.type !== 'GroupBlock') {
    return;
  }

  // GroupBlock переделываем в Tabs
  // Страницы в которых есть GroupBlock credit-cards / debet-cards / deposits / loans / vse-vidy-strahovaniya1

  block.type = 'Tabs';

  if (block.content) {
    renameProp(block.content, 'tabs', 'labels');
    renameProp(block.content, 'isShowCounter', 'showCounter');

    for (const item of block.content.labels) {
      item.type = 'group';
      renameProp(item, 'tag', 'ref');
      Reflect.deleteProperty(item, 'index');
    }

    Reflect.deleteProperty(block.content, 'blocks');
    Reflect.deleteProperty(block.content, 'groupBlocks');
  }
}

function adjustTariffsTableBlock(block) {
  if (block.type !== 'TariffsTable' || !block.content || !block.content.columns) {
    return;
  }

  renameProp(block.content, 'columns', 'tariffsColumns');

  for (const column of block.content.tariffsColumns) {
    for (const columnInner of column.data) {
      adjustTariffsColumnsInner(columnInner);
    }
  }
}

function adjustTariffsColumnsInner(columnInner) {
  for (let index = 0; index < columnInner.length; index++) {
    const cell = columnInner[index];

    deleteEmptyProps(cell);

    if (Object.keys(cell).length === 2 && cell?.label && cell.description) {
      addCellType(cell);
    } else if (Object.keys(cell).length < 2) {
      addCellType(cell);
    } else {
      // Если типов два и более и это не labels и description то разносим по разным ячейкам
      const newArr = [];
      for (const key in cell) {
        newArr.push(addCellType({ [key]: cell[key] }));
      }
      columnInner.splice(index, 1, ...newArr);
    }
  }
}

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

  return cell;
}
