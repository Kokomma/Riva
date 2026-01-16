interface StatCardProps {
  label: string;
  value: string;
  helper: string;
}

export default function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="card">
      <span>{label}</span>
      <h3>{value}</h3>
      <span>{helper}</span>
    </div>
  );
}
