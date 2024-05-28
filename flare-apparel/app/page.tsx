import Image from "next/image";
import "./globals.css";
import styles from "./home.module.css";
import AdbarTop from "./ui/adbar-top/page";
import Navigation from "./ui/navigation/page";

export default function Home() {
  return (
    <div className="content w-screen min-h-screen flex flex-col">
      <AdbarTop />
      <Navigation top="50px"/>
    </div>
  );
}
