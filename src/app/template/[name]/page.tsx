import React from "react";

import { templates } from "@/templates";

export default function page({
  params,
}: {
  params: { name: string };
}) {
  const Template = templates[params.name as keyof typeof templates];
  return <Template />;
}
