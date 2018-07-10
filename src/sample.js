export const labels = [
  {
    id: 1,
    text: 'frontend'
  },
  {
    id: 2,
    text: 'api'
  }
];

export const todos = [
  {
    id: 1,
    text: 'create-react-appによるプロジェクトの作成',
    label: null,
    completed: true
  },
  {
    id: 2,
    text: 'Todoコンポーネントの実装',
    label: {
      id: 1,
      text: 'frontend'
    },
    completed: false
  },
  {
    id: 3,
    text: 'Todo crud APIの実装',
    label: {
      id: 2,
      text: 'api'
    },
    completed: false
  }
];
