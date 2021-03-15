import { v4 as uuidv4 } from "uuid";

export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: uuidv4(),
          content: "Criar mais projetos divertidos",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: "Produzir mais conteúdos Open Source",
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
          id: uuidv4(),
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: "Estudos Mobile",
          labels: ["#54e1f7"],
          user: "User1",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: uuidv4(),
          content: "Estudar Backend",
          labels: ["#7159c1"],
          user: "User1",
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: uuidv4(),
          content: "Dominar ReactJS",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: "Estudar Redux e Redux Toolkit",
          labels: ["#7159c1"],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: 'Estudar NextJS"',
          labels: ["#54e1f7"],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: "Testes Automatizados",
          labels: [],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: "Dominar Front End",
          labels: [],
          user: "User1",
        },
        {
          id: uuidv4(),
          content: "Dominar CSS e Sass",
          labels: ["#54e1f7"],
          user: "User1",
        },
      ],
    },
  ];
}
