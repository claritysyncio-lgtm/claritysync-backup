interface TemplatePageProps {
  params: Promise<{ id: string }>;
}
export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params;
  return <h1>Template ID: {id}</h1>;
}