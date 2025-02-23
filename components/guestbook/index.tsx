"use client";

import { useState } from "react";
import Form from "./form";
import List from "./list";

export default function Guestbook() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(refreshKey + 1);
  };

  return (
    <>
      <Form refresh={handleRefresh} />
      <List key={refreshKey} />
    </>
  );
}
