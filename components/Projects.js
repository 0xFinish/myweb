import { Tab } from "@headlessui/react";
import { ProjectTemplate } from "./ProjectTemplate";
import blog from "../public/images/blog.png";
import sudoku from "../public/images/sudoku.png";
import TodoList from "../public/images/TodoList.png";

export function Projects() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const tabsArray = ["Sudoku", "Todo List", "Blog"];

  return (
    <div className="w-9/12 mx-auto">
      <Tab.Group>
        <Tab.List className="w-full flex justify-around h-10 bg-green-900/50 rounded-xl border-2 border-neutral-100">
          {tabsArray.map((val, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-emerald-900 text- shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >{val}</Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="text-white mt-4 w-full bg-green-900/70 p-8 rounded-md">
          <Tab.Panel>
            <ProjectTemplate
              name="Sudoku"
              imgSrc={sudoku}
              link="https://sudoku-brown-six.vercel.app"
              text="Created a React website for playing sudoku. Implemented the sudoku solving algorithm via function programming (recursion) and sudoku unique generation algorithm with over 1 million of unique solvable combinations. Styled with pure CSS."
            ></ProjectTemplate>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectTemplate
              name="Todo List"
              imgSrc={TodoList}
              link="https://reactquerytodos.vercel.app"
              text="Basic React app for creating to-dos. I wanted to learn react-query but I had no need for it, since you don’t use Database etc. in Sudoku. To-dos List is perfect example of using MongoDB with node.js driver and fetching all the data via react-query over axios promise-based http requests to simple API in Next.js. It was my first-time using Tailwind CSS, which I really enjoy now."
            ></ProjectTemplate>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectTemplate
              name="Blog"
              imgSrc={blog}
              link="https://blog-two-xi-23.vercel.app"
              text="CRUD React app. I used everything I knew before in this project. The blog I created is an app with all basic data operations. It’s very similar to the To-dos List because of the tools I used, yet this project is a bigger one. The same MongoDB, Axios, React-query stack here but with way more requests, single and list views for posts etc. Also used Headless UI with Tailwind CSS to add some behavior to the components. All my projects are built on Next.js framework but earlier there was basically no difference between CRA and Next.js. Here I used “useRouter” hook, some query HTTP requests and Next.js Dynamic Routing."
            ></ProjectTemplate>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
