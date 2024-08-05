export default function Page({ params }: { params: { id: number } }) {
    return <div>Ticket ID: {params.id}</div>
  }
