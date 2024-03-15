import Image from "next/image";

import { templates } from "@/templates";

export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ul className="list-decimal leading-loose">
        {Object.keys(templates).map((template) => {
          return (
            <li className="capitalize" key={template}>
              <a href={`/template/${template}`}>
                {template.replace(/-/g, " ")}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
