/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import projects from './projects'
import { AllProjects } from './Github'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

interface Projects {
  slug: string
  url: string
  title: string
  type: string
  img: string
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projetos
        <span><HiOutlineDesktopComputer /> Projects</span>
      </Title>
      <ProjectsContainer>
        {projects.map(project => {
          return (
            <Link href={`/project/${project.url}`} key={project.id}>
              <a>
                <ProjectsContent>
                  <img src={project.img} alt={project.title} />
                  <div className="title">
                    <h2>{project.title}</h2>
                    <span>{project.type}</span>
                  </div>
                </ProjectsContent>
              </a>
            </Link>
          )
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  )
}
