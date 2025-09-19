// src/app/templates/[id]/page.tsx

// Define exactly what Next.js expects
interface TemplatePageProps {
  params: { id: string }
}

// No PageProps, no Promises, just plain sync props
export default function TemplatePage({ params }: TemplatePageProps) {
  return <div>{params.id}</div>
}
