export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar ReactJS",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: 2,
          content: "Estudar Redux e Redux Toolkit",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: 3,
          content: "Projetos práticos",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: 4,
          content: 'Estudar NextJS"',
          labels: ["#54e1f7"],
          user: "User1",
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user: "User1",
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "User1",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Estudos com Backend",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: 8,
          content: "Estudos Mobile",
          labels: ["#54e1f7"],
          user: "User1",
        },
        {
          id: 9,
          content: "Testes Automatizados",
          labels: [],
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "FrontEnd",
          labels: [],
        },
        {
          id: 12,
          content: "CSS - Sass - Less",
          labels: ["#54e1f7"],
        },
      ],
    },
  ];
}
