const courses = [
  {
    id: 1,
    title: "My Course On Title1",
    slug: "test1",
    authorId: 1,
    category: "MockCategory1",
  },
  {
    id: 2,
    title: "My Course On Title2",
    slug: "test2",
    authorId: 1,
    category: "MockCategory1",
  },
  {
    id: 3,
    title: "My Course On Title3",
    slug: "test3",
    authorId: 3,
    category: "MockCategory2",
  },
  {
    id: 4,
    title: "My Course On Title4",
    slug: "test4",
    authorId: 1,
    category: "MockCategory2",
  },

  {
    id: 5,
    title: "My Course On Title5",
    slug: "test5",
    authorId: 2,
    category: "MockCategory2",
  },
  {
    id: 6,
    title: "My Course On Title6",
    slug: "test4",
    authorId: 1,
    category: "MockCategory1",
  },

  {
    id: 7,
    title: "My Course On Title7",
    slug: "test5",
    authorId: 2,
    category: "MockCategory2",
  },
  {
    id: 8,
    title: "My Course On Title8",
    slug: "test4",
    authorId: 3,
    category: "MockCategory1",
  },
];

const authors = [
  { id: 1, name: "Naveen" },
  { id: 2, name: "Roger" },
  { id: 3, name: "Josh" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
