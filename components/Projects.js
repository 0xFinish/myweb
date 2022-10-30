import { Project } from './Project'
import blog from "../public/blog.png"
import sudoku from "../public/sudoku.png"
import todolist from "../public/todolist.png"

export function Projects() {
    return (
        <div className='grid grid-cols-2 max-w-4xl mx-auto gap-8 mt-8'>
            <Project title="Sudoku" date="13.10.2022" photo={sudoku} description="Sudoku, my first project!"></Project>
            <Project title="Todolist" date="18.10.2022" photo={todolist} description="Todolist was my firtst project using react-query and mongodb database"></Project>
            <Project title="Blog" date="19.10.2022" photo={blog} description="The biggest and the hardest project for me!"></Project>
            <Project title="Personal Website" date="22.10.2022" photo="" description="Just some React with Tailwind🧪"></Project>
        </div>
    )
}