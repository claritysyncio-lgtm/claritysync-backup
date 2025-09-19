// src/app/templates/[id]/page.tsx

export default function TemplatePage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}