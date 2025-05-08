
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


export const metadata = {
  icons: {
    icon: "./images/bag-shopping-solid.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          alignItems: "center",
        }}
        className="text-center text-bg-dark auth-pages"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}