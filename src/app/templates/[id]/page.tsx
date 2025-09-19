// src/app/templates/[id]/page.tsx
import { Metadata } from "next";

interface TemplatePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: TemplatePageProps
): Promise<Metadata> {
  return {
    title: `Template ${params.id}`,
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  return (
    <main>
      <h1>Template {params.id}</h1>
      <p>This is the template page for ID: {params.id}</p>
    </main>
  );
}
