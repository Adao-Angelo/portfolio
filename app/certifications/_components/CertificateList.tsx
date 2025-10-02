import { certifications } from "../const/certifications";
import Certificate from "./Certificate";

export default function CertificateList() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {certifications.map((cert, index) => (
        <Certificate
          key={index}
          name={cert.name}
          url={cert.url}
          index={index}
        />
      ))}
    </div>
  );
}
