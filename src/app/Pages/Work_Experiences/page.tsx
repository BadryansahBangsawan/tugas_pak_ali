"use client";
import { LiquidChrome } from "../../components/LiquidChrome";
import Navbar from "../../components/Navbar/page";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaMobile,
  FaServer,
  FaCloud,
  FaBullhorn,
  FaWarehouse,
  FaWhatsapp,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  icon: React.ReactNode;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "SAORAJA CAFE & RESTO",
    position: "Social Media Admin Marketing",
    duration: "2023 - 2025",
    location: "Antang, Makassar, Indonesia",
    description:
      "Mengelola kampanye iklan digital dan strategi konten media sosial untuk meningkatkan brand awareness dan engagement pelanggan. Bertanggung jawab atas seluruh aspek marketing digital cafe dan resto.",
    technologies: [
      "Meta Ads",
      "Google Ads",
      "Canva",
      "Google Forms",
      "Social Media Management",
      "Content Creation",
      "Digital Marketing",
    ],
    achievements: [
      "Mengelola kampanye iklan di Meta Ads & Google Ads secara rutin",
      "Meningkatkan engagement media sosial hingga 45% melalui strategi konten",
      "Terbiasa menggunakan Canva, Meta Ads, dan Google Forms",
      "Mengoptimalkan budget iklan untuk mencapai target ROI yang optimal",
    ],
    icon: <FaBullhorn className="text-2xl" />,
  },
  {
    id: 2,
    company: "MANUJUJAYA",
    position: "Staff Administrasi Gudang",
    duration: "2022 - 2025",
    location: "Serui, Papua, Indonesia",
    description:
      "Mengelola sistem inventaris digital dan dokumentasi keluar-masuk barang untuk memastikan akurasi stok harian. Berkoordinasi dengan tim logistik dan bagian pembelian untuk kelancaran operasional.",
    technologies: [
      "Digital Inventory System",
      "Microsoft Excel",
      "Database Management",
      "Logistics Software",
      "Report Generation",
      "Stock Management",
      "Documentation",
    ],
    achievements: [
      "Mengelola dan mendokumentasikan keluar-masuk barang menggunakan sistem inventaris digital",
      "Menyusun laporan stok dan pengiriman mingguan yang membantu meningkatkan efisiensi distribusi hingga 25%",
      "Berkoordinasi dengan tim logistik dan bagian pembelian untuk memastikan kelancaran arus barang",
      "Memastikan akurasi stok harian dengan tingkat kesalahan kurang dari 2%",
    ],
    icon: <FaWarehouse className="text-2xl" />,
  },
];

const skills = [
  { name: "Digital Marketing", level: 90, icon: <FaBullhorn /> },
  { name: "Social Media Management", level: 85, icon: <FaBullhorn /> },
  { name: "Meta Ads & Google Ads", level: 80, icon: <FaBullhorn /> },
  { name: "Inventory Management", level: 85, icon: <FaWarehouse /> },
  { name: "Database Management", level: 75, icon: <FaDatabase /> },
  { name: "Content Creation", level: 80, icon: <FaBullhorn /> },
];

// WhatsApp Popup Component
const WhatsAppPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const phoneNumber = "6285244304050"; // Ganti dengan nomor WhatsApp Anda
    const encodedMessage = encodeURIComponent(
      message || "Halo! Saya tertarik untuk berdiskusi lebih lanjut."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaWhatsapp className="text-2xl text-white" />
          </div>
          <h3 className="text-white/90 text-2xl font-bold mb-2">
            Hubungi via WhatsApp
          </h3>
          <p className="text-gray-300">Kirim pesan langsung ke WhatsApp saya</p>
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label className="block text-white/80 font-medium mb-2">
            Pesan Anda:
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan Anda di sini..."
            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
            rows={4}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSendMessage}
            className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            <span>Kirim</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function WorkExperiences() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <div className="font-sans relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <LiquidChrome
          baseColor={[0, 0.1, 0.1]}
          speed={0.2}
          amplitude={0.3}
          frequencyX={2}
          frequencyY={3}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-white/90 text-4xl sm:text-5xl font-extrabold mb-6">
                Work Experience
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Pengalaman kerja saya dalam bidang Digital Marketing dan
                Administrasi Gudang dengan fokus pada strategi konten dan
                manajemen inventaris
              </p>
            </div>

            {/* Work Experience Timeline */}
            <div className="space-y-12 mb-20">
              {workExperiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Line */}
                  {index < workExperiences.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent"></div>
                  )}

                  <div className="flex items-start space-x-6">
                    {/* Timeline Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/80">
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-white/90 text-2xl font-bold mb-2">
                            {exp.position}
                          </h3>
                          <p className="text-white/70 text-xl font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-white/60 mt-2 sm:mt-0">
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-white/80 font-semibold mb-3">
                          Tools & Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-sm hover:bg-white/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-white/80 font-semibold mb-3">
                          Pencapaian Utama:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start space-x-3 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-white/90 text-3xl font-bold text-center mb-8">
                Keahlian Teknis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-white/80">{skill.icon}</div>
                      <h3 className="text-white/90 font-semibold">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-white/40 to-white/60 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-white/60 text-sm mt-2">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-white/90 text-2xl font-bold mb-4">
                  Mari Bekerja Sama
                </h2>
                <p className="text-gray-300 mb-6">
                  Saya selalu tertarik dengan peluang baru dan proyek yang
                  menarik
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/Pages/Landing_page"
                    className="px-6 py-3 bg-white hover:bg-white/80 text-black rounded-md text-lg font-medium transition flex items-center justify-center"
                  >
                    Lihat Portfolio Saya
                  </a>
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white border border-green-500 rounded-md text-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* WhatsApp Popup */}
      <WhatsAppPopup
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}
