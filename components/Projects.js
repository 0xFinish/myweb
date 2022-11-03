import { Tab } from "@headlessui/react";
import { ProjectTemplate } from "./ProjectTemplate";
import blog from "../public/images/blog.png";
import personalWebsite from "../public/images/personalWebsite.png";
import sudoku from "../public/images/sudoku.png";
import TodoList from "../public/images/TodoList.png";

export function Projects() {
  return (
    <div className="w-10/12 mx-auto">
      <Tab.Group>
        <Tab.List className="w-full flex justify-around h-10 bg-amber-200 rounded-xl border-2 border-neutral-100">
          <Tab>Sudoku</Tab>
          <Tab>Todo List</Tab>
          <Tab>Blog</Tab>
          <Tab>Personal Website</Tab>
        </Tab.List>
        <Tab.Panels className="text-white mt-4 w-full bg-slate-700 p-8 rounded-md">
          <Tab.Panel>
            <ProjectTemplate
              name="Sudoku"
              imgSrc={sudoku}
              link="https://sudoku-brown-six.vercel.app"
              text="Created the React website for playing sudoku. Implemented sudoku solving algorithm via function programming (recursion) and sudoku unique generation algorithm with over 1 million of unique solvable combinations. Styled with pure CSS."
            ></ProjectTemplate>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectTemplate
              name="Todo List"
              imgSrc={TodoList}
              link="https://reactquerytodos.vercel.app"
              text="Basic React app for using To-dos. I wanted to learn react-query but I had no need for it, because in Sudoku you basically don’t use Database etc. To-dos List is perfect example of using MongoDB with node.js driver and fetching all the data via react-query over axios promise-based http requests to simple API in Next.js. It was my first-time using Tailwind CSS, which I really like now."
            ></ProjectTemplate>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectTemplate
              name="Blog"
              imgSrc={blog}
              link="https://blog-two-xi-23.vercel.app"
              text="CRUD React app. I used in this project all I knew before. The blog, I created, is an app with all basic data operations. It’s very similar to To-dos List because of the tools I used but still a way bigger project. The same MongoDB, Axios, React-query stack here but with way more requests, single and list views for posts etc. Also used Headless UI with Tailwind CSS to add some behavior to the Components. All my projects are built on Next.js framework but earlier there was basically no difference between CRA and Next.js. Here I used “useRouter” hook, some query HTTP requests and Next.js Dynamic Routing."
            ></ProjectTemplate>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectTemplate
              name="Personal Website"
              imgSrc={personalWebsite}
              link="https://myweb-gray.vercel.app"
              text="As my last project I created my personal website, where you can find all my previous projects. In terms of tools and complexity obviously it is the easiest one because it’s basically static website without databases, APIs etc. When I started, I wanted to use Chakra UI as a React components library but using Chakra you need to basically learn Chakra completely with-it own hooks styling etc. So, I just sticked to the Tailwind and added behavior via Headless UI. "
            ></ProjectTemplate>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
