// src/app/templates/[id]/page.tsx

interface PageProps {
  params: {
    id: string;
  };
}

export default function TemplatePage({ params }: PageProps) {
  return (
    <div>
      <h1>Template ID: {params.id}</h1>
    </div>
  );
}
