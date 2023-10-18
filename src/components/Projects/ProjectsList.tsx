import { projectsData } from '@/lib/data'
import Project from '@/components/Projects/Project'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const ProjectsList = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)
  const projectList = await projectsData({ lang })

  return (
    <div className="container">
      <div className="flex min-h-[calc(100vh_-_3.5rem)] flex-col justify-center gap-8">
        {projectList.map((project, i) => (
          <div key={i}>
            <Project
              key={i}
              title={project.title}
              description={project.description}
              website={project.website}
              repository={project.repository}
              img={project.img}
              dictionary={page.projects}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsList