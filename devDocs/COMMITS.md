# Правила написания коммитов

Основные правила написания коммитов в наших репозиториях:

1.  Первое слово коммита всегда начинается с заглавной буквы
1.  Коммит всегда пишется в Imperative mood [(команда, приказ, указание)](#хорошо)
1.  Текст коммита должен отражать суть проделанной работы

Наиболее частые ключевые слова коммитов (с которых они, как правило, начинаются):

1.  Add
1.  Fix
1.  Remove
1.  Refactor

## Примеры

### Не очень

1.  complete task
1.  fix
1.  style
1.  some-fixes
1.  fix issues

Хороший пример:

```
Add ErrorBoundary in PageEditorPanel.tsx
```

Но можно лучше:

```
Wrap PageEditorPanel elements into ErrorBoundary
```

### Хорошо

1.  Add support of recursive blocks (blocks in blocks)
1.  Refactor types (remove global types)
1.  Add blocks preload on project select
1.  Decouple page editor from core CMS
1.  Refactor abstract Doc to simplify load/save functionality
1.  Add custom blocks support
1.  Remove unused utils
