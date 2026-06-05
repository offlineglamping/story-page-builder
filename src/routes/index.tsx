import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/chava/Nav";
import { Hero } from "@/components/chava/Hero";
import { About } from "@/components/chava/About";
import { Inspiration } from "@/components/chava/Inspiration";
import { Authorities } from "@/components/chava/Authorities";
import { Projects } from "@/components/chava/Projects";
import { Collection } from "@/components/chava/Collection";
import { Contact } from "@/components/chava/Contact";
import { Footer } from "@/components/chava/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHAVA — Kosher Interiors for Jewish Homes" },
      {
        name: "description",
        content:
          "CHAVA designs premium interiors and custom furniture for Jewish homes — kitchens, cabinetry and rooms shaped by kosher principles, Shabbat, Pesach and family ritual.",
      },
      { property: "og:title", content: "CHAVA — Kosher Interiors for Jewish Homes" },
      {
        property: "og:description",
        content:
          "Premium interior and custom furniture studio designing homes where beauty, function and Jewish tradition live together.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Inspiration />
        <Authorities />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
