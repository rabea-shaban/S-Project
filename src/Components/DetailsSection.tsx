import {
  FiUser,
  FiMail,
  FiPhone,
  FiHome,
  FiMapPin,
  FiShield,
  FiBell,
} from "react-icons/fi";

const DetailsSection = () => {
  const patient = {
    name: "Sara Hassan",
    nationalId: "85050512345",
    email: "sara@demo.com",
    phone: "+20 987 654 3210",
    address: "15 Tahrir St, Cairo",
    defaultLoc: "30.0444°, 31.2357°",
    liveCoords: "30.0401°, 31.2281°",
  };

  const guardian = {
    name: "Ahmed Hassan",
    email: "guardian@demo.com",
    phone: "+20 123 456 7890",
    address: "15 Tahrir St, Cairo",
  };

  const alerts = [
    { text: "Location updated", time: "Just now" },
    { text: "Device connected", time: "2 min ago" },
    { text: "Token linked successfully", time: "5 min ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Patient */}
      <Card>
        <Header title={patient.name} subtitle="Patient · Linked" status="CONNECTED" />

        <Row icon={<FiShield />} label="National ID" value={patient.nationalId} />
        <Row icon={<FiMail />} label="Email" value={patient.email} />
        <Row icon={<FiPhone />} label="Phone" value={patient.phone} />
        <Row icon={<FiHome />} label="Address" value={patient.address} />
        <Row icon={<FiMapPin />} label="Default Loc" value={patient.defaultLoc} />
        <Row icon={<FiMapPin />} label="Live Coords" value={patient.liveCoords} />
      </Card>

      {/* Guardian */}
      <Card title="Guardian Info" icon={<FiShield />}>
        <Row label="Name" value={guardian.name} />
        <Row label="Email" value={guardian.email} />
        <Row label="Phone" value={guardian.phone} />
        <Row label="Address" value={guardian.address} />
      </Card>

      {/* Alerts */}
      <div className="bg-[#fff8ee] rounded-2xl shadow p-6">
        <h3 className="flex items-center gap-2 font-medium mb-4">
          <FiBell className="text-yellow-500" />
          Recent Alerts
        </h3>

        {alerts.map((a, i) => (
          <div key={i} className="flex justify-between text-sm py-2">
            <span>• {a.text}</span>
            <span className="text-gray-400">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;

/* ===== Helpers ===== */

const Card = ({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl shadow p-6">
    {title && (
      <h3 className="flex items-center gap-2 font-medium mb-4">
        {icon} {title}
      </h3>
    )}
    {children}
  </div>
);

const Header = ({
  title,
  subtitle,
  status,
}: {
  title: string;
  subtitle: string;
  status: string;
}) => (
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <span className="text-xs px-3 py-1 rounded-full bg-[#e7efe9] text-[#5f7f65]">
      {status}
    </span>
  </div>
);

const Row = ({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 py-3 border-t first:border-t-0">
    {icon && <span className="text-[#5f7f65]">{icon}</span>}
    <span className="w-32 text-sm text-gray-500">{label}</span>
    <span className="text-sm font-medium">{value}</span>
  </div>
);
