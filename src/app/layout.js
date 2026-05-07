import "./globals.css";

export const metadata = {
  title: "Sanket Kothiya | Data Analyst Portfolio",
  description:
    "Data Analyst with 4+ years of experience in SQL, Python, Power BI, and Tableau. Explore my projects, skills, and professional journey.",
  keywords: [
    "Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Portfolio",
    "Sanket Kothiya",
  ],
  authors: [{ name: "Sanket Kothiya" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Sanket Kothiya | Data Analyst Portfolio",
    description:
      "Data Analyst with 4+ years of experience. Skilled in SQL, Python, Power BI & Tableau.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
